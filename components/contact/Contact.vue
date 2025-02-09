<template>
    <section class="py-16 bg-gray-50 dark:bg-slate-900 transition-all">
        <div class="container mx-auto">
            <div class="flex justify-center items-center">
                <div> <!-- Alert Message Form -->
                    <transition name="fade">
                        <AlertMessage v-if="showSuccess" @close="showSuccess = false"
                            :message="'Your form has been submitted successfully!'" :type="'success'"
                            :title="'Success!'" />
                    </transition>
                </div>
                <!-- Page Header -->
                <div class="flex flex-col md:flex-row overflow-hidden mx-auto">
                    <!-- Left Side Image Section -->
                    <div class="w-full md:w-3/5 relative max-h-[50rem] overflow-hidden">
                        <img src="/images/contact.jpg" alt="Contact Background"
                            class="w-full h-full object-cover md:rounded-lg" />
                    </div>

                    <!-- Contact Form Section -->
                    <div
                        class="w-full bg-slate-100 dark:bg-slate-800 md:w-2/5 p-6 flex flex-col shadow-lg rounded-lg md:rounded-lg md:m-20 transition-colors">
                        <!-- Header Section -->
                        <div class="bg-emerald-500 dark:bg-emerald-700 rounded-lg px-6 py-4">
                            <h2 class="text-2xl font-bold text-white">{{ $t('contact_us') }}</h2>
                        </div>

                        <div class="p-6 flex-1">
                            <p class="text-gray-700 dark:text-gray-300 mb-4">
                                For further questions, including partnership opportunities, please email
                                <a href="mailto:hello@creative-tim.com"
                                    class="text-blue-500 dark:text-blue-400">hello@creative-tim.com</a>
                                or contact us using our contact form.
                            </p>

                            <!-- Contact Form -->
                            <form @submit.prevent="submitForm" class="space-y-1">
                                <!-- Form Fields -->
                                <div v-for="(field, index) in localizedContacts" :key="index" class="space-y-2">
                                    <label :for="field.title"
                                        class="block text-gray-700 dark:text-gray-300 font-medium">
                                        {{ field.title }}
                                    </label>

                                    <!-- Conditional rendering for textarea on "Message" or "សារ" field -->
                                    <div v-if="field.title === 'Message' || field.title === 'សារ'">
                                        <textarea :id="field.title" v-model="formData[field.title]"
                                            :placeholder="field.description"
                                            class="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-700 transition ease-in-out duration-150"
                                            :class="{ 'border-red-500 dark:border-red-600 focus:ring-red-500': errors[field.title] }"
                                            rows="4"></textarea>
                                    </div>

                                    <!-- Input field for other fields -->
                                    <div v-else>
                                        <input :id="field.title" v-model="formData[field.title]"
                                            :placeholder="field.description"
                                            class="w-full px-4 py-2 bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:focus:ring-emerald-700 transition ease-in-out duration-150"
                                            :class="{ 'border-red-500 dark:border-red-600 focus:ring-red-500': errors[field.title] }" />
                                    </div>

                                    <!-- Error message -->
                                    <p v-if="errors[field.title]" class="text-red-500 dark:text-red-400 text-sm">
                                        {{ errors[field.title] }}
                                    </p>
                                </div>

                                <!-- Submit Button -->
                                <button type="submit"
                                    class="bg-emerald-500 dark:bg-emerald-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-green-600 dark:hover:bg-green-700 transition">
                                    {{ $t("submit") }}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { contacts } from "~/store/contact/contact";
import AlertMessage from "../AlertMessage/AlertMessage.vue";

export default {
    components: { AlertMessage },
    data() {
        return {
            contacts,
            formData: {
                Name: "",
                Email: "",
                Subject: "",
                Message: "",
            },
            errors: {},
            showSuccess: false,
        };
    },
    computed: {
        localizedContacts() {
            const lang = this.$i18n.locale;
            return this.contacts.map((item) => ({
                title: lang === "en" ? item.title_en : item.title_kh,
                description: lang === "en" ? item.description_en : item.description_kh,
                errorMessages: item.errorMessages,
            }));
        },
    },
    methods: {
        getErrorMessage(field, type) {
            const lang = this.$i18n.locale === "kh" ? "kh" : "en";
            return field.errorMessages[`${type}_${lang}`];
        },
        validateForm() {
            this.errors = {};
            for (const field of this.localizedContacts) {
                const fieldName = field.title;
                if (!this.formData[fieldName]) {
                    this.errors[fieldName] = this.getErrorMessage(field, "required");
                } else if (
                    fieldName === "Email" &&
                    !this.validEmail(this.formData.Email)
                ) {
                    this.errors.Email = this.getErrorMessage(field, "invalid");
                }
            }
            return Object.keys(this.errors).length === 0;
        },
        validEmail(email) {
            const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            return emailPattern.test(email);
        },
        submitForm() {
            if (this.validateForm()) {

                this.showSuccess = true;
                setTimeout(() => {
                    this.showSuccess = false;
                }, 3000); // Hide after 5 seconds

                // Clear form data
                this.formData = {
                    Name: "",
                    Email: "",
                    Subject: "",
                    Message: "",
                };

                // Clear errors
                this.errors = {};

            }
        },
    },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
