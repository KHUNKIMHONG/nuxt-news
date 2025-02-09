<template>
  <client-only>
    <section class="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 py-24 px-8 md:px-20 lg:px-36 relative overflow-hidden">
      <div class="container mx-auto text-center md:text-left space-y-8 relative z-10">
        
        <!-- Page Title -->
        <h1 class="font-extrabold text-4xl md:text-5xl lg:text-6xl text-white dark:text-gray-100 tracking-wide md:tracking-widest relative">
          {{ title }}
        </h1>
        
        <!-- Divider Line -->
        <div class="mx-auto md:mx-0 w-24 h-1 bg-yellow-400 dark:bg-yellow-500 my-2"></div>

        <!-- Subtitle -->
        <p class="text-white dark:text-gray-300 text-base md:text-lg lg:text-xl opacity-90 max-w-3xl mx-auto md:mx-0 mt-6 animate-fadeIn">
          {{ subtitle }}
        </p>
      </div>
    </section>
  </client-only>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  }
});

</script>