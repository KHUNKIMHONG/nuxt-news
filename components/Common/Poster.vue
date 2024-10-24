<template>
  <section class="py-24 px-6 md:px-16 lg:px-32">
    <div class="container mx-auto">
      <div class="relative bg-purple-900 rounded p-20 md:p-32 text-white shadow-2xl">
        <!-- Main Content -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0">
          <!-- Left Section -->
          <div class="md:w-1/2">
            <h1 class="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Relax and Code Your Best Ideas
            </h1>
            <p class="text-2xl mb-12 leading-relaxed">
              Unwind with clean, calm code. Take your coding skills to the next level with clear mindsets and creative solutions.
            </p>
            <button class="bg-white text-purple-900 font-semibold py-4 px-10 rounded-lg hover:bg-purple-700 hover:text-white transition-all duration-300">
              Start designing
            </button>
          </div>

          <!-- Right Section with Multiple Images -->
          <div class="md:w-1/2 flex justify-center relative">
            <!-- Background Circle -->
            <div class="absolute bg-purple-800 w-96 h-96 md:w-[20rem] md:h-[20rem] rounded-full -right-20 -top-20"></div>

            <!-- Images Display with Staggered Position -->
            <div class="relative z-10 flex space-x-8">
              <!-- First Image (slightly lower) -->
              <img
               src="/images/ts-laravel-removebg-preview.png"
                alt="Poster 1"
                class="w-60 md:w-72 rounded-lg shadow-xl transform hover:rotate-6 hover:scale-110 transition-all duration-300 ease-in-out -translate-y-6"
              />
              <!-- Second Image (higher) -->
              <img
                src="/images/Mobile_App_Screen_Mockup__Mosaic-removebg-preview.png"
                alt="Poster 2"
                class="w-60 md:w-72 rounded-lg shadow-xl transform hover:-rotate-6 hover:scale-110 transition-all duration-300 ease-in-out translate-y-10"
              />
              <!-- Third Image (slightly lower) -->
              <img
                src="/images/Hardcover Book Mockup Close Up Poster.png"
                alt="Poster 3"
                class="w-60 md:w-72 rounded-lg shadow-xl transform hover:rotate-6 hover:scale-110 transition-all duration-300 ease-in-out -translate-y-6"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: "Get inspired with spooktacular ideas",
    };
  },
};
</script>

<style scoped>
/* Background colors */
.bg-purple-900 {
  background-color: #322659;
}

.bg-purple-800 {
  background-color: #4c3081;
}

/* Image hover effect */
img {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease;
}

img:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

/* Button hover effect */
button:hover {
  background-color: #4c3081;
  color: white;
}

/* Box shadow and padding for the content box */
.bg-purple-900 {
  padding: 5rem;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

.shadow-xl {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}
</style>



