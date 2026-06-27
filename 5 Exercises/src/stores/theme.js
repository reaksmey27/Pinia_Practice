import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // state
  const darkMode = ref(false)

  // actions
  function toggleTheme() {
    darkMode.value = !darkMode.value
  }

  return { darkMode, toggleTheme }
})