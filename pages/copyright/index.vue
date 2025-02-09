<template>
  <div>
    <Header />
    <PageTitle
      :title="$i18n.locale === 'en' ? 'Copyright' : 'រក្សាសិទ្ធិ'"
      :subtitle="
        $i18n.locale === 'en'
          ? 'Stay up to date with the Copyright'
          : 'តាមដានព័ត៌មានថ្មីៗអំពីការរក្សាសិទ្ធិ'
      "
    />
    <Copyright />
    <Footer />
  </div>
</template>
    
<script setup>
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
</script>