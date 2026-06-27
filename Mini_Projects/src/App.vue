<template>
  <div class="min-h-screen bg-zinc-950 text-white">

    <!-- navbar -->
    <NavBar />

    <!-- page content -->
    <main class="max-w-6xl mx-auto px-4 py-8">
      <RouterView v-slot="{ Component }">
        <Transition name="slide" mode="out-in">
          <component :is="Component" />
        </Transition>
      </RouterView>
    </main>

    <!-- movie modal -->
    <MovieModal />

  </div>
</template>

<script setup>
import NavBar     from '@/components/Navbar.vue'
import MovieModal from '@/components/MovieModal.vue'
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

/* enter from right */
.slide-enter-from {
  opacity: 0;
  transform: translateX(12px);
}

/* leave to left */
.slide-leave-to {
  opacity: 0;
  transform: translateX(-12px);
}
</style>