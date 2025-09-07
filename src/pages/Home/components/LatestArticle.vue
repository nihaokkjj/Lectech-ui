<script setup>
import { ref } from 'vue';
import ArticleListItem from '../../../components/ArticleListItem.vue'

const latestSort = ref(true);

const toggleSort = (isLatest) => {
  latestSort.value = isLatest;
}

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
  <section id="latest-articles">
    <div class="section-header">
      <div class="flex items-center space-x-4">
        <h2 class="section-title">
          <i class="fas fa-clock latest-icon"></i>
          最新文章
        </h2>
        <div class="sort-buttons">
          <button
            @click="toggleSort(true)"
            :class="{ active: latestSort }"
          >
            最新发布
          </button>
          <button
            @click="toggleSort(false)"
            :class="{ active: !latestSort }"
          >
            热门推荐
          </button>
        </div>
      </div>
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

    <div class="pagination-container">
      <nav id="pagination" class="pagination">
        <a href="#" id="page-prev" class="pagination-link pagination-prev">
          <i class="fas fa-chevron-left"></i>
        </a>
        <a href="#" id="page-1" class="pagination-link pagination-current">1</a>
        <a href="#" id="page-2" class="pagination-link">2</a>
        <a href="#" id="page-3" class="pagination-link">3</a>
        <span class="pagination-ellipsis">...</span>
        <a href="#" id="page-10" class="pagination-link">10</a>
        <a href="#" id="page-next" class="pagination-link pagination-next">
          <i class="fas fa-chevron-right"></i>
        </a>
      </nav>
    </div>
  </section>
</template>

<style scoped>

/* === 文章卡片公用样式 === */
.article-card {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

.card-hover:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.article-content {
  padding: 1rem;
}

.article-meta {
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
}

.category-tag {
  font-size: 0.75rem;
  font-weight: 500;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
}
.category-tag-blue {
  background-color: #dbeafe;
  color: #2563eb;
}
.category-tag-green {
  background-color: #d1fae5;
  color: #059669;
}
.category-tag-purple {
  background-color: #F3E8FF;
  color: #9333EA;
}
.category-tag-orange {
  background-color: #FFEDD5;
  color: #EA580C;
}
.category-tag-red {
  background-color: #FEE2E2;
  color: #DC2626;
}


/* 最新文章列表 */
.latest-icon {
  align-items: center;
  color: #4f46e5;
  margin-left: 1rem;
  margin-right: 1rem;
}

.section-header {
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
}

.sort-buttons {
  outline: none;
  border-color:  #4f46e5;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .sort-buttons {
    display: flex;
  }
}
.sort-buttons button {
  padding: 0.375rem 0.75rem;
  font-size: 0.875rem;
  border-radius: 0.5rem;
  background: none;
  border: none;
  cursor: pointer;
  color: #4b5563;
  transition: all 0.2s ease;
}
.sort-buttons button:hover {
  outline: none;
  color: #4f46e5;
  border: none;
}
.sort-buttons button.active {
  color: #4f46e5;
  background-color: rgba(79, 70, 229, 0.1);
  border: none;
}

.article-list-container {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

/* 分页 */
.pagination-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.pagination {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  padding: 0.25rem;
}

.pagination-link {
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #4b5563;
  border-radius: 0.5rem;
}
.pagination-link:hover {
  background-color: #f3f4f6;
}

.pagination-current {
  color: #ffffff;
  background-color: #4f46e5;
}
.pagination-current:hover {
  background-color: #4f46e5;
}

.pagination-prev,
.pagination-next {
  color: #6b7280;
}

.pagination-ellipsis {
  width: 2.25rem;
  height: 2.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
}
</style>