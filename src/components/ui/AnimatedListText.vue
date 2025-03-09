<script lang="ts" setup>
import {ref, computed, watch, onUnmounted} from 'vue'
import {useIntervalFn} from '@vueuse/core'
import {Motion} from 'motion-v'

const props = defineProps({
  staticPrefix: {
    type: String,
    default: ''
  },
  dynamicContents: {
    type: Array as () => string[],
    required: true,
    validator: (val: string[]) => val.length > 0
  },
  animationDuration: {
    type: Number,
    default: 0.8
  },
  switchInterval: {
    type: Number,
    default: 2000
  },
  class: {
    type: String,
    default: ''
  },
  speedFactor: {
    type: Number,
    default: 10,
    validator: (val: number) => val > 0
  }
})

const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const currentIndex = ref(0)
const displayLetters = ref<string[]>([])
const iterations = ref(0)
let cycleTimer: any

// 分离动态文本处理
const currentDynamicText = computed(() => {
  return props.dynamicContents[currentIndex.value] || ''
})

// 空白字符检测优化
const isWhitespace = (char: string) => /\s/.test(char)

function getRandomLetter() {
  return alphabets[Math.floor(Math.random() * alphabets.length)]
}

function initializeDisplayText() {
  return currentDynamicText.value.split('').map(c => {
    return isWhitespace(c) ? c : getRandomLetter()
  })
}

function triggerAnimation() {
  iterations.value = 0
  displayLetters.value = initializeDisplayText()
  pauseAnimation()
  resumeAnimation()
}

const {pause: pauseAnimation, resume: resumeAnimation} = useIntervalFn(
    () => {
      if (iterations.value < currentDynamicText.value.length) {
        displayLetters.value = displayLetters.value.map((_, i) => {
          const original = currentDynamicText.value[i]
          if (isWhitespace(original)) return original
          return i <= iterations.value ? original : getRandomLetter()
        })
        iterations.value += 0.2
      } else {
        pauseAnimation()
      }
    },
    computed(() => props.animationDuration / (currentDynamicText.value.length * props.speedFactor))
)


function startContentCycle() {
  stopContentCycle()
  cycleTimer = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % props.dynamicContents.length
    triggerAnimation()
  }, props.switchInterval)
}

function stopContentCycle() {
  if (cycleTimer) {
    clearInterval(cycleTimer)
    cycleTimer = null
  }
}

function pauseCycle() {
  stopContentCycle()
}

function resumeCycle() {
  startContentCycle()
}

watch(
    () => props.dynamicContents,
    (newVal) => {
      if (newVal.length === 0) return
      currentIndex.value = 0
      triggerAnimation()
      startContentCycle()
    },
    {immediate: true}
)

onUnmounted(() => {
  stopContentCycle()
})
</script>

<template>
  <div
      class="relative mx-auto w-full min-h-20 max-w-4xl py-2 px-4 z-10"
      @mouseenter="pauseCycle"
      @mouseleave="resumeCycle"
  >
    <div class="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 transform text-center">
      <span class="font-mono font-semibold text-primary">
        {{ staticPrefix }}
      </span>
    </div>

    <div class="flex min-h-[3em] w-full items-center justify-center pt-4">
      <div class="flex flex-wrap justify-center text-center font-mono">
        <Motion
            v-for="(letter, i) in displayLetters"
            :key="`${currentIndex}-${i}`"
            :animate="{ opacity: 1, y: 0 }"
            :class="[
            'inline-block',
            letter === ' ' ? 'w-3' : '',
            isWhitespace(letter) ? 'opacity-0' : '',
            $props.class
          ]"
            :delay="i * (animationDuration / (currentDynamicText.length * 10))"
            :initial="{ opacity: 0, y: 0 }"
            as="span"
        >
          {{ isWhitespace(letter) ? ' ' : letter.toUpperCase() }}
        </Motion>
      </div>
    </div>
  </div>
</template>
