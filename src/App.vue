<template>
  <div class="main">
    <Navbar class="navigation" />
    <div class="content">
      <RouterView />
    </div>
    <Footer class="footer" />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router';
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

</script>

<style scoped>
.main {
  display: flex;
  flex-direction: column !important;
  min-height: 100vh;
}

.content {
  flex: 1;
}

.footer {
  flex-shrink: 0;
}
</style>