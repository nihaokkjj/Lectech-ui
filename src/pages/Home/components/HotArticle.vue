<script setup>

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
      <article id="hot-article-1" class="article-card card-hover">
        <div class="article-content">
          <div class="article-meta">
            <span class="category-tag category-tag-blue">后端开发</span>
            <span class="meta-item">
              <i class="far fa-clock"></i>
              2023-10-18
            </span>
          </div>
          <h3 class="article-title">
            Spring Boot 3.0新特性详解与实战案例
          </h3>
          <p class="article-summary">
            本文详细介绍了Spring Boot 3.0的核心新特性，包括对Java 17的支持、GraalVM原生镜像、新的Observability API等，并通过实战案例展示如何应用。
          </p>
          <div class="article-footer">
            <div class="author-info">
              <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar" />
              <span class="author-name">Michael Wu</span>
            </div>
            <div class="article-stats">
              <span class="stat-item">
                <i class="far fa-eye"></i>
                2.4k
              </span>
              <span class="stat-item">
                <i class="far fa-thumbs-up"></i>
                342
              </span>
              <span class="stat-item">
                <i class="far fa-comment"></i>
                56
              </span>
            </div>
          </div>
        </div>
      </article>
      <article id="hot-article-2" class="article-card card-hover">
        <div class="article-content">
          <div class="article-meta">
            <span class="category-tag category-tag-green">人工智能</span>
            <span class="meta-item">
              <i class="far fa-clock"></i>
              2023-10-20
            </span>
          </div>
          <h3 class="article-title">
            LLM大模型微调技术实战：从理论到实践
          </h3>
          <p class="article-summary">
            详细介绍了大型语言模型(LLM)的微调技术，包括LoRA、QLoRA等低资源微调方法，以及如何在消费级GPU上进行有效的模型定制训练。
          </p>
          <div class="article-footer">
            <div class="author-info">
              <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar" />
              <span class="author-name">Sarah Lin</span>
            </div>
            <div class="article-stats">
              <span class="stat-item">
                <i class="far fa-eye"></i>
                3.1k
              </span>
              <span class="stat-item">
                <i class="far fa-thumbs-up"></i>
                458
              </span>
              <span class="stat-item">
                <i class="far fa-comment"></i>
                72
              </span>
            </div>
          </div>
        </div>
      </article>
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