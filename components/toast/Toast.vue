<!-- components/AlertMessage.vue -->
<template>
    <div v-if="visible" :class="alertClasses"
        class="fixed top-4 right-4 p-4 rounded-md shadow-lg flex items-center space-x-2 transition-opacity duration-300 ease-in-out">
        <svg :class="iconClasses" fill="currentColor" viewBox="0 0 20 20" class="w-6 h-6">
            <path v-if="type === 'success'" fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-4.707a1 1 0 111.414 1.414L7.414 14l.293-.293zM5.707 10.707l3-3a1 1 0 10-1.414-1.414L4.293 10l.293.293a1 1 0 101.414 1.414L5.707 10.707z"
                clip-rule="evenodd"></path>
            <path v-else fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.293-4.707a1 1 0 111.414 1.414L7.414 14l.293-.293zM5.707 10.707l3-3a1 1 0 10-1.414-1.414L4.293 10l.293.293a1 1 0 101.414 1.414L5.707 10.707z"
                clip-rule="evenodd"></path>
        </svg>
        <div>
            <p class="font-bold">{{ title }}</p>
            <p>{{ message }}</p>
        </div>
        <button @click="visible = false" class="ml-auto text-gray-500 hover:text-gray-700">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                    d="M10 9l5-5a1 1 0 011.414 0l.707.707a1 1 0 010 1.414l-5 5 5 5a1 1 0 010 1.414l-.707.707a1 1 0 01-1.414 0l-5-5-5 5a1 1 0 01-1.414 0l-.707-.707a1 1 0 010-1.414l5-5-5-5a1 1 0 010-1.414L3.293 4a1 1 0 011.414 0l5 5z"
                    clip-rule="evenodd"></path>
            </svg>
        </button>
    </div>
</template>

<script>
export default {
    props: {
        type: {
            type: String,
            default: 'success', // Can be 'success' or 'error'
        },
        title: {
            type: String,
            default: 'Success!',
        },
        message: {
            type: String,
            required: true,
        },
        visible: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        alertClasses() {
            return this.type === 'success' ? 'bg-green-100 border-l-4 border-green-500 text-green-700' : 'bg-red-100 border-l-4 border-red-500 text-red-700';
        },
        iconClasses() {
            return this.type === 'success' ? 'text-green-500' : 'text-red-500';
        },
    },
};
</script>

<style scoped>
/* Additional styling if needed */
</style>