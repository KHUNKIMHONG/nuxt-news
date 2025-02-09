<template>
    <section class="contact-page py-16 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-slate-900 transition-colors duration-300">
        <div class="container mx-auto space-y-16">
            <!-- Header Section -->
            <div class="header text-center space-y-4">
                <h1 class="text-5xl font-bold text-gray-900 dark:text-gray-100 transition-colors">
                    {{ $t('contact.title') }}
                </h1>
                <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto transition-colors">
                    {{ $t('contact.subtitle') }}
                </p>
            </div>

            <!-- Contact Information Section -->
            <div class="contact-info grid grid-cols-1 md:grid-cols-3 gap-6">
                <div class="contact-card bg-white dark:bg-slate-800 shadow-lg rounded-lg p-6 text-center transition-colors">
                    <div class="icon bg-blue-500 dark:bg-blue-600 text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 transition-colors">
                        <Icon name="mdi:map-marker" class="h-6 w-6" />
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 transition-colors">
                        {{ $t('contact.addressTitle') }}
                    </h3>
                    <p class="text-lg text-gray-700 dark:text-gray-300 transition-colors">{{ $t('contact.address') }}</p>
                </div>
                <div class="contact-card bg-white dark:bg-slate-800 shadow-lg rounded-lg p-6 text-center transition-colors">
                    <div class="icon bg-green-500 dark:bg-green-600 text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 transition-colors">
                        <Icon name="mdi:email" class="h-6 w-6" />
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 transition-colors">
                        {{ $t('contact.emailTitle') }}
                    </h3>
                    <p class="text-lg text-gray-700 dark:text-gray-300 transition-colors">{{ $t('contact.email') }}</p>
                </div>
                <div class="contact-card bg-white dark:bg-slate-800 shadow-lg rounded-lg p-6 text-center transition-colors">
                    <div class="icon bg-red-500 dark:bg-red-600 text-white rounded-full w-16 h-16 mx-auto flex items-center justify-center mb-4 transition-colors">
                        <Icon name="mdi:phone" class="h-6 w-6" />
                    </div>
                    <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 transition-colors">
                        {{ $t('contact.phoneTitle') }}
                    </h3>
                    <p class="text-lg text-gray-700 dark:text-gray-300 transition-colors">{{ $t('contact.phone') }}</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    head() {
    return {
      title: "Get Inspired with Spooktacular Ideas",
    };
  },
};
</script>



