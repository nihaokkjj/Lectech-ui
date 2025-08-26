<!-- 功能用途:展示文章信息的卡片 -->

<script setup>
import { defineProps } from 'vue';

defineProps({
  article: {
    type: Object,
    required: true
  }
});
</script>

<template>
  <article class="article-list-item">
    <div class="article-main-content">
      <div class="flex-1 min-w-0">
        <div class="article-meta">
          <span :class="['category-tag', `category-tag-${article.category.color}`]">{{ article.category.name }}</span>
          <span class="meta-item">
            <i class="far fa-clock"></i>
            {{ article.date }}
          </span>
        </div>
        <h3 class="article-title-list">
          {{ article.title }}
        </h3>
        <p class="article-summary-list">
          {{ article.summary }}
        </p>
        <div class="tag-list">
          <span v-for="tag in article.tags" :key="tag.name" :class="['tag', `tag-${tag.color}`]">{{ tag.name }}</span>
        </div>
        <div class="article-footer-list">
          <div class="author-info">
            <img :src="article.author.avatar" :alt="article.author.name" class="author-avatar" />
            <span class="author-name">{{ article.author.name }}</span>
          </div>
          <div class="article-stats">
            <span class="stat-item">
              <i class="far fa-eye"></i>
              {{ article.stats.views }}
            </span>
            <span class="stat-item">
              <i class="far fa-thumbs-up"></i>
              {{ article.stats.likes }}
            </span>
            <span class="stat-item">
              <i class="far fa-comment"></i>
              {{ article.stats.comments }}
            </span>
          </div>
        </div>
      </div>
      <div class="article-cover" v-if="article.coverImage">
        <img :src="article.coverImage" alt="文章配图" class="cover-image" />
      </div>
    </div>
  </article>
</template>

<style scoped>
/* === 通用标签样式 === */
.tag {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  transition: all 0.2s ease;
}

/* === 普通标签颜色 === */
.tag-default {
  color: #4b5563;
  background-color: #f3f4f6;
}
.tag-default:hover {
  background-color: rgba(79, 70, 229, 0.1);
  color: #4f46e5;
}

/* === 分类标签颜色 (已从原代码中迁移) === */
.category-tag-blue, .tag-blue {
  background-color: #dbeafe;
  color: #2563eb;
}
.category-tag-green, .tag-green {
  background-color: #d1fae5;
  color: #059669;
}
.category-tag-purple, .tag-purple {
  background-color: #F3E8FF;
  color: #9333EA;
}
.category-tag-orange, .tag-orange {
  background-color: #FFEDD5;
  color: #EA580C;
}
.category-tag-red, .tag-red {
  background-color: #FEE2E2;
  color: #DC2626;
}

/* ... (其他样式保持不变) */

.article-list-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem;
  transition: all 0.2s ease;
}
.article-list-item:hover {
  background-color: rgba(243, 244, 246, 0.5);
}

.article-list-item:last-child {
  border-bottom: none;
}

.article-main-content {
  display: flex;
  flex-direction: column;
}
@media (min-width: 768px) {
  .article-main-content {
    flex-direction: row;
  }
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

.meta-item {
  font-size:0.75rem;
  color: #6B7280;
  padding: .25rem .5rem;
}

.article-title-list {
  font-size: 1.125rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}
.article-title-list:hover {
  color: #4f46e5;
  transition: all 0.2s ease;
}

.article-summary-list {
  color: #4b5563;
  font-size: 0.875rem;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  text-indent: 2em; /* 2em 表示缩进两个中文字符的宽度 */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: left;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}


.article-footer-list {
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

.article-cover {
  margin-top: 0.75rem;
  flex-shrink: 0;
}
@media (min-width: 768px) {
  .article-cover {
    margin-top: 0;
    margin-left: 1rem;
    width: 12rem;
    height: 7rem;
  }
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}
</style>