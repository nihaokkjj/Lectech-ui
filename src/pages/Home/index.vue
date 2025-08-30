<script setup>
import RightCard from './components/RightCard.vue'
import LatestArticle from './components/LatestArticle.vue'
import HotArticle from './components/HotArticle.vue'

</script>

<template>

  <div class="right-content">
    <!-- 右侧卡片 -->
    <RightCard />
  </div>

  <div class="main-content">
    <!-- 热门文章 -->
  <HotArticle />
  <!-- 最新文章 -->
  <LatestArticle />
  </div>

</template>

<style scoped>

@media (min-width: 1440px) {
  .main-content {
    margin-right: 15rem;
  }
}
.right-content {
  position: absolute;
  right: 1rem;
}
</style>