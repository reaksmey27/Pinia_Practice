<template>
  <div v-if="movie" class="max-w-3xl mx-auto px-4 py-8">
    <button
      class="flex items-center gap-2 text-zinc-400 hover:text-white text-sm mb-6 transition-colors"
      @click="router.back()"
    >
      ← Back
    </button>

    <div class="flex flex-col sm:flex-row gap-6">
      <div class="shrink-0 w-48 mx-auto sm:mx-0">
        <img
          :src="movie.poster"
          :alt="movie.title"
          class="w-full rounded-xl shadow-2xl"
        />
      </div>

      <div class="flex-1 space-y-4">
        <div>
          <h1 class="text-white text-3xl font-bold">{{ movie.title }}</h1>
          <div class="flex flex-wrap items-center gap-3 mt-2">
            <span class="text-amber-400 font-semibold">⭐ {{ movie.rating }}</span>
            <span class="text-zinc-400">{{ movie.year }}</span>
            <span class="bg-amber-400/20 text-amber-400 text-xs px-2 py-1 rounded-full font-medium">
              {{ movie.genre }}
            </span>
          </div>
        </div>

        <p class="text-zinc-300 leading-relaxed">{{ movie.description }}</p>

        <button
          class="px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
          :class="inWatchlist
            ? 'bg-zinc-700 hover:bg-red-500/20 text-zinc-200 hover:text-red-400'
            : 'bg-amber-400 hover:bg-amber-300 text-black'
          "
          @click="watchlist.toggleWatchlist(movie.id)"
        >
          {{ inWatchlist ? '★ Remove from Watchlist' : '☆ Add to Watchlist' }}
        </button>
      </div>
    </div>

    <div v-if="relatedMovies.length" class="mt-12">
      <h2 class="text-white text-lg font-bold mb-4">More {{ movie.genre }}</h2>
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        <MovieCard
          v-for="m in relatedMovies"
          :key="m.id"
          :movie="m"
          :use-link="true"
        />
      </div>
    </div>
  </div>

  <div v-else class="flex flex-col items-center justify-center py-24 text-center">
    <span class="text-5xl mb-4">🎬</span>
    <h3 class="text-white text-lg font-semibold">Movie not found</h3>
    <RouterLink class="mt-4 text-amber-400 hover:underline text-sm" to="/">
      Go to Catalog
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useMovieStore }     from '@/stores/movieStore'
import { useWatchlistStore } from '@/stores/watchlistStore'
import MovieCard             from '@/components/MovieCard.vue'

const route  = useRoute()
const router = useRouter()

const movieStore = useMovieStore()
const watchlist  = useWatchlistStore()

const movie = computed(() =>
  movieStore.movies.find((m) => m.id === Number(route.params.id))
)

const inWatchlist = computed(() =>
  movie.value ? watchlist.isInWatchlist(movie.value.id) : false
)

const relatedMovies = computed(() =>
  movie.value
    ? movieStore.movies
        .filter((m) => m.genre === movie.value.genre && m.id !== movie.value.id)
        .slice(0, 4)
    : []
)
</script>