<template>
  <section class="py-16 px-4 md:px-12 lg:px-24">
    <div class="container mx-auto">
      <!-- Navigation Buttons -->
      <div class="flex justify-end">
        <!-- Previous Button -->
        <button
          @click="previousTab"
          :disabled="isFirstTab"
          class="transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-10 w-10 p-2 bg-blue-700 text-white rounded-full shadow-md transition duration-300 hover:bg-gray-200 hover:text-blue-700 disabled:bg-gray-100 disabled:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 5l-7 7 7 7"
            />
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
            class="h-10 w-10 p-2 bg-blue-700 text-white rounded-full shadow-md transition duration-300 hover:bg-gray-200 hover:text-blue-700 disabled:bg-gray-100 disabled:text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
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
              'bg-blue-700 text-white': currentIndex === index,
              'text-xl text-black hover:bg-gray-200': currentIndex !== index,
            }"
            class="px-4 py-2 rounded-full transition duration-300 whitespace-nowrap"
          >
            {{ tab }}
          </button>
        </nav>
      </div>

      <!-- FAQ Section -->
      <div>
        <h2 class="text-3xl font-bold mb-6 border-l-4 border-blue-500 pl-4">
          {{ localizedTabs[currentIndex] }}
        </h2>
        <div v-for="(faq, index) in localizedFAQs" :key="index" class="mb-4">
          <button
            @click="toggleFAQ(index)"
            :class="{
              'w-full text-left text-lg px-6 py-4 rounded shadow-xl flex justify-between items-center transition': true,
              'bg-white text-blue-700': faq.open,
              'bg-white text-gray-900 hover:bg-gray-200 hover:text-blue-700':
                !faq.open,
            }"
          >
            <span
              :class="{
                'font-bold transition duration-300': true,
                'text-blue-700': faq.open,
                'hover:text-blue-700': !faq.open,
              }"
            >
              {{ faq.question }}
            </span>
            <svg
              v-if="faq.open"
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 p-2 bg-blue-700 text-white rounded-full shadow-md transition duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              class="h-10 w-10 p-2 bg-white text-blue-500 rounded-full shadow-md transition duration-300 hover:bg-gray-200 hover:text-blue-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          <!-- FAQ Answer Section -->
          <div
            v-if="faq.open"
            class="bg-white font-medium text-lg text-black px-6 py-4 rounded shadow-xl transition duration-300"
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

















