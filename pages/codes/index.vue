<template>
    <div>
      <Header />
      <PageTitle
        title="Code"
        subtitle="Stay up to date with the latest news"
        breadcrumb="List Code"
        breadcrumbLink="/code"
      />
      <ListCode />
      <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from "~/layouts/Header.vue";
  import Footer from "~/layouts/Footer.vue";
  </script>