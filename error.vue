<template>
  <div class="error-container relative h-screen flex items-center justify-center">
    <!-- Background Image -->
    <img 
      src="/error404/fd70ee91c199398204acbe447f7623b7.gif" 
      alt="Error Background" 
      class="absolute inset-0 w-full h-full object-cover"
    />
    
    <!-- Translucent Overlay -->
    <div class="overlay bg-white dark:bg-black bg-opacity-60 absolute inset-0 z-5"></div>
    
    <!-- Error Content -->
    <div class="error-content relative z-10 text-black text-center p-8 bg-white bg-opacity-5 backdrop-blur-md rounded-lg shadow-lg">
      
      <!-- Error-specific Message -->
      <div v-if="error?.statusCode === 500" class="error-message">
        <h1 class="text-emerald-700 font-bold text-6xl mb-4">{{ localizedMessages[0]?.mainTitle }}</h1>
        <h3 class="text-3xl font-medium  mb-2">{{ localizedMessages[0]?.title }}</h3>
        <p class="text-lg">{{ localizedMessages[0]?.description }}</p>
      </div>
      <div v-else-if="error?.statusCode === 404" class="error-message">
        <h1 class="text-emerald-700 font-bold text-6xl mb-4">{{ localizedMessages[1]?.mainTitle }}</h1>
        <h3 class="text-3xl font-medium  mb-2">{{ localizedMessages[1]?.title }}</h3>
        <p class="text-lg">{{ localizedMessages[1]?.description }}</p>
      </div>
      <div v-else class="error-message">
        <h1 class="text-emerald-700 font-bold text-6xl mb-4">{{ localizedMessages[1]?.mainTitle }}</h1>
        <h1 class="text-3xl font-medium  mb-2">{{ localizedMessages[2]?.title }}</h1>
        <p class="text-lg">{{ localizedMessages[2]?.description }}</p>
      </div>
      
      <!-- Redirect Button -->
      <NuxtLink 
        @click="handleError" 
        class="back-link inline-block no-underline mt-6 px-6 py-3 bg-emerald-600 text-white font-medium rounded-md hover:bg-emerald-700 transition"
      >
        {{ localizedActions[0]?.title }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { errors, actions } from "~/store/error_tilte.ts";
import { useError } from 'nuxt/app';
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRouter } from 'vue-router';

// Retrieve the error from Nuxt's context
const error = useError();

// Use the i18n setup to determine the current locale
const { locale } = useI18n();

// Computed property for localized error messages
const localizedMessages = computed(() => {
  return (errors || []).map(error => ({
    mainTitle: error.mainTitle,
    title: locale.value === "en" ? error.title_en : error.title_kh,
    description: locale.value === "en" ? error.description_en : error.description_kh
  }));
});

// Computed property for localized actions
const localizedActions = computed(() => {
  return (actions || []).map(action => ({
    title: locale.value === "en" ? action.title_en : action.title_kh,
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
  background-color: rgba(0, 0, 0, 0.5); /* Background overlay */
}

.overlay {
  background-color: rgba(255, 255, 255, 0.663); /* Light overlay for better contrast */
}

.error-content {
  max-width: 500px;
  text-shadow: 1px 1px rgba(0, 0, 0, 0.2);
}
</style>



