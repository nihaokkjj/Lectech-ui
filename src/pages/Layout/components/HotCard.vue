<script setup>

</script>

<template>
  <div class="hot-tags-card">
        <h3 id="hot-tags-title" class="hot-tags-title">热门标签</h3>
      <div id="hot-tags-list" class="hot-tags-list">
        <a href="#" id="tag-vue3" class="tag">Vue3</a>
        <a href="#" id="tag-react" class="tag">React</a>
        <a href="#" id="tag-typescript" class="tag">TypeScript</a>
        <a href="#" id="tag-springboot" class="tag">Spring Boot</a>
        <a href="#" id="tag-python" class="tag">Python</a>
        <a href="#" id="tag-docker" class="tag">Docker</a>
        <a href="#" id="tag-kubernetes" class="tag">Kubernetes</a>
        <a href="#" id="tag-ai" class="tag">AI</a>
        <a href="#" id="tag-ml" class="tag">机器学习</a>
        <a href="#" id="tag-microservice" class="tag">微服务</a>
        <a href="#" id="tag-flutter" class="tag">Flutter</a>
        <a href="#" id="tag-nodejs" class="tag">Node.js</a>
      </div>
    </div>
</template>

<style scoped>
/* 热门标签卡片容器 */
.hot-tags-card {
    display: none;
    position: sticky;
    width: 14rem;
    background-color: #ffffff; 
    border-radius: 0.75rem; 
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1); 
    padding: 1rem;  
    position: sticky; 
    margin-top: 29rem; 
}

/* 在中等屏幕及以上显示 */
@media (min-width: 1024px) {
    .hot-tags-card {
        display: inline;
    }
}

/* 热门标签标题 */
.hot-tags-title {
    color: #374151; 
    font-weight: 600; 
    margin-bottom: 0.75rem; 
    /* padding-right: 1rem; */
}

/* 热门标签列表 */
.hot-tags-list {
    display: flex; 
    flex-wrap: wrap; 
    gap: 0.5rem; 
}

/* 单个标签样式 */
.tag {
    font-size: 0.75rem; 
    color: #4b5563; 
    background-color: #f3f4f6; 
    padding-left: 0.5rem; 
    padding-right: 0.5rem; 
    padding-top: 0.25rem; 
    padding-bottom: 0.25rem; 
    border-radius: 9999px; 
    transition: all 0.2s ease;
}

/* 标签悬停样式 */
.tag:hover {
    background-color: rgba(79, 70, 229, 0.1); 
    color: #4F46E5;
}

</style>