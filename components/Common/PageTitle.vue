<template>
  <section class="bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 animate-gradient py-16 px-4 md:px-12 lg:px-24">
    <div class="container mx-auto">
      <!-- Breadcrumbs -->
      <!-- <nav class="text-white mb-6">
        <ul class="flex space-x-4 text-lg md:text-xl">
          <li>
            <NuxtLink to="/" class="hover:underline">Home</NuxtLink>
          </li>
          <li>&gt;</li>
          <li>
            <NuxtLink :to="breadcrumbLink" class="hover:underline">
              {{ breadcrumb }}
            </NuxtLink>
          </li>
        </ul>
      </nav> -->

      <!-- Page Title -->
      <h1 class="text-4xl md:text-6xl font-bold text-white leading-tight tracking-wider">
        {{ title }}
      </h1>

      <!-- Subtitle -->
      <p class="text-white text-lg md:text-xl mt-6 opacity-90">
        {{ subtitle }}
      </p>
    </div>
  </section>
</template>

<style scoped>
/* Adjustments to enhance text appearance */
.text-white {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7); /* Adds a subtle shadow for better readability */
}

/* Responsive font sizes */
@media (min-width: 768px) {
  h1 {
    font-size: 4rem; /* Larger font size for bigger screens */
  }
}

@media (min-width: 1024px) {
  h1 {
    font-size: 5rem; /* Even larger for larger screens */
  }
}
</style>

  
<script setup>
  defineProps({
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      default: ''
    },
    breadcrumb: {
      type: String,
      default: ''
    },
    breadcrumbLink: {
      type: String,
      default: '/'
    }
  });

</script>

  