<script setup>

</script>

<template>
 <aside id="right-sidebar" class="right-sidebar">
    <div class="sidebar-card-right">
      <h3 class="sidebar-title sidebar-title-ranking">
        <i class="fas fa-trophy ranking-icon"></i>
        周榜
      </h3>
      <ul id="ranking-list" class="ranking-list">
        <li class="ranking-item">
          <span class="ranking-number number-1">1</span>
          <div class="ranking-content">
            <a href="#" id="ranking-article-1" class="ranking-article-title">深入理解JavaScript异步编程：从回调到Async/Await</a>
            <div class="ranking-stats">
              <span class="ranking-stat-item">
                <i class="far fa-eye"></i>
                3.2k
              </span>
              <span class="ranking-stat-divider">·</span>
              <span class="ranking-stat-item">
                <i class="far fa-thumbs-up"></i>
                521
              </span>
            </div>
          </div>
        </li>
        <li class="ranking-item">
          <span class="ranking-number number-2">2</span>
          <div class="ranking-content">
            <a href="#" id="ranking-article-2" class="ranking-article-title">LLM大模型微调技术实战：从理论到实践</a>
            <div class="ranking-stats">
              <span class="ranking-stat-item">
                <i class="far fa-eye"></i>
                3.1k
              </span>
              <span class="ranking-stat-divider">·</span>
              <span class="ranking-stat-item">
                <i class="far fa-thumbs-up"></i>
                458
              </span>
            </div>
          </div>
        </li>
        <li class="ranking-item">
          <span class="ranking-number number-3">3</span>
          <div class="ranking-content">
            <a href="#" id="ranking-article-3" class="ranking-article-title">2023年前端开发趋势与最佳实践</a>
            <div class="ranking-stats">
              <span class="ranking-stat-item">
                <i class="far fa-eye"></i>
                2.8k
              </span>
              <span class="ranking-stat-divider">·</span>
              <span class="ranking-stat-item">
                <i class="far fa-thumbs-up"></i>
                432
              </span>
            </div>
          </div>
        </li>
        <li class="ranking-item">
          <span class="ranking-number number-4">4</span>
          <div class="ranking-content">
            <a href="#" id="ranking-article-4" class="ranking-article-title">Spring Boot 3.0新特性详解与实战案例</a>
            <div class="ranking-stats">
              <span class="ranking-stat-item">
                <i class="far fa-eye"></i>
                2.4k
              </span>
              <span class="ranking-stat-divider">·</span>
              <span class="ranking-stat-item">
                <i class="far fa-thumbs-up"></i>
                342
              </span>
            </div>
          </div>
        </li>
        <li class="ranking-item">
          <span class="ranking-number number-5">5</span>
          <div class="ranking-content">
            <a href="#" id="ranking-article-5" class="ranking-article-title">Web应用安全漏洞分析与防御策略</a>
            <div class="ranking-stats">
              <span class="ranking-stat-item">
                <i class="far fa-eye"></i>
                2.1k
              </span>
              <span class="ranking-stat-divider">·</span>
              <span class="ranking-stat-item">
                <i class="far fa-thumbs-up"></i>
                276
              </span>
            </div>
          </div>
        </li>
      </ul>
      <div class="view-all-link-container">
        <a href="P-RANKING.html" id="view-full-ranking" class="more-link">
          查看完整榜单
          <i class="fas fa-chevron-right more-icon"></i>
        </a>
      </div>
    </div>

    <div class="sidebar-card-right">
      <h3 class="sidebar-title sidebar-title-topic">
        <i class="fas fa-fire-flame-curved topic-icon"></i>
        热门话题
      </h3>
      <ul id="hot-topics" class="hot-topics-list">
        <li class="topic-item">
          <a href="#" id="topic-1" class="topic-link">
            <h4 class="topic-title"># 大型语言模型与AI应用</h4>
            <p class="topic-summary">
              讨论大型语言模型(LLM)的发展趋势、应用场景及实践经验
            </p>
            <div class="topic-footer">
              <span class="topic-participants">
                <i class="fas fa-users"></i>
                1.2k人参与
              </span>
              <span class="topic-status">进行中</span>
            </div>
          </a>
        </li>
        <li class="topic-item">
          <a href="#" id="topic-2" class="topic-link">
            <h4 class="topic-title"># 前端框架选型对比</h4>
            <p class="topic-summary">
              React vs Vue vs Angular vs Svelte，各框架优缺点与适用场景分析
            </p>
            <div class="topic-footer">
              <span class="topic-participants">
                <i class="fas fa-users"></i>
                856人参与
              </span>
              <span class="topic-status">进行中</span>
            </div>
          </a>
        </li>
        <li class="topic-item">
          <a href="#" id="topic-3" class="topic-link">
            <h4 class="topic-title"># 微服务架构实践</h4>
            <p class="topic-summary">
              分享微服务架构设计、实现与优化的经验，解决实际项目中的挑战
            </p>
            <div class="topic-footer">
              <span class="topic-participants">
                <i class="fas fa-users"></i>
                732人参与
              </span>
              <span class="topic-status">进行中</span>
            </div>
          </a>
        </li>
      </ul>
      <div class="view-all-link-container">
        <a href="P-TOPIC_DISCUSSION.html" id="view-more-topics" class="more-link">
          查看更多话题
          <i class="fas fa-chevron-right more-icon"></i>
        </a>
      </div>
    </div>

    <div class="sidebar-card-right">
      <h3 class="sidebar-title sidebar-title-author">
        <i class="fas fa-user-pen author-icon"></i>
        活跃作者
      </h3>
      <ul id="active-authors" class="active-authors-list">
        <li class="author-item">
          <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar-large" />
          <div class="author-details">
            <h4 class="author-name-large">David Chen</h4>
            <p class="author-stats">前端开发 | 42篇文章</p>
          </div>
          <button @click="followAuthor" id="follow-author-1" class="follow-button">
            <i class="fas fa-plus"></i>
            关注
          </button>
        </li>
        <li class="author-item">
          <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar-large" />
          <div class="author-details">
            <h4 class="author-name-large">Sarah Lin</h4>
            <p class="author-stats">人工智能 | 38篇文章</p>
          </div>
          <button @click="followAuthor" id="follow-author-2" class="follow-button">
            <i class="fas fa-plus"></i>
            关注
          </button>
        </li>
        <li class="author-item">
          <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="作者头像" class="author-avatar-large" />
          <div class="author-details">
            <h4 class="author-name-large">Michael Wu</h4>
            <p class="author-stats">后端开发 | 35篇文章</p>
          </div>
          <button @click="followAuthor" id="follow-author-3" class="follow-button">
            <i class="fas fa-plus"></i>
            关注
          </button>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style scoped>

.right-sidebar {
    display: none;
    width: 18rem;
    flex-shrink: 0;
    position: sticky;
    top: 3rem; 
    right: 1rem;
}
@media (min-width: 1440px) {
    .right-sidebar {
        display: inline-block;
    }
}

.sidebar-card-right {
    background-color: #ffffff;
    border-radius: 0.75rem;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    padding: 1rem;
    margin-bottom: 1.5rem;
}
.sidebar-card-right:first-child {
    position: sticky;
    top: 5rem;
}

.sidebar-title {
    color: #1f2937;
    font-weight: 700;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
}
.ranking-icon {
    color: #f59e0b;
    margin-right: 0.5rem;
}
.topic-icon {
    color: #ef4444;
    margin-right: 0.5rem;
}
.author-icon {
    color: #3b82f6;
    margin-right: 0.5rem;
}

/* 排行榜 */
.ranking-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}

.ranking-item {
    display: flex;
    align-items: flex-start;
}

.ranking-number {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5rem;
    height: 1.5rem;
    font-size: 0.75rem;
    font-weight: 700;
    border-radius: 9999px;
    margin-right: 0.75rem;
    margin-top: 0.25rem;
    color: #ffffff;
}
.number-1 {
    background-color: #4f46e5;
}
.number-2 {
    background-color: #6366f1;
}
.number-3 {
    background-color: #f59e0b;
}
.number-4,
.number-5 {
    background-color: #e5e7eb;
    color: #374151;
}

.ranking-content {
    flex: 1;
    min-width: 0;
}

.ranking-article-title {
    color: #1f2937;
    font-weight: 500;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
.ranking-article-title:hover {
    color: #4f46e5;
}

.ranking-stats {
    display: flex;
    align-items: center;
    margin-top: 0.25rem;
    font-size: 0.75rem;
    color: #6b7280;
}
.ranking-stat-divider {
    margin: 0 0.5rem;
}
.ranking-stat-item i {
    margin-right: 0.25rem;
}

.view-all-link-container {
    margin-top: 0.75rem;
    text-align: center;
}

/* 热门话题 */
.hot-topics-list {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
}
.topic-item {
    background-color: #f9fafb;
    border-radius: 0.5rem;
    padding: 0.75rem;
    transition: all 0.2s ease;
}
.topic-item:hover {
    background-color: #f3f4f6;
}

.topic-link {
    display: block;
}

.topic-title {
    color: #1f2937;
    font-weight: 500;
    margin-bottom: 0.25rem;
}

.topic-summary {
    color: #4b5563;
    font-size: 0.875rem;
    margin-bottom: 0.5rem;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
}

.topic-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 0.75rem;
}
.topic-participants {
    color: #6b7280;
}
.topic-participants i {
    margin-right: 0.25rem;
}
.topic-status {
    color: #4f46e5;
}

/* 活跃作者 */
.active-authors-list {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.author-item {
    display: flex;
    align-items: center;
}

.author-avatar-large {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 9999px;
    object-fit: cover;
}

.author-details {
    margin-left: 0.75rem;
    flex: 1;
    min-width: 0;
}

.author-name-large {
    color: #1f2937;
    font-weight: 500;
}

.author-stats {
    color: #6b7280;
    font-size: 0.75rem;
}

.follow-button {
    color: #4f46e5;
    font-size: 0.875rem;
    font-weight: 500;
    background: none;
    border: none;
    cursor: pointer;
}
.follow-button:hover {
    color: #6366f1;
}
.follow-button i {
    margin-right: 0.25rem;
}
</style>