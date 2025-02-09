<template>
  <div>
    <Header />
    <PageTitle
      :title="$i18n.locale === 'en' ? 'Code' : 'កូដ'"
      :subtitle="
        $i18n.locale === 'en'
          ? 'Explore the latest code updates'
          : 'សូមស្វែងរកកូដថ្មីៗ'
      "
    />
    <Code />
    <Footer />
  </div>
</template>
  
  <script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
</script>