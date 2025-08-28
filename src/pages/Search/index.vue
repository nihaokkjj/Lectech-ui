<script setup>
import { ref, watch } from 'vue'
import { useRoute } from 'vue-router'
import ArticleListItem from '../../components/ArticleListItem.vue';

// 获取路由实例
const route = useRoute();

// 搜索关键词的响应式变量
const searchQuery = ref(route.query.keyword || ''); // 默认值，实际会从路由获取

// 高亮关键词的函数
const highlightKeyword = (text, keyword) => {
  if (!text || !keyword) {
    return text;
  }
  const regex = new RegExp(keyword, 'gi');
  return text.replace(regex, `<span class="highlight-keyword">${keyword}</span>`);
};

// 搜索结果数据的响应式变量
const searchResults = ref([
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

const sortOptions = ref([
  { value: 'relevance', name: '按相关度' },
  { value: 'time', name: '按时间' },
  { value: 'popularity', name: '按热度' },
]);
const selectedSort = ref('relevance');

const filterCategories = ref([
  { id: 'all', name: '全部' },
  { id: 'frontend', name: '前端开发' },
  { id: 'backend', name: '后端开发' },
  { id: 'ai', name: '人工智能' },
  { id: 'more', name
  : '更多' },
]);
const activeCategoryFilter = ref('all');

const filterTags = ref([
  { id: '1', name: 'Python' },
  { id: '2', name: 'Vue3' },
  { id: '3', name: '后端' },
])
console.log(filterTags.value)
const activeTags = ref([0]);

const searchCount = ref(24);

// 监听路由参数变化，更新页面显示
const updateSearchPage = () => {
  const keyword = route.query.keyword || '';
  const categoryId = route.query.category_id;
  const tagIds = route.query.tagIds;

  // 更新搜索关键词显示
  searchQuery.value = keyword;

  // 在实际应用中，这里会根据路由参数调用 API 重新获取数据
  console.log('当前搜索关键词:', keyword);
  if (categoryId) console.log('当前筛选分类:', categoryId);
  if (tagIds) console.log('当前筛选标签:', tagIds);
  // 模拟更新结果数量
  searchCount.value = Math.floor(Math.random() * 50) + 10;
};

// 监听路由变化
watch(() => route.query, () => {
  updateSearchPage();
}, { immediate: true });

// 方法：切换排序方式
const handleSortChange = () => {
  console.log('排序方式切换为:', selectedSort.value);
};

// 方法：切换分类筛选
const toggleCategoryFilter = (categoryId) => {
  activeCategoryFilter.value = categoryId;
  console.log('分类筛选:', categoryId);
  // 实际应用中，这里会更新路由并重新获取数据
};

// 方法：切换标签筛选
const toggleTagFilter = (tagId) => {
  const index = activeTags.value.indexOf(tagId);
  if (index > -1) {
    activeTags.value.splice(index, 1);
  } else {
    activeTags.value.push(tagId);
  }
  console.log('标签筛选:', activeTags.value);
};
</script>

<template>
  <main class="main-container">
    <div class="main-content">
      <section id="search-header" class="search-header-section">
        <div class="search-header-container">
          <div class="search-title-group">
            <h2 class="search-title">
              <i class="fas fa-search search-icon"></i>
              搜索结果: <span id="search-keyword" class="search-keyword">{{searchQuery}}</span>
            </h2>
            <p class="search-count-text">找到 <span id="search-count" class="search-count">{{ searchCount }}</span> 条相关结果</p>
          </div>
          <div class="sort-container">
            <div class="sort-select-wrapper">
              <select
                id="sort-select"
                class="sort-select"
                v-model="selectedSort"
                @change="handleSortChange"
              >
                <option v-for="option in sortOptions" :key="option.value" :value="option.value">
                  {{ option.name }}
                </option>
              </select>
              <div class="sort-icon-wrapper">
                <i class="fas fa-chevron-down sort-icon"></i>
              </div>
          </div>
          </div>
        </div>

        <div id="filter-section" class="filter-section">
          <div class="filter-group">
            <div class="filter-item">
              <span class="filter-label">分类:</span>
              <div class="filter-tags-list">
                <button
                  v-for="filter in filterCategories"
                  :key="filter.id"
                  :id="'filter-' + filter.id"
                  class="filter-tag"
                  :class="{ 'filter-tag--active': activeCategoryFilter === filter.id }"
                  @click="toggleCategoryFilter(filter.id)"
                >
                  {{ filter.name }}
                  <i v-if="filter.id === 'more'" class="fas fa-chevron-down more-icon"></i>
                </button>
              </div>
            </div>
            <div class="filter-item">
              <span class="filter-label">标签:</span>
              <div class="filter-tags-list">
                <button
                  v-for="tag in filterTags"
                  :key="tag.id"
                  :id="'tag-filter-' + tag.id"
                  class="filter-tag"
                  :class="{ 'filter-tag--active': activeTags.includes(tag.id) }"
                  @click="toggleTagFilter(tag.id)"
                >
                  {{ tag.name }}
                  <i v-if="tag.id === 'more'" class="fas fa-chevron-down more-icon"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- 搜索结果内容展示 -->
    <div class="search-results">
        <ArticleListItem 
          v-for="(article, index) in searchResults" 
          :key="article.id" 
          :article="article"
        />
    </div>
    </div>
  </main>

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

  <footer id="main-footer" class="main-footer">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-logo-group">
          <span class="footer-logo-primary">lec</span>
          <span class="footer-logo-secondary">tech</span>
        </div>
        <p class="footer-slogan">专注于技术知识分享、交流与成长的论坛平台</p>
      </div>
      <div class="footer-links-group">
        <div class="footer-links-column">
          <h4 class="footer-links-title">关于我们</h4>
          <ul class="footer-links-list">
            <li><a href="#" class="footer-link">平台介绍</a></li>
            <li><a href="#" class="footer-link">联系我们</a></li>
            <li><a href="#" class="footer-link">加入我们</a></li>
          </ul>
        </div>
        <div class="footer-links-column">
          <h4 class="footer-links-title">帮助中心</h4>
          <ul class="footer-links-list">
            <li><a href="#" class="footer-link">常见问题</a></li>
            <li><a href="#" class="footer-link">用户指南</a></li>
            <li><a href="#" class="footer-link">内容规范</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-copyright-section">
      <p class="footer-copyright-text">© 2023 lectech. All rights reserved.</p>
    </div>
  </footer>
</template>

<style>
/* 自定义颜色和阴影变量 */
:root {
  --color-primary: #4F46E5;
  --color-secondary: #6366F1;
  --color-tertiary: #10B981;
  --color-danger: #EF4444;
  --color-warning: #F59E0B;
  --color-info: #3B82F6;
  --color-light: #F3F4F6;
  --color-dark: #1F2937;
  --color-gray-50: #F9FAFB;
  --color-gray-100: #F3F4F6;
  --color-gray-200: #E5E7EB;
  --color-gray-300: #D1D5DB;
  --color-gray-400: #9CA3AF;
  --color-gray-500: #6B7280;
  --color-gray-600: #4B5563;
  --color-gray-700: #374151;
  --color-gray-800: #1F2937;
  --color-gray-900: #111827;
  
  --shadow-card: 0 4px 12px rgba(0, 0, 0, 0.05);
  --shadow-nav: 0 2px 10px rgba(0, 0, 0, 0.05);
  --shadow-btn: 0 2px 5px rgba(79, 70, 229, 0.2);
  --shadow-hover: 0 8px 16px rgba(0, 0, 0, 0.1);
}

/* 全局基础样式 */
body {
  background-color: var(--color-gray-50);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  color: var(--color-gray-800);
}

.main-container {
  /* max-width: 1280px; */
  margin-left: auto;
  margin-right: auto;
  padding-top: 0rem;
  padding-bottom: 2rem;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
}

.main-content {
  flex: 1 1 0%;
  min-width: 0;
}

/* 搜索结果头部 */
.search-header-section {
  margin-bottom: 1.5rem;
}

.search-header-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .search-header-container {
    flex-direction: row;
    align-items: center;
  }
}

.search-title-group {
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .search-title-group {
    margin-bottom: 0;
  }
}

.search-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--color-gray-800);
  display: flex;
  align-items: center;
}

.search-icon {
  color: var(--color-primary);
  margin-right: 0.5rem;
}

.search-keyword {
  color: var(--color-primary);
  margin-left: 0.5rem;
}

.search-count-text {
  color: var(--color-gray-500);
  font-size: 0.875rem;
  margin-top: 0.25rem;
}

.search-count {
  font-weight: 500;
}

.sort-container {
  display: flex;
  align-items: center;
}

.sort-select-wrapper {
  position: relative;
}

.sort-select {
  appearance: none;
  background-color: white;
  border: 1px solid var(--color-gray-200);
  border-radius: 0.5rem;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 0.75rem;
  padding-right: 2rem;
  font-size: 0.875rem;
  outline: none;
}
.sort-select:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
  box-shadow: 0 0 0 2px var(--color-primary);
}

.sort-icon-wrapper {
  pointer-events: none;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  color: var(--color-gray-500);
}

.sort-icon {
  font-size: 0.75rem;
}

/* 搜索结果 */
.search-results {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

/* 筛选条件 */
.filter-section {
  background-color: white;
  border-radius: 0.75rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  padding: 1rem;
  margin-bottom: 1.5rem;
}

.filter-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.filter-item {
  display: flex;
  align-items: center;
}

.filter-label {
  color: var(--color-gray-600);
  font-size: 0.875rem;
  margin-right: 0.5rem;
}

.filter-tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.filter-tag {
  font-size: 0.75rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
  border-radius: 9999px;
  color: var(--color-gray-600);
  background-color: var(--color-gray-100);
  transition: all 0.2s ease;
}
.filter-tag:hover {
  background-color: rgba(79, 70, 229, 0.1);
  color: var(--color-primary);
}
.filter-tag--active {
  color: var(--color-primary);
  background-color: rgba(79, 70, 229, 0.1);
}

.more-icon {
  font-size: 0.75rem;
  margin-left: 0.25rem;
}

@media (min-width: 768px) {
  .search-results {
    flex-direction: row;
  }
}

.article-content {
  flex: 1 1 0%;
  min-width: 0;
}

.icon-small {
  margin-right: 0.25rem;
}

.icon-stats {
  margin-right: 0.25rem;
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

/* 底部版权信息 */
.main-footer {
  background-color: white;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  margin-top: 2rem;
}

.footer-container {
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1rem;
  padding-right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}
@media (min-width: 768px) {
  .footer-container {
    flex-direction: row;
  }
}

.footer-content {
  margin-bottom: 1rem;
}
@media (min-width: 768px) {
  .footer-content {
    margin-bottom: 0;
  }
}

.footer-logo-group {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media (min-width: 768px) {
  .footer-logo-group {
    justify-content: flex-start;
  }
}

.footer-logo-primary {
  color: var(--color-primary);
  font-size: 1.25rem;
  font-weight: 700;
  margin-right: 0.25rem;
}

.footer-logo-secondary {
  color: var(--color-gray-800);
  font-size: 1.25rem;
  font-weight: 700;
}

.footer-slogan {
  color: var(--color-gray-500);
  font-size: 0.875rem;
  margin-top: 0.5rem;
  text-align: center;
}
@media (min-width: 768px) {
  .footer-slogan {
    text-align: left;
  }
}

.footer-links-group {
  display: flex;
  gap: 2rem;
}

.footer-links-title {
  color: var(--color-gray-800);
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.footer-link {
  color: var(--color-gray-500);
  font-size: 0.875rem;
}
.footer-link:hover {
  color: var(--color-primary);
}

.footer-copyright-section {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid var(--color-gray-200);
  text-align: center;
}

.footer-copyright-text {
  color: var(--color-gray-500);
  font-size: 0.875rem;
}

/* 高亮关键词的样式 */
.highlight-keyword {
  background-color: yellow; /* 比如，黄色背景 */
  font-weight: bold;
  color: black;
}
.tag {
  transition: all 0.2s ease;
}

.tag:hover {
  background-color: rgba(79, 70, 229, 0.1);
  color: #4F46E5;
}

</style>