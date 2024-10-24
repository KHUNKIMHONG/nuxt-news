<template>
    <div>
      <Header />
      <Banner />
  
      <Preloader v-if="isLoading" /> <!-- Show preloader while loading -->
  
      <template v-else>
        <News_detial v-if="article" :article="article" />
        <Footer />
      </template>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useRoute } from 'vue-router';
  import Header from "~/layouts/Header.vue";
  import Banner from "~/components/banner/Banner.vue"; // Ensure you have a Banner component
  import Preloader from "~/layouts/Preloader.vue"; // Import Preloader component
  import News_detial from "~/components/news/News_detial.vue";
  import Footer from "~/layouts/Footer.vue";
  import { newsArticles } from '~/store/data/news.ts'; // Import your local news data
  
  const route = useRoute();
  const article = ref(null);
  const isLoading = ref(true);
  
  onMounted(() => {
    const articleId = Number(route.params.id);
    // Simulate a loading time (optional)
    setTimeout(() => {
      article.value = newsArticles.find(item => item.id === articleId);
      isLoading.value = false; // Hide loading state
    }, 1000); // Adjust time as needed (1000ms = 1 second)
  });
  </script>
  
  
  