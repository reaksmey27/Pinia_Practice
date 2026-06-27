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
  const totalItems = computed(() => {
    let count = 0
    for (const item of cart.value)
      count += item.quantity
    return count
  })

  const totalPrice = computed(() => {
    let total = 0
    for (const item of cart.value)
      total += item.product.price * item.quantity
    return total
  })

  // actions
  function addToCart(product) {
    for (const item of cart.value) {
      if (item.product.id === product.id) {
        item.quantity++
        return
      }
    }
    cart.value.push({ product, quantity: 1 })
  }

  function removeFromCart(productId) {
    for (let i = 0; i < cart.value.length; i++) {
      if (cart.value[i].product.id === productId) {
        cart.value.splice(i, 1)
        return
      }
    }
  }

  function clearCart() {
    cart.value = []
  }

  return { products, cart, totalItems, totalPrice, addToCart, removeFromCart, clearCart }
})