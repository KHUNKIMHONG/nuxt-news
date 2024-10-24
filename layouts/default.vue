<template>
  <div>
    <Preloader v-if="isLoading" />
    <NuxtPage />
    <GoTop />
  </div>
</template>

<script>
    import { ref, onMounted } from 'vue';
    import Preloader from './Preloader'
    import GoTop from './GoTop'

    export default {
        components: { 
            Preloader,
            GoTop,
        },
        data() {
            return {
                isLoading: true
            }
        },
        mounted() {
            setTimeout(() => {
                this.isLoading = false
            }, 2000)
        }
    }
</script>