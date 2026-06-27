import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todo', () => {
  // state
  const todos = ref([
    { id: 1, title: 'Master Pinia Stores', completed: false }
  ])

  // getters
  const completedTodos = computed(() => {
    const result = []
    for (const todo of todos.value) {
      if (todo.completed)
        result.push(todo)
    }
    return result
  })

  const pendingTodos = computed(() => {
    const result = []
    for (const todo of todos.value) {
      if (!todo.completed)
        result.push(todo)
    }
    return result
  })

  const totalTodos = computed(() => todos.value.length)

  // actions
  function addTodo(title) {
    if (!title) return
    todos.value.push({ id: Date.now(), title, completed: false })
  }

  function deleteTodo(id) {
    for (let i = 0; i < todos.value.length; i++) {
      if (todos.value[i].id === id) {
        todos.value.splice(i, 1)
        return
      }
    }
  }

  function toggleTodo(id) {
    for (const todo of todos.value) {
      if (todo.id === id) {
        todo.completed = !todo.completed
        return
      }
    }
  }

  return { todos, completedTodos, pendingTodos, totalTodos, addTodo, deleteTodo, toggleTodo }
})