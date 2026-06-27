<template>
  <Teleport to="body">
    <Transition name="fade">
      <div
        v-if="ui.isModalOpen"
        class="fixed inset-0 z-50 flex items-center justify-center p-4"
        @click.self="ui.closeModal()"
      >
        <div class="absolute inset-0 bg-black/80 backdrop-blur-sm" @click="ui.closeModal()" />

        <div
          v-if="ui.selectedMovie"
          class="relative z-10 bg-zinc-900 rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
        >
          <div class="relative h-64 overflow-hidden">
            <img
              :src="ui.selectedMovie.poster"
              :alt="ui.selectedMovie.title"
              class="w-full h-full object-cover"
            />
            <div class="absolute inset-0 bg-linear-to-t from-zinc-900 via-zinc-900/40 to-transparent" />

            <button
              class="absolute top-3 right-3 w-8 h-8 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors text-sm"
              @click="ui.closeModal()"
            >
              ✕
            </button>

            <div class="absolute bottom-4 left-4 right-4">
              <h2 class="text-white text-2xl font-bold">{{ ui.selectedMovie.title }}</h2>
              <div class="flex items-center gap-3 mt-1">
                <span class="text-amber-400 text-sm font-semibold">⭐ {{ ui.selectedMovie.rating }}</span>
                <span class="text-zinc-300 text-sm">{{ ui.selectedMovie.year }}</span>
                <span class="bg-amber-400/20 text-amber-400 text-xs px-2 py-0.5 rounded-full font-medium">{{ ui.selectedMovie.genre }}</span>
              </div>
            </div>
          </div>

          <div class="p-5">
            <p class="text-zinc-300 text-sm leading-relaxed">{{ ui.selectedMovie.description }}</p>

            <button
              class="mt-5 w-full py-3 rounded-xl font-semibold text-sm transition-all duration-200"
              :class="inWatchlist
                ? 'bg-zinc-700 hover:bg-red-500/20 text-zinc-200 hover:text-red-400'
                : 'bg-amber-400 hover:bg-amber-300 text-black'
              "
              @click="watchlist.toggleWatchlist(ui.selectedMovie.id)"
            >
              {{ inWatchlist ? '★ Remove from Watchlist' : '☆ Add to Watchlist' }}
            </button>
          </div>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import { useUIStore }        from '@/stores/uiStore'
import { useWatchlistStore } from '@/stores/watchlistStore'

const ui        = useUIStore()
const watchlist = useWatchlistStore()

const inWatchlist = computed(() =>
  ui.selectedMovie ? watchlist.isInWatchlist(ui.selectedMovie.id) : false
)
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>