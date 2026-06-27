<template>
  <div class="space-y-6">

    <!-- header -->
    <div class="flex items-center justify-between">
      <div>
        <h2 class="text-white text-xl font-bold">My Watchlist</h2>
        <p class="text-zinc-400 text-sm mt-0.5">
          {{ watchlist.watchlistCount }} {{ watchlist.watchlistCount === 1 ? 'movie' : 'movies' }} saved
        </p>
      </div>

      <!-- clear all button -->
      <button
        v-if="watchlist.watchlistCount"
        class="text-sm text-zinc-400 hover:text-red-400 transition-colors"
        @click="watchlist.clearWatchlist()"
      >
        Clear all
      </button>
    </div>

    <!-- movie grid -->
    <div
      v-if="watchlistMovies.length"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
    >
      <MovieCard
        v-for="movie in watchlistMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>

    <!-- empty state -->
    <div v-else class="flex flex-col items-center justify-center py-24 text-center">
      <span class="text-5xl mb-4">☆</span>
      <h3 class="text-white text-lg font-semibold">Your watchlist is empty</h3>
      <p class="text-zinc-400 text-sm mt-1">Browse the catalog and save movies to watch later</p>
      <RouterLink
        class="mt-4 bg-amber-400 text-black text-sm font-semibold px-5 py-2 rounded-xl hover:bg-amber-300 transition-colors inline-block"
        to="/"
      >
        Browse Catalog
      </RouterLink>
    </div>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useWatchlistStore } from '@/stores/watchlistStore'
import { useMovieStore }     from '@/stores/movieStore'
import MovieCard             from '@/components/MovieCard.vue'

// stores
const watchlist  = useWatchlistStore()
const movieStore = useMovieStore()

// filter movies that are in the watchlist
const watchlistMovies = computed(() =>
  movieStore.movies.filter(m => watchlist.watchlistIds.includes(m.id))
)
</script>