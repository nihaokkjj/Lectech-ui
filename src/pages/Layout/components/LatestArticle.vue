<script setup>
import { ref } from 'vue';

const latestSort = ref(true);

const toggleSort = (isLatest) => {
  latestSort.value = isLatest;
}
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

    <div class="article-list-container">
      <article id="article-1" class="article-list-item">
        <div class="article-main-content">
          <div class="flex-1 min-w-0">
            <div class="article-meta">
              <span class="category-tag category-tag-purple">前端开发</span>
              <span class="meta-item">
                <i class="far fa-clock"></i>
                2023-10-22
              </span>
            </div>
            <h3 class="article-title-list">
              Vue 3 + TypeScript + Vite 项目最佳实践指南
            </h3>
            <p class="article-summary-list">
              本文总结了使用Vue 3 + TypeScript + Vite搭建现代前端项目的最佳实践，包括项目结构、组件设计、状态管理、性能优化等方面的经验。
            </p>
            <div class="tag-list">
              <span class="tag">Vue3</span>
              <span class="tag">TypeScript</span>
              <span class="tag">Vite</span>
            </div>
            <div class="article-footer-list">
              <div class="author-info">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar" />
                <span class="author-name">Alex Zhang</span>
              </div>
              <div class="article-stats">
                <span class="stat-item">
                  <i class="far fa-eye"></i>
                  1.8k
                </span>
                <span class="stat-item">
                  <i class="far fa-thumbs-up"></i>
                  245
                </span>
                <span class="stat-item">
                  <i class="far fa-comment"></i>
                  36
                </span>
              </div>
            </div>
          </div>
          <div class="article-cover">
            <img src="https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80" alt="文章配图" class="cover-image" />
          </div>
        </div>
      </article>
      <article id="article-2" class="article-list-item">
        <div class="article-main-content">
          <div class="flex-1 min-w-0">
            <div class="article-meta">
              <span class="category-tag category-tag-orange">大数据</span>
              <span class="meta-item">
                <i class="far fa-clock"></i>
                2023-10-21
              </span>
            </div>
            <h3 class="article-title-list">
              Apache Flink实时计算平台的构建与优化
            </h3>
            <p class="article-summary-list">
              详细介绍了如何使用Apache Flink构建企业级实时计算平台，包括架构设计、数据源接入、任务调度、监控告警以及性能调优等关键环节。
            </p>
            <div class="tag-list">
              <span class="tag">Flink</span>
              <span class="tag">大数据</span>
              <span class="tag">实时计算</span>
            </div>
            <div class="article-footer-list">
              <div class="author-info">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar" />
                <span class="author-name">Emily Wang</span>
              </div>
              <div class="article-stats">
                <span class="stat-item">
                  <i class="far fa-eye"></i>
                  1.2k
                </span>
                <span class="stat-item">
                  <i class="far fa-thumbs-up"></i>
                  186
                </span>
                <span class="stat-item">
                  <i class="far fa-comment"></i>
                  24
                </span>
              </div>
            </div>
          </div>
          <div class="article-cover">
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80" alt="文章配图" class="cover-image" />
          </div>
        </div>
      </article>
      <article id="article-3" class="article-list-item">
        <div class="article-main-content">
          <div class="flex-1 min-w-0">
            <div class="article-meta">
              <span class="category-tag category-tag-blue">移动开发</span>
              <span class="meta-item">
                <i class="far fa-clock"></i>
                2023-10-20
              </span>
            </div>
            <h3 class="article-title-list">
              Flutter 3.0跨平台应用开发实战
            </h3>
            <p class="article-summary-list">
              深入探讨了Flutter 3.0的新特性与改进，并通过一个完整的实战项目，展示如何使用Flutter开发高性能、美观的跨平台应用。
            </p>
            <div class="tag-list">
              <span class="tag">Flutter</span>
              <span class="tag">Dart</span>
              <span class="tag">跨平台</span>
            </div>
            <div class="article-footer-list">
              <div class="author-info">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar" />
                <span class="author-name">Kevin Liu</span>
              </div>
              <div class="article-stats">
                <span class="stat-item">
                  <i class="far fa-eye"></i>
                  1.5k
                </span>
                <span class="stat-item">
                  <i class="far fa-thumbs-up"></i>
                  210
                </span>
                <span class="stat-item">
                  <i class="far fa-comment"></i>
                  32
                </span>
              </div>
            </div>
          </div>
          <div class="article-cover">
            <img src="https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80" alt="文章配图" class="cover-image" />
          </div>
        </div>
      </article>
      <article id="article-4" class="article-list-item">
        <div class="article-main-content">
          <div class="flex-1 min-w-0">
            <div class="article-meta">
              <span class="category-tag category-tag-red">网络安全</span>
              <span class="meta-item">
                <i class="far fa-clock"></i>
                2023-10-19
              </span>
            </div>
            <h3 class="article-title-list">
              Web应用安全漏洞分析与防御策略
            </h3>
            <p class="article-summary-list">
              全面分析了Web应用常见的安全漏洞，如XSS、CSRF、SQL注入、文件上传等，并提供了详细的防御策略和最佳实践。
            </p>
            <div class="tag-list">
              <span class="tag">网络安全</span>
              <span class="tag">Web安全</span>
              <span class="tag">漏洞分析</span>
            </div>
            <div class="article-footer-list">
              <div class="author-info">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar" />
                <span class="author-name">Jason Chen</span>
              </div>
              <div class="article-stats">
                <span class="stat-item">
                  <i class="far fa-eye"></i>
                  2.1k
                </span>
                <span class="stat-item">
                  <i class="far fa-thumbs-up"></i>
                  276
                </span>
                <span class="stat-item">
                  <i class="far fa-comment"></i>
                  45
                </span>
              </div>
            </div>
          </div>
          <div class="article-cover">
            <img src="https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80" alt="文章配图" class="cover-image" />
          </div>
        </div>
      </article>
      <article id="article-5" class="article-list-item-last">
        <div class="article-main-content">
          <div class="flex-1 min-w-0">
            <div class="article-meta">
              <span class="category-tag category-tag-green">云计算</span>
              <span class="meta-item">
                <i class="far fa-clock"></i>
                2023-10-18
              </span>
            </div>
            <h3 class="article-title-list">
              Kubernetes多集群管理与GitOps实践
            </h3>
            <p class="article-summary-list">
              详细介绍了企业级Kubernetes多集群管理方案，以及如何结合GitOps理念实现应用的持续部署与配置管理，提高DevOps效率。
            </p>
            <div class="tag-list">
              <span class="tag">Kubernetes</span>
              <span class="tag">GitOps</span>
              <span class="tag">DevOps</span>
            </div>
            <div class="article-footer-list">
              <div class="author-info">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar" />
                <span class="author-name">Daniel Zhao</span>
              </div>
              <div class="article-stats">
                <span class="stat-item">
                  <i class="far fa-eye"></i>
                  1.9k
                </span>
                <span class="stat-item">
                  <i class="far fa-thumbs-up"></i>
                  238
                </span>
                <span class="stat-item">
                  <i class="far fa-comment"></i>
                  29
                </span>
              </div>
            </div>
          </div>
          <div class="article-cover">
            <img src="https://images.unsplash.com/photo-1607292676221-1a91fde2cb8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=192&h=112&q=80" alt="文章配图" class="cover-image" />
          </div>
        </div>
      </article>
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

/* 最新文章列表 */
.latest-icon {
  color: #4f46e5;
  margin-left: 7rem;
  margin-right: 16rem;
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

.sort-buttons {
  display: none;
  align-items: center;
  background-color: #ffffff;
  border-radius: 0.5rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
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
  color: #4f46e5;
}
.sort-buttons button.active {
  color: #4f46e5;
  background-color: rgba(79, 70, 229, 0.1);
}

.article-list-container {
  background-color: #ffffff;
  border-radius: 0.75rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
}

.article-list-item {
  border-bottom: 1px solid #e5e7eb;
  padding: 1rem;
  transition: all 0.2s ease;
}
.article-list-item:hover {
  background-color: rgba(243, 244, 246, 0.5);
}

.article-list-item-last {
  padding: 1rem;
  transition: all 0.2s ease;
}
.article-list-item-last:hover {
  background-color: rgba(243, 244, 246, 0.5);
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
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.tag-list {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
}
.tag {
  font-size: 0.75rem;
  color: #4b5563;
  background-color: #f3f4f6;
  padding: 0.25rem 0.5rem;
  border-radius: 9999px;
  transition: all 0.2s ease;
}
.tag:hover {
  background-color: rgba(79, 70, 229, 0.1);
  color: #4f46e5;
}

.article-footer-list {
  display: flex;
  align-items: center;
  justify-content: space-between;
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