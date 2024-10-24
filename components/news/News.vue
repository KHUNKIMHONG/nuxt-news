<template>
  <section class="py-16 px-4 md:px-12 lg:px-24">
    <div class="container mx-auto">
      <h2 class="text-3xl md:text-4xl font-bold text-left mb-10">
        {{ $i18n.locale === "kh" ? "ព័ត៌មានថ្មី" : "Latest News" }}
      </h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Loop through the first 4 news articles -->
        <div
          v-for="article in news.slice(0, 6)"
          :key="article.id"
          class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
        >
          <div class="relative">
            <img
              :src="article.image"
              :alt="article.title[$i18n.locale]"
              class="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
            />
            <!-- Category Label -->
            <span
              class="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded"
            >
              {{ article.category[$i18n.locale] }}
            </span>
          </div>
          <div class="p-6">
            <h3
              class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500"
            >
              {{ article.title[$i18n.locale] }}
            </h3>
            <p class="text-gray-600 mb-4">
              {{ article.description[$i18n.locale] }}
            </p>
            <NuxtLink :to="`/news/${article.id}`" class="text-blue-500 hover:underline">
              {{ $i18n.locale === "kh" ? "អានបន្ថែម" : "Read more" }}
            </NuxtLink>
            <p class="text-gray-400 text-sm mt-2">{{ article.date }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
  
<script setup>
// Import news data from store or data directory
import { newsArticles } from "~/store/data/news.ts"; // ensure the correct path

// Assign the imported news articles to a constant
const news = newsArticles;
</script>
  
  