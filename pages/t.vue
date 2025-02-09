<template>
    <section class="py-12 bg-gray-50 dark:bg-slate-900 transition-all">
      <div class="container mx-auto max-w-5xl px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <!-- Description Column -->
          <div>
            <h2 class="text-3xl font-bold mb-4">My Expertise</h2>
            <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
              I am a frontend developer specializing in building interactive and responsive web applications.  
              My expertise lies in modern JavaScript frameworks, UI/UX design, and performance optimization.
            </p>
          </div>
  
          <!-- Skills Grid Column -->
          <div>
            <div v-for="(skill, index) in skills" :key="index" class="mb-4">
              <div class="flex justify-between items-center">
                <div class="flex items-center space-x-2">
                  <Icon :name="skill.icon" class="text-blue-500 text-3xl" />
                  <span class="text-lg font-semibold">{{ skill.name }}</span>
                </div>
                <span class="text-sm font-medium text-gray-600 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1 mt-2">
                <div 
                  class="bg-blue-500 h-1 rounded-full transition-all"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const skills = [
    { name: "Vue.js", icon: "mdi:vuejs", level: 70 },
    { name: "Nuxt.js", icon: "mdi:nuxt", level: 60 },
    { name: "React.js", icon: "mdi:react", level: 65 },
    { name: "Tailwind CSS", icon: "mdi:tailwind", level: 80 },
    { name: "Node.js", icon: "mdi:nodejs", level: 50 },
    { name: "Laravel", icon: "mdi:laravel", level: 55 },
  ];
  </script>
  
  
  