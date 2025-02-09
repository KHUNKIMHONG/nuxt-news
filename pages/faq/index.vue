<template>
  <div>
    <Header />
    <PageTitle
      :title="$i18n.locale === 'en' ? 'FAQ' : 'សំណួរញឹកញាប់'"
      :subtitle="
        $i18n.locale === 'en'
          ? 'Find answers to common questions'
          : 'ស្វែងរកចម្លើយសម្រាប់សំណួរញឹកញាប់'
      "
    />
    <head-faq />
    <FQA />
    <Footer />
  </div>
</template>
  
  <script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
</script>