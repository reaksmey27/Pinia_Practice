import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  // state
  const todos = ref([
    { id: 1, title: 'Master Pinia Stores', completed: false }
  ])

  // getters
  const completedTodos = computed(() => todos.value.filter(t => t.completed))
  const pendingTodos   = computed(() => todos.value.filter(t => !t.completed))
  const totalTodos     = computed(() => todos.value.length)

  // actions
  function addTodo(title) {
    if (!title) return
    todos.value.push({ id: Date.now(), title, completed: false })
  }

  function deleteTodo(id) {
    todos.value = todos.value.filter(t => t.id !== id)
  }

  function toggleTodo(id) {
    const todo = todos.value.find(t => t.id === id)
    if (todo) todo.completed = !todo.completed
  }

  return { todos, completedTodos, pendingTodos, totalTodos, addTodo, deleteTodo, toggleTodo }
})