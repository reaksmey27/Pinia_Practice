<template>
  <div :class="['app-frame', { 'dark-mode': darkMode }]">

    <!-- navbar -->
    <Navbar />

    <!-- page content -->
    <main class="content-window">
      <router-view />
    </main>

  </div>
</template>

<script setup>
import { storeToRefs } from 'pinia'
import { useThemeStore } from './stores/theme'
import Navbar from './components/Navbar.vue'

// store
const themeStore = useThemeStore()

// state (reactive)
const { darkMode } = storeToRefs(themeStore)
</script>

<style>
/* light mode tokens */
:root {
  --bg-primary:   #fcfcfc;
  --bg-surface:   #ffffff;
  --border-color: #cccccc;
  --text-main:    #333333;
  --text-muted:   #666666;
  --nav-active:   #000000;
  --nav-hover:    #666666;
}

/* dark mode tokens */
.dark-mode {
  --bg-primary:   #121212;
  --bg-surface:   #1e1e1e;
  --border-color: #444444;
  --text-main:    #f0f0f0;
  --text-muted:   #aaaaaa;
  --nav-active:   #ffffff;
  --nav-hover:    #cccccc;
}

/* reset */
body {
  margin: 0;
  padding: 0;
}

/* app shell */
.app-frame {
  font-family: sans-serif;
  background-color: var(--bg-primary);
  color: var(--text-main);
  min-height: 100vh;
  transition: background-color 0.2s, color 0.2s;
}

/* main content area */
.content-window {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* global card style */
.app-frame .card {
  background-color: var(--bg-surface);
  border-color: var(--border-color);
  color: var(--text-main);
}
</style>