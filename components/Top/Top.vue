<template>
  <div class="bg-yellow-500 text-white text-sm py-2">
    <div class="max-w-6xl mx-auto flex justify-between items-center px-4">
      <!-- Left: Contact Information -->
      <div class="flex items-center space-x-4">
        <a
          href="mailto:info@example.com"
          class="flex items-center space-x-2 hover:text-emerald-400 transition"
        >
          <Icon name="mdi:email" class="w-4 h-4" />
          <span>info@example.com</span>
        </a>
        <a
          href="tel:+85512345678"
          class="flex items-center space-x-2 hover:text-emerald-400 transition"
        >
          <Icon name="mdi:phone" class="w-4 h-4" />
          <span>+855 123 456 78</span>
        </a>
      </div>

      <!-- Right: Social Media Icons -->
      <div class="flex items-center space-x-4">
        <a
          href="https://t.me/yourusername"
          target="_blank"
          class="hover:text-blue-400 transition"
        >
          <Icon name="mdi:telegram" class="w-5 h-5" />
        </a>
        <a
          href="https://facebook.com/yourpage"
          target="_blank"
          class="hover:text-blue-500 transition"
        >
          <Icon name="mdi:facebook" class="w-5 h-5" />
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          class="hover:text-blue-600 transition"
        >
          <Icon name="mdi:linkedin" class="w-5 h-5" />
        </a>
      </div>
    </div>
  </div>
</template>
