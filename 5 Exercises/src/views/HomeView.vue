<template>
  <div class="card animate-fade-in">
    <div class="welcome-icon">🚀</div>
    <h2>Welcome to the State Workspace</h2>
    <p>Use the navigation panel links above to slide smoothly between reactive task components.</p>
  </div>
</template>

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

.welcome-icon {
  font-size: 2.5rem;
  margin-bottom: 16px;
}

h2 {
  margin-top: 0;
  margin-bottom: 12px;
  color: var(--text-main);
  font-size: 1.4rem;
  font-weight: 600;
  letter-spacing: -0.3px;
}

p {
  margin: 0;
  color: var(--text-muted);
  line-height: 1.6;
  font-size: 0.95rem;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fadeIn 0.4s ease-out;
}
</style>