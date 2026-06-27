import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useWatchlistStore = defineStore('watchlist', () => {
  // state
  const watchlistIds = ref([])

  // getters
  const watchlistCount = computed(() => 
    watchlistIds.value.length
  )

  const isInWatchlist = computed(() => (id) => {
    for (const watchId of watchlistIds.value) {
      if (watchId === id) 
        return true
    }
    return false
  })

  // actions
  function addToWatchlist(movieId) {
    if (!isInWatchlist.value(movieId)) 
      watchlistIds.value.push(movieId)
  }

  function removeFromWatchlist(movieId) {
    for (let i = 0; i < watchlistIds.value.length; i++) {
      if (watchlistIds.value[i] === movieId) {
        watchlistIds.value.splice(i, 1)
        return
      }
    }
  }

  function toggleWatchlist(movieId) {
    if (isInWatchlist.value(movieId)) 
      removeFromWatchlist(movieId)

    else 
      addToWatchlist(movieId)
  }

  function clearWatchlist() {
    watchlistIds.value = []
  }

  return {
    watchlistIds, watchlistCount, isInWatchlist,
    addToWatchlist, removeFromWatchlist, toggleWatchlist, clearWatchlist,
  }
})