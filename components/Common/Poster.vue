<template>
  <section class="py-24 px-6 md:px-16 lg:px-32">
    <div class="container mx-auto">
      <div class="relative bg-purple-900 rounded-2xl p-12 md:p-20 lg:p-24 text-white shadow-2xl">
        <!-- Main Content -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-16 md:space-y-0">
          <!-- Left Section -->
          <div class="md:w-1/2">
            <h4 class="text-4xl md:text-6xl font-extrabold mb-6 leading-tight tracking-tight text-white">
              {{ localizedTitle }}
            </h4>
            <p class="text-lg md:text-xl mb-10 leading-relaxed text-gray-300">
              {{ localizedDes }}
            </p>
            <button class="bg-white text-purple-900 font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-purple-700 hover:text-white transition duration-300 ease-in-out">
              Start Your Journey
            </button>
          </div>

          <!-- Right Section with Staggered Grid Images -->
          <div class="md:w-1/2 grid grid-cols-3 gap-4 place-items-center relative">
            <!-- Background Circle -->
            <div class="absolute bg-purple-800 opacity-50 w-80 h-80 md:w-[22rem] md:h-[22rem] rounded-full -right-16 -top-16"></div>
            <!-- First Image -->
            <img
              src="/images/ts-laravel-removebg-preview.png"
              alt="Poster 1"
              class="w-52 md:w-64 rounded-lg shadow-lg transform hover:rotate-3 hover:scale-105 transition duration-300 ease-in-out -translate-y-4"
              style="grid-column: 1; grid-row: 2;"
            />
            <!-- Second Image -->
            <img
              src="/images/Mobile_App_Screen_Mockup__Mosaic-removebg-preview.png"
              alt="Poster 2"
              class="w-52 md:w-64 rounded-lg shadow-lg transform hover:-rotate-3 hover:scale-105 transition duration-300 ease-in-out translate-y-6"
              style="grid-column: 2; grid-row: 1;"
            />
            <!-- Third Image -->
            <img
              src="/images/Hardcover Book Mockup Close Up Poster.png"
              alt="Poster 3"
              class="w-52 md:w-64 rounded-lg shadow-lg transform hover:rotate-3 hover:scale-105 transition duration-300 ease-in-out -translate-y-4"
              style="grid-column: 3; grid-row: 2;"
            />
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
      title: "Get Inspired with Spooktacular Ideas",
    };
  },
  computed: {
    localizedTitle() {
      const lang = this.$i18n.locale;
      return lang === "en" ? "Relax and Code Your Best Ideas" : "សម្រាក និងសរសេរគំនិតដ៏ល្អបំផុតរបស់អ្នក";
    },
    localizedDes() {
      const lang = this.$i18n.locale;
      return lang === "en"
        ? "Unwind with clean, calm code. Take your coding skills to the next level with clear mindsets and creative solutions."
        : "បន្ធូរអារមណ៍ជាមួយកូដស្អាត និងស្ងប់ស្ងាត់។ យកជំនាញសរសេរកូដរបស់អ្នកទៅកម្រិតបន្ទាប់ជាមួយនឹងផ្នត់គំនិតច្បាស់លាស់ និងដំណោះស្រាយប្រកបដោយភាពច្នៃប្រឌិត។";
    },
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

/* Box shadow and padding for the content box */
.bg-purple-900 {
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
}

.shadow-xl {
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
}

/* Image hover effect */
img {
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease, opacity 0.3s ease;
}

img:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
}
</style>
