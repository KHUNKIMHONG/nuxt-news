<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="fixed bottom-4 right-4 bg-white z-40 p-2 rounded-md shadow-lg ring-2 ring-yellow-700 transition duration-300 ease-in-out hover:bg-yellow-600"
  >
    <Icon name="mdi-arrow-up" size="20" class="text-black transition-transform duration-300 ease-in-out hover:scale-125" />
  </button>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = window.scrollY > window.innerHeight / 2;
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
  window.addEventListener('scroll', toggleVisibility);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', toggleVisibility);
});
</script>






  