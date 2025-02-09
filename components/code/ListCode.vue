<template>
  <section class="py-16 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-slate-900 transition-all">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loop through the first 6 news articles -->
        <div v-for="codeList in codes.slice(0, 6)" :key="codeList.id"
          class="bg-white dark:bg-slate-800 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
          <!-- Image Section -->
          <div class="relative">
            <img :src="codeList.image" :alt="codeList.title[$i18n.locale]"
              class="w-full h-56 object-cover transition-transform duration-300 transform hover:scale-110" />
            <!-- Category Label -->
            <span
              class="absolute top-4 left-4 bg-red-600 text-white text-xs font-semibold py-1 px-3 rounded-lg shadow-md">
              {{ codeList.category[$i18n.locale] }}
            </span>
          </div>

          <!-- Content Section -->
          <div class="p-6 bg-white dark:bg-slate-800">
            <!-- Title -->
            <h3
              class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-3 transition-colors duration-300 hover:text-emerald-600 dark:hover:text-emerald-400">
              {{ codeList.title[$i18n.locale] }}
            </h3>

            <!-- Description -->
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              {{ codeList.description[$i18n.locale] }}
            </p>

            <!-- Publication Date -->
            <p class="text-gray-400 dark:text-gray-500 text-xs mb-6">{{ codeList.date }}</p>

            <!-- Read More Link -->
            <div class="flex justify-end">
              <NuxtLink :to="`/codes/${codeList.id}`"
                class="text-emerald-600 dark:text-emerald-400 bg-slate-100 dark:bg-slate-700 border border-emerald-500 px-4 py-2 rounded-lg transition-all duration-200 ease-in-out transform hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-500 dark:hover:text-slate-100 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-300 dark:focus:ring-emerald-700">
                {{ $i18n.locale === "kh" ? "អានបន្ថែម" : "Read more" }}
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Import news data from store or data directory
import { listCodes } from "~/store/code/listCode";

// Assign the imported news articles to a constant
const codes = listCodes;
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