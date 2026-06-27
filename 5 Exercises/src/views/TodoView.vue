<template>
  <div class="card">
    <h2>Exercise 3: Todo Application</h2>

    <!-- metrics -->
    <div class="metrics">
      <span>Total: <strong>{{ totalTodos }}</strong></span>
      <span>Pending: <strong>{{ pendingTodos.length }}</strong></span>
      <span>Completed: <strong>{{ completedTodos.length }}</strong></span>
    </div>

    <!-- add todo -->
    <div class="input-row">
      <input v-model="todoText" placeholder="What needs to be done?" @keyup.enter="saveTodo" />
      <button @click="saveTodo" class="btn-action">Add</button>
    </div>

    <!-- todo list -->
    <ul class="items-list">
      <li v-for="todo in todos" :key="todo.id" :class="{ done: todo.completed }">
        <span @click="toggleTodo(todo.id)" class="todo-text">{{ todo.title }}</span>
        <button @click="deleteTodo(todo.id)" class="del-btn">✕</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useTodoStore } from '../stores/todo'

// store
const store = useTodoStore()

const { todos, totalTodos, pendingTodos, completedTodos } = storeToRefs(store)
const { addTodo, toggleTodo, deleteTodo } = store

const todoText = ref('')

function saveTodo() {
  if (!todoText.value) return
  addTodo(todoText.value)
  todoText.value = ''
}

</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 20px auto;
  padding: 24px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--bg-surface);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

h2 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.25rem;
  color: var(--text-main);
}

.metrics {
  display: flex;
  gap: 12px;
  font-size: 0.85rem;
  color: var(--text-muted);
  margin-bottom: 20px;
}

.metrics strong {
  color: var(--text-main);
}

.input-row {
  display: flex;
  gap: 8px;
  margin-bottom: 20px;
}

.input-row input {
  flex: 1;
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--bg-surface);
  color: var(--text-main);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s;
}

.input-row input:focus {
  border-color: var(--nav-hover);
}

button {
  padding: 10px 16px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.9rem;
  font-weight: 500;
  transition: background-color 0.15s, transform 0.1s;
}

button:active {
  transform: scale(0.97);
}

.btn-action {
  background-color: var(--bg-surface);
  color: var(--text-main);
}

.btn-action:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.dark-mode .btn-action:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.items-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.items-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 4px;
  border-bottom: 1px solid var(--border-color);
  transition: opacity 0.2s;
}

.todo-text {
  cursor: pointer;
  user-select: none;
  color: var(--text-main);
  font-size: 0.95rem;
  flex: 1;
}

.items-list .done .todo-text {
  text-decoration: line-through;
  color: var(--text-muted);
  opacity: 0.6;
}

.del-btn {
  background: none;
  border: none;
  padding: 4px 8px;
  color: #cc0000;
  font-size: 0.85rem;
  opacity: 0.5;
}

.del-btn:hover {
  opacity: 1;
  background-color: #ffeeee;
}

.dark-mode .del-btn {
  color: #ff8888;
}

.dark-mode .del-btn:hover {
  background-color: #2c1515;
}
</style>