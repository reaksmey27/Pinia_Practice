<template>
  <div class="space-y-4">
    <div class="flex gap-3">
      <div class="relative flex-1">
        <span class="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400 text-sm">🔍</span>
        <input
          type="text"
          placeholder="Search movies..."
          :value="movieStore.searchQuery"
          class="w-full bg-zinc-800 text-white placeholder-zinc-500 rounded-xl pl-9 pr-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-amber-400 transition-all"
          @input="movieStore.setSearch($event.target.value)"
        />
      </div>

      <select
        :value="movieStore.sortBy"
        class="bg-zinc-800 text-white text-sm rounded-xl px-3 py-2.5 outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
        @change="movieStore.setSortBy($event.target.value)"
      >
        <option value="rating">Top Rated</option>
        <option value="year">Newest</option>
        <option value="title">A–Z</option>
      </select>

      <button
        v-if="hasActiveFilters"
        class="bg-zinc-700 hover:bg-zinc-600 text-white text-sm rounded-xl px-3 py-2.5 transition-colors"
        title="Reset filters"
        @click="movieStore.resetFilters()"
      >
        ✕
      </button>
    </div>

    <div class="flex flex-wrap gap-2">
      <button
        v-for="genre in movieStore.allGenres"
        :key="genre"
        class="text-xs font-medium px-3 py-1.5 rounded-full transition-all duration-200"
        :class="movieStore.activeGenre === genre
          ? 'bg-amber-400 text-black'
          : 'bg-zinc-800 text-zinc-300 hover:bg-zinc-700'
        "
        @click="movieStore.setGenre(genre)"
      >
        {{ genre }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useMovieStore } from '@/stores/movieStore'

const movieStore = useMovieStore()

const hasActiveFilters = computed(() =>
  movieStore.searchQuery !== '' ||
  movieStore.activeGenre !== 'All' ||
  movieStore.sortBy !== 'rating'
)
</script>