<template>
  <div class="card animate-fade-in">
    <h1>404 - Page Not Found</h1>
    <p>The requested page could not be found.</p>
    <router-link to="/" class="btn-action">Go Home</router-link>
  </div>
</template>

<script setup>
</script>

<style scoped>
.card {
  max-width: 400px;
  margin: 40px auto;
  padding: 32px 24px;
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-align: center;
  background-color: var(--bg-surface);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.03);
}

@keyframes animate-fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.animate-fade-in {
  animation: animate-fade-in 0.5s ease-in-out;
}

h1 {
  margin-top: 0;
  margin-bottom: 12px;
  color: var(--text-main);
  font-size: 1.4rem;
}

p {
  margin-top: 0;
  margin-bottom: 24px;
  color: var(--text-muted);
  font-size: 1rem;
}
</style>