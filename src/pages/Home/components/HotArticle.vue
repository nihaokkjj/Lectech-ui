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
      <a href="#" id="more-hot-articles" class="more-link">
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
.hot-articles-section {
  margin-top: 5rem;
  margin-bottom: 1.5rem;
}

.section-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #1f2937;
  display: flex;
  align-items: center;
}

.hot-icon {
  color: #ef4444;
  margin-right: 0.5rem;
}

.more-link {
  color: #4f46e5;
  font-size: 0.875rem;
}

.more-link:hover {
  text-decoration: underline;
}

.more-icon {
  font-size: 0.75rem;
  margin-left: 0.25rem;
}

.hot-articles-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1rem;
}
@media (min-width: 768px) {
  .hot-articles-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

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

.meta-item {
  color: #6b7280;
  font-size: 0.75rem;
  margin-left: 0.75rem;
}
.meta-item i {
  margin-right: 0.25rem;
}

.article-title {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-summary {
  color: #4b5563;
  font-size: 0.875rem;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.article-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.author-info {
  display: flex;
  align-items: center;
}

.author-avatar {
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 9999px;
  object-fit: cover;
}

.author-name {
  color: #374151;
  font-size: 0.875rem;
  margin-left: 0.5rem;
}

.article-stats {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #6b7280;
  font-size: 0.875rem;
}
.stat-item i {
  margin-right: 0.25rem;
}
</style>