<template>
  <div class="flex items-center justify-center h-screen bg-emerald-600 dark:bg-gray-900">
    <div class="bg-white dark:bg-gray-800 shadow-lg p-8 rounded-lg text-center max-w-md w-full">
      <!-- Time Display -->
      <div class="text-6xl font-bold text-gray-800 dark:text-gray-200">
        {{ formattedTime }}
      </div>

      <!-- Date Display -->
      <div class="text-gray-600 dark:text-gray-400 text-xl mt-4">
        {{ localizedDate }}
      </div>

      <!-- Weather Information -->
      <div v-if="weather" class="mt-6">
        <div class="text-2xl font-medium text-gray-700 dark:text-gray-300">
          {{ weather.city }}
        </div>
        <div class="text-lg text-gray-500 dark:text-gray-400">
          {{ weather.temperature }}°C - {{ weather.description }}
        </div>
      </div>
      <div v-else class="text-red-500 mt-6">
        Unable to fetch weather data
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

// Reactive reference for the current time
const time = ref(new Date())
const weather = ref(null)

// Get the i18n instance
const { locale } = useI18n()

// Fetch weather data using Open-Meteo API
async function fetchWeather() {
  try {
    const position = await new Promise((resolve, reject) =>
      navigator.geolocation.getCurrentPosition(resolve, reject)
    )
    const lat = position.coords.latitude
    const lon = position.coords.longitude

    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
    )
    const data = await response.json()

    weather.value = {
      city: await fetchCityName(lat, lon),
      temperature: data.current_weather.temperature,
      description: 'Clear',
    }
  } catch (error) {
    weather.value = {
      city: 'Unknown Location',
      temperature: 'N/A',
      description: 'Clear',
    }
  }
}

// Fetch city name using reverse geocoding
async function fetchCityName(lat, lon) {
  try {
    const response = await fetch(
      `https://geocoding-api.open-meteo.com/v1/reverse?latitude=${lat}&longitude=${lon}&language=en`
    )
    const data = await response.json()
    return data?.results[0]?.name || 'Unknown Location'
  } catch {
    return 'Unknown Location'
  }
}

// Update the time every second
onMounted(() => {
  fetchWeather()
  setInterval(() => {
    time.value = new Date()
  }, 1000)
})

// Translation data
const translations = {
  days: {
    Monday: { en: 'Monday', kh: 'ថ្ងៃចន្ទ' },
    Tuesday: { en: 'Tuesday', kh: 'ថ្ងៃអង្គារ' },
    Wednesday: { en: 'Wednesday', kh: 'ថ្ងៃពុធ' },
    Thursday: { en: 'Thursday', kh: 'ថ្ងៃព្រហស្បតិ៍' },
    Friday: { en: 'Friday', kh: 'ថ្ងៃសុក្រ' },
    Saturday: { en: 'Saturday', kh: 'ថ្ងៃសៅរ៍' },
    Sunday: { en: 'Sunday', kh: 'ថ្ងៃអាទិត្យ' },
  },
  months: {
    January: { en: 'January', kh: 'មករា' },
    February: { en: 'February', kh: 'កុម្ភៈ' },
    March: { en: 'March', kh: 'មីនា' },
    April: { en: 'April', kh: 'មេសា' },
    May: { en: 'May', kh: 'ឧសភា' },
    June: { en: 'June', kh: 'មិថុនា' },
    July: { en: 'July', kh: 'កក្កដា' },
    August: { en: 'August', kh: 'សីហា' },
    September: { en: 'September', kh: 'កញ្ញា' },
    October: { en: 'October', kh: 'តុលា' },
    November: { en: 'November', kh: 'វិច្ឆិកា' },
    December: { en: 'December', kh: 'ធ្នូ' },
  },
  numbers: {
    0: { en: '0', kh: '០' },
    1: { en: '1', kh: '១' },
    2: { en: '2', kh: '២' },
    3: { en: '3', kh: '៣' },
    4: { en: '4', kh: '៤' },
    5: { en: '5', kh: '៥' },
    6: { en: '6', kh: '៦' },
    7: { en: '7', kh: '៧' },
    8: { en: '8', kh: '៨' },
    9: { en: '9', kh: '៩' },
  },
}

// Utility function to translate numbers
const translateNumber = (number, locale) =>
  number
    .toString()
    .split('')
    .map((digit) => translations.numbers[digit]?.[locale] || digit)
    .join('')

// Computed property: Formatted time
const formattedTime = computed(() => {
  const currentLocale = locale.value || 'kh'
  const timeString = time.value.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
  return currentLocale === 'kh' ? translateNumber(timeString, currentLocale) : timeString
})

// Computed property: Localized date
const localizedDate = computed(() => {
  const currentLocale = locale.value || 'kh'
  const dayName = time.value.toLocaleDateString('en-US', { weekday: 'long' })
  const monthName = time.value.toLocaleDateString('en-US', { month: 'long' })
  const day = time.value.getDate()
  const year = time.value.getFullYear()

  const translatedDay = translations.days[dayName]?.[currentLocale] || dayName
  const translatedMonth = translations.months[monthName]?.[currentLocale] || monthName

  return currentLocale === 'kh'
    ? `${translatedDay}, ${translateNumber(day, currentLocale)} ខែ${translatedMonth} ឆ្នាំ${translateNumber(year, currentLocale)}`
    : `${translatedDay}, ${translatedMonth} ${day}, ${year}`
})
</script>



  
  
  