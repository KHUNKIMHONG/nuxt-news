<template>
  <section
    class="py-16 px-4 md:px-12 lg:px-24 bg-gray-50 dark:bg-slate-900 transition-all"
  >
    <div
      class="container mx-auto flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8"
    >
      <!-- Main Content Area -->
      <div v-if="codeList" class="w-full lg:w-3/4">
        <div
          class="bg-white dark:bg-slate-800 border-solid border-2 border-emerald-100 shadow-md rounded-lg overflow-hidden transition-transform duration-300"
        >
          <img
            :src="codeList.image"
            :alt="codeList.title[$i18n.locale]"
            class="w-full h-64 md:h-96 object-cover rounded-t-lg transition-transform duration-300 transform hover:scale-110"
            loading="lazy"
          />
          <div class="p-6">
            <h1
              class="text-1xl md:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100"
            >
              {{ codeList.title[$i18n.locale] }}
            </h1>
            <p class="text-gray-500 dark:text-gray-400 text-sm mb-4">
              {{ codeList.date }}
            </p>
            <span
              class="bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded mb-4 inline-block"
            >
              {{ codeList.category[$i18n.locale] }}
            </span>
            <p class="text-gray-600 dark:text-gray-300 mb-6">
              {{ codeList.description[$i18n.locale] }}
            </p>

            <!-- Flex container for Back to Codes and Share button -->
            <div class="flex justify-between items-center">
              <NuxtLink
                to="/codes"
                class="text-emerald-500 dark:text-emerald-400 hover:underline"
              >
                {{ $i18n.locale === "kh" ? "ត្រឡប់ទៅកូដ" : "Back to Codes" }}
              </NuxtLink>

              <button
                @click="openShareModal"
                class="py-2 px-4 bg-emerald-500 text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 rounded hover:bg-emerald-600 transition flex items-center"
              >
                <Icon name="mdi:share-variant" class="w-5 h-5 mr-2" />
                {{ $t("share") }}
              </button>
            </div>
          </div>
        </div>

        <!-- Navigation Links for Previous and Next Post -->
        <div class="mt-8 flex justify-between">
          <NuxtLink
            v-if="previousPost"
            :to="`/codes/${previousPost.id}`"
            class="flex items-center text-emerald-500 dark:text-emerald-400 hover:underline hover:text-yellow-500 dark:hover:text-yellow-400"
          >
            <img
              :src="previousPost.image"
              :alt="previousPost.title[$i18n.locale]"
              class="w-20 h-16 object-cover rounded mr-2 hover:scale-125"
            />
            &larr; {{ previousPost.title[$i18n.locale] }}
          </NuxtLink>
          <NuxtLink
            v-if="nextPost"
            :to="`/codes/${nextPost.id}`"
            class="flex items-center text-emerald-500 dark:text-emerald-400 hover:underline hover:text-yellow-500 dark:hover:text-yellow-400 ml-auto"
          >
            {{ nextPost.title[$i18n.locale] }} &rarr;
            <img
              :src="nextPost.image"
              :alt="nextPost.title[$i18n.locale]"
              class="w-20 h-16 object-cover rounded ml-2 hover:scale-125"
            />
          </NuxtLink>
        </div>
      </div>

      <!-- Share Modal -->
      <ShareModal
        :show="showShareModal"
        :title="codeList?.title[$i18n.locale]"
        :platforms="sharePlatforms"
        :closeModal="closeShareModal"
      />

      <!-- Sidebar -->
      <aside v-if="codeList" class="w-full lg:w-1/4">
        <div class="bg-white dark:bg-slate-800 border-solid border-2 border-emerald-100 p-6 mb-8 rounded-lg shadow">
          <h2
            class="text-xl font-semibold border-l-2 border-emerald-500 mb-4 pl-4 text-gray-900 dark:text-gray-100"
          >
            {{ $t("recent_posts") }}
          </h2>
          <ul>
            <li
              v-for="post in recentPosts"
              :key="post.id"
              class="mb-3 flex items-center"
            >
              <img
                :src="post.image"
                :alt="post.title[$i18n.locale]"
                class="w-20 h-16 object-cover rounded mr-3 hover:scale-125"
              />
              <NuxtLink
                :to="`/codes/${post.id}`"
                class="text-gray-900 dark:text-gray-100 hover:underline hover:text-yellow-500 dark:hover:text-yellow-400"
              >
                {{ post.title[$i18n.locale] }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </section>
</template>

<script setup="ts">
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
import { listCodes } from "~/store/code/listCode";
import ShareModal from "../ShareModal/ShareModal.vue";

// Props
const props = defineProps({
  codeList: {
    type: Object,
    required: true,
    default: () => ({}),
  },
  previousPost: Object,
  nextPost: Object,
  recentPosts: Array,
  categories: Array,
});

// Reactive references
const showShareModal = ref(false);

// List of share platforms
const sharePlatforms = [
  { key: "facebook", name: "Facebook", icon: "mdi:facebook", color: "#1877F2" }, // Facebook blue
  { key: "telegram", name: "Telegram", icon: "mdi:telegram", color: "#0088CC" }, // Telegram blue
  { key: "twitter", name: "Twitter", icon: "mdi:twitter", color: "#1DA1F2" }, // Twitter blue
  { key: "linkedin", name: "LinkedIn", icon: "mdi:linkedin", color: "#0A66C2" }, // LinkedIn blue
  { key: "whatsapp", name: "WhatsApp", icon: "mdi:whatsapp", color: "#25D366" }, // WhatsApp green
  {
    key: "pinterest",
    name: "Pinterest",
    icon: "mdi:pinterest",
    color: "#E60023",
  }, // Pinterest red
  { key: "reddit", name: "Reddit", icon: "mdi:reddit", color: "#FF4500" }, // Reddit orange
  { key: "email", name: "Email", icon: "mdi:email", color: "#D44638" }, // Email red
];

// Route and post management
const route = useRoute();
const currentPostId = Number(route.params.id);
const codes = ref(listCodes);

const getRecentPosts = () => {
  return codes.value.filter((post) => post.id !== currentPostId).slice(0, 5);
};

const recentPosts = computed(() => getRecentPosts());
const currentPost = computed(() =>
  codes.value.find((post) => post.id === currentPostId)
);
const previousPost = computed(() => {
  const currentIndex = codes.value.findIndex(
    (post) => post.id === currentPostId
  );
  return currentIndex > 0 ? codes.value[currentIndex - 1] : null;
});
const nextPost = computed(() => {
  const currentIndex = codes.value.findIndex(
    (post) => post.id === currentPostId
  );
  return currentIndex < codes.value.length - 1
    ? codes.value[currentIndex + 1]
    : null;
});

// Share modal controls
const openShareModal = () => {
  showShareModal.value = true;
};

const closeShareModal = () => {
  showShareModal.value = false;
};
</script>
