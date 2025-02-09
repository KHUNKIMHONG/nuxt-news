<template>
    <section class="py-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

                <!-- Feature Item -->
                <div v-for="(feature, index) in features" :key="index" class="space-y-4">
                    <!-- Icon Container -->
                    <div
                        class="h-12 w-12 mx-auto flex items-center justify-center bg-emerald-500 text-white rounded-lg shadow-lg">
                        <Icon :name="feature.icon" class="text-2xl" />
                    </div>

                    <!-- Title -->
                    <h3 class="text-xl font-semibold text-gray-800">
                        {{ feature.title }}
                    </h3>

                    <!-- Description -->
                    <p class="text-gray-600">
                        {{ feature.description }}
                    </p>
                </div>

            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            features: [
                {
                    title: "Detailed Documentation",
                    description: "The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.",
                    icon: "mdi:file-document" // Nuxt Icon for documentation
                },
                {
                    title: "Awesome Support",
                    description: "The time is now for it to be okay to be great. People in this world shun people for being great. I'm not trying, I'm not trying to do the best way.",
                    icon: "mdi:lifebuoy" // Nuxt Icon for support
                },
                {
                    title: "Styled Components",
                    description: "If you have the opportunity to play this game of life you need to appreciate every moment. A lot of people don’t appreciate the moment until it’s passed.",
                    icon: "mdi:layers" // Nuxt Icon for styled components
                }
            ]
        };
    }
};
</script>

<style scoped>
/* Optional custom styles */
</style>
  
