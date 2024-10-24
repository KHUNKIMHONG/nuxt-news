<template>
  <div class="error-container relative h-screen flex items-center justify-center">
    <Header class="hidden"/>
    <img src="/images/error/error.jpg" alt="Error Background" class="absolute inset-0 w-full h-full object-cover" />
    
    <div class="overlay bg-white dark:bg-black bg-opacity-60 absolute inset-0 z-5"></div>
    
    <div class="error-content relative z-10 text-black text-center p-8 bg-white bg-opacity-10 backdrop-blur-md rounded-lg shadow-lg">
      <div class="text-red-700 font-bold text-4xl mb-4">ERROR</div>
  
      <div v-if="error?.statusCode === 500" class="error-message">
        <h1 class="text-3xl font-semibold mb-2">{{ localizedMessages[0].title }}</h1>
        <p class="text-lg">{{ localizedMessages[0].description }}</p>
      </div>
      <div v-else-if="error?.statusCode === 404" class="error-message">
        <h1 class="text-3xl font-semibold mb-2">{{ localizedMessages[1].title }}</h1>
        <p class="text-lg">{{ localizedMessages[1].description }}</p>
      </div>
      <div v-else class="error-message">
        <h1 class="text-3xl font-semibold mb-2">{{ localizedMessages[2].title }}</h1>
        <p class="text-lg">{{ localizedMessages[2].description }}</p>
      </div>
  
      <NuxtLink @click="handleError" class="back-link inline-block no-underline mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
        {{ localizedMessages[3].title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import Header from "~/layouts/Header.vue";
import { errors } from "~/store/error_tilte.ts"
import { useError } from 'nuxt/app';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

// Retrieve the error from Nuxt's context
const error = useError();

// Use the i18n setup to determine the current locale
const { locale } = useI18n();

// Computed property for localized messages
const localizedMessages = computed(() => {
  return (errors || []).map(error => ({
    title: locale.value === "en" ? error.title_en : error.title_kh,
    description: locale.value === "en" ? error.description_en : error.description_kh
  }));
});

// Method to handle error redirection
const router = useRouter();
const handleError = () => {
  error.value = null; // Clear the error
  router.push('/');   // Redirect to home
};
</script>

<style scoped>
.error-container {
  background-color: rgba(0, 0, 0, 0.5); /* Adjust as needed */
}
</style>


