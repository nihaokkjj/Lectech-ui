<script setup>
import Nav from './components/Nav.vue'
</script>

<template>
<!-- 导航栏 -->
  <Nav />

  <div class="main-content">
    <!-- 正文主要内容 -->
    <router-view />
  </div>

</template>

<style scoped>

.main-content {
  margin-top: 5rem;
  width: 100%;
  max-width: none;
  padding: 0; 
}


</style>