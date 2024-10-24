<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
      <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
        <h1 class="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8">Create an Account</h1>
        
        <form>
          <div class="grid grid-cols-2 gap-4">
            <!-- First Name Field -->
            <div class="mb-4">
              <label for="first-name" class="block text-gray-700 dark:text-gray-300">First Name</label>
              <input type="text" id="first-name" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
            </div>
  
            <!-- Last Name Field -->
            <div class="mb-4">
              <label for="last-name" class="block text-gray-700 dark:text-gray-300">Last Name</label>
              <input type="text" id="last-name" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
            </div>
          </div>
  
          <!-- Email Field -->
          <div class="mb-4">
            <label for="email" class="block text-gray-700 dark:text-gray-300">Email Address</label>
            <input type="email" id="email" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
          </div>
  
          <!-- Phone Number Field -->
          <div class="mb-4">
            <label for="phone" class="block text-gray-700 dark:text-gray-300">Phone Number</label>
            <input type="tel" id="phone" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
          </div>
  
          <!-- Password Field -->
          <div class="mb-4 relative">
            <label for="password" class="block text-gray-700 dark:text-gray-300">Password</label>
            <input type="password" id="password" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
          </div>
  
          <!-- Confirm Password Field -->
          <div class="mb-6 relative">
            <label for="confirm-password" class="block text-gray-700 dark:text-gray-300">Confirm Password</label>
            <input type="password" id="confirm-password" class="w-full px-3 py-2 mt-1 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600">
          </div>
  
          <!-- Register Button -->
          <button type="submit" class="w-full py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-300">
            Sign Up
          </button>
        </form>
  
        <!-- Login Redirect -->
        <p class="mt-6 text-center text-gray-600 dark:text-gray-400">
          Already have an account? 
          <a href="/account/login" class="text-indigo-600 hover:underline dark:text-indigo-500 no-underline">Log in</a>
        </p>
      </div>
    </div>
  </template>
  