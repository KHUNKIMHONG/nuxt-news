import Alpine from 'alpinejs'

export default defineNuxtPlugin(() => {
  window.Alpine = Alpine
  Alpine.start()
})


