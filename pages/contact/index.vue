<template>
  <div>
    <Header />
    <PageTitle
      :title="$i18n.locale === 'en' ? 'Contact' : 'ទំនាក់ទំនង'"
      :subtitle="
        $i18n.locale === 'en'
          ? 'Get in touch with us for more information'
          : 'ទំនាក់ទំនងសម្រាប់ព័ត៌មានបន្ថែម'
      "
    />
    <head-contact />
    <Contact />
    <Footer />
  </div>
</template>

<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
</script>
