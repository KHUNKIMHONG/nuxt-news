<template>
  <section class="py-12 bg-gray-50 dark:bg-slate-900 transition-all">
    <div class="container mx-auto max-w-6xl px-6">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <!-- Education Section -->
        <div class="w-full">
          <div class="flex items-center space-x-3">
            <Icon name="mdi:school-outline" class="text-yellow-500 text-3xl" />
            <h2 class="text-3xl font-bold">Education</h2>
          </div>
          <div class="relative ml-8 mt-6 space-y-10 before:absolute before:top-3 before:-left-1 before:w-1 before:h-full before:bg-gray-400">
            <div v-for="(edu, index) in education" :key="index" class="relative pl-8 pb-8 first:pt-0 first:before:h-0">
              <div class="absolute -left-3 top-2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white"></div>
              <h3 class="text-2xl font-bold text-yellow-600">{{ edu.degree }}</h3>
              <p class="text-gray-500 text-md">{{ edu.years }}</p>
              <p class="text-gray-700 font-semibold">{{ edu.institution }}</p>
              <p class="text-gray-600 text-md">{{ edu.description }}</p>
            </div>
          </div>
        </div>

        <!-- Experience Section -->
        <div class="w-full">
          <div class="flex items-center space-x-3">
            <Icon name="mdi:briefcase-outline" class="text-yellow-500 text-3xl" />
            <h2 class="text-3xl font-bold">Experience</h2>
          </div>
          <div class="relative ml-8 mt-6 space-y-10 before:absolute before:top-3 before:-left-1 before:w-1 before:h-full before:bg-gray-400">
            <div v-for="(exp, index) in experience" :key="index" class="relative pl-8 pb-8 first:pt-0 first:before:h-0">
              <div class="absolute -left-3 top-2 w-6 h-6 bg-yellow-500 rounded-full border-4 border-white"></div>
              <h3 class="text-2xl font-bold text-yellow-600">{{ exp.role }}</h3>
              <p class="text-gray-500 text-md">{{ exp.years }}</p>
              <p class="text-gray-700 font-semibold">{{ exp.company }}</p>
              <p class="text-gray-600 text-md">{{ exp.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const education = [
  {
    degree: "Master of Computer Science",
    years: "2015 - 2016",
    institution: "University of XYZ",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    degree: "Bachelor of Computer Science",
    years: "2010 - 2014",
    institution: "University of ABC",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    degree: "Diploma in Computer Science",
    years: "2006 - 2010",
    institution: "XYZ Institution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];

const experience = [
  {
    role: "Senior UX/UI Designer",
    years: "Jan 2020 - Present",
    company: "Bergnaum, Hills and Howe",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    role: "Product Designer",
    years: "Jan 2016 - Dec 2019",
    company: "Langosh, Sipes and Raynor",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  },
  {
    role: "UI/UX Designer",
    years: "Jan 2014 - Dec 2015",
    company: "Strosin, Maggio and Homenick",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  }
];
</script>


