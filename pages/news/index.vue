<template>
  <div>
    <Header />
    <PageTitle
      title="News"
      subtitle="Stay up to date with the latest news"
      breadcrumb="News"
      breadcrumbLink="/news"
    />
    <News />
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
</script>
