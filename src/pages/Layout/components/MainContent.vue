<script setup>
import LeftCart from './LeftCart.vue'
import RightCart from './RightCart.vue'
import HotArticle from './HotArticle.vue'
import LatestArticle from './LatestArticle.vue'
import HotCart from './HotCard.vue'

</script>

<template>

  <div class="left-content">
    <!-- 左侧卡片 -->
     <LeftCart />
    <!-- 热门标签 -->
    <HotCart />
  </div>

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

  margin-left: 16rem;
  margin-right: 19rem;
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