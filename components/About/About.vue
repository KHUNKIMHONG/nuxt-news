<template>
  <section class="py-12 px-4 md:px-8 bg-gray-50 dark:bg-slate-900 transition-all">
    <div class="container mx-auto flex flex-col lg:flex-row lg:space-x-8">

      <!-- Profile Section -->
      <div class="w-full lg:w-1/4">
        <div class="bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 rounded-lg text-center p-6 space-y-6">
          <img src="/images/own-photo.jpg" alt="Profile Picture of Khun Kimhong"
            class="w-32 h-32 rounded-full border-2 border-emerald-700 mx-auto object-cover shadow-lg">
          <h1 class="text-3xl md:text-4xl font-semibold text-gray-900 dark:text-gray-100 leading-tight">
            {{ $i18n.locale === "en" ? "Khun Kimhong" : "ឃុន គឹមហុង" }}
          </h1>
          <p class="text-base md:text-lg text-gray-800 dark:text-gray-300 max-w-xs mx-auto">
            {{ $i18n.locale === "en"
              ? "Software Engineering"
              : "Software Engineering"
          }}
          </p>

          <!-- Social Media Icons -->
          <div class="flex justify-center space-x-4 mt-4">
            <!-- Facebook -->
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Icon name="mdi:facebook" class="h-6 w-6 text-white hover:text-blue-600" />
            </a>
            <!-- Telegram -->
            <a href="https://telegram.org" target="_blank" aria-label="Telegram">
              <Icon name="mdi:telegram" class="h-6 w-6 text-white hover:text-blue-500" />
            </a>
            <!-- Gmail -->
            <a href="mailto:khunkimhong039@gmail.com" aria-label="Gmail">
              <Icon name="mdi:email" class="h-6 w-6 text-white hover:text-red-600" />
            </a>
          </div>
        </div>
      </div>

      <!-- Main Content Section -->
      <div class="w-full lg:w-3/4 space-y-12">
        <!-- About Section -->
        <div class="space-y-4">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {{ $i18n.locale === "en" ? "About Me" : "អំពីខ្ញុំ" }}
          </h2>
          <p class="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            {{ $i18n.locale === "en"
              ? "Welcome! Here, I’m a recent Software Engineering graduate from ITC Cambodia with a passion for learning and building meaningful technology. I share my journey in coding, artificial intelligence, and community-driven learning. My goal is to make quality resources and insights accessible to anyone eager to learn and innovate."
              : "សូមស្វាគមន៍! នៅទីនេះ ខ្ញុំ​ជា​និស្សិត​បញ្ចប់​ការ​សិក្សា​ផ្នែក Software Engineering ​ពី ITC Cambodia ដែល​មាន​ចំណង់​ចំណូល​ចិត្ត​ក្នុង​ការ​សិក្សា និង​ការ​បង្កើត​បច្ចេកវិទ្យា​ដ៏​មាន​អត្ថន័យ។ ខ្ញុំចែករំលែកដំណើររបស់ខ្ញុំក្នុងការសរសេរកូដ បញ្ញាសិប្បនិម្មិត និងការរៀនសូត្រដែលជំរុញដោយសហគមន៍។ គោលដៅរបស់ខ្ញុំគឺធ្វើឱ្យធនធាន និងការយល់ដឹងប្រកបដោយគុណភាពអាចចូលប្រើបានសម្រាប់អ្នកគ្រប់គ្នាដែលចង់រៀន និងច្នៃប្រឌិត។"
            }}
          </p>
        </div>

        <!-- Timeline Section -->
        <div class="space-y-4">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {{ $i18n.locale === "en" ? "Journey & Milestones" : "ដំណើរ និងសមិទ្ធផល" }}
          </h2>
          <div class="space-y-8">
            <!-- Timeline Item -->
            <div class="timeline-item flex items-start space-x-4">
              <div class="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold">
                1
              </div>
              <div>
                <h3 class="text-lg md:text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {{ $i18n.locale === "en" ? "2023-2024 - Graduated with a Software Engineering Degree" : "២០២៣-២០២៤ - បានបញ្ចប់វិស្វកម្មទន់" }}
                </h3>
                <p class="text-base md:text-lg text-gray-800 dark:text-gray-300">
                  {{ $i18n.locale === "en"
                    ? "Completed a 5-year program in Software Engineering at ITC Cambodia, specializing in web development and AI-driven applications."
                    : "បានបញ្ចប់ការសិក្សារយៈពេល ៥ ឆ្នាំក្នុងផ្នែកវិស្វកម្មទន់នៅ ITC កម្ពុជា ដែលមានឯកទេសក្នុងការអភិវឌ្ឍន៍វែប និងកម្មវិធីជំនួយដោយ AI។"
                  }}
                </p>
              </div>
            </div>

            <!-- Timeline Item 2 -->
            <div class="timeline-item flex items-start space-x-4">
              <div class="w-8 h-8 rounded-full bg-emerald-600 flex items-center justify-center text-white">2</div>
              <div>
                <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-100">
                  {{ $i18n.locale === "en" ? "2024 - Launched My Personal Website" : "២០២៤ - បើកគេហទំព័ររបស់ខ្ញុំ" }}
                </h3>
                <p class="text-lg text-gray-700 dark:text-gray-300">
                  {{ $i18n.locale === "en"
                    ? "Created this platform to share coding resources, AI tutorials, and practical guides to support developers worldwide."
                    : "បានបង្កើតវេទិកានេះដើម្បីចែករំលែកធនធានកូដ ការបង្រៀន AI និងមគ្គុទេសក៍អនុវត្ត ដើម្បីគាំទ្រអ្នកអភិវឌ្ឍទូទាំងពិភពលោក។"
                }}
                </p>
              </div>
            </div>

            <!-- Add more timeline items as needed -->

          </div>
        </div>

        <!-- Mission Section -->
        <div class="space-y-4">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {{ $i18n.locale === "en" ? "My Mission" : "បេសកកម្មរបស់ខ្ញុំ" }}
          </h2>
          <p class="text-base md:text-lg text-gray-800 dark:text-gray-300 leading-relaxed">
            {{ $i18n.locale === "en"
              ? "I believe in the power of open knowledge and accessible education. This website was designed to provide both technical insights and practical resources to anyone looking to advance in tech."
              : "ខ្ញុំជឿជាក់លើអំណាចនៃចំណេះដឹងនិងការអប់រំសាធារណៈ។ វេទិកានេះត្រូវបានរចនាឡើង ដើម្បីផ្តល់ទាំងចំណេះដឹងបច្ចេកទេស និងធនធានអនុវត្តន៍ដល់អ្នកដែលចង់អភិវឌ្ឍខ្លួនឯងនៅក្នុងវិស័យបច្ចេកវិទ្យា។"
            }}
          </p>
        </div>

        <!-- Contact Section -->
        <div class="space-y-4">
          <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-gray-100">
            {{ $i18n.locale === "en" ? "Connect with Me" : "ទាក់ទងមកខ្ញុំ" }}
          </h2>
          <ul class="flex justify-center space-x-6">
            <li>
              <a href="mailto:your-email@example.com" class="text-blue-600 dark:text-blue-400 hover:underline">
                Email
              </a>
            </li>
            <li>
              <a href="https://linkedin.com/in/yourprofile" class="text-blue-600 dark:text-blue-400 hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/yourgithub" class="text-blue-600 dark:text-blue-400 hover:underline">
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.about-page {
  transition: background-color 0.3s;
}

.timeline-container {
  position: relative;
}

.timeline-container::before {
  content: '';
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  width: 2px;
  background-color: #cbd5e1;
}

.timeline-item {
  position: relative;
  padding-left: 2.5rem;
}
</style>
