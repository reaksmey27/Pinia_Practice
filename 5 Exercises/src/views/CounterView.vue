<template>
  <div class="card">
    <h2>Exercise 1: Counter</h2>

    <!-- display -->
    <div class="info-block">
      <p>Current Count: <span class="badge">{{ count }}</span></p>
      <p>Double Count: <span class="badge">{{ doubleCount }}</span></p>
    </div>

    <!-- actions -->
    <div class="btn-group">
      <button @click="increment" class="btn-action">+</button>
      <button @click="decrement" class="btn-action">-</button>
      <button @click="reset"     class="btn-danger">Reset</button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useCounterStore } from '../stores/counter'

// store
const store = useCounterStore()

// state & getters (reactive)
const { count, doubleCount } = storeToRefs(store)

// actions
const { increment, decrement, reset } = store

</script>

<style scoped>
.card {
  max-width: 350px;
  margin: 20px auto;
  padding: 24px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-align: center;
  background-color: var(--bg-surface);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
}

h2 {
  margin-top: 0;
  margin-bottom: 16px;
  font-size: 1.25rem;
}

.info-block {
  margin-bottom: 20px;
}

.info-block p {
  margin: 10px 0;
  color: var(--text-muted);
  font-size: 0.95rem;
}

.badge {
  background-color: rgba(0, 0, 0, 0.05);
  color: var(--text-main);
  padding: 4px 10px;
  border-radius: 6px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.dark-mode .badge {
  background-color: rgba(255, 255, 255, 0.08);
}

.btn-group {
  display: flex;
  justify-content: center;
  gap: 10px;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: 500;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.15s ease, transform 0.1s ease;
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

.btn-danger {
  background-color: #ffeeee;
  border-color: #ffcccc;
  color: #cc0000;
}

.btn-danger:hover {
  background-color: #ffd8d8;
}

.dark-mode .btn-danger {
  background-color: #2c1515;
  border-color: #5c2626;
  color: #ff8888;
}

.dark-mode .btn-danger:hover {
  background-color: #3d1d1d;
}
</style>