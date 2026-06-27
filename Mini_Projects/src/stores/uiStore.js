import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUIStore = defineStore('ui', () => {
  const selectedMovie = ref(null)

  const isModalOpen = computed(() => selectedMovie.value !== null)

  function openModal(movie) { selectedMovie.value = movie }
  function closeModal()     { selectedMovie.value = null  }

  return { selectedMovie, isModalOpen, openModal, closeModal }
})