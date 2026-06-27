<template>
  <div class="space-y-6">

    <!-- search + filter bar -->
    <SearchBar />

    <!-- results count -->
    <p class="text-zinc-400 text-sm">
      Showing
      <span class="text-white font-semibold">{{ movieStore.filteredMovies.length }}</span>
      of
      <span class="text-white font-semibold">{{ movieStore.totalMovies }}</span>
      movies
    </p>

    <!-- movie grid -->
    <div
      v-if="movieStore.filteredMovies.length"
      class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4"
    >
      <MovieCard
        v-for="movie in movieStore.filteredMovies"
        :key="movie.id"
        :movie="movie"
      />
    </div>

    <!-- empty state -->
    <div v-else class="flex flex-col items-center justify-center py-24 text-center">
      <span class="text-5xl mb-4">🎬</span>
      <h3 class="text-white text-lg font-semibold">No movies found</h3>
      <p class="text-zinc-400 text-sm mt-1">Try adjusting your search or filters</p>
      <button
        class="mt-4 text-amber-400 text-sm hover:underline"
        @click="movieStore.resetFilters()"
      >
        Clear all filters
      </button>
    </div>

  </div>
</template>

<script setup>
import { useMovieStore } from '@/stores/movieStore'
import SearchBar         from '@/components/SearchBar.vue'
import MovieCard         from '@/components/MovieCard.vue'

// store
const movieStore = useMovieStore()
</script>