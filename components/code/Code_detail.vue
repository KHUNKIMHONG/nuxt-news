<template>
    <section class="py-16 px-4 md:px-12 lg:px-24">
        <div class="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8">
            <!-- Main Content Area -->
            <div v-if="codeList" class="w-full lg:w-3/4">
                <div
                    class="bg-white shadow-md rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                    <!-- codeList Image -->
                    <img :src="codeList.image" :alt="codeList.title[$i18n.locale]"
                        class="w-full h-64 md:h-96 object-cover transition-transform duration-300 transform hover:scale-110"
                        loading="lazy" />

                    <div class="p-6">
                        <!-- codeList Title -->
                        <h1 class="text-3xl md:text-4xl font-bold mb-4">
                            {{ codeList.title[$i18n.locale] }}
                        </h1>

                        <!-- codeList Date -->
                        <p class="text-gray-400 text-sm mb-4">{{ codeList.date }}</p>

                        <!-- codeList Category -->
                        <span class="bg-blue-500 text-white text-xs font-semibold py-1 px-2 rounded mb-4 inline-block">
                            {{ codeList.category[$i18n.locale] }}
                        </span>

                        <!-- codeList Description -->
                        <p class="text-gray-600 mb-6">
                            {{ codeList.description[$i18n.locale] }}
                        </p>

                        <!-- Back to Codes Link -->
                        <NuxtLink to="/codes" class="text-blue-500 hover:underline">
                            {{ $i18n.locale === "kh" ? "ត្រឡប់ទៅកូដ" : "Back to Codes" }}
                        </NuxtLink>
                    </div>
                </div>

                <!-- Next and Previous Post Navigation -->
                <div class="mt-8 flex justify-between">
                    <NuxtLink v-if="previousPost" :to="`/codes/${previousPost.id}`"
                        class="text-blue-500 hover:underline">
                        &larr; {{ previousPost.title[$i18n.locale] }}
                    </NuxtLink>

                    <NuxtLink v-if="nextPost" :to="`/codes/${nextPost.id}`"
                        class="text-blue-500 hover:underline ml-auto">
                        {{ nextPost.title[$i18n.locale] }} &rarr;
                    </NuxtLink>
                </div>
            </div>

            <!-- Sidebar -->
            <aside v-if="codeList" class="w-full lg:w-1/4">
                <!-- Recent Posts -->
                <div class="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 class="text-xl font-semibold mb-4">Recent Posts</h2>
                    <ul>
                        <li v-for="post in recentPosts" :key="post.id" class="mb-3">
                            <NuxtLink :to="`/codes/${post.id}`" class="text-blue-500 hover:underline">
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
                            <NuxtLink :to="`/category/${category.id}`" class="text-blue-500 hover:underline">
                                {{ category.name[$i18n.locale] }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>
            </aside>
        </div>
    </section>

    <!-- codeList Not Found -->
    <!-- <section v-else>
      <p class="text-center text-gray-600">codeList not found.</p>
    </section> -->
</template>

<script setup>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { listCodes } from "~/store/code/listCode";

// Define props to receive data
const props = defineProps({
    codeList: Object,
    previousPost: Object,
    nextPost: Object,
    recentPosts: Array,
    categories: Array,
});

// Get current post ID from route parameters
const route = useRoute();
const currentPostId = Number(route.params.id); // Assuming your route has a parameter named 'id'

// Reactive reference to codes
const codes = ref(listCodes);

// Computed properties for the current post, previous post, and next post
const currentPost = computed(() => codes.value.find(post => post.id === currentPostId));
const previousPost = computed(() => {
    const currentIndex = codes.value.findIndex(post => post.id === currentPostId);
    return currentIndex > 0 ? codes.value[currentIndex - 1] : null;
});
const nextPost = computed(() => {
    const currentIndex = codes.value.findIndex(post => post.id === currentPostId);
    return currentIndex < codes.value.length - 1 ? codes.value[currentIndex + 1] : null;
});
</script>

<style scoped>
/* Add hover scale for better interaction */
.hover\:scale-105 {
    transition: transform 0.3s ease-in-out;
}

.hover\:underline {
    transition: color 0.3s ease-in-out;
}

/* Smooth image hover scaling */
img:hover {
    transform: scale(1.1);
}

/* Add smooth shadow effect */
.shadow-md {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>


