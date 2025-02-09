<template>
    <section
      class="guidelines-page py-16 px-6 md:px-12 lg:px-20 bg-gray-50 dark:bg-slate-900 transition-all"
    >
      <div class="container mx-auto space-y-16">
        <!-- Header Section -->
        <div class="header text-center space-y-4">
          <h1 class="text-5xl font-bold text-gray-900 dark:text-gray-100">
            {{
              $i18n.locale === "en" ? "Tola Post Guidelines" : "ទិសដៅនៃ Tola Post"
            }}
          </h1>
          <p class="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            {{
              $i18n.locale === "en"
                ? "A guide to ensure that Tola Post remains a positive, valuable resource for everyone."
                : "ឯកសារណែនាំដើម្បីធានាថា Tola Post គឺជាធនធានប្រកបដោយវិជ្ជមាន និងមានតម្លៃសម្រាប់គ្រប់គ្នា។"
            }}
          </p>
        </div>
  
        <!-- Purpose Section -->
        <div
          class="purpose bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 space-y-6"
        >
          <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {{
              $i18n.locale === "en"
                ? "Purpose of Tola Post"
                : "គោលបំណងនៃ Tola Post"
            }}
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            {{
              $i18n.locale === "en"
                ? "Tola Post is a platform for sharing knowledge, resources, and inspiration. It serves as a space for meaningful content that uplifts the community and encourages learning."
                : "Tola Post គឺជាវេទិកាសម្រាប់ចែករំលែកចំណេះដឹង ធនធាន និងប្រភពប្រកបដោយការបំផុសគំនិត។ វាមានតួនាទីជាកន្លែងសម្រាប់មាតិកាមានន័យដែលលើកស្ទួយសហគមន៍ និងលើកទឹកចិត្តឱ្យមានការរៀនសូត្រ។"
            }}
          </p>
        </div>
  
        <!-- Posting Guidelines Section -->
        <div class="guidelines space-y-10">
          <h2
            class="text-3xl font-semibold text-gray-900 dark:text-gray-100 text-center"
          >
            {{
              $i18n.locale === "en"
                ? "Posting Guidelines"
                : "ទិសដៅសម្រាប់ការប្រកាស"
            }}
          </h2>
  
          <!-- Guideline Item -->
          <div
            v-for="(guideline, index) in guidelines"
            :key="index"
            class="guideline-item flex space-x-6 items-start bg-white dark:bg-slate-800 shadow-lg rounded-lg p-6"
          >
            <div
              class="flex-shrink-0 w-12 h-12 rounded-full bg-emerald-600 flex items-center justify-center text-white font-semibold text-lg"
            >
              {{ index + 1 }}
            </div>
            <div>
              <h3 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
                {{
                  $i18n.locale === "en" ? guideline.title.en : guideline.title.kh
                }}
              </h3>
              <p class="text-lg text-gray-700 dark:text-gray-300">
                {{
                  $i18n.locale === "en"
                    ? guideline.content.en
                    : guideline.content.kh
                }}
              </p>
            </div>
          </div>
        </div>
  
        <!-- New Sections Added -->
        <div class="new-sections space-y-10">
          <!-- Content Moderation Section -->
          <div
            class="moderation bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 space-y-6"
          >
            <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {{
                $i18n.locale === "en"
                  ? "Content Moderation"
                  : "ការត្រួតពិនិត្យមាតិកា"
              }}
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300">
              {{
                $i18n.locale === "en"
                  ? "Our moderation team ensures that all posts adhere to our guidelines and that the platform remains a safe space for everyone."
                  : "ក្រុមការងារត្រួតពិនិត្យរបស់យើងធានាថាការបង្ហោះទាំងអស់បានអនុវត្តតាមទិសដៅរបស់យើង និងធានាថាវេទិកានៅតែជាកន្លែងសុវត្ថិភាពសម្រាប់មនុស្សគ្រប់គ្នា។"
              }}
            </p>
          </div>
  
          <!-- Community Engagement Section -->
          <div
            class="engagement bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 space-y-6"
          >
            <h2 class="text-3xl font-semibold text-gray-900 dark:text-gray-100">
              {{
                $i18n.locale === "en"
                  ? "Community Engagement"
                  : "ការចូលរួមសហគមន៍"
              }}
            </h2>
            <p class="text-lg text-gray-700 dark:text-gray-300">
              {{
                $i18n.locale === "en"
                  ? "Participate in community discussions, provide feedback, and contribute to the growth of Tola Post."
                  : "ចូលរួមក្នុងការពិភាក្សារបស់សហគមន៍ ផ្តល់មតិគាំទ្រ និងចូលរួមក្នុងការលូតលាស់នៃ Tola Post។"
              }}
            </p>
          </div>
        </div>
  
        <!-- Contact Section -->
        <div
          class="contact bg-white dark:bg-slate-800 shadow-lg rounded-lg p-8 text-center space-y-4"
        >
          <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100">
            {{ $i18n.locale === "en" ? "Need Help?" : "ត្រូវការជំនួយ?" }}
          </h2>
          <p class="text-lg text-gray-700 dark:text-gray-300">
            {{
              $i18n.locale === "en"
                ? "If you have any questions or need further guidance, reach out to our team."
                : "ប្រសិនបើអ្នកមានសំណួរឬត្រូវការបន្ថែម សូមទាក់ទងក្រុមការងាររបស់យើង។"
            }}
          </p>
          <a
            href="mailto:support@example.com"
            class="text-blue-600 dark:text-blue-400 hover:underline text-lg font-medium"
          >
            {{ $i18n.locale === "en" ? "Contact Us" : "ទាក់ទងមកយើង" }}
          </a>
        </div>
      </div>
    </section>
</template>
  
  
<script>
export default {
  data() {
    return {
      guidelines: [
        {
          title: { en: "Be Respectful", kh: "មានការគោរព" },
          content: {
            en: "Ensure that all interactions are respectful and considerate. Offensive language and behavior are not allowed.",
            kh: "ធានាថាប្រតិបត្តិការទាំងអស់គឺមានការគោរព និងអនុវត្តដោយការគិតល្អ។ មិនអនុញ្ញាតឱ្យមានភាសាឬការប្រព្រឹត្តន៍មិនសមរម្យទេ។",
          },
        },
        {
          title: { en: "Share Quality Content", kh: "ចែករំលែកមាតិកាគុណភាព" },
          content: {
            en: "All posts should be informative, well-structured, and add value to the community.",
            kh: "ការបង្ហោះទាំងអស់គួរតែមានភាពច្បាស់លាស់ សម្បូរបែប និងមានតម្លៃដល់សហគមន៍។",
          },
        },
        {
          title: { en: "Keep it Relevant", kh: "រក្សាប្រធានបទឱ្យពាក់ព័ន្ធ" },
          content: {
            en: "Make sure your content aligns with the goals of Tola Post and is relevant to the community’s interests.",
            kh: "ធានាថាមាតិការបស់អ្នកស្របទៅនឹងគោលបំណងនៃ Tola Post និងជាមួយចំណាប់អារម្មណ៍របស់សហគមន៍។",
          },
        },
      ],
    };
  },
  head() {
    return {
      title: "Tola Post Guidelines | A Professional Resource Guide",
      meta: [
        {
          name: "description",
          content:
            "Guidelines for contributing to Tola Post, ensuring valuable and respectful content for the community.",
        },
      ],
    };
  },
};
</script>
  
  <style scoped>
.guidelines-page .container {
  max-width: 800px;
}
</style>
  