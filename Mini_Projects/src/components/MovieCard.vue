<template>
  <div
    class="group relative bg-zinc-900 rounded-xl overflow-hidden cursor-pointer hover:scale-105 hover:ring-2 hover:ring-amber-400 transition-all duration-300 shadow-lg"
    @click="handleClick"
  >
    <div class="relative aspect-2/3 overflow-hidden">
      <img
        :src="movie.poster"
        :alt="movie.title"
        class="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
        loading="lazy"
      />

      <span class="absolute top-2 left-2 bg-black/70 text-amber-400 text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
        ⭐ {{ movie.rating }}
      </span>

      <button
        class="absolute top-2 right-2 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-200 z-10"
        :class="inWatchlist ? 'bg-amber-400 text-black' : 'bg-black/60 text-white hover:bg-amber-400 hover:text-black'"
        :title="inWatchlist ? 'Remove from watchlist' : 'Add to watchlist'"
        @click.stop="watchlist.toggleWatchlist(movie.id)"
      >
        {{ inWatchlist ? '★' : '☆' }}
      </button>

      <div class="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div class="w-full bg-linear-to-t from-black/90 to-transparent p-3">
          <p class="text-white text-xs line-clamp-2 leading-snug">{{ movie.description }}</p>
        </div>
      </div>
    </div>

    <div class="p-3">
      <h3 class="text-white font-semibold text-sm truncate">{{ movie.title }}</h3>
      <div class="flex items-center justify-between mt-1">
        <span class="text-xs text-amber-400 font-medium">{{ movie.genre }}</span>
        <span class="text-xs text-zinc-400">{{ movie.year }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import { useWatchlistStore } from '@/stores/watchlistStore'
import { useUIStore }        from '@/stores/uiStore'

const props = defineProps({
  movie:   { type: Object,  required: true  },
  useLink: { type: Boolean, default:  false },
})

const router    = useRouter()
const watchlist = useWatchlistStore()
const ui        = useUIStore()

const inWatchlist = computed(() => watchlist.isInWatchlist(props.movie.id))

function handleClick() {
  props.useLink
    ? router.push({ name: 'movie-detail', params: { id: props.movie.id } })
    : ui.openModal(props.movie)
}
</script>