<template>
    <div :class="alertClasses"
        class="fixed top-4 right-4 z-50 p-4 rounded-md shadow-lg flex flex-col space-y-2 transition-opacity duration-300 ease-in-out bg-white text-gray-800 dark:bg-gray-800 dark:text-white">
        <div class="flex items-center space-x-2">
            <Icon :name="iconName" class="w-6 h-6" :class="iconColor" />
            <div>
                <p class="font-bold">{{ title }}</p>
                <p>{{ message }}</p>
            </div>
            <button @click="closeAlert" class="ml-auto text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white">
                <Icon name="mdi-close" class="w-4 h-4" />
            </button>
        </div>

        <!-- Progress Bar below message -->
        <div class="relative w-full h-1 bg-gray-200 dark:bg-gray-700 rounded">
            <div class="absolute h-full bg-green-500 progress-bar"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: "success",
        },
        title: {
            type: String,
            default: "Success!",
        },
        message: {
            type: String,
            required: true,
        },
    },
    computed: {
        alertClasses() {
            return this.type === "success"
                ? "bg-green-100 border-l-4 border-green-500 text-green-700"
                : "bg-red-100 border-l-4 border-red-500 text-red-700";
        },
        iconName() {
            return this.type === "success" ? "mdi:check-circle" : "mdi:alert-circle";
        },
        iconColor() {
            return this.type === "success" ? "text-green-500" : "text-red-500";
        },
    },
    mounted() {
        // Start the countdown
        this.startCountdown();
    },
    methods: {
        startCountdown() {
            setTimeout(this.closeAlert, 2000); // Close alert after 5 seconds
        },
        closeAlert() {
            this.$emit('close');
        },
    },
};
</script>

<style scoped>
.progress-bar {
    width: 100%;
    transition: width 5s linear;
    animation: countdown 5s linear forwards;
}

@keyframes countdown {
    from {
        width: 100%;
    }

    to {
        width: 0%;
    }
}
</style>