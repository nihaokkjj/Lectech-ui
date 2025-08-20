<script setup>
import AriticleHeader from './components/AriticleHeader.vue';
import ArticleContent from './components/ArticleContent.vue';
import LeftCard from './components/LeftCard.vue';
import RightCard from './components/RightCard.vue';
import ArticleComments from './components/ArticleComments.vue';
import RelatedArticles from './components/RelatedArticles.vue';
import Mainfooter from './components/Mainfooter.vue';
import Header from '../Topic/components/Header.vue';
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'
// 获取当前路由实例
const route = useRoute()

// 创建响应式数据存储文章ID
const articleId = ref(null)

// 监听路由参数变化
watch(
  () => route.params.id,
  (newId) => {
    articleId.value = newId || 'default'
    // 在这里可以添加根据文章ID获取文章详情的逻辑
    console.log('当前文章ID:', articleId.value)
  },
  { immediate: true }
)

</script>

<template>
    <Header />
    <div class="article-detail-container">
        <!-- 左侧边栏 -->
        <LeftCard />
        
        <!-- 主内容区域 -->
        <main class="main-content">
            <AriticleHeader />
            <ArticleContent />
            <ArticleComments />
            <RelatedArticles />
        </main>
        
        <!-- 右侧边栏 -->
        <RightCard />

    </div>
    <!-- 底部版权信息 -->
        <Mainfooter />
</template>

<style scoped>
.article-detail-container {
    display: flex;
    max-width: 1500px;
    margin: 0 auto;
    margin-top: 4rem; /* 增加顶部边距，为fixed header留出空间 (原为2.5rem) */
    padding: 0.5px;
    gap: 24px;
    min-height: calc(100vh - 80px); /* 设置最小高度 */
}

.main-content {
    flex: 1;
    min-width: 0;
}

/* 左侧边栏样式 */
.sidebar {
    width: 14rem;
    margin-right: 0.5rem;
    flex-shrink: 0;
    position: sticky;
    top: 6rem; /* 调整top值，为header留出空间 (原为2rem) */
}

/* 右侧边栏样式 */
#right-sidebar {
    width: 18rem;
    margin-left: 0.5rem;
    flex-shrink: 0;
    position: sticky;
    top: 6rem; /* 调整top值，为header留出空间 (原为2rem) */
}

/* 在小屏幕上隐藏右侧边栏 */
@media (max-width: 1279px) {
    #right-sidebar {
        display: none;
    }
}

/* 在小屏幕上调整布局 */
@media (max-width: 768px) {
    .article-detail-container {
        flex-direction: column;
        padding: 10px;
        margin-top: 4rem; /* 小屏幕上也为header留出空间 */
    }
    
    .sidebar {
        width: 100%;
        margin-right: 0;
        margin-bottom: 1rem;
        position: static; /* 小屏幕上取消sticky定位 */
    }
    
    .main-content {
        width: 100%;
    }
    
    #right-sidebar {
        width: 100%;
        margin-left: 0;
        position: static; /* 小屏幕上取消sticky定位 */
    }
}
</style>