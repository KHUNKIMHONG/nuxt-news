<template>
  <div>
    <Header />
    <PageTitle
      :title="$i18n.locale === 'en' ? 'ABOUT ME' : 'អំពីខ្ញុំ'"
      :subtitle="
        $i18n.locale === 'en'
          ? 'Learn more about me and my journey'
          : 'ស្វែងយល់អំពីខ្ញុំ និងការធ្វើដំណើររបស់ខ្ញុំ'
      "
    />
    <About />
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/layouts/Header.vue";
import About from "~/components/About/About.vue";
import Footer from "~/layouts/Footer.vue";
</script>