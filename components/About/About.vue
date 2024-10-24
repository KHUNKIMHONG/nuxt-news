<template>
  <div class="bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-200 p-8">
    <!-- Header Section -->
    <div class="text-center mb-8">
      <h1 class="text-3xl font-bold mb-2">About Us</h1>
      <p class="text-lg text-slate-600 dark:text-slate-300">Get to know our story, mission, and values</p>
    </div>

    <!-- Introduction Section with Image -->
    <section class="mb-8 flex flex-col md:flex-row items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeVNi7mqUoTlL_8cM7T0mv21gaNoJP3sq4g&s" alt="Our Story" class="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6">
      <div>
        <h2 class="text-2xl font-semibold mb-4">Our Story</h2>
        <p class="leading-relaxed">
          Our journey started with a vision to create impactful solutions that bring people closer and empower communities.
          With a team dedicated to innovation and excellence, we've built an environment where ideas flourish and dreams become reality.
        </p>
      </div>
    </section>

    <!-- Mission Section with Image -->
    <section class="mb-8 flex flex-col md:flex-row items-center">
      <div class="order-2 md:order-1">
        <h2 class="text-2xl font-semibold mb-4">Our Mission</h2>
        <p class="leading-relaxed">
          Our mission is to make a difference by fostering creativity, collaboration, and community spirit. We are committed
          to providing top-notch services and products that enrich lives and make the world a better place.
        </p>
      </div>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeVNi7mqUoTlL_8cM7T0mv21gaNoJP3sq4g&s" alt="Our Mission" class="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:ml-6 order-1 md:order-2">
    </section>

    <!-- Values Section with Image -->
    <section class="mb-8 flex flex-col md:flex-row items-center">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQeVNi7mqUoTlL_8cM7T0mv21gaNoJP3sq4g&s" alt="Our Values" class="w-full md:w-1/2 rounded-lg shadow-lg mb-4 md:mb-0 md:mr-6">
      <div>
        <h2 class="text-2xl font-semibold mb-4">Our Values</h2>
        <ul class="list-disc list-inside space-y-2">
          <li>Integrity: We believe in doing the right thing, always.</li>
          <li>Innovation: We foster an environment that encourages creativity and forward-thinking.</li>
          <li>Community: Building strong relationships and giving back to society are at our core.</li>
          <li>Excellence: We strive to exceed expectations in everything we do.</li>
        </ul>
      </div>
    </section>

    <!-- Call-to-Action Section -->
    <section class="text-center mt-12">
      <h3 class="text-xl font-semibold mb-4">Join Us on Our Journey</h3>
      <p class="text-slate-600 dark:text-slate-300 mb-6">
        Be a part of our community and make a positive impact with us. Connect with us to learn more about how we're changing lives and how you can be part of it.
      </p>
      <button class="bg-blue-600 text-white px-6 py-2 rounded-md text-lg hover:bg-blue-700">
        Contact Us
      </button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.bg-white {
  transition: background-color 0.3s;
}
.dark\:bg-slate-800 {
  transition: background-color 0.3s;
}
</style>
