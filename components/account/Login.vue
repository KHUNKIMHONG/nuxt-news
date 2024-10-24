<template>
    <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600">
        <div class="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg w-full max-w-lg">
            <h1 class="text-2xl font-semibold text-center text-gray-700 dark:text-gray-200">
                Login
            </h1>

            <form class="mt-4">
                <div class="mb-4">
                    <label for="email" class="block text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input type="email" id="email"
                        class="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                </div>

                <div class="mb-4 relative">
                    <label for="password" class="block text-gray-700 dark:text-gray-300">
                        Password
                    </label>
                    <input :type="showPassword ? 'text' : 'password'" id="password"
                        class="w-full px-3 py-2 mt-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600" />
                    <button type="button" @click="togglePasswordVisibility"
                        class="absolute right-3 top-14 transform -translate-y-1/2 text-gray-500 focus:outline-none">
                        <icon v-if="showPassword" name="mdi:eye-off" class="h-6 w-6"></icon>
                        <icon v-else name="mdi:eye" class="h-6 w-6"></icon>
                    </button>
                </div>

                <div class="flex items-center justify-between">
                    <label class="flex items-center">
                        <input type="checkbox" class="form-checkbox h-5 w-5 text-blue-600 dark:text-blue-500" />
                        <span class="ml-2 text-gray-700 dark:text-gray-300">Remember me</span>
                    </label>
                    <a href="#" class="text-sm text-blue-600 hover:underline dark:text-blue-500 no-underline">
                        Forgot password?
                    </a>
                </div>

                <button type="submit"
                    class="w-full mt-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300">
                    Login
                </button>
            </form>

            <p class="mt-6 text-center text-gray-600 dark:text-gray-400">
                Don't have an account?
                <NuxtLink href="/account/register"
                    class="text-blue-600 hover:underline dark:text-blue-500 no-underline">
                    Sign up
                </NuxtLink>
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const showPassword = ref(false);

const togglePasswordVisibility = () => {
    showPassword.value = !showPassword.value;
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>