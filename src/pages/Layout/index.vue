<script setup>
import Nav from './components/Nav.vue'
import LeftCart from './components/LeftCard.vue'
import HotArticle from './components/HotCard.vue'
import MainContent from './components/MainContent.vue'
</script>

<template>
<!-- 导航栏 -->
  <Nav />

  <div class="left-content">
    <!-- 左侧卡片 -->
     <LeftCard />
    <!-- 热门标签 -->
    <HotCart />
  </div>

<!-- 正文主要内容 -->
 <MainContent />

</template>

<style scoped>
.main-content {

  margin-left: 3rem;
  margin-right: 3rem;
}
@media (min-width: 1024px) {
   .main-content {
    margin-left: 17rem;
  }
}

</style>