<script setup lang="ts">
// 定义相关文章的类型
interface RelatedArticle {
  id: number;
  title: string;
  image: string;
  views: string;
  likes: number;
}

// 相关文章数据 - mock数据
const relatedArticles: RelatedArticle[] = [
  {
    id: 1,
    title: "TypeScript高级类型与Vue 3组合式API最佳实践",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
    views: "1.5k",
    likes: 186
  },
  {
    id: 2,
    title: "Vite构建优化：如何提升大型Vue项目的构建速度",
    image: "https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
    views: "1.2k",
    likes: 142
  },
  {
    id: 3,
    title: "Vue 3组件库设计与开发实战",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
    views: "1.8k",
    likes: 210
  },
  {
    id: 4,
    title: "2023年前端开发趋势与最佳实践",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=80&q=80",
    views: "2.8k",
    likes: 432
  }
];

// Mock API函数 - 模拟获取相关文章数据
const fetchRelatedArticles = async (): Promise<RelatedArticle[]> => {
  // 模拟API调用延迟
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(relatedArticles);
    }, 300);
  });
};

// 可以在这里调用API获取真实数据
// const loadRelatedArticles = async () => {
//   try {
//     const data = await fetchRelatedArticles();
//     // 处理获取到的数据
//     // 相关逻辑可以在这里实现
//   } catch (error) {
//     console.error('获取相关文章失败:', error);
//   }
// };

// onMounted(() => {
//   loadRelatedArticles();
// });
</script>

<template>
    <!-- 相关文章推荐 -->
    <section id="related-articles" class="related-articles-section">
        <h3 class="related-articles-title" style="text-align: left;">相关文章推荐</h3>
        
        <div class="related-articles-grid" style="text-align: left;">
            <!-- 使用v-for动态渲染相关文章 -->
            <article 
                v-for="article in relatedArticles" 
                :key="article.id" 
                :id="`related-article-${article.id}`" 
                class="related-article-item"
            >
                <div class="related-article-image-container">
                    <img 
                        :src="article.image" 
                        :alt="`文章配图-${article.id}`" 
                        class="related-article-image"
                    >
                </div>
                <div class="related-article-content">
                    <a 
                        :href="`/article/${article.id}`" 
                        :id="`related-article-${article.id}-link`" 
                        class="related-article-link"
                    >

                        {{ article.title }}
                    </a>
                    <div class="related-article-meta">
                        <span 
                            :id="`related-article-${article.id}-views`" 
                            class="related-article-meta-item"
                        >
                            <i class="far fa-eye mr-1"></i>{{ article.views }}
                        </span>
                        <span class="related-article-meta-separator">·</span>
                        <span 
                            :id="`related-article-${article.id}-likes`" 
                            class="related-article-meta-item"
                        >
                            <i class="far fa-thumbs-up mr-1"></i>{{ article.likes }}
                        </span>
                    </div>
                </div>
            </article>
        </div>
    </section>
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

.related-articles-section {
  background-color: white;
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  padding: 1.5rem;
}

.related-articles-title {
  font-size: $text-xl;
  font-weight: bold;
  color: $gray-800;
  margin-bottom: 1.5rem;
}

.related-articles-grid {
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 1.5rem;
}

@media (min-width: 768px) {
  .related-articles-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

.related-article-item {
  display: flex;
  gap: 1rem;
}

.related-article-image-container {
  width: 5rem;
  height: 5rem;
  flex-shrink: 0;
}

.related-article-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0.5rem;
}

.related-article-content {
  flex: 1;
}

.related-article-link {
  color: $gray-800;
  font-weight: 500;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  &:hover {
    color: $primary;
  }
}

.related-article-meta {
  display: flex;
  align-items: center;
  margin-top: 0.5rem;
  font-size: $text-xs;
  color: $gray-500;
}

.related-article-meta-item {
  display: flex;
  align-items: center;
}

.related-article-meta-separator {
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
</style>