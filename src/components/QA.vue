<script lang="ts" setup>
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from './ui/accordion'

const defaultValue = 'item-1'

</script>

<template>
  <div class="flex flex-col items-center relative pt-32 px-6 gap-y-4">
    <div class="text-3xl font-semibold z-10 text-center">Frequently asked questions</div>
    <Accordion :default-value="defaultValue" class="w-full max-w-6xl z-10 " collapsible type="single">
      <AccordionItem class="z-10 border-zinc-300" value="item-1">
        <AccordionTrigger class="cursor-pointer text-lg decoration-[#9EDC29]">
          <span class="text-start">Why can't I launch the software?</span>
        </AccordionTrigger>

        <AccordionContent class="text-base text-zinc-700">
          <p>Windows: Add the software to exceptions in Windows Security.</p>
          <p> macOS: Grant permissions under System Preferences → Privacy & Security → Security.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="z-10 border-zinc-300" value="item-2">
        <AccordionTrigger class="cursor-pointer text-lg decoration-[#9EDC29]">
          <span class="text-start">Why can't my device access the Unino web page in browser?</span>

        </AccordionTrigger>
        <AccordionContent class="text-base text-zinc-700">
          <p>Ensure both devices are on the same Wi-Fi/LAN. For Virtual Machine users:</p>
          <p>- Switch to **bridged networking mode** in your VM settings.</p>
          <p> - Temporarily disable: **Firewall & network protection** and **App & Browser Control** (under Windows
            Security settings)</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="z-10 border-zinc-300" value="item-3">
        <AccordionTrigger class="cursor-pointer text-lg decoration-[#9EDC29]">
          <span class="text-start"> Does file sharing work offline?</span>

        </AccordionTrigger>
        <AccordionContent class="text-base text-zinc-700">
          <p>Yes! Unino uses your local network - no internet required.
          </p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="z-10 border-zinc-300" value="item-4">
        <AccordionTrigger class="cursor-pointer text-lg decoration-[#9EDC29]">
          <span class="text-start">What file types can be previewed?</span>
        </AccordionTrigger>
        <AccordionContent class="text-base text-zinc-700">
          <p>Images: PNG, JPEG, WebP, GIF, SVG </p>
          <p>Audio: MP3, WAV, OGG, AAC</p>
          <p>Video: MP4, MOV, WebM, MKV</p>
          <p class="text-zinc-500">Note: Actual preview capability depends on your browser's media codec support.</p>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem class="z-10 border-zinc-300" value="item-5">
        <AccordionTrigger class="cursor-pointer text-lg decoration-[#9EDC29]">
          <span class="text-start">How many devices can connect simultaneously?</span>
        </AccordionTrigger>
        <AccordionContent class="text-base text-zinc-700">

          <p>The theoretical connection limit is 1,000+ concurrent devices (based on protocol design), though this has
            not been</p>
          <p>fully stress-tested. Real-world performance depends on:</p>
          <p>- Hardware specifications (CPU/RAM)</p>
          <p>- Network bandwidth and router capacity</p>
          <p>- Concurrent file transfer operations</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </div>

</template>