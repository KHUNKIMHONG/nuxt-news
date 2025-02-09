<template>
  <section class="py-16 bg-gray-50 dark:bg-slate-900 transition-all">
    <div class="container mx-auto">

      <!-- Navigation Buttons -->
      <div class="flex justify-end space-x-4 mb-8">
        <!-- Previous Button -->
        <button
          @click="previousTab"
          :disabled="isFirstTab"
          class="transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 p-2 bg-emerald-500 text-white rounded-full shadow-md transition duration-300 hover:bg-emerald-600 dark:bg-emerald-700 dark:hover:bg-emerald-500 dark:text-white disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5l-7 7 7 7" />
          </svg>
        </button>

        <!-- Next Button -->
        <button
          @click="nextTab"
          :disabled="isLastTab"
          class="transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 p-2 bg-emerald-500 text-white rounded-full shadow-md transition duration-300 hover:bg-emerald-600 dark:bg-emerald-700 dark:hover:bg-emerald-500 dark:text-white disabled:bg-gray-100 dark:disabled:bg-slate-800 disabled:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      <!-- Tabs -->
      <div class="relative flex items-center justify-center mb-8">
        <nav class="flex space-x-4 overflow-x-auto no-scrollbar px-4">
          <button
            v-for="(tab, index) in localizedTabs"
            :key="index"
            @click="changeTab(index)"
            :class="{
              'bg-emerald-700 text-white': currentIndex === index,
              'text-xl text-gray-900 dark:text-gray-100 hover:bg-gray-200 dark:hover:bg-slate-700': currentIndex !== index,
            }"
            class="px-4 py-2 rounded-full transition duration-300 whitespace-nowrap"
          >
            {{ tab }}
          </button>
        </nav>
      </div>

      <!-- FAQ Section -->
      <div>
        <h2 class="text-3xl font-bold mb-6 border-l-4 border-emerald-600 pl-4 text-gray-900 dark:text-gray-100">
          {{ localizedTabs[currentIndex] }}
        </h2>
        <div v-for="(faq, index) in localizedFAQs" :key="index" class="mb-4">
          <button
            @click="toggleFAQ(index)"
            :class="{
              'w-full text-left text-lg px-6 py-4 rounded shadow-xl flex justify-between items-center transition': true,
              'bg-white text-emerald-500 dark:bg-slate-800 dark:text-emerald-400': faq.open,
              'bg-white text-gray-900 hover:bg-gray-200 dark:bg-slate-700 dark:text-gray-100 dark:hover:bg-slate-600': !faq.open,
            }"
          >
            <span
              :class="{
                'font-bold transition duration-300': true,
                'text-emerald-500 dark:text-emerald-400': faq.open,
                'hover:text-emerald-500 dark:hover:text-emerald-400': !faq.open,
              }"
            >
              {{ faq.question }}
            </span>
            <svg
              v-if="faq.open"
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 p-2 bg-emerald-500 text-white rounded-full shadow-md transition duration-300 hover:bg-emerald-600 dark:bg-emerald-700 dark:hover:bg-emerald-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 p-2 bg-white text-emerald-500 rounded-full shadow-md transition duration-300 hover:bg-gray-300 dark:bg-slate-700 dark:text-emerald-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <!-- FAQ Answer Section -->
          <div
            v-if="faq.open"
            class="bg-white dark:bg-slate-800 font-medium text-lg text-gray-900 dark:text-gray-100 px-6 py-4 rounded shadow-xl transition duration-300"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { tabs } from "~/store/faq/tabsTitle.ts";
import { faqs } from "~/store/faq/faqTitle.ts";

export default {
  data() {
    return {
      tabs,
      currentIndex: 0, // Track the active tab by index
      faqs,
    };
  },
  computed: {
    localizedTabs() {
      const lang = this.$i18n.locale;
      return this.tabs.map((tab) => (lang === "en" ? tab.en : tab.kh));
    },
    localizedFAQs() {
      const lang = this.$i18n.locale;
      const tabKey = this.getOriginalTabKey();
      const faqsForTab = this.faqs[tabKey] || [];
      return faqsForTab.map((faq) => ({
        ...faq,
        question: lang === "en" ? faq.question_en : faq.question_kh,
        answer: lang === "en" ? faq.answer_en : faq.answer_kh,
      }));
    },
    isFirstTab() {
      return this.currentIndex === 0;
    },
    isLastTab() {
      return this.currentIndex === this.tabs.length - 1;
    },
  },
  methods: {
    toggleFAQ(index) {
      const tabKey = this.getOriginalTabKey();
      const currentFaqs = this.faqs[tabKey];

      if (currentFaqs && currentFaqs[index]) {
        currentFaqs[index].open = !currentFaqs[index].open;
      }
    },
    changeTab(index) {
      this.currentIndex = index;
    },
    previousTab() {
      if (this.currentIndex > 0) {
        this.currentIndex--;
        this.scrollToTab(this.currentIndex);
      }
    },
    nextTab() {
      if (this.currentIndex < this.localizedTabs.length - 1) {
        this.currentIndex++;
        this.scrollToTab(this.currentIndex);
      }
    },
    scrollToTab(index) {
      const nav = this.$el.querySelector("nav");
      const activeTab = nav.children[index];
      activeTab.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    },
    getOriginalTabKey() {
      return this.tabs[this.currentIndex].en;
    },
  },
  watch: {
    "$i18n.locale"(newLocale) {
      // Keep the same index, just change the tab based on the new language
      this.currentIndex = this.currentIndex;
    },
  },
  mounted() {
    // Set default active tab as the first one on mount
    this.currentIndex = 0;
  },
};
</script>

<style scoped>
/* Hide scrollbar */
.no-scrollbar::-webkit-scrollbar {
  display: none;
}

.no-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
</style>

















