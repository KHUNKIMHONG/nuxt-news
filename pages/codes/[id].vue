<template>
  <div>
    <Header />
    <PageTitle
      :title="$i18n.locale === 'en' ? 'Code Detail' : 'លម្អិតកូដ'"
      :subtitle="
        $i18n.locale === 'en'
          ? 'Dive deeper into the code details'
          : 'ចូលទៅក្នុងការពិចារណាលម្អិតនៃកូដ'
      "
    />

    <!-- Display Preloader while loading -->
    <Preloader v-if="isLoading" />

    <!-- Show Alerts if present -->
    <AlertMessage
      v-if="alertVisible"
      :type="alertType"
      :title="alertTitle"
      :message="alertMessage"
      @close="alertVisible = false"
    />

    <!-- Code details after loading -->
    <template v-else>
      <CodeDetail v-if="codeList" :codeList="codeList" />
      <Footer />
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import Preloader from "~/layouts/Preloader.vue";
import Header from "~/layouts/Header.vue";
import Footer from "~/layouts/Footer.vue";
import { listCodes } from "~/store/code/listCode";
import AlertMessage from "~/components/AlertMessage/AlertMessage.vue"; // Import the alert message component

// Define state variables
const route = useRoute();
const codeList = ref(null);
const isLoading = ref(true); // Initially true to show the preloader
const alertVisible = ref(false); // To control visibility of the alert message
const alertType = ref("success"); // Default alert type
const alertTitle = ref("");
const alertMessage = ref("");

// Fetch code data on mount
onMounted(() => {
  const codeListId = Number(route.params.id);

  // Simulate fetching data
  setTimeout(() => {
    const fetchedCode = listCodes.find((item) => item.id === codeListId);

    if (fetchedCode) {
      codeList.value = fetchedCode;
      showAlert("success", "Success!", "Page details loaded successfully.");
    } else {
      // If no code found, show an error message
      showAlert("error", "Error!", "Page not found.");
    }
    isLoading.value = false; // Hide preloader after data fetching
  }, 1000);
});

// Function to display alert messages
const showAlert = (type, title, message) => {
  alertType.value = type;
  alertTitle.value = title;
  alertMessage.value = message;
  alertVisible.value = true; // Show alert
};
</script>

