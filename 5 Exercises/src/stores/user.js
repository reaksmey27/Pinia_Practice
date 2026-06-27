import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useUserStore = defineStore('user', () => {
  // state
  const name  = ref('Reaksmey San')
  const age   = ref(28)
  const email = ref('smey@example.com')

  // actions
  function updateName(newName) {
    name.value = newName
  }

  function updateAge(newAge) {
    age.value = Number(newAge)
  }

  function updateEmail(newEmail) {
    email.value = newEmail
  }

  return { name, age, email, updateName, updateAge, updateEmail }
})