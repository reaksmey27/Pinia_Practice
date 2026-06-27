<template>
  <div class="card">
    <h2>Exercise 2: User Profile</h2>

    <!-- display -->
    <div class="info-block">
      <p><strong>Name:</strong> {{ name }}</p>
      <p><strong>Age:</strong> {{ age }}</p>
      <p><strong>Email:</strong> {{ email }}</p>
    </div>

    <!-- edit form -->
    <div class="form">
      <input v-model="name"        placeholder="Change Name" />
      <input v-model.number="age"  placeholder="Change Age" type="number" />
      <input v-model="email"       placeholder="Change Email" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from '../stores/user'

const store = useUserStore()
const { name, age, email } = storeToRefs(store)

</script>

<style scoped>
.card {
  max-width: 350px;
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

.info-block {
  background-color: rgba(0, 0, 0, 0.02);
  padding: 12px 16px;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid var(--border-color);
}

.dark-mode .info-block {
  background-color: rgba(255, 255, 255, 0.02);
}

.info-block p {
  margin: 6px 0;
  font-size: 0.95rem;
  color: var(--text-main);
}

.info-block strong {
  color: var(--text-muted);
  font-weight: 600;
  display: inline-block;
  width: 55px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

input {
  padding: 10px 12px;
  border: 1px solid var(--border-color);
  border-radius: 6px;
  background-color: var(--bg-surface);
  color: var(--text-main);
  font-size: 0.95rem;
  outline: none;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  border-color: var(--nav-hover);
  box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.03);
}

.dark-mode input:focus {
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.03);
}

input::placeholder {
  color: var(--text-muted);
  opacity: 0.6;
}
</style>