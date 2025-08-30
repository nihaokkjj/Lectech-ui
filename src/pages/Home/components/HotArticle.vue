<script setup>
import {ref} from 'vue'
import ArticleListItem from '../../../components/ArticleListItem.vue'

// 热门推荐文章数据 
const hotArticles = ref([
  {
    id: 10,
    title: 'AI与机器学习在前端的应用',
    summary: '探索人工智能和机器学习如何在现代前端开发中发挥作用，从智能UI到数据可视化，提升用户体验。',
    date: '2023-10-22',
    category: {
      name: '人工智能',
      color: 'red'
    },
    tags: [
      { name: 'Vue3', color: 'purple' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Vite', color: 'green' }
    ],
    author: {
      name: 'Jane Doe',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: '5.2k',
      likes: 689,
    },
  },
  {
    id: 11,
    title: '全栈工程师的成长路径',
    summary: '一份全面的全栈工程师技能图谱，涵盖前端、后端、数据库和DevOps，助你规划职业生涯。',
    date: '2023-10-22',
    category: {
      name: '全栈开发',
      color: 'orange'
    },
    tags: [
      { name: 'Vue3', color: 'purple' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Vite', color: 'green' }
    ],
    author: {
      name: 'Mike Smith',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: '4.8k',
      likes: 552,
    },
  },
]);
</script>

<template>
  <section id="hot-articles" class="hot-articles-section">
    <div class="section-header">
      <h2 class="section-title">
        <i class="fas fa-fire hot-icon"></i>
        热门推荐
      </h2>
      <a href="#" class="more-link">
        查看更多
        <i class="fas fa-chevron-right more-icon"></i>
      </a>
    </div>

  <div class="hot-articles-grid">
    <ArticleListItem
      v-for="hotArticle in hotArticles"
      :key="hotArticle.id"
      :article="hotArticle"
    >
    </ArticleListItem>
  </div>
</section>
</template>

<style scoped>
@import './scss/hotArticle.scss'
</style>