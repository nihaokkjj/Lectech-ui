<script setup>
import RightCart from './RightCart.vue'
import LatestArticle from './LatestArticle.vue'
import HotCart from './HotCard.vue'

</script>

<template>

  <div class="right-content">
    <!-- 右侧卡片 -->
    <RightCart />
  </div>

  <div class="main-content">

    <!-- 热门文章 -->
  <HotArticle />
  <!-- 最新文章 -->
  <LatestArticle />
  </div>

</template>

<style scoped>

.main-content {

  margin-left: 3rem;
  margin-right: 3rem;
}
@media (min-width: 1440px) {
  .main-content {
    margin-right: 20rem;
  }
}

.left-content {
    margin-left: auto;
    margin-right: auto;
    padding-top: 5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    display: flex;
    position: absolute;
}

.right-content {

  position: absolute;
  right: 0rem;
}
</style>