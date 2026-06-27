import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  // state
  const products = ref([
    { id: 1, name: 'Mechanical Keyboard', price: 90 },
    { id: 2, name: 'Wireless Mouse',      price: 45 },
    { id: 3, name: 'USB-C Hub',           price: 30 }
  ])
  const cart = ref([])

  // getters
  const totalItems = computed(() => cart.value.reduce((acc, item) => acc + item.quantity, 0))
  const totalPrice = computed(() => cart.value.reduce((acc, item) => acc + (item.product.price * item.quantity), 0))

  // actions
  function addToCart(product) {
    const existing = cart.value.find(item => item.product.id === product.id)
    if (existing) {
      existing.quantity++
    } else {
      cart.value.push({ product, quantity: 1 })
    }
  }

  function removeFromCart(productId) {
    cart.value = cart.value.filter(item => item.product.id !== productId)
  }

  function clearCart() {
    cart.value = []
  }

  return { products, cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart }
})