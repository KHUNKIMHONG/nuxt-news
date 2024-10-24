<template>
    <section class="py-16 px-4 md:px-12 lg:px-24">
      <div class="container mx-auto">
        <!-- News Heading -->
        <!-- <h2 class="text-3xl md:text-4xl font-bold text-left mb-10">
          {{ $i18n.locale === "kh" ? "ព័ត៌មានថ្មី" : "Latest News" }}
        </h2> -->
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Loop through the first 6 news articles -->
          <div
            v-for="codeList in codes.slice(0, 6)" 
            :key="codeList.id"
            class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105"
          >
            <!-- Image Section -->
            <div class="relative">
              <img
                :src="codeList.image"
                :alt="codeList.title[$i18n.locale]"
                class="w-full h-48 object-cover transition-transform duration-300 transform hover:scale-110"
              />
              <!-- Category Label -->
              <span
                class="absolute top-2 left-2 bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded"
              >
                {{ codeList.category[$i18n.locale] }}
              </span>
            </div>
  
            <!-- Content Section -->
            <div class="p-6">
              <h3
                class="text-2xl font-semibold mb-2 transition-colors duration-300 hover:text-blue-500"
              >
                {{ codeList.title[$i18n.locale] }}
              </h3>
              <p class="text-gray-600 mb-4">
                {{ codeList.description[$i18n.locale] }}
              </p>
              <!-- Read More Link -->
              <NuxtLink :to="`/codes/${codeList.id}`" class="text-blue-500 hover:underline">
                {{ $i18n.locale === "kh" ? "អានបន្ថែម" : "Read more" }}
              </NuxtLink>
              <!-- Publication Date -->
              <p class="text-gray-400 text-sm mt-2">{{ codeList.date }}</p>
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
  