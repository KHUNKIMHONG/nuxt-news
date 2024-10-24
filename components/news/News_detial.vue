<template>
  <section class="py-16 px-4 md:px-12 lg:px-24">
    <div class="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
      <!-- Main Content Area -->
      <div v-if="article" class="w-full lg:w-3/4">
        <div class="bg-white shadow-md rounded-lg overflow-hidden">
          <!-- Article Image -->
          <img
            :src="article.image"
            :alt="article.title[$i18n.locale]"
            class="w-full h-64 md:h-96 object-cover"
            loading="lazy"
          />

          <div class="p-6">
            <!-- Article Title -->
            <h1 class="text-3xl md:text-4xl font-bold mb-4">
              {{ article.title[$i18n.locale] }}
            </h1>

            <!-- Article Date -->
            <p class="text-gray-400 text-sm mb-4">{{ article.date }}</p>

            <!-- Article Category -->
            <span
              class="bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded mb-4 inline-block"
            >
              {{ article.category[$i18n.locale] }}
            </span>

            <!-- Article Description -->
            <p class="text-gray-600 mb-6">
              {{ article.description[$i18n.locale] }}
            </p>

            <!-- Back to News Link -->
            <NuxtLink to="/news" class="text-blue-500 hover:underline">
              Back to News
            </NuxtLink>
          </div>
        </div>

        <!-- Next and Previous Post Navigation -->
        <div class="mt-8 flex justify-between">
          <NuxtLink
            v-if="previousPost"
            :to="`/news/${previousPost.id}`"
            class="text-blue-500 hover:underline"
          >
            &larr; {{ previousPost.title[$i18n.locale] }}
          </NuxtLink>

          <NuxtLink
            v-if="nextPost"
            :to="`/news/${nextPost.id}`"
            class="text-blue-500 hover:underline ml-auto"
          >
            {{ nextPost.title[$i18n.locale] }} &rarr;
          </NuxtLink>
        </div>
      </div>

      <!-- Sidebar -->
      <aside v-if="article" class="w-full lg:w-1/4">
        <!-- Recent Posts -->
        <div class="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 class="text-xl font-semibold mb-4">Recent Posts</h2>
          <ul>
            <li v-for="post in recentPosts" :key="post.id" class="mb-3">
              <NuxtLink :to="`/news/${post.id}`" class="text-blue-500 hover:underline">
                {{ post.title[$i18n.locale] }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Categories -->
        <div class="bg-white shadow-md rounded-lg p-6">
          <h2 class="text-xl font-semibold mb-4">Categories</h2>
          <ul>
            <li v-for="category in categories" :key="category.id" class="mb-2">
              <NuxtLink
                :to="`/category/${category.id}`"
                class="text-blue-500 hover:underline"
              >
                {{ category.name[$i18n.locale] }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>

  <!-- Article Not Found -->
  <!-- <section v-else>
    <p class="text-center text-gray-600">Article not found.</p>
  </section> -->
</template>

<script setup>
defineProps({
  article: Object,
  previousPost: Object,
  nextPost: Object,
  recentPosts: Array,
  categories: Array,
});
</script>

<style scoped>
/* Additional styles for the blog post page */
</style>




  