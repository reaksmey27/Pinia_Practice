import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CounterView from '../views/CounterView.vue'
import UserView from '../views/UserView.vue'
import TodoView from '../views/TodoView.vue'
import CartView from '../views/CartView.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/counter', component: CounterView },
  { path: '/user', component: UserView },
  { path: '/todo', component: TodoView },
  { path: '/cart', component: CartView },
  { path: '/:match(.*)', component: NotFound}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router