<script lang="ts" setup>
import {ref, useTemplateRef} from 'vue'
import {onClickOutside} from '@vueuse/core'

const isOpen = ref(false)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const closeDropdown = () => {
  isOpen.value = false
}


const target = useTemplateRef<HTMLElement>('target')
onClickOutside(target, () => closeDropdown())

</script>

<template>
  <div ref="target"
       class="relative bg-zinc-800 rounded-full inline-flex cursor-pointer shadow-[inset_0_-3px_10px_#ffffff3f] hover:shadow-[inset_0_-6px_10px_#ffffff3f]">
    <div class="inline-flex  text-white ">
      <button
          class="inline-flex gap-x-2 cursor-pointer items-center px-4 py-2 focus:outline-none w-[232px] justify-center"
          type="button"
          @click="toggleDropdown"
      >
        <slot name="default"></slot>
      </button>

      <button
          class="-ml-px cursor-pointer inline-flex items-center pl-2 pr-4 py-2 border-l border-zinc-400 focus:z-10 focus:outline-none"
          type="button"
          @click="toggleDropdown"
      >
        <span class="sr-only">download options</span>
        <svg
            :class="{ 'rotate-180': isOpen }"
            class="h-5 w-5 transition-transform"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
        >
          <path clip-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                fill-rule="evenodd"/>
        </svg>
      </button>
    </div>

    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transform opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-show="isOpen"
          class="origin-top-right absolute right-0 w-fit rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20"
      >
        <div class="py-1" role="menu">
          <slot name="dropdown">

          </slot>

        </div>
      </div>
    </transition>
  </div>
</template>

<style scoped>

</style>