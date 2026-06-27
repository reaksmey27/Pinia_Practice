<template>
  <header class="app-header">
    <div class="header-container">

      <!-- brand -->
      <div class="brand">
        <span class="logo-icon">⚡</span>
        <h1>CoreSuite</h1>
      </div>

      <!-- navigation -->
      <nav class="navigation">
        <router-link to="/">Home</router-link>
        <router-link to="/counter">Counter</router-link>
        <router-link to="/user">Profile</router-link>
        <router-link to="/todo">Tasks</router-link>
        <router-link to="/cart">Cart</router-link>
      </nav>

      <!-- theme toggle -->
      <button
        @click="toggleTheme"
        class="theme-btn"
        :aria-label="'Switch to ' + (darkMode ? 'light' : 'dark') + ' mode'"
      >
        <span class="theme-icon">{{ darkMode ? '🌙' : '☀️' }}</span>
      </button>

    </div>
  </header>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from '../stores/theme'

// store
const themeStore = useThemeStore()

// state (reactive)
const { darkMode } = storeToRefs(themeStore)

// actions
const { toggleTheme } = themeStore
</script>

<style scoped>
.app-header {
  border-bottom: 1px solid var(--border-color);
  background-color: var(--bg-surface);
  padding: 0 1.5rem;
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1000px;
  height: 64px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.brand {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-icon {
  font-size: 1.2rem;
}

.brand h1 {
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: -0.5px;
  margin: 0;
}

.navigation {
  display: flex;
  height: 100%;
  align-items: center;
  gap: 4px;
}

.navigation a {
  text-decoration: none;
  color: var(--text-muted);
  font-weight: 500;
  font-size: 0.9rem;
  padding: 6px 12px;
  border-radius: 6px;
  transition: all 0.2s ease;
}

.navigation a:hover {
  color: var(--text-main);
  background-color: rgba(0, 0, 0, 0.04);
}

.dark-mode .navigation a:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.navigation .router-link-active {
  color: var(--nav-active);
  background-color: rgba(0, 0, 0, 0.06);
  font-weight: 600;
}

.dark-mode .navigation .router-link-active {
  background-color: rgba(255, 255, 255, 0.1);
}

.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: none;
  border: 1px solid var(--border-color);
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s;
}

.theme-btn:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

.dark-mode .theme-btn:hover {
  background-color: rgba(255, 255, 255, 0.05);
}

.theme-icon {
  font-size: 1rem;
}

@media (max-width: 600px) {
  .header-container {
    height: auto;
    padding: 12px 0;
    flex-direction: column;
    gap: 12x;
  }

  .navigation {
    width: 100%;
    justify-content: center;
  }
}
</style>