<script setup>
import Header from './components/Header.vue';
import Sidebar from './components/Sidebar.vue';
import Topiclist from './components/Topiclist.vue';
import TopicCard from './components/TopicCard.vue';
import Article from './components/Article.vue';
import Comment from './components/Comment.vue';
import Detail from './components/Detail.vue';
import Rightsidebar from './components/Rightsidebar.vue';
</script>

<template>
 <!-- <Header />
 <div style="display: flex;">
  <Sidebar /> 
  <Topiclist /> 
  <Rightsidebar />
 </div>

 <!-- <Article /> 
 <Detail /> --> -->
</template>

<style scoped lang="scss">

@import '../../style.scss';

.container {
  
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  
  @media (min-width: 576px) {
    max-width: 540px;
  }
  
  @media (min-width: 768px) {
    max-width: 720px;
  }
  
  @media (min-width: 992px) {
    max-width: 960px;
  }
  
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  background-color:$gray-100;
}

.mx-auto {
  margin-right: auto;
  margin-left: auto;
}

.pt-20 {
  padding-top: 5rem; // 20 * 0.25rem = 5rem
}

.px-4 {
  padding-left: 1rem;  // 4 * 0.25rem = 1rem
  padding-right: 1rem; // 4 * 0.25rem = 1rem
}

.pb-8 {
  padding-bottom: 2rem; // 8 * 0.25rem = 2rem
}

.flex {
  display: flex;
}

// 如果需要在小屏幕上改变布局，可以添加以下响应式样式
@media (max-width: 1023px) {
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
  }
  
  .flex {
    flex-direction: column;
  }
}
</style>