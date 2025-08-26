<script setup>
import Nav from './components/Nav.vue'
import LeftCard from './components/LeftCard.vue'
import HotCard from './components/HotCard.vue'
</script>

<template>
<!-- 导航栏 -->
  <Nav />

  <div class="left-content">
    <!-- 左侧卡片 -->
    <LeftCard />
    <!-- 热门标签 -->
   <HotCard />
  </div>

  <div class="main-content">
    <!-- 正文主要内容 -->
    <router-view />
  </div>


</template>

<style scoped>

.left-content {
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    position: absolute;
    top: 5rem;
    left: 1rem;
}

.main-content {
  margin-top: 5rem;
}
@media (min-width: 1024px) {
   .main-content {
    margin-left: 15rem;
  }
}

</style>