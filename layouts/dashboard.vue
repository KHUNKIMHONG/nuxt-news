<template>
    <div class="flex h-screen bg-gray-100">
      <!-- Sidebar -->
      <aside :class="[
        'fixed inset-y-0 left-0 z-30 w-64 lg:w-20 transition-transform duration-300 transform bg-white shadow-lg',
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      ]">
        <div class="p-4 flex justify-between items-center lg:flex-col lg:justify-start lg:items-center">
          <h2 v-if="sidebarOpen" class="text-lg font-semibold mb-4 lg:hidden">Menu</h2>
          <button @click="toggleSidebar" class="lg:hidden text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
  
        <nav class="mt-6">
          <ul class="space-y-4">
            <li class="text-center lg:text-left">
              <a href="#" class="flex items-center justify-center lg:justify-start px-4 py-2 text-gray-600 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 lg:mr-0 lg:mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 10h18M3 15h18M3 20h18" />
                </svg>
                <span class="lg:hidden">Home</span>
              </a>
            </li>
            <li class="text-center lg:text-left">
              <a href="#" class="flex items-center justify-center lg:justify-start px-4 py-2 text-gray-600 hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2 lg:mr-0 lg:mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 10h18M3 15h18M3 20h18" />
                </svg>
                <span class="lg:hidden">Trending</span>
              </a>
            </li>
            <!-- Add more menu items here -->
          </ul>
        </nav>
      </aside>
  
      <!-- Main Content Area -->
      <div :class="['flex-1 flex flex-col transition-all duration-300', sidebarOpen ? 'ml-64 lg:ml-20' : 'ml-0']">
        <!-- Header -->
        <header class="flex items-center justify-between p-4 bg-white shadow fixed w-full z-10">
          <div class="flex items-center">
            <button @click="toggleSidebar" class="lg:hidden text-gray-800 mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <h1 class="text-lg font-semibold">Logo</h1>
          </div>
          <div class="flex items-center w-full lg:w-1/3">
            <input type="text" placeholder="Search" class="w-full px-4 py-2 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500">
            <button class="ml-2 p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 4v16M4 8h16M8 12h8M4 16h16M4 20h16" />
              </svg>
            </button>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Notification icon -->
            <button class="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15h14l1-10H4l1 10z" />
              </svg>
            </button>
            <!-- Profile icon -->
            <button class="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5h18M3 10h18M3 15h18M3 20h18" />
              </svg>
            </button>
          </div>
        </header>
  
        <!-- Content Area -->
        <main class="flex-1 p-6 pt-20 bg-gray-50">
          <h2 class="text-2xl font-semibold text-gray-700 mb-4">Videos</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <!-- Placeholder for video cards -->
            <div class="bg-white shadow rounded-lg p-4">
              <div class="h-40 bg-gray-200 rounded mb-2"></div>
              <h3 class="text-gray-800 font-semibold">Video Title</h3>
              <p class="text-gray-600 text-sm">Channel Name</p>
            </div>
            <!-- Repeat or loop more cards as needed -->
          </div>
        </main>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const sidebarOpen = ref(false);
  
  function toggleSidebar() {
    sidebarOpen.value = !sidebarOpen.value;
  }
  </script>
  
  <style scoped>
  html,
  body {
    overflow: hidden;
  }
  </style>
  




<style>
/* Optional: custom styles for mobile and responsive layout */
</style>