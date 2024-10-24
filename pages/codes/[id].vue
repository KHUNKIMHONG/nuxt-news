<template>
    <div>
      <Header />
      <Banner />
  
      <Preloader v-if="isLoading" /> <!-- Show preloader while loading -->
  
      <template v-else>
        <CodeDetail v-if="codeList" :codeList="codeList" />
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
  import Footer from "~/layouts/Footer.vue";
  import { listCodes } from "~/store/code/listCode";
  
  const route = useRoute();
  const codeList = ref(null);
  const isLoading = ref(true);
  
  onMounted(() => {
    const codeListId = Number(route.params.id);
    // Simulate a loading time (optional)
    setTimeout(() => {
      codeList.value = listCodes.find(item => item.id === codeListId);
      isLoading.value = false; // Hide loading state
    }, 1000); // Adjust time as needed (1000ms = 1 second)
  });
  </script>