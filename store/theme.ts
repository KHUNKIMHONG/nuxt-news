import { defineStore } from 'pinia';
import { ref, onMounted } from 'vue';

export const useThemeStore = defineStore('theme', () => {
  const isDarkMode = ref(false);

  // Toggle theme function
  const toggleTheme = () => {
    isDarkMode.value = !isDarkMode.value;
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode.value)); // Save to local storage
    document.documentElement.classList.toggle('dark', isDarkMode.value);
  };

  // Check local storage and set theme on initial load
  onMounted(() => {
    const storedTheme = localStorage.getItem('isDarkMode');
    if (storedTheme) {
      isDarkMode.value = JSON.parse(storedTheme);
      document.documentElement.classList.toggle('dark', isDarkMode.value);
    }
  });

  return { isDarkMode, toggleTheme };
});

