<template>
  <header class="sticky top-0 z-40 bg-zinc-950/90 backdrop-blur border-b border-zinc-800">
    <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
      <RouterLink class="flex items-center gap-2" to="/">
        <span class="text-amber-400 text-xl">🎬</span>
        <span class="text-white font-bold text-lg tracking-tight">CineVault</span>
      </RouterLink>

      <nav class="flex gap-1 bg-zinc-800 rounded-xl p-1">
        <RouterLink
          v-for="tab in TABS"
          :key="tab.to"
          :to="tab.to"
          class="relative flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-sm font-medium transition-all duration-200"
          :class="({ isActive }) => isActive ? 'bg-amber-400 text-black' : 'text-zinc-400 hover:text-white'"
        >
          {{ tab.label }}
          <span
            v-if="tab.to === '/watchlist' && watchlist.watchlistCount"
            class="bg-black/20 text-current text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center"
          >
            {{ watchlist.watchlistCount }}
          </span>
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useWatchlistStore } from '@/stores/watchlistStore'

const watchlist = useWatchlistStore()

const TABS = [
  { to: '/',          label: '🎞 Catalog'  },
  { to: '/watchlist', label: '★ Watchlist' },
]
</script>