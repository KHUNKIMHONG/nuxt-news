<template>
    <div class="flex h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <!-- Sidebar -->
        <aside :class="{ 'w-64': isOpen, 'w-20': !isOpen }"
            class="bg-emerald-500 h-full flex flex-col shadow-lg transition-all duration-300">
            <div class="bg-yellow-500 flex items-center justify-center py-4 border-b border-emerald-600">
                <img src="/tonle-rm.png" alt="Logo" class="h-10 w-auto" />
                <h1 v-if="isOpen" class="pl-3 text-xl font-bold text-white">ទន្លេប៉ុស្តិ៍</h1>
            </div>
            <nav class="flex-1 overflow-y-auto mt-2">
                <ul>
                    <li v-for="(item, index) in linkSidebar" :key="item.name_en" :class="{
                        'bg-emerald-400 border-l-4 border-yellow-500 text-white': isActive(item.path),
                        'text-gray-200 hover:text-white hover:bg-emerald-400': !isActive(item.path),
                    }" class="group my-2 px-4 py-2 transition">
                        <div @click="toggleDropdown(index)" :class="{
                            'text-white': isActive(item.path),
                            'text-gray-200 hover:text-white': !isActive(item.path),
                        }" class="flex items-center justify-between cursor-pointer">
                            <div class="flex items-center text-lg space-x-4">
                                <Icon :name="item.icon" class="w-6 h-6" />
                                <span v-if="isOpen">{{ $i18n.locale === 'kh' ? item.name_kh : item.name_en }}</span>
                            </div>
                            <Icon v-if="item.children && isOpen"
                                :name="dropdownStates[index] ? 'mdi:chevron-up' : 'mdi:chevron-down'" class="w-4 h-4" />
                        </div>
                        <ul v-if="isOpen && item.children && dropdownStates[index]" class="pl-8 mt-2">
                            <li v-for="child in item.children" :key="child.name_en" :class="{
                                'bg-emerald-400 border-l-4 border-yellow-500 text-white': isActive(child.path),
                                'text-gray-200 hover:text-white hover:bg-emerald-400': !isActive(child.path),
                            }" class="px-4 py-1 text-base transition">
                                <a :href="child.path" :class="{
                                    'text-white': isActive(child.path),
                                    'text-gray-200 hover:text-white': !isActive(child.path),
                                }">
                                    {{ $i18n.locale === 'kh' ? child.name_kh : child.name_en }}
                                </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </aside>

        <!-- Main Content -->
        <div class="flex flex-col flex-1">
            <!-- Header -->
            <header
                class="bg-white dark:bg-gray-800 shadow px-6 py-3 flex items-center justify-between transition-colors">
                <div class="flex items-center space-x-4">
                    <button @click="toggleSidebar"
                        class="flex items-center justify-center p-2 rounded-md bg-gray-100 dark:bg-gray-700">
                        <Icon :name="isOpen ? 'mdi:chevron-left' : 'mdi:menu'" class="w-5 h-5" />
                    </button>
                    <h1 class="text-lg font-bold text-gray-800 dark:text-gray-200">Admin Dashboard</h1>
                </div>
                <div class="flex items-center space-x-4">
                    <!-- Language Selector -->
                    <div class="relative inline-block text-left">
                        <button v-if="currentLanguage" @click="languageOpen = !languageOpen"
                            class="text-sm px-3 py-2 rounded-md border border-gray-300 dark:border-gray-600 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-yellow-500 dark:hover:text-yellow-500 focus:outline-none flex items-center transition duration-300">
                            <img v-if="currentLanguage.flag" :src="currentLanguage.flag" alt="Flag"
                                class="h-5 w-5 mr-2" />
                            {{ currentLanguage.name }}
                        </button>

                        <!-- Language Dropdown Menu -->
                        <div v-if="languageOpen" v-click-outside="() => languageOpen = false"
                            class="absolute z-50 w-40 bg-white dark:bg-gray-800 shadow-lg mt-1 rounded-md overflow-hidden">
                            <ul class="py-2 px-2">
                                <li v-for="lang in languages" :key="lang.code" class="relative group">
                                    <button @click="setLanguage(lang.code)"
                                        class="flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 w-full text-left transition duration-300 transform hover:bg-gradient-to-r from-blue-100 to-emerald-300 dark:hover:bg-gradient-to-r dark:from-gray-700 dark:to-gray-600 hover:text-yellow-500 dark:hover:text-yellow-400 rounded-md">
                                        <img :src="lang.flag" alt="" class="h-5 w-5 mr-2" />
                                        {{ lang.name }}
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <button @click="switchTheme" @mouseenter="showTooltip = true" @mouseleave="showTooltip = false"
                        class="relative flex items-center justify-center p-2 rounded-md border border-gray-300 dark:border-gray-600 transition duration-300 ease-in-out focus:outline-none"
                        aria-label="Toggle Dark Mode">
                        <Icon :name="darkMode ? 'mdi:white-balance-sunny' : 'mdi:moon-waxing-crescent'"
                            class="h-5 w-5 text-gray-800 dark:text-yellow-400 hover:text-yellow-500 dark:hover:text-yellow-500 transition duration-300" />
                        <!-- Tooltip -->
                        <div v-if="showTooltip"
                            class="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 text-xs font-semibold text-white bg-gray-800 dark:bg-gray-700 rounded-md shadow-lg transition-opacity duration-300 ease-in-out whitespace-nowrap opacity-100">
                            {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
                        </div>
                    </button>
                    <button
                        class="flex items-center justify-center p-2 text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition">
                        <Icon name="mdi:bell" class="w-6 h-6" />
                    </button>
                    <button
                        class="flex items-center justify-center p-2 text-gray-800 dark:text-gray-200 hover:text-yellow-500 transition">
                        <Icon name="mdi:account-circle" class="w-6 h-6" />
                    </button>
                </div>
            </header>

            <!-- Content -->
            <main class="flex-1 p-6">
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Overview</h2>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Quick stats and updates.</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Recent Activities</h2>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">View recent actions.</p>
                    </div>
                    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow">
                        <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">Tasks</h2>
                        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">Manage your tasks here.</p>
                    </div>
                </div>
            </main>
        </div>
    </div>
</template>


<script setup>
import { useThemeStore } from "@/store/theme";
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import linkSidebar from '~/store/sidebar/linkSidebar';

const route = useRoute();
const { locale } = useI18n();
const theme = useThemeStore();
const showTooltip = ref(false);
const languageOpen = ref(false);

const isOpen = ref(true);
const dropdownStates = ref(Array(linkSidebar.length).fill(false)); // Track open/closed state for each dropdown

function toggleSidebar() {
    isOpen.value = !isOpen.value;
}

function toggleDropdown(index) {
    dropdownStates.value[index] = !dropdownStates.value[index];
}

// Check if a link is active
function isActive(path) {
    if (!path) return false;
    return route.path.startsWith(path); // Check if the current route starts with the given path
}

function isChildActive(children) {
    if (!children || !Array.isArray(children)) return false;
    return children.some(child => isActive(child.path)); // Check if any child link is active
}

// Dark mode toggle
const darkMode = computed(() => theme.isDarkMode);
const switchTheme = () => theme.toggleTheme();

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

<style scoped>
/* Transition styles for smoother collapse */
.transition-width {
    transition: width 0.3s;
}
</style>
