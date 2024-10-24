<template>
  <nav
    class="sticky top-0 p-2 w-full bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 animate-gradient z-20 transition duration-300 flex justify-between items-center"
    x-data="{ menuOpen: false }">
    <!-- Logo Section -->
    <a href="/" class="flex items-center mx-4 transition duration-300 hover:no-underline">
      <img src="/tonle-rm.png" alt="Logo" class="h-16 transition duration-300 hover:shadow-lg hover:blur-sm"
        loading="lazy" />
      <div class="text-xl font-bold flex-col">
        <h5
          class="font-khmer font-bold text-white dark:text-white transition-colors duration-300 hover:text-yellow-500 dark:hover:text-yellow-300">
          ទន្លេប៉ុស្តិ៍ <!-- Translated title -->
        </h5>
        <p
          class="font-exo text-gray-200 dark:text-gray-300 transition-colors duration-300 hover:text-yellow-500 dark:hover:text-yellow-300">
          TONLE POST
        </p>
      </div>
    </a>

    <!-- Navbar Links -->
    <div :class="{
      'flex flex-col bg-blue-900 p-4 rounded-md space-y-4 absolute mt-2 top-20 left-0 right-0': menuOpen,
      hidden: !menuOpen,
    }"
      class="md:flex items-center space-x-8 md:space-y-0 space-y-4 md:relative md:w-auto md:top-auto md:left-auto transition duration-300 ease-in-out">
      <ul class="flex flex-col md:flex-row md:space-x-3 w-full md:w-auto">
        <li v-for="link in LinkNavbar" :key="link.name_en" class="relative w-full md:w-auto text-center md:text-left"
          @mouseover="openDropdown(link.name_en)" @mouseleave="closeDropdown">
          <!-- Navbar Link with Dropdown Icon for links with children -->
          <NuxtLink :to="link.path" :class="getLinkClass(link.path)"
            class="flex px-4 py-2 w-full font-semibold md:w-auto text-white dark:text-white hover:text-yellow-500 rounded-md transition items-center justify-between">
            {{ $i18n.locale === 'kh' ? link.name_kh : link.name_en }} <!-- Display based on selected locale -->
            <Icon v-if="link.children" :name="dropdownOpen === link.name_en ? 'mdi:chevron-up' : 'mdi:chevron-down'"
              class="ml-2 h-5 w-5 transition-transform duration-300 ease-in-out hover:scale-110" />
          </NuxtLink>

          <!-- Dropdown for links with children -->
          <ul v-if="link.children" v-show="dropdownOpen === link.name_en" class="bg-white dark:bg-gray-800 text-black dark:text-white text-left px-4 py-4 shadow-lg space-y-2 mt-2 
            transition-all duration-200 ease-in-out lg:absolute lg:top-full lg:left-0 lg:z-50 lg:w-auto lg:p-3 lg:rounded-md">
            <li v-for="child in link.children" :key="child.name_en">
              <NuxtLink :to="child.path" :class="getLinkChildren(child.path)" class="block px-4 py-2 rounded-md transition-colors duration-150 ease-in-out 
              hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-300 dark:hover:from-gray-700 dark:hover:to-gray-600
            hover:text-blue-900 dark:hover:text-yellow-400">
                {{ $i18n.locale === 'kh' ? child.name_kh : child.name_en }}
              </NuxtLink>
            </li>
          </ul>
        </li>
      </ul>
    </div>

    <!-- Mobile Menu Button -->
    <div class="md:hidden mr-6">
      <button @click="menuOpen = !menuOpen" aria-label="Toggle Menu"
        class="flex items-center justify-center p-2 transition-transform duration-300 ease-in-out rounded-md border border-gray-300 text-white hover:bg-gray-200 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700">
        <Icon :name="menuOpen ? 'mdi:close' : 'mdi:menu'" class="h-6 w-6" />
      </button>
    </div>

    <!-- Search Bar and Authentication Links -->
    <div class="hidden md:flex items-center space-x-4 mr-6">
      <!-- Search Bar -->
      <div class="relative">
        <input type="text" placeholder="Search..."
          class="pr-10 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50 dark:bg-gray-700 text-gray-800 dark:text-gray-300 max-w-full transition duration-300" />
        <div class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
          <Icon name="mdi:magnify" class="h-5 w-5 text-gray-500 dark:text-gray-300" />
        </div>
      </div>

      <!-- Dark Mode Toggle -->
      <button @click="switchTheme" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
        class="relative flex items-center justify-center p-2 rounded-md border border-gray-300 dark:border-gray-600 transition duration-300 ease-in-out focus:outline-none"
        aria-label="Toggle Dark Mode">
        <Icon :name="darkMode ? 'mdi:white-balance-sunny' : 'mdi:moon-waxing-crescent'"
          class="h-4 w-4 text-white dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500 transition duration-300 ease-in-out" />

        <!-- Tooltip -->
        <div v-if="showTooltip"
          class="absolute top-full mt-2 px-3 py-1 text-xs font-semibold text-white bg-gray-800 rounded-md shadow-lg transition-opacity duration-300 ease-in-out whitespace-nowrap"
          :class="{ 'opacity-100': showTooltip, 'opacity-0': !showTooltip }">
          {{ darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode' }}
          <div class="absolute left-1/2 transform -translate-x-1/2 -top-1 w-2 h-2 bg-gray-800 rotate-45 opacity-50">
          </div>
        </div>
      </button>

      <div class="relative inline-block text-left">
        <!-- Language Selector Button with Flag -->
        <button v-if="currentLanguage" @click="languageOpen = !languageOpen"
          class="text-xs text-white dark:text-gray-300 px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 hover:text-yellow-500 dark:hover:bg-gray-700 dark:hover:text-yellow-500 focus:outline-none flex items-center">
          <img v-if="currentLanguage.flag" :src="currentLanguage.flag" alt="Flag" class="h-5 w-5 mr-2" />
          {{ currentLanguage.name }}
        </button>

        <!-- Dropdown Menu -->
        <div v-if="languageOpen" v-click-outside="() => languageOpen = false"
          class="absolute z-50 w-40 bg-white dark:bg-gray-800 shadow-lg mt-1 rounded-md overflow-hidden">
          <ul class="py-2 px-2">
            <li v-for="lang in languages" :key="lang.code" class="relative group">
              <!-- Language Button in Dropdown -->
              <button @click="setLanguage(lang.code)"
                class="flex items-center px-3 py-2 text-sm text-slate-500 dark:text-slate-400 w-full text-left transition-all duration-300 ease-in-out transform hover:bg-gradient-to-r from-blue-100 to-blue-300 dark:hover:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600 hover:shadow-lg hover:scale-105 hover:text-yellow-500 dark:hover:text-yellow-400 rounded-md">
                <img :src="lang.flag" alt="" class="h-5 w-5 mr-2" />
                {{ lang.name }}
              </button>
            </li>
          </ul>
        </div>
      </div>

      <NuxtLink to="/account/login" :class="getLinkClass('/account/login')"
        class="text-xs text-white hover:text-yellow-500">{{ $t('login') }}
      </NuxtLink>
      <NuxtLink to="/account/register"
        class="bg-yellow-600 text-xs rounded text-white p-4 hover:text-black hover:bg-white no-underline">
        {{ $t('register') }}
      </NuxtLink>
    </div>
  </nav>
</template>

<script setup>
import { useI18n } from "vue-i18n";
import { useThemeStore } from "@/store/theme";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "nuxt/app";
import linkNavbar from "~/store/linkNavbar";

const { locale } = useI18n();
const LinkNavbar = ref(linkNavbar);
const theme = useThemeStore();
const showTooltip = ref(false);
const menuOpen = ref(false);
const route = useRoute();
const dropdownOpen = ref(null);
const languageOpen = ref(false);
let closeTimeout = null;

// Function to set the dropdown based on hover
const openDropdown = (linkName) => {
  clearTimeout(closeTimeout);
  dropdownOpen.value = linkName;
};

// Function to close the dropdown with a delay
const closeDropdown = () => {
  closeTimeout = setTimeout(() => {
    dropdownOpen.value = null;
  }, 500);
};

// Dark mode toggle
const darkMode = computed(() => theme.isDarkMode);
const switchTheme = () => theme.toggleTheme();

// Link styling based on active or hovered state
const getLinkClass = (path) => {
  const isActive = route.path === path;
  return isActive
    ? "text-yellow-500 dark:text-yellow-500 font-semibold hover:text-yellow-500 dark:hover:text-yellow-500 transition duration-200 ease-in-out"
    : "transition duration-200 ease-in-out";
};

const getLinkChildren = (childPath) => {
  const isActive = route.path === childPath;
  return isActive
    ? "text-yellow-500 dark:text-yellow-500 p-2 bg-blue-900 font-semibold transition duration-200 ease-in-out"
    : "text-black dark:text-white hover:text-yellow-500 dark:hover:text-yellow-500 transition duration-200 ease-in-out";
};

// Available languages with flags
const languages = ref([
  { code: 'kh', name: 'ខ្មែរ', flag: '/flag/cambodia.png' },
  { code: 'en', name: 'English', flag: '/flag/United_Kingdom.png' },
]);

const currentLanguage = computed(() => {
  if (!locale.value) return { name: 'Unknown', flag: '' }; // Early fallback
  const lang = languages.value.find(l => l.code === locale.value);
  return lang ? { name: lang.name, flag: lang.flag } : { name: 'Unknown', flag: '' };
});

// Functions
const setLanguage = (langCode) => {
  locale.value = langCode;
  localStorage.setItem('preferredLanguage', langCode);
  languageOpen.value = false; // Close the dropdown after selecting
};

onMounted(() => {
  const savedLanguage = localStorage.getItem('preferredLanguage');
  if (savedLanguage) {
    locale.value = savedLanguage;
  }
});

</script>

<style>
/* Keyframe animation for gradient movement */
@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* Apply the animation to the gradient */
.animate-gradient {
  background-size: 400% 400%;
  animation: gradientShift 15s ease infinite;
}
</style>