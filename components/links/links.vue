<template>
  <div class="bg-white shadow-md overflow-hidden py-6">
    <div class="container mx-auto">
      <div
        class="relative overflow-x-auto hide-scrollbar"
        @mouseover="pauseScroll"
        @mouseleave="resumeScroll"
      >
        <div class="scrolling-logos flex whitespace-nowrap animate-scroll">
          <!-- Render the logos, skipping broken images -->
          <div
            v-for="(linkItem, index) in workingLinks"
            :key="index"
            class="p-4 flex-shrink-0 rounded-full transition-transform duration-300 hover:scale-105 relative group"
          >
            <a
              :href="linkItem.link"
              target="_blank"
              rel="noopener noreferrer"
              class="cursor-pointer"
            >
              <div class="relative">
                <img
                  :src="linkItem.imgSrc"
                  :alt="`Logo of ${linkItem.name}`"
                  class="w-28 h-auto rounded-full mx-8 opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
                <!-- Tooltip shown on hover, centered over the logo -->
                <div
                  class="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold bg-gray-800 bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {{ linkItem.name }}
                </div>
              </div>
            </a>
          </div>

          <!-- Duplicate logos for smooth scroll looping -->
          <div
            v-for="(linkItem, index) in workingLinks"
            :key="'duplicate-' + index"
            class="p-4 flex-shrink-0 transition-transform duration-300 hover:scale-105 relative group"
          >
            <a
              :href="linkItem.link"
              target="_blank"
              rel="noopener noreferrer"
              class="cursor-pointer"
            >
              <div class="relative">
                <img
                  :src="linkItem.imgSrc"
                  :alt="`Logo of ${linkItem.name}`"
                  class="w-28 h-auto rounded-full mx-8 opacity-80 transition-opacity duration-300 hover:opacity-100"
                />
                <!-- Tooltip shown on hover, centered over the logo -->
                <div
                  class="absolute inset-0 flex items-center justify-center text-white text-xs font-semibold bg-gray-800 bg-opacity-70 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  {{ linkItem.name }}
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script>
export default {
  name: "LinksSection",
  data() {
    return {
      links: [
        {
          name: "Chat gpt",
          imgSrc:
            "https://i.pinimg.com/enabled_lo/564x/08/ea/94/08ea94ca94a4b3a04037bdfc335ae00d.jpg",
          link: "https://chatgpt.com/",
        },
        {
          name: "Canva",
          imgSrc:
            "https://i.pinimg.com/564x/e3/14/97/e314970d7c83c1e6136fe9be309c1ec9.jpg",
          link: "https://www.canva.com/",
        },
        {
          name: "Character AI",
          imgSrc:
            "https://i.pinimg.com/564x/f8/93/8f/f8938fdca2f0ee0e14ff98ff30abaee0.jpg",
          link: "https://character.ai/",
        },
        {
          name: "Poe",
          imgSrc:
            "https://i.pinimg.com/564x/ee/8a/cb/ee8acb4cd6d52ed4025f1ab826e4cb6e.jpg",
          link: "https://poe.com/",
        },
        {
          name: "Leonardo AI",
          imgSrc: 
            "https://www.drupal.org/files/project-images/image_6.jpg",
          link: "https://leonardo.ai/",
        },
        {
          name: "Picsart AI Writer",
          imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvyuX1Sgd_gH5AGn3HQ-wkhCBq9MUwwkMwvA&s",
          link: "https://tools.picsart.com/text/ai-writer",
        },
        {
          name: "Lumen5",
          imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREdumwtXDWoAKUcB9oYmXg8cZabUo20M4Vlg&s",
          link: "https://lumen5.com/",
        },
        {
          name: "ClickUp",
          imgSrc:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbN5aDwO0pTnEVJlhQt9_ShUYXGVGjqwaI149dYPXfnGEBGEoRV4y0TOk_cHsmaF9cwBM&usqp=CAU",
          link: "https://clickup.com/",
        },
        {
          name: "Copilot in Bing",
          imgSrc:
            "https://i.pinimg.com/564x/98/a6/ee/98a6ee325d38b36b84aeec24530ab76e.jpg",
          link: "https://www.bing.com/chat",
        },
      ],
      workingLinks: [], // Array to hold successfully loaded images
    };
  },
  mounted() {
    // Check all links for valid images before rendering
    this.filterValidImages();
  },
  methods: {
    pauseScroll() {
      document.querySelector(".scrolling-logos").style.animationPlayState =
        "paused";
    },
    resumeScroll() {
      document.querySelector(".scrolling-logos").style.animationPlayState =
        "running";
    },
    filterValidImages() {
      // Check each image for successful loading
      this.links.forEach((linkItem) => {
        const img = new Image();
        img.src = linkItem.imgSrc;
        img.onload = () => {
          // If image loads successfully, add it to workingLinks
          this.workingLinks.push(linkItem);
        };
      });
    },
  },
};
</script>
  
<style scoped>
/* Hide scrollbar */
.hide-scrollbar::-webkit-scrollbar {
  display: none;
}

.hide-scrollbar {
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
}
.scrolling-logos {
  animation: scroll 50s linear infinite;
  will-change: transform;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
</style>
  
  