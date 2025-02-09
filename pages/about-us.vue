<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 py-10">
    <div class="max-w-4xl mx-auto text-center">
      <!-- Profile Section -->
      <div class="flex flex-col items-center text-center mt-10">
        <!-- Profile Image -->
        <img src="/images/own-photo.jpg" alt="Your Name"
          class="w-36 h-36 rounded-full shadow-lg border-4 border-emerald-500" />

        <!-- Welcome Badge -->
        <p
          class=" bg-white dark:bg-gray-800 mt-4 px-4 py-1 rounded-lg text-gray-600 dark:text-gray-300 text-sm shadow-md animate-fade-in">
          WELCOME TO MY PORTFOLIO
        </p>
      </div>

      <!-- About Me -->
      <section class=" bg-pink-100">
        <div class="bg-white">
          <!-- Header Section -->
          <header class="text-center">
            <h2 class="text-5xl font-light text-gray-300">ABOUT ME</h2>
            <p class="text-xl text-gray-700 mt-2">Some Word About Me</p>
          </header>

          <!-- Main Content -->
          <main class="mt-10">
            <h1 class="text-4xl font-bold text-gray-900 mb-6">Know Me More</h1>
            <p class="text-2xl font-light text-gray-700 mb-4">I'm Emily Davis, a {{ rotatingText[currentIndex] }}.</p>
            <p class="text-lg text-gray-700 mb-8">
              I'm a designer & developer with a passion for web design. I enjoy developing simple, clean, and slick
              websites that provide real value to the end user. Thousands of clients have procured exceptional results
              while working with me. Delivering work within time and budget which meets client's requirements is our
              motto.
            </p>

            <!-- Contact Information -->
            <div
              class="flex flex-col md:flex-row justify-between items-start md:items-center bg-gray-100 p-6 rounded-lg shadow-md">
              
                <p class="text-gray-800"><strong>Email:</strong> chat@portify.com</p>
                <p class="text-gray-800"><strong>Date of Birth:</strong> 11 November, 1987</p>
                <p class="text-gray-800"><strong>Location:</strong> Los Angeles, California</p>
              
              <!-- <div
                class="mt-4 md:mt-0 bg-emerald-500 text-white p-4 rounded-lg shadow-lg flex items-center justify-center">
                <p class="text-4xl font-bold mr-2">1</p>
                <p>Years of Experience</p>
              </div> -->
            </div>
          </main>
        </div>
      </section>


        <!-- Skills Section -->
        <section class="mt-10 text-left">
          <h2 class="text-2xl font-semibold flex items-center gap-2">
            <Icon name="mdi:cog" class="text-3xl" />
            SKILL TECHNOLOGIES
          </h2>
          <div class="mt-4 space-y-4">

            <!-- Skill Item -->
            <div>
              <div class="flex justify-between">
                <span>Nuxt.js</span>
                <span>60%</span>
              </div>
              <div class="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-lg">
                <div class="bg-emerald-500 h-3 rounded-lg" style="width: 60%;"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <span>Vue.js</span>
                <span>70%</span>
              </div>
              <div class="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-lg">
                <div class="bg-emerald-500 h-3 rounded-lg" style="width: 70%;"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <span>Laravel</span>
                <span>60%</span>
              </div>
              <div class="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-lg">
                <div class="bg-emerald-500 h-3 rounded-lg" style="width: 60%;"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <span>TailwindCSS</span>
                <span>80%</span>
              </div>
              <div class="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-lg">
                <div class="bg-emerald-500 h-3 rounded-lg" style="width: 80%;"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <span>JavaScript</span>
                <span>75%</span>
              </div>
              <div class="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-lg">
                <div class="bg-emerald-500 h-3 rounded-lg" style="width: 75%;"></div>
              </div>
            </div>

            <div>
              <div class="flex justify-between">
                <span>PHP</span>
                <span>65%</span>
              </div>
              <div class="w-full bg-gray-300 dark:bg-gray-700 h-3 rounded-lg">
                <div class="bg-emerald-500 h-3 rounded-lg" style="width: 65%;"></div>
              </div>
            </div>

          </div>
        </section>

        <!-- Experience & Projects -->
        <section class="mt-10 text-left">
          <h2 class="text-2xl font-semibold">Experience & Projects</h2>
          <div class="mt-4 grid md:grid-cols-2 gap-6">

            <!-- Project 1 -->
            <div class="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <img src="https://i.pinimg.com/736x/71/b2/a0/71b2a022ef01a07f141d63c33c17fb11.jpg"
                alt="E-commerce Website" class="rounded-md mb-3 w-full object-cover h-40">
              <h3 class="text-lg font-semibold">E-commerce Website</h3>
              <p class="text-gray-600 dark:text-gray-400">Developed a full-stack e-commerce platform using Nuxt.js &
                Laravel.</p>
              <a href="https://github.com/yourusername/ecommerce-project" target="_blank"
                class="inline-block mt-2 text-emerald-500 hover:underline">
                View Code →
              </a>
            </div>

            <!-- Project 2 -->
            <div class="p-4 bg-gray-200 dark:bg-gray-700 rounded-lg">
              <img src="https://i.pinimg.com/736x/71/b2/a0/71b2a022ef01a07f141d63c33c17fb11.jpg"
                alt="News Sharing Platform" class="rounded-md mb-3 w-full object-cover h-40">
              <h3 class="text-lg font-semibold">News Sharing Platform</h3>
              <p class="text-gray-600 dark:text-gray-400">Built a news website with real-time updates, optimized for
                performance.</p>
              <a href="https://github.com/yourusername/news-platform" target="_blank"
                class="inline-block mt-2 text-emerald-500 hover:underline">
                View Code →
              </a>
            </div>

          </div>
        </section>

        <!-- Educational Background -->
        <section class="mt-10 text-left">
          <h2 class="text-3xl font-semibold mb-6">🎓 Educational Background</h2>
          <div class="space-y-6 relative">

            <!-- University -->
            <div class="bg-gray-200 dark:bg-gray-700 p-5 rounded-lg shadow-md relative">
              <span class="absolute -left-6 top-3 bg-emerald-500 text-white rounded-full p-2">
                <Icon name="mdi:school" class="h-6 w-6"></Icon>
              </span>
              <h3 class="text-lg font-semibold">2019 – 2024</h3>
              <p class="text-gray-600 dark:text-gray-400">
                🎓 <strong>Bachelor of Software Engineering</strong>,
                <br>Institute of Technology of Cambodia (ITC)
              </p>
            </div>

            <!-- High School (With Center Line) -->

            <div class="bg-gray-200 dark:bg-gray-700 p-5 rounded-lg shadow-md relative w-full">
              <span class="absolute -left-6 top-3 bg-emerald-500 text-white rounded-full p-2">
                <Icon name="mdi:school-outline" class="h-6 w-6"></Icon>
              </span>
              <h3 class="text-lg font-semibold">2007 – 2019</h3>
              <p class="text-gray-600 dark:text-gray-400 ">🏫 Hansen Thnout Choum High School</p>
            </div>

            <!-- Primary School -->
            <div class="bg-gray-200 dark:bg-gray-700 p-5 rounded-lg shadow-md relative">
              <span class="absolute -left-6 top-3 bg-emerald-500 text-white rounded-full p-2">
                <Icon name="mdi:book-open-page-variant" class="h-6 w-6"></Icon>
              </span>
              <h3 class="text-lg font-semibold">2007 – 2012</h3>
              <p class="text-gray-600 dark:text-gray-400">📖 Trang Pang Anderk Primary School</p>
            </div>

          </div>
        </section>

        <!-- Personal Proficiencies -->
        <section class="mt-10 text-left">
          <h2 class="text-3xl font-semibold mb-6">🚀 Personal Proficiencies</h2>
          <!-- Communication -->
          <h5 class=" bg-gray-200 dark:bg-gray-700 p-4">
            <span class="font-medium">✅Communication</span>
          </h5>

          <!-- Teamwork -->
          <h5 class="bg-gray-200 dark:bg-gray-700 p-4">
            <span class="font-medium">✅Teamwork</span>
          </h5>

          <!-- Problem-Solving -->
          <h5 class="bg-gray-200 dark:bg-gray-700 p-4">
            <span class="font-medium">✅Problem-Solving</span>
          </h5>

          <!-- Time Management -->
          <h5 class=" bg-gray-200 dark:bg-gray-700 p-4">
            <span class="font-medium">✅Time Management</span>
          </h5>
        </section>


        <!-- Contact -->
        <section class="mt-10 text-center">
          <h2 class="text-2xl font-semibold">Let's Connect</h2>
          <div class="flex justify-center gap-4 mt-4">
            <a href="https://github.com/your-github" target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              <Icon name="mdi:github" class="h-6 w-6" />
            </a>
            <a href="https://linkedin.com/in/your-profile" target="_blank"
              class="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              <Icon name="mdi:linkedin" class="h-6 w-6" />
            </a>
            <a href="mailto:your-email@gmail.com" class="text-gray-600 dark:text-gray-400 hover:text-blue-500">
              <Icon name="mdi:email" class="h-6 w-6" />
            </a>
          </div>
        </section>
      </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useSeoMeta } from '#imports'; // Nuxt 3 way to manage SEO meta tags

useSeoMeta({
  title: "About Me - Your Name",
});

const rotatingText = ref([
  "Coder",
  "Web Developer",
  "Software Engineer",
  "Full Stack Developer"
]);

const currentIndex = ref(0);

onMounted(() => {
  setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % rotatingText.value.length;
  }, 2000);
});
</script>


<style scoped>
/* Fading effect */
span {
  opacity: 0;
  animation: fadeIn 1s ease-in-out forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>