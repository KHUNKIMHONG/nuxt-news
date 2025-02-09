<template>
    <div v-if="show" class="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50 mb-4 transition-colors duration-300">
        <div class="bg-white dark:bg-gray-800 rounded-lg shadow-2xl shadow-gray-500/50 dark:shadow-gray-700/80 w-11/12 max-w-lg p-6">
            <!-- Header with Title and Close Icon -->
            <div class="flex justify-between items-center mb-4">
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-white">Share this Post</h2>
                <button @click="closeModal" class="text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 transition">
                    <Icon name="mdi:close" class="h-6 w-6" />
                </button>
            </div>
            <p class="text-gray-500 dark:text-gray-300 mb-6">{{ title }}</p>

            <div class="flex items-center space-x-2 mb-4">
                <button @click="scroll('left')" :disabled="isFirstTab"
                    class="rounded-full transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 p-2 bg-emerald-500 text-white rounded-full shadow-lg transition duration-300 hover:bg-gray-200 hover:text-blue-700 disabled:bg-gray-100 disabled:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-emerald-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 5l-7 7 7 7" />
                    </svg>
                </button>

                <div ref="scrollContainer" class="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
                    <div v-for="platform in platforms" :key="platform.name" @click="share(platform.key)"
                        class="flex flex-col items-center cursor-pointer hover:text-emerald-600 dark:hover:text-emerald-400 min-w-[80px]">
                        <Icon :name="platform.icon" class="text-4xl mb-2" :style="{ color: platform.color }" />
                        <span class="text-sm text-gray-900 dark:text-gray-300">{{ platform.name }}</span>
                    </div>
                </div>

                <button @click="scroll('right')" :disabled="isLastTab"
                    class="rounded-full transition-transform transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed">
                    <svg xmlns="http://www.w3.org/2000/svg"
                        class="h-10 w-10 p-2 bg-emerald-500 text-white rounded-full shadow-lg transition duration-300 hover:bg-gray-200 hover:text-blue-700 disabled:bg-gray-100 disabled:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-emerald-400"
                        fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>

            <!-- Copy URL Section -->
            <div class="flex items-center bg-gray-100 dark:bg-gray-700 rounded-lg px-4 py-2 mt-8">
                <span class="flex-grow text-gray-800 dark:text-gray-300 truncate">
                    {{ shareUrl }}
                </span>
                <button @click="copyToClipboard" class="ml-4 bg-emerald-500 text-white py-1 px-3 rounded-md hover:bg-emerald-600">
                    Copy
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true,
    },
    platforms: {
        type: Array,
        required: true,
    },
    show: {
        type: Boolean,
        required: true,
    },
    closeModal: {
        type: Function,
        required: true,
    },
});

const scrollContainer = ref(null);
const isFirstTab = ref(true);
const isLastTab = ref(false);

const share = (platform) => {
    const url = window.location.href;
    const text = props.title;
    let shareUrl = '';

    switch (platform) {
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(text)}`;
            break;
        case 'telegram':
            shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
            break;
        case 'whatsapp':
            shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(text + ' ' + url)}`;
            break;
        case 'pinterest':
            shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(text)}`;
            break;
        case 'reddit':
            shareUrl = `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;
            break;
        case 'email':
            shareUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=&su=${encodeURIComponent(text)}&body=${encodeURIComponent(url)}`;
            break;
        default:
            console.warn(`No share URL for platform: ${platform}`);
    }

    if (shareUrl) {
        window.open(shareUrl, '_blank', 'noopener,noreferrer');
    }
};

const scroll = (direction) => {
    const container = scrollContainer.value;
    const scrollAmount = 200;

    if (direction === 'left') {
        container.scrollLeft -= scrollAmount;
    } else if (direction === 'right') {
        container.scrollLeft += scrollAmount;
    }
    updateScrollState();
};

const updateScrollState = () => {
    const container = scrollContainer.value;
    if (container) {
        isFirstTab.value = container.scrollLeft === 0;
        isLastTab.value = container.scrollWidth - container.scrollLeft === container.clientWidth;
    }
};

const shareUrl = window.location.href; // Gets the current page URL

const copyToClipboard = () => {
    if (shareUrl) {
        navigator.clipboard.writeText(shareUrl)
            .then(() => {
                console.log('Text copied to clipboard');
                // Optionally, show a message to the user here
            })
            .catch((err) => {
                console.error('Failed to copy text: ', err);
            });
    } else {
        console.error('No text to copy');
    }
};

</script>

<style scoped>
.scrollbar-hide {
    -ms-overflow-style: none;
    scrollbar-width: none;
}

.scrollbar-hide::-webkit-scrollbar {
    display: none;
}
</style>