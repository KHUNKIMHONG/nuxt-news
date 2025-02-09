<template>
  <div>
    <Preloader v-if="isLoading" />
    <NuxtPage />
    <GoTop />
    <CursorEffect />
  </div>
</template>

<script>
    import Preloader from './Preloader'
    import GoTop from './GoTop'
    import CursorEffect from '~/components/CursorEffect/CursorEffect.vue'


    export default {
        components: { 
            Preloader,
            GoTop,
            CursorEffect,
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