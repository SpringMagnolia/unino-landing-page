<script lang="ts" setup>
import Header from "./components/Header.vue";
import Content from "./components/Content.vue";
import InteractiveGridPattern from "./components/ui/InteractiveGridPattern.vue";
import Footer from "./components/Footer.vue";
import ContactUS from "./components/ContactUS.vue";
import QA from './components/QA.vue'
</script>

<template>
  <main class="relative overflow-hidden">
    <Header/>
    <Content/>
    <QA/>
    <ContactUS/>
    <Footer/>
    <InteractiveGridPattern :class="[
      '[mask-image:radial-gradient(300px_circle_at_50%_10%,white,transparent)]',
      'sm:[mask-image:radial-gradient(500px_circle_at_50%_24%,white,transparent)]',
      'inset-0 h-[200%] skew-y-12 left-1/2 -translate-x-1/2',
    ]"/>
  </main>

</template>

<style scoped>

</style>
