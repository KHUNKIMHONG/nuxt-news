<template>
  <section class="py-16 px-4 md:px-12 lg:px-24 bg-gray-100">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <!-- Left Column: Image Gallery -->
        <div class="order-2 lg:order-1 grid gap-6">
          <!-- First Line: One Full-Width Image -->
          <div class="w-full">
            <img
              src="https://leadersinternational.org/wp-content/uploads/2023/07/Smart-city-article-on-knowledge-sharing.jpg"
              alt="Sharing Knowledge Illustration"
              class="w-full rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
            />
          </div>

          <!-- Second Line: Two Images (Second Image Smaller, Third Image Larger) -->
          <div class="grid grid-cols-2 gap-6">
            <!-- Smaller Image -->
            <div class="w-full h-48">
              <img
                src="https://eu-images.contentstack.com/v3/assets/blt07f68461ccd75245/blt09a2ac83e51a0e06/661ce198092eb8747525079e/programming_20evolution.jpg?width=1280&auto=webp&quality=95&format=jpg&disable=upscale"
                alt="Programming Evolution"
                class="w-full h-full object-cover rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
              />
            </div>

            <!-- Larger Image -->
            <div class="w-full h-48 lg:h-64">
              <img
                src="https://privacy.gov.ph/wp-content/uploads/2023/07/Website-Banner_-01.png"
                alt="Knowledge Sharing Banner"
                class="w-full h-full object-cover rounded-xl shadow-lg transition-transform hover:scale-105 duration-300"
              />
            </div>
        </div>
        </div>

        <!-- Right Column: Text and Services -->
        <div class="order-1 lg:order-2 space-y-10">
            <h2 class="text-4xl font-extrabold text-gray-800 leading-tight">
              {{ localizedTitle }}
            </h2>
            <p class="text-lg text-gray-600 mb-6">
                {{ localizedDes }}
            </p>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Service Item -->
              <div
                v-for="(item, index) in localizedSlides"
                :key="index"
                class="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div class="flex items-center space-x-4">
                  <Icon
                    :name="item.icon"
                    :class="item.iconColor"
                    class="w-10 h-10"
                  />
                  <h5 class="text-xl font-semibold text-gray-800">
                    {{ item.title }}
                  </h5>
                </div>
                <p class="mt-4 text-gray-600">
                  {{ item.description }}
                </p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </section>
</template>
  
<script>
import { golds } from "~/store/gold_title.ts"; // Importing the data from the file

export default {
  name: "OurServicesPage",
  data() {
    return {
      golds,
    };
  },
  computed: {
    localizedTitle() {
      const lang = this.$i18n.locale;
      return lang === "en" ? "Sharing Knowledge for a Better Future" : "ចែករំលែកចំណេះដឹង ដើម្បីអនាគតកាន់តែប្រសើរ";
    },
    localizedDes() {
      const lang = this.$i18n.locale;
      return lang === "en" ? "Sharing the latest in coding, software development, and new technologies to empower the next generation of developers and tech enthusiasts in my community." : 
      "ចែករំលែកព័ត៌មានចុងក្រោយបង្អស់ក្នុងការសរសេរកូដ ការអភិវឌ្ឍន៍កម្មវិធី និងបច្ចេកវិទ្យាថ្មីៗ ដើម្បីផ្តល់សិទ្ធិអំណាចដល់អ្នកអភិវឌ្ឍន៍ និងអ្នកដែលចូលចិត្តបច្ចេកវិទ្យាជំនាន់ក្រោយនៅក្នុងសហគមន៍របស់ខ្ញុំ។";
    },
    localizedSlides() {
      const lang = this.$i18n.locale;
      return this.golds.map((item) => ({
        title: lang === "en" ? item.title_en : item.title_kh,
        description: lang === "en" ? item.desc_en : item.desc_kh,
        icon: item.icon,
        iconColor: item.iconColor,
      }));
    },
  },
};
</script>

  
  