<template>
  <div>
    <Header />
    <PageTitle
      :title="$i18n.locale === 'en' ? 'Guidelines' : 'ការណែនាំ'"
      :subtitle="
        $i18n.locale === 'en'
          ? 'Our standards for contributing valuable and respectful content'
          : 'ស្តង់ដាររបស់យើងសម្រាប់ការចូលរួមមាតិកាមានតម្លៃ និងគោរព'
      "
    />
    <guidelines />
    <Footer />
  </div>
</template>
    
<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
</script>