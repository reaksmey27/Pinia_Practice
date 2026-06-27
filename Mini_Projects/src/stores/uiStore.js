import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUIStore = defineStore('ui', () => {
  // state
  const selectedMovie = ref(null)

  // getters
  const isModalOpen = computed(() => selectedMovie.value !== null)

  // actions
  function openModal(movie) { selectedMovie.value = movie }
  function closeModal()     { selectedMovie.value = null  }

  return { selectedMovie, isModalOpen, openModal, closeModal }
})