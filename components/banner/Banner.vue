<template>
  <section
    class="relative w-full h-[80vh] overflow-hidden bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 animate-gradient py-16 px-4 md:px-12 lg:px-24">
    <!-- Slide Wrapper -->
    <div class="container mx-auto">
      <div class="flex justify-end">
        <img src="/images/star-blue.png" alt="Logo" class="logo-image" loading="lazy" />
      </div>
      <div
        class="absolute bg-gradient-to-r from-blue-950 via-blue-900 to-blue-950 w-96 h-96 md:w-[15rem] md:h-[15rem] rounded-full -right-20 -top-1">
      </div>

      <div class="slide flex w-full h-full mr-auto transition-opacity duration-700 ease-in-out"
        v-for="(slide, index) in localizedSlides" :key="index" :style="{
          opacity: currentSlide === index ? 1 : 0,
          position: 'absolute',
          top: 0,
          left: 0,
        }">
        <!-- Text Content with Left Alignment -->
        <div class="flex flex-col w-full md:w-1/2 items-start justify-center text-left pl-40 space-y-4 z-10">
          <!-- Slide Title -->
          <h3 class="text-3xl md:text-4xl font-bold text-white leading-tight md:leading-snug tracking-wide max-w-xl">
            {{ slide.title }}
          </h3>

          <!-- Slide Description -->
          <p class="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl">
            {{ slide.description }}
          </p>

          <!-- Buttons -->
          <div class="flex flex-col md:flex-row items-start justify-start space-y-4 md:space-y-0 md:space-x-4 mt-4">
            <!-- Watch Video Button -->
            <button v-if="!isVideoVisible" @click="showVideo"
              class="bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg hover:bg-yellow-600 hover:scale-105 transition duration-300">
              Watch Video
            </button>
            <!-- Learn More Button -->
            <NuxtLink :to="slide.linkUrl"
              class="bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 hover:scale-105 transition duration-300">
              Learn More
            </NuxtLink>
          </div>
        </div>

        <!-- Image Display -->
        <div class="w-full lg:w-1/2 h-full flex items-center justify-center p-6 lg:p-10 z-10">
          <img :src="slide.image" alt="Slide Image"
            class="object-contain w-full max-w-[700px] max-h-[700px] pr-10 mx-auto" />
        </div>

        <!-- Video Display (if available and visible) -->
        <div v-if="isVideoVisible" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div class="relative w-full max-w-7xl max-h-[80vh] overflow-hidden transition duration-300">
            <!-- Video Container -->
            <iframe v-if="slide.videoUrl.includes('youtube')" :src="slide.videoUrl.replace('watch?v=', 'embed/')"
              class="w-full h-[80vh] rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
          </div>

          <!-- Close Button placed outside the video container -->
          <button @click="hideVideo"
            class="absolute top-4 right-4 bg-red-600 hover:bg-red-900 text-white text-3xl font-bold rounded p-4 transition duration-300 shadow-lg">
            &times;
          </button>
        </div>
      </div>

      <!-- Slider Controls -->
      <button @click="prevSlide"
        class="absolute top-1/2 left-4 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-gray-400 text-2xl rounded-full bg-blur-lg bg-opacity-60 hover:bg-yellow-400 hover:scale-110 transition-all duration-300 z-20">
        &#10094;
      </button>
      <button @click="nextSlide"
        class="absolute top-1/2 right-4 -translate-y-1/2 flex items-center justify-center w-10 h-10 text-gray-400 text-2xl rounded-full bg-blur-lg bg-opacity-60 hover:bg-yellow-400 hover:scale-110 transition-all duration-300 z-20">
        &#10095;
      </button>

      <!-- Pagination Dots -->
      <div class="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <span v-for="(slide, index) in localizedSlides" :key="'line' + index" @click="goToSlide(index)" :class="[
          'w-6 h-1 md:w-8 md:h-1 rounded cursor-pointer transition-transform duration-300',
          currentSlide === index ? 'bg-blue-600 scale-x-125' : 'bg-gray-500',
        ]"></span>
      </div>
    </div>
  </section>
</template>

<script>
import { slides } from "~/store/slider_titles.ts";

export default {
  name: "BannerSlider",
  data() {
    return {
      slides,
      currentSlide: 0,
      intervalId: null,
      isVideoVisible: false,
    };
  },
  computed: {
    localizedSlides() {
      const lang = this.$i18n.locale;
      return this.slides.map((slide) => ({
        image: slide.image,
        videoUrl: slide.videoUrl,
        linkUrl: slide.linkUrl,
        title: lang === "en" ? slide.title_en : slide.title_kh,
        description:
          lang === "en" ? slide.description_en : slide.description_kh,
      }));
    },
  },
  mounted() {
    this.startSlideShow();
  },
  methods: {
    startSlideShow() {
      this.intervalId = setInterval(this.nextSlide, 10000);
    },
    stopSlideShow() {
      clearInterval(this.intervalId);
    },
    showVideo() {
      this.isVideoVisible = true;
      this.stopSlideShow(); // Stop the slideshow when the video is shown
    },
    hideVideo() {
      this.isVideoVisible = false;
      this.startSlideShow(); // Restart the slideshow when the video is hidden
    },
    nextSlide() {
      // Prevent moving to the next slide if the video is currently visible
      if (this.isVideoVisible) return;

      this.currentSlide = (this.currentSlide + 1) % this.localizedSlides.length;
    },
    prevSlide() {
      // Prevent moving to the previous slide if the video is currently visible
      if (this.isVideoVisible) return;

      this.currentSlide =
        (this.currentSlide - 1 + this.localizedSlides.length) %
        this.localizedSlides.length;
    },
    goToSlide(index) {
      // Prevent switching slides if the video is currently visible
      if (this.isVideoVisible) return;

      this.currentSlide = index;
    },
  },
  beforeDestroy() {
    this.stopSlideShow();
  },
};
</script>

<style scoped>
.logo-image {
  height: 3rem;
  /* Image size */
  opacity: 0;
  /* Start invisible */
  transform: translateY(50px);
  /* Start off-screen slightly (lower) */
  animation: fadeInSlideUp 1.5s ease-out forwards;
  /* Updated animation */
  transition: transform 0.3s, box-shadow 0.3s;
}

.logo-image:hover {
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  /* Soft shadow on hover */
  transform: scale(1.05);
  /* Slightly enlarge on hover */
}

/* Keyframes for sliding in from the bottom with a fade-in effect */
@keyframes fadeInSlideUp {
  0% {
    opacity: 0;
    transform: translateY(50px);
    /* Start below the initial position */
  }

  100% {
    opacity: 1;
    transform: translateY(0);
    /* End at the final position */
  }
}
</style>
