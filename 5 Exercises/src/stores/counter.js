import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCounterStore = defineStore('counter', () => {
  // state
  const count = ref(0)

  // getters
  const doubleCount = computed(() => {
    return count.value * 2
  })

  // actions
  function increment() {
    count.value = count.value + 1
  }

  function decrement() {
    count.value = count.value - 1
  }

  function reset() {
    count.value = 0
  }

  return { count, doubleCount, increment, decrement, reset }
})