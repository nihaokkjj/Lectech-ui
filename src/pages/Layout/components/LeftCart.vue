<script setup>

</script>

<template>
    <aside id="sidebar" class="sidebar">
      <div class="sidebar-card">
        <h3 id="categories-title" class="categories-title">文章分类</h3>
        <ul id="categories-list" class="categories-list">
          <li>
            <a href="#" id="category-all" class="category-link active-link">
              <i class="fas fa-laptop-code"></i>
              <span>全部文章</span>
            </a>
          </li>
          <li>
            <a href="#" id="category-frontend" class="category-link">
              <i class="fas fa-code"></i>
              <span>前端开发</span>
            </a>
          </li>
          <li>
            <a href="#" id="category-backend" class="category-link">
              <i class="fas fa-server"></i>
              <span>后端开发</span>
            </a>
          </li>
          <li>
            <a href="#" id="category-mobile" class="category-link">
              <i class="fas fa-mobile-alt"></i>
              <span>移动开发</span>
            </a>
          </li>
          <li>
            <a href="#" id="category-ai" class="category-link">
              <i class="fas fa-brain"></i>
              <span>人工智能</span>
            </a>
          </li>
          <li>
            <a href="#" id="category-bigdata" class="category-link">
              <i class="fas fa-database"></i>
              <span>大数据</span>
            </a>
          </li>
          <li>
            <a href="#" id="category-cloud" class="category-link">
              <i class="fas fa-cloud"></i>
              <span>云计算</span>
            </a>
          </li>
          <li>
            <a href="#" id="category-security" class="category-link">
              <i class="fas fa-shield-alt"></i>
              <span>网络安全</span>
            </a>
          </li>
        </ul>
      </div>
    </aside>
</template>

<style scoped>


/* 左侧菜单 */
.sidebar {
    display: none;
    width: 14rem;
    margin-right: 1.5rem;
    flex-shrink: 0;
}

/* 在中等屏幕及以上显示 */
@media (min-width: 1024px) {
    .sidebar {
        display: block;
        position: fixed;
    }
}

.sidebar-card {
    background-color: #ffffff;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    position: sticky;
    top: 5rem;
}

.categories-title {
    color: #374151;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.categories-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* 链接样式 */
.category-link {
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.5rem;
    color: #4b5563;
}

/* 图标和文字间距 */
.category-link i {
    margin-right: 0.5rem;
}

/* 链接悬停样式 */
.category-link:hover {
    background-color: #f3f4f6;
}

/* 激活状态的链接样式 */
.category-link.active-link {
    background-color: rgba(79, 70, 229, 0.1);
    color: #4F46E5;
}
</style>