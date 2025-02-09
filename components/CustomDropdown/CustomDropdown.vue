<template>
  <div class="relative inline-block w-64">
    <div
      @click="toggleDropdown"
      class="dropdown-trigger py-2 px-4 bg-white text-black dark:bg-gray-800 dark:text-white cursor-pointer"
    >
      {{ selectedOption.label }}
    </div>
    <div
      v-if="isOpen"
      class="dropdown-content absolute w-full mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-md"
    >
      <div
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="dropdown-item py-2 px-4 hover:bg-emerald-500 cursor-pointer"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>
  
<script>
export default {
  name: "CustomDropdown",
  props: {
    options: {
      type: Array,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: this.options.find(
        (option) => option.value === this.value
      ) || { label: "Select an option", value: null },
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit("input", option.value);
    },
  },
  watch: {
    value(newValue) {
      this.selectedOption = this.options.find(
        (option) => option.value === newValue
      );
    },
  },
};
</script>
  
  <style scoped>
.dropdown-trigger {
  background-color: #ffffff;
  color: #000000;
}

.dropdown-content {
  background-color: #ffffff;
}

.dropdown-item:hover {
  background-color: #10b981;
}
</style>
  