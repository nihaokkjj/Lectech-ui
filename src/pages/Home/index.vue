<script setup>
import RightCard from './components/RightCard.vue'
import LatestArticle from './components/LatestArticle.vue'
import HotArticle from './components/HotArticle.vue'
import Left from './components/Left.vue'

</script>

<template>
  <div class="left-content">
    <Left />
  </div>
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

  .left-content {
    display: none;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    position: absolute;
    top: 5rem;
    left: 1rem;
  }

@media (min-width: 1024px){
  .left-content {
    display: inline-block;
  }
  .main-content {
    margin-left: 15rem;
  }
}
  @media (min-width: 1440px){
  .main-content {
    margin-right: 15rem;
  }
}

.right-content {
  position: absolute;
  right: 2rem;
}
</style>