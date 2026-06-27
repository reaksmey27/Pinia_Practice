import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useWatchlistStore = defineStore('watchlist', () => {
  const watchlistIds = ref([])

  const watchlistCount = computed(() => watchlistIds.value.length)
  const isInWatchlist  = computed(() => (id) => watchlistIds.value.includes(id))

  function addToWatchlist(movieId) {
    if (!isInWatchlist.value(movieId)) watchlistIds.value.push(movieId)
  }

  function removeFromWatchlist(movieId) {
    watchlistIds.value = watchlistIds.value.filter((id) => id !== movieId)
  }

  function toggleWatchlist(movieId) {
    isInWatchlist.value(movieId) ? removeFromWatchlist(movieId) : addToWatchlist(movieId)
  }

  function clearWatchlist() { watchlistIds.value = [] }

  return { watchlistIds, watchlistCount, isInWatchlist, addToWatchlist, removeFromWatchlist, toggleWatchlist, clearWatchlist }
})