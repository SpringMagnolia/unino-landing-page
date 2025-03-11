<script lang="ts" setup>

</script>

<template>
  <div class="flex flex-col gap-y-4 items-center justify-center pt-32 relative px-6">
    <h4 class="text-3xl font-semibold z-10">What is Unino?</h4>
    <p class="text-lg text-zinc-600 text-center">Instant file sharing across all your devices — simple and speedy</p>
    <div
        class="z-10 grid max-w-6xl mx-auto overflow-hidden sm:grid-cols-1 lg:grid-cols-2 gap-8 *:p-6">
      <article class="bg-zinc-50 rounded-xl">
        <h3 class="mb-2 flex items-center justify-start space-x-2 font-medium text-gray-200">
          <div class="bg-zinc-400 p-2 rounded-full">
            <svg class="fill-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M2 4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4Zm2-4a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm1 10a1 1 0 1 0 0 2h6a1 1 0 1 0 0-2H5Z"></path>
            </svg>
          </div>
          <span class="text-zinc-800 font-semibold">About This Application</span>
        </h3>

        <ul class="text-zinc-800 list-disc list-inside [&_li::marker]:text-lime-600">
          <li>
            Access shared files without installing extra apps
          </li>
          <li>
            Upload/download files via a browser
          </li>
          <li>
            Preview common file types instantly
          </li>
          <li>
            No cloud storage required (direct device-to-device transfers)
          </li>
          <li>
            Zero user accounts or configuration
          </li>
        </ul>
      </article>
      <article class="bg-zinc-50 rounded-xl">
        <h3 class="mb-2 flex items-center space-x-2 font-medium text-gray-200">
          <div class="bg-zinc-400 p-2 rounded-full">
            <svg class="fill-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M14.29 2.614a1 1 0 0 0-1.58-1.228L6.407 9.492l-3.199-3.2a1 1 0 1 0-1.414 1.415l4 4a1 1 0 0 0 1.496-.093l7-9ZM1 14a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2H1Z"></path>
            </svg>
          </div>

          <span class="text-zinc-800 font-semibold">Key Features</span></h3>

        <ul class="text-zinc-800 list-disc list-inside [&_li::marker]:text-lime-600">
          <li>
            Browser Access : All platform support
          </li>
          <li>
            Local Network Security: No data leaves your private network
          </li>
          <li>
            Built-in Previewer: Supports images, audio, and videos
          </li>
          <li>
            Single-device installation, universal access - no extra installation required on other devices
          </li>
        </ul>
      </article>

      <article class="bg-zinc-50 rounded-xl">
        <h3 class="mb-2 flex items-center space-x-2 font-medium text-gray-200">
          <div class="bg-zinc-400 p-2 rounded-full">
            <svg class="fill-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M10.284.33a1 1 0 1 0-.574 1.917 6.049 6.049 0 0 1 2.417 1.395A1 1 0 0 0 13.5 2.188 8.034 8.034 0 0 0 10.284.33ZM6.288 2.248A1 1 0 0 0 5.718.33 8.036 8.036 0 0 0 2.5 2.187a1 1 0 0 0 1.372 1.455 6.036 6.036 0 0 1 2.415-1.395ZM1.42 5.401a1 1 0 0 1 .742 1.204 6.025 6.025 0 0 0 0 2.79 1 1 0 0 1-1.946.462 8.026 8.026 0 0 1 0-3.714A1 1 0 0 1 1.421 5.4Zm2.452 6.957A1 1 0 0 0 2.5 13.812a8.036 8.036 0 0 0 3.216 1.857 1 1 0 0 0 .574-1.916 6.044 6.044 0 0 1-2.417-1.395Zm9.668.04a1 1 0 0 1-.041 1.414 8.033 8.033 0 0 1-3.217 1.857 1 1 0 1 1-.571-1.917 6.035 6.035 0 0 0 2.415-1.395 1 1 0 0 1 1.414.042Zm2.242-6.255a1 1 0 1 0-1.946.462 6.03 6.03 0 0 1 0 2.79 1 1 0 1 0 1.946.462 8.022 8.022 0 0 0 0-3.714Z"></path>
            </svg>
          </div>
          <span class="text-zinc-800 font-semibold">File Storage Clarification</span></h3>
        <ul class="text-zinc-800 list-disc list-inside [&_li::marker]:text-lime-600">
          <li>
            Hosted files are stored in your browser and are not uploaded to the desktop application or any other server

          </li>
          <li>
            Remember to clear unused files via the webpage to free up storage space
          </li>
        </ul>
      </article>
      <article class="bg-zinc-50 rounded-xl">
        <h3 class="mb-2 flex items-center space-x-2 font-medium text-gray-200">
          <div class="bg-zinc-400 p-2 rounded-full">
            <svg class="fill-white" height="16" width="16" xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M9 1a1 1 0 1 0-2 0v6a1 1 0 0 0 2 0V1ZM4.572 3.08a1 1 0 0 0-1.144-1.64A7.987 7.987 0 0 0 0 8a8 8 0 0 0 16 0c0-2.72-1.36-5.117-3.428-6.56a1 1 0 1 0-1.144 1.64A5.987 5.987 0 0 1 14 8 6 6 0 1 1 2 8a5.987 5.987 0 0 1 2.572-4.92Z"></path>
            </svg>
          </div>
          <span class="text-zinc-800 font-semibold">Tech Specs (for the curious)</span></h3>
        <ul class=" text-zinc-800 list-disc list-inside [&_li::marker]:text-lime-600">
          <li>
            The file sharing infrastructure is built using
            <a class="underline"
               href="https://libp2p.io/"
               target="_blank">Libp2p</a>
          </li>
          <li>
            Browser-to-browser communication is powered by WebRTC Direct, enabling peer-to-peer data transfers
          </li>
        </ul>
      </article>
    </div>

  </div>

</template>

<style scoped>
li {
  padding: 2px;
  border-radius: 6px;

}

</style>
