<template>
    <section class="copyright-page py-12 px-4 md:px-8 bg-gray-50 dark:bg-slate-900 transition-all">
        <div class="container mx-auto space-y-12">

            <!-- Page Title -->
            <div class="text-center space-y-6">
                <h1 class="text-4xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Copyright & Legal Notice" : "រក្សាសិទ្ធិ និងសេចក្តីជូនដំណឹងផ្លូវច្បាប់" }}</h1>
                <p class="text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
                    {{ $i18n.locale === "en" ? "Understand the copyright terms, intellectual property rights, and usage policies for content on this website." : "យល់ដឹងពីលក្ខខណ្ឌនៃការរក្សាសិទ្ធិ សិទ្ធិបញ្ញា និងគោលការណ៍ប្រើប្រាស់សម្រាប់មាតិកានៅលើគេហទំព័រនេះ។" }}
                </p>
            </div>

            <!-- Ownership Section -->
            <div class="ownership space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Ownership of Content" : "កម្មសិទ្ធិមាតិកា" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "All content on this website, including text, graphics, images, and code, is owned by Your Name or Website Name unless otherwise noted. Unauthorized reproduction, distribution, or modification of content is prohibited." : "មាតិកាទាំងអស់នៅលើគេហទំព័រនេះ រួមមានអត្ថបទ ក្រាហ្វិក រូបភាព និងកូដ គឺជាកម្មសិទ្ធិរបស់ឈ្មោះអ្នកឬឈ្មោះគេហទំព័ររបស់អ្នក លុះត្រាតែមានកំណត់បន្ថែម។ ការចម្លងចែកចាយ ឬកែប្រែមាតិកាដោយគ្មានការអនុញ្ញាតត្រូវបានហាមឃាត់។" }}
                </p>
            </div>

            <!-- Intellectual Property Rights -->
            <div class="intellectual-property space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Intellectual Property Rights" : "សិទ្ធិបញ្ញា" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "All trademarks, logos, and service marks displayed on this website are the property of their respective owners. Use of these marks without permission is strictly prohibited, except as expressly permitted by applicable laws." : "សញ្ញាផ្សាយ ស្លាក និងសញ្ញាសេវាកម្មទាំងអស់ដែលបង្ហាញនៅលើគេហទំព័រនេះ គឺជាកម្មសិទ្ធិរបស់ម្ចាស់សញ្ញានោះ។ ការប្រើប្រាស់សញ្ញាទាំងនេះដោយគ្មានការអនុញ្ញាតត្រូវបានហាមឃាត់ជាខ្លាំង លើកលែងតែបានអនុញ្ញាតដោយច្បាប់។" }}
                </p>
            </div>

            <!-- Permitted Usage -->
            <div class="usage space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Permitted Usage" : "ការប្រើប្រាស់ដែលអនុញ្ញាត" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "Visitors may view, download, and print materials for personal, non-commercial use. For educational or non-commercial purposes, contact us to request permission." : "ភ្ញៀវអាចមើល ទាញយក និងបោះពុម្ពឯកសារសម្រាប់ប្រើប្រាស់ផ្ទាល់ខ្លួន ដែលមិនមានលក់ជាសាច់ប្រាក់។ សម្រាប់គោលបំណងអប់រំ ឬមិនមែនពាណិជ្ជកម្ម សូមទាក់ទងមកយើងដើម្បីស្នើសុំការអនុញ្ញាត។" }}
                </p>
            </div>

            <!-- Limitations on Usage -->
            <div class="limitations space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Limitations on Use" : "ការកំណត់ច្បាប់ប្រើប្រាស់" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "Redistribution, modification, or sale of any content on this site without permission is strictly prohibited. Unauthorized use may result in legal action." : "ការចែកចាយ ការកែប្រែ ឬការលក់មាតិកាណាមួយនៅលើគេហទំព័រនេះដោយគ្មានការអនុញ្ញាតត្រូវបានហាមឃាត់។ ការប្រើប្រាស់ដោយគ្មានការអនុញ្ញាតអាចនាំឱ្យមានការធ្វើសកម្មភាពផ្លូវច្បាប់។" }}
                </p>
            </div>

            <!-- User-Generated Content -->
            <div class="user-generated space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "User-Generated Content" : "មាតិកាដែលបង្កើតដោយអ្នកប្រើប្រាស់" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "Any content submitted by users, such as comments or feedback, becomes part of this website’s content. By submitting content, you grant us the right to use, modify, and publish it." : "មាតិកាណាមួយដែលអ្នកប្រើប្រាស់ដាក់ស្នើ ឧទាហរណ៍ មតិយោបល់ ឬមតិវិចារណ៍ នឹងក្លាយជាផ្នែកមួយនៃមាតិកាគេហទំព័រនេះ។ ដោយការដាក់ស្នើមាតិកា អ្នកបានផ្តល់សិទ្ធិយើងក្នុងការប្រើប្រាស់ កែប្រែ និងបោះពុម្ពផ្សាយវា។" }}
                </p>
            </div>

            <!-- External Links -->
            <div class="external-links space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "External Links" : "តំណភ្ជាប់ខាងក្រៅ" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "This site may include links to external websites for reference or convenience. We are not responsible for the content or privacy practices of these external sites and recommend reviewing their policies." : "គេហទំព័រនេះអាចរួមបញ្ចូលនូវតំណភ្ជាប់ទៅកាន់គេហទំព័រផ្សេងៗសម្រាប់គោលបំណងយោង ឬសម្រួលភាពងាយស្រួល។ យើងមិនទទួលខុសត្រូវចំពោះមាតិកា ឬការអនុវត្តឯកជនភាពរបស់គេហទំព័រខាងក្រៅទាំងនេះ ហើយយើងសូមណែនាំឱ្យពិនិត្យយកគោលការណ៍របស់ពួកគេ។" }}
                </p>
            </div>

            <!-- DMCA Policy -->
            <div class="dmca space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Digital Millennium Copyright Act (DMCA)" : "ច្បាប់ស្តីពីការពារសិទ្ធិអាជីវកម្មអេឡិចត្រូនិច (DMCA)" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "We respect intellectual property rights and comply with the DMCA. If you believe any content on this site infringes your copyright, please contact us with details so we can take appropriate action." : "យើងគោរពសិទ្ធិបញ្ញា ហើយអនុវត្តតាមច្បាប់ DMCA។ ប្រសិនបើអ្នកជឿថាមាតិកាណាមួយនៅលើគេហទំព័រនេះរំលោភសិទ្ធិអ្នក សូមទាក់ទងមកយើងជាមួយព័ត៌មានលម្អិត ដើម្បីឱ្យយើងអាចធ្វើសកម្មភាពសមស្រប។" }}
                </p>
            </div>

            <!-- Disclaimer Section -->
            <div class="disclaimer space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Disclaimer" : "ការបដិសេធ" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "While we strive to ensure accuracy, we cannot guarantee the content is free of errors or omissions.  This site disclaims liability for any inaccuracies or actions taken based on site content." : "ខណៈពេលដែលយើងព្យាយាមធានានូវភាពត្រឹមត្រូវ យើងមិនអាចធានាថាខ្លឹមសារនោះមិនមានកំហុស ឬការខកខានឡើយ។ គេហទំព័រនេះបដិសេធការទទួលខុសត្រូវចំពោះភាពមិនត្រឹមត្រូវ ឬសកម្មភាពដែលបានធ្វើឡើងដោយផ្អែកលើខ្លឹមសារគេហទំព័រ។" }}
                </p>
            </div>

            <!-- Changes to This Policy -->
            <div class="policy-changes space-y-6">
                <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Changes to This Policy" : "ការផ្លាស់ប្តូរចំពោះគោលការណ៍នេះ" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "We reserve the right to update this copyright policy at any time. Please review this page periodically for updates." : "យើងរក្សាសិទ្ធិដើម្បីធ្វើបច្ចុប្បន្នភាពគោលការណ៍រក្សាសិទ្ធិនេះនៅពេលណាក៏បាន។ សូមពិនិត្យមើលទំព័រនេះ។ ជាទៀងទាត់សម្រាប់ការធ្វើបច្ចុប្បន្នភាព។" }}
                </p>
            </div>

            <!-- Contact for Permissions -->
            <div class="permissions text-center space-y-4">
                <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">{{ $i18n.locale === "en" ? "Contact for Permissions" : "ទំនាក់ទំនងសម្រាប់ការអនុញ្ញាត" }}</h2>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                    {{ $i18n.locale === "en" ? "For questions or permission requests, please reach out to us through the provided contact details." : "សម្រាប់សំណួរ ឬសំណើសុំការអនុញ្ញាត សូមទាក់ទងមកយើងខ្ញុំតាមរយៈព័ត៌មានលម្អិតទំនាក់ទំនងដែលបានផ្តល់។" }}
                </p>
                <p class="text-lg text-blue-600 dark:text-blue-400">
                    <a href="mailto:your-email@example.com" class="hover:underline">Contact Us via Email</a>
                </p>
            </div>

        </div>
    </section>
</template>

<script>
export default {
    name: 'Copyright'
}
</script>

<style scoped>
.ownership,
.intellectual-property,
.usage,
.limitations,
.user-generated,
.external-links,
.dmca,
.disclaimer,
.policy-changes {
    border-left: 4px solid #10b981;
    padding-left: 1rem;
}
</style>