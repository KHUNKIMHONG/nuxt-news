<template>
  <section class="py-16 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-slate-900 transition-all">
    <div class="container mx-auto">
      <!-- Search and Filter Section -->
      <div class="mb-8 flex justify-end items-center space-x-4">
        <!-- Search by Title -->
        <input v-model="searchQuery" type="text" placeholder="Search by Title"
          class="py-2 px-4 w-48 md:w-64 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 text-gray-900 dark:text-gray-200 transition" />

        <!-- Date Filter -->
        <input id="dateFilter" type="date" v-model="selectedDate"
          class="p-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 text-gray-900 dark:text-gray-200 transition" />

        <!-- Category Filter (Dropdown) -->
        <select v-model="selectedCategory"
          class="p-2 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 text-gray-900 dark:text-gray-200 transition">
          <option value="">All Categories</option>
          <option v-for="category in categories" :key="category" :value="category">
            {{ category }}
          </option>
        </select>

        <!-- Sort by Date -->
        <select v-model="sortOrder"
          class="py-2 px-4 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:bg-slate-800 text-gray-900 dark:text-gray-200 transition">
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      <!-- Message for no results -->
      <div v-if="filteredAndSortedCodes.length === 0" class="text-center text-gray-500 dark:text-gray-400 mt-8">
        No articles found matching your criteria.
      </div>

      <!-- Articles Grid -->
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="codeList in filteredAndSortedCodes.slice(0, 6)" :key="codeList.id"
          class="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <!-- Image Section -->
          <div class="relative">
            <img :src="codeList.image" :alt="codeList.title[$i18n.locale]"
              class="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110" />
            <!-- Category Label -->
            <span
              class="absolute top-4 left-4 bg-emerald-600 text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-md">
              {{ codeList.category[$i18n.locale] }}
            </span>
          </div>

          <!-- Content Section -->
          <div class="p-6 bg-white dark:bg-slate-800">
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 hover:text-emerald-600 dark:hover:text-emerald-400">
              {{ codeList.title[$i18n.locale] }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {{ codeList.description[$i18n.locale] }}
            </p>
            <p class="text-gray-400 dark:text-gray-500 text-xs mb-6">
              {{ codeList.date }}
            </p>
            <div class="flex justify-between items-center">
              <!-- Left Side: Views and Time Ago with Spacing -->
              <div class="flex items-center space-x-4">
                <span class="text-gray-500 dark:text-gray-400">{{ formatViews(codeList.views) }} views</span>
                <span class="text-gray-500 dark:text-gray-400">{{ timeAgo(codeList.date, $i18n.locale) }}</span>
              </div>

              <!-- Right Side: NuxtLink -->
              <NuxtLink :to="`/codes/${codeList.id}`"
                class="text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-700 border border-emerald-500 px-4 py-2 rounded-lg hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-100 transition">
                {{ $i18n.locale === "kh" ? "អានបន្ថែម" : "Read more" }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Pagination or Load More Button -->
      <div v-if="filteredAndSortedCodes.length > 6" class="mt-8 flex justify-center">
        <button @click="loadMore"
          class="bg-emerald-600 text-white py-2 px-4 rounded-lg hover:bg-emerald-500 transition duration-200">
          Load More
        </button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { listCodes } from "~/store/code/listCode";
import { ref, computed } from "vue";

const searchQuery = ref("");
const selectedDate = ref("");
const selectedCategory = ref("");
const sortOrder = ref("desc");

const categories = ["Category1", "Category2", "Category3"];
const codes = listCodes;

const filteredAndSortedCodes = computed(() => {
  let filteredCodes = codes;

  // Search filter
  if (searchQuery.value) {
    filteredCodes = filteredCodes.filter(
      (code) =>
        code.title.en.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
        code.title.kh.toLowerCase().includes(searchQuery.value.toLowerCase())
    );
  }

  // Date filter
  if (selectedDate.value) {
    filteredCodes = filteredCodes.filter(
      (code) => code.date === selectedDate.value
    );
  }

  // Category filter
  if (selectedCategory.value) {
    filteredCodes = filteredCodes.filter(
      (code) =>
        code.category.en === selectedCategory.value ||
        code.category.kh === selectedCategory.value
    );
  }

  // Sort by Date
  filteredCodes = filteredCodes.sort((a, b) => {
    if (sortOrder.value === "asc") {
      return new Date(a.date) - new Date(b.date);
    } else {
      return new Date(b.date) - new Date(a.date);
    }
  });

  return filteredCodes;
});

const loadMore = () => {
  console.log("Loading more articles...");
};

function timeAgo(date, locale = "en") {
  const now = new Date();
  const past = new Date(date);
  const seconds = Math.floor((now - past) / 1000);

  const intervals = [
    { label: { en: 'year', kh: 'ឆ្នាំ' }, seconds: 31536000 },
    { label: { en: 'month', kh: 'ខែ' }, seconds: 2592000 },
    { label: { en: 'day', kh: 'ថ្ងៃ' }, seconds: 86400 },
    { label: { en: 'hour', kh: 'ម៉ោង' }, seconds: 3600 },
    { label: { en: 'minutes', kh: 'នាទី' }, seconds: 60 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) {
      return locale === "kh"
        ? `${count}${interval.label.kh}`
        : `${count} ${interval.label.en} ago`;
    }
  }
  return locale === "kh" ? "ថ្មីៗ" : "just now";
};


function formatViews(views) {
  if (!views) {
    return "0"; // Default to "0" if views is null or undefined
  }
  if (views >= 1_000_000) {
    return (views / 1_000_000).toFixed(1) + "M";
  } else if (views >= 1_000) {
    return (views / 1_000).toFixed(1) + "k";
  }
  return views.toString();
}

</script>

<style scoped>
/* Smooth hover effect */
.hover\:scale-105 {
  transition: transform 0.3s ease-in-out;
}

.hover\:text-blue-500 {
  transition: color 0.3s ease-in-out;
}

/* Image hover */
img:hover {
  transform: scale(1.1);
}

/* Card shadow */
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>