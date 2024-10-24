<template>
  <footer class="bg-black text-gray-200 py-8">
    <div class="container mx-auto px-4">
      <!-- Footer content -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Footer Column 1 -->
        <div class="text-center md:text-left">
          <h5 class="text-white">{{ $t('footer.content.content') }}</h5>
          <ul class="pl-0 pt-2">
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.content.home') }}</a>
            </li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.content.products') }}</a>
            </li>
          </ul>
        </div>

        <!-- Footer Column 2 -->
        <div class="text-center md:text-left">
          <h5 class="text-white">{{ $t('footer.information.information') }}</h5>
          <ul class="pl-0 pt-2">
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.information.pricing') }}</a>
            </li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.information.products') }}</a>
            </li>
            <li><a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.information.api') }}</a></li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.information.job') }}</a>
            </li>
            <li>
              <a href="#"
                class="text-slate-500 hover:text-yellow-500">{{ $t('footer.information.sell_your_content') }}</a>
            </li>
            <li>
              <a href="#"
                class="text-slate-500 hover:text-yellow-500">{{ $t('footer.information.tola_post_guidelines') }}</a>
            </li>
          </ul>
        </div>

        <!-- Footer Column 3 -->
        <div class="text-center md:text-left">
          <h5 class="text-white">{{ $t('footer.legal.legal') }}</h5>
          <ul class="pl-0 pt-2">
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.legal.term_of_use') }}</a>
            </li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.legal.license_agreement') }}</a>
            </li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.legal.privacy_policy') }}</a>
            </li>
            <li>
              <a href="#"
                class="text-slate-500 hover:text-yellow-500">{{ $t('footer.legal.copyright_information') }}</a>
            </li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.legal.cookies_policy') }}</a>
            </li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.legal.cookies_settings') }}</a>
            </li>
          </ul>

          <h5 class="text-white mt-8">{{ $t('footer.suppourt.suppourt') }}</h5>
          <ul class="pl-0 pt-2">
            <li><a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.suppourt.faq') }}</a></li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.suppourt.search_guide') }}</a>
            </li>
            <li>
              <a href="#" class="text-slate-500 hover:text-yellow-500">{{ $t('footer.suppourt.contact') }}</a>
            </li>
          </ul>
        </div>

        <!-- Footer Column 4 -->
        <div class="text-center md:text-left">
          <h5 class="text-white">{{ $t('footer.social_media.social_media') }}</h5>
          <div class="grid grid-cols-4 gap-3 mt-4 pr-40">
            <li class="flex items-center justify-center">
              <a href="https://facebook.com" target="_blank"
                class="flex items-center justify-center h-10 w-10 rounded bg-blue-700 border-solid border-2 border-gray-700 transition duration-300 hover:bg-gray-600 space-x-2">
                <Icon name="mdi:facebook" class="h-6 w-6 text-white" />
              </a>
            </li>

            <li class="flex items-center justify-center">
              <a href="https://youtube.com" target="_blank"
                class="flex items-center justify-center h-10 w-10 bg-red-900 border-solid border-2 border-gray-700 rounded hover:bg-gray-600 hover:text-white transition duration-300 space-x-2">
                <Icon name="mdi:youtube" class="h-6 w-6 text-white" />
              </a>
            </li>

            <li class="flex items-center justify-center">
              <a href="https://telegram.com" target="_blank"
                class="flex items-center justify-center h-10 w-10 bg-sky-800 border-solid border-2 border-gray-700 rounded hover:bg-gray-600 hover:text-white transition duration-300">
                <Icon name="mdi:telegram" class="h-6 w-6 text-white" />
              </a>
            </li>

            <li class="flex items-center justify-center">
              <a href="https://instagram.com" target="_blank"
                class="flex items-center justify-center h-10 w-10 bg-red-800 border-solid border-2 border-gray-700 rounded hover:bg-gray-600 hover:text-white transition duration-300">
                <Icon name="mdi:instagram" class="h-6 w-6 text-white" />
              </a>
            </li>

            <li class="flex items-center justify-center">
              <a href="https://twitter.com" target="_blank"
                class="flex items-center justify-center h-10 w-10 bg-blue-500 border-solid border-2 border-gray-700 rounded hover:bg-gray-600 transition duration-300">
                <Icon name="mdi:twitter" class="h-6 w-6 text-white" />
              </a>
            </li>

            <li class="flex items-center justify-center">
              <a href="https://linkedin.com" target="_blank"
                class="flex items-center justify-center h-10 w-10 bg-blue-700 border-solid border-2 border-gray-700 rounded hover:bg-gray-600 transition duration-300">
                <Icon name="mdi:linkedin" class="h-6 w-6 text-white" />
              </a>
            </li>

            <li class="flex items-center justify-center">
              <a href="https://www.tiktok.com" target="_blank"
                class="flex items-center justify-center h-10 w-10 bg-black border-solid border-2 border-gray-700 rounded hover:bg-gray-600 transition duration-300">
                <svg class="h-9 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                  viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm4.738 10.134c-.174.01-.348.014-.524.014-1.178 0-2.285-.314-3.248-.868l-.004 4.96a4.387 4.387 0 1 1-4.387-4.387h.014v2.217a2.17 2.17 0 0 0-.014.17 2.17 2.17 0 1 0 2.17-2.17c.056 0 .111.002.166.006v-2.21c.144-.02.29-.03.438-.03a7.297 7.297 0 0 0 .217-2.127c1.11.858 2.506 1.373 4.004 1.373.176 0 .35-.004.524-.014v2.066z" />
                </svg>
              </a>
            </li>

            <li class="flex items-center justify-center">
              <a href="https://discord.com" target="_blank"
                class="flex items-center justify-center h-10 w-10 bg-[#5865F2] border-solid border-2 border-gray-700 rounded hover:bg-gray-600 transition duration-300">
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                  fill="currentColor">
                  <path
                    d="M20.317 4.369A19.939 19.939 0 0 0 15.935 3c-.21.369-.448.858-.614 1.237a18.743 18.743 0 0 0-5.248 0A12.537 12.537 0 0 0 9.46 3a19.939 19.939 0 0 0-4.382 1.369c-2.779 4.172-3.53 8.234-3.15 12.247A20.146 20.146 0 0 0 7.6 20.998a14.489 14.489 0 0 0 1.89.984c.152-.21.293-.433.417-.669a12.742 12.742 0 0 1-1.805-.867c.15-.112.298-.23.44-.352a15.978 15.978 0 0 0 8.667 0c.144.13.29.248.44.352-.573.34-1.178.626-1.805.867.125.237.265.46.417.669.668-.26 1.313-.576 1.89-.984a20.146 20.146 0 0 0 5.68-4.382c.397-4.06-.573-8.122-3.352-12.294zM8.367 13.688c-1.052 0-1.917-.967-1.917-2.165 0-1.197.85-2.17 1.917-2.17 1.072 0 1.94.978 1.917 2.17 0 1.198-.85 2.165-1.917 2.165zm7.27 0c-1.052 0-1.917-.967-1.917-2.165 0-1.197.85-2.17 1.917-2.17 1.072 0 1.94.978 1.917 2.17 0 1.198-.85 2.165-1.917 2.165z" />
                </svg>
              </a>
            </li>
          </div>
          <p class="text-center md:text-left text-slate-500 hover:text-yellow-500 pt-2">
            {{ $t('footer.social_media.get') }}
          </p>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="mx-4 mt-8 border-t border-gray-600 pt-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
          <a href="/"
            class="flex flex-col items-center md:flex-row md:items-start md:text-left transition duration-300 hover:no-underline">
            <img src="/tonle-rm.png" alt="Logo"
              class="h-16 transition duration-300 hover:shadow-lg hover:blur-sm" loading="lazy" />
            <div class="text-xl font-bold flex-col text-center md:text-left">
              <h5
                class="font-khmer font-bold text-white dark:text-white transition-colors duration-300 hover:text-yellow-500 dark:hover:text-yellow-300">
                ទន្លេប៉ុស្តិ៍
              </h5>
              <h6
                class="font-exo text-gray-200 dark:text-gray-300 transition-colors duration-300 hover:text-yellow-500 dark:hover:text-yellow-300">
                TONLE POST
              </h6>
            </div>
          </a>

          <p class="text-center md:text-right text-slate-500 m-0">
            {{ $t('footer.copyright.copyright') }} © {{ currentYear }}
            <a href="https://yourwebsite.com" class="text-yellow-500 hover:text-white" target="_blank">
              {{ $t('footer.copyright.tola_post') }}
            </a>.{{ $t('footer.copyright.all') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { ref } from "vue";
// Get the current year
const currentYear = ref(new Date().getFullYear());
</script>