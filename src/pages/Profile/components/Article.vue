<script setup>
import {ref} from 'vue'

const activeId = ref(0)
//最新文章
const articles = ref([
  {
    id: 1,
    title: 'Vue 3 + TypeScript + Vite 项目最佳实践指南',
    summary: '本文总结了使用Vue 3 + TypeScript + Vite搭建现代前端项目的最佳实践，包括项目结构、组件设计、状态管理、性能优化等方面的经验。',
    date: '2023-10-22',
    category: {
      name: '前端开发',
      color: 'purple'
    },
    tags: [
      { name: 'Vue3', color: 'purple' },
      { name: 'TypeScript', color: 'blue' },
      { name: 'Vite', color: 'green' }
    ],
    author: {
      name: 'Alex Zhang',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: '1.8k',
      likes: 245,
      comments: 36
    },
    coverImage: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80'
  },
  {
    id: 2,
    title: 'Apache Flink实时计算平台的构建与优化',
    summary: '详细介绍了如何使用Apache Flink构建企业级实时计算平台，包括架构设计、数据源接入、任务调度、监控告警以及性能调优等关键环节。',
    date: '2023-10-21',
    category: {
      name: '大数据',
      color: 'orange'
    },
    tags: [
      { name: 'Flink', color: 'orange' },
      { name: '大数据', color: 'orange' },
      { name: '实时计算', color: 'blue' }
    ],
    author: {
      name: 'Emily Wang',
      avatar: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: '1.2k',
      likes: 186,
      comments: 24
    },
    coverImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80'
  },
  {
    id: 3,
    title: 'Flutter 3.0跨平台应用开发实战',
    summary: '深入探讨了Flutter 3.0的新特性与改进，并通过一个完整的实战项目，展示如何使用Flutter开发高性能、美观的跨平台应用。',
    date: '2023-10-20',
    category: {
      name: '移动开发',
      color: 'blue'
    },
    tags: [
      { name: 'Flutter', color: 'blue' },
      { name: 'Dart', color: 'blue' },
      { name: '跨平台', color: 'purple' }
    ],
    author: {
      name: 'Kevin Liu',
      avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: '1.5k',
      likes: 210,
      comments: 32
    },
    coverImage: 'https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80'
  },
  {
    id: 4,
    title: 'Web应用安全漏洞分析与防御策略',
    summary: '全面分析了Web应用常见的安全漏洞，如XSS、CSRF、SQL注入、文件上传等，并提供了详细的防御策略和最佳实践。',
    date: '2023-10-19',
    category: {
      name: '网络安全',
      color: 'red'
    },
    tags: [
      { name: '网络安全', color: 'red' },
      { name: 'Web安全', color: 'red' },
      { name: '漏洞分析', color: 'orange' }
    ],
    author: {
      name: 'Jason Chen',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: '2.1k',
      likes: 276,
      comments: 45
    },
    coverImage: 'https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80'
  },
  {
    id: 5,
    title: 'Kubernetes多集群管理与GitOps实践',
    summary: '详细介绍了企业级Kubernetes多集群管理方案，以及如何结合GitOps理念实现应用的持续部署与配置管理，提高DevOps效率。',
    date: '2023-10-18',
    category: {
      name: '云计算',
      color: 'green'
    },
    tags: [
      { name: 'Kubernetes', color: 'blue' },
      { name: 'GitOps', color: 'green' },
      { name: 'DevOps', color: 'green' }
    ],
    author: {
      name: 'Daniel Zhao',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80'
    },
    stats: {
      views: '1.9k',
      likes: 238,
      comments: 29
    },
    coverImage: 'https://images.unsplash.com/photo-1607292676221-1a91fde2cb8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80'
  }
]);

</script>

<template>
<section id="my-articles-section" class="space-y-4 p-4">
    <div class="flex justify-between items-center mb-4">
        <h2 class="text-xl font-semibold">
           <i class="fas fa-file-alt text-primary mr-2"></i>
           我的文章
          </h2>
        <a v-if="!articles" href="#" class="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors duration-200">
            <i class="fas fa-plus mr-2"></i>发布文章
        </a>
        <div v-if="articles" class="flex space-x-2">
            <button class=" px-3 py-1.5 text-sm text-gray-600 hover:text-primary rounded-lg" 
            :class="{'activeButton': activeId === 0}"
            @click="activeId = 0">已发布</button>
            <button class="px-3 py-1.5 text-sm text-gray-600 hover:text-primary rounded-lg" 
            :class="{'activeButton': activeId === 1}"
            @click="activeId = 1">草稿箱</button>
        </div>
    </div>
    <div v-if="!articles" class="text-gray-500 text-center py-10">
        <i class="fas fa-box-open text-4xl mb-4"></i>
        <p>这里空空如也，快去发布你的第一篇文章吧！</p>
    </div>
    <!-- 最新文章 -->
    <div class="article-list-container">
            <ArticleListItem 
            v-for="(article, index) in articles" 
            :key="article.id" 
            :article="article"
            :class="{'article-list-item-last': index === articles.length - 1}"
            />
        </div>
</section>
</template>

<style scoped>
.activeButton {
    background-color: rgba(79, 70, 229, 0.1);
    color: rgb(79 70 229);
}

.article-list-container {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}
</style>