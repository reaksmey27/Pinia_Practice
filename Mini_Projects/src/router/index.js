import { createRouter, createWebHistory } from 'vue-router'
import CatalogView     from '@/views/CatalogView.vue'
import WatchlistView   from '@/views/WatchlistView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import NotFoundView    from '@/views/NotFound.vue'

const routes = [
  { path: '/',            name: 'catalog',       component: CatalogView,     meta: { title: 'Catalog' }      },
  { path: '/watchlist',   name: 'watchlist',     component: WatchlistView,   meta: { title: 'My Watchlist' } },
  { path: '/movie/:id',   name: 'movie-detail',  component: MovieDetailView, meta: { title: 'Movie Detail' } },
  { path: '/:pathMatch(.*)*', name: 'not-found',   component: NotFoundView,    meta: { title: 'Not Found' } },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

router.afterEach((to) => {
  document.title = `${to.meta.title ?? 'CineVault'} — CineVault`
})

export default router