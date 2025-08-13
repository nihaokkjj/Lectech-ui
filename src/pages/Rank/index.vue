<template>
    <div class="ranking-container">
        <!-- 排行榜头部 -->
        <section class="ranking-header">
            <div class="header-main">
                <h1 class="header-title">
                    <i class="fas fa-trophy header-icon"></i>
                    文章排行榜
                </h1>
                
                <!-- 排行榜类型切换 -->
                <div class="ranking-tabs">
                    <button 
                        v-for="tab in tabs"
                        :key="tab.id"
                        class="tab-button" 
                        :class="{ 'active': activeTab === tab.id }"
                        @click="activeTab = tab.id"
                    >
                        {{ tab.name }}
                    </button>
                </div>
            </div>
            
            <div class="ranking-description-box">
                <div class="ranking-description-content">
                    <div class="description-icon-wrapper">
                        <i class="fas fa-info-circle description-icon"></i>
                    </div>
                    <div class="description-text-wrapper">
                        <p class="description-text">
                            {{ rankingDescription }}
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- 排行榜内容 -->
        <section class="ranking-content">
            <div class="ranking-list-header">
                <h2 class="list-title">热门文章{{ activeTab === 'weekly' ? '周' : (activeTab === 'monthly' ? '月' : '年') }}榜</h2>
                <div class="update-time">
                    <i class="far fa-calendar-alt update-icon"></i>
                    更新于：{{ updateTime }}
                </div>
            </div>
            
            <!-- 排行榜列表 -->
            <div class="ranking-list">
                <div v-for="(article, index) in rankedArticles" :key="article.id" class="article-card">
                    <div class="rank-badge" :class="getRankClass(index + 1)">{{ index + 1 }}</div>
                    <div class="article-info">
                        <a :href="`P-ARTICLE_DETAIL.html?article_id=${article.id}`" class="article-title">{{ article.title }}</a>
                        <div class="article-meta">
                            <div class="author-info">
                                <img :src="article.authorAvatar" alt="作者头像" class="author-avatar">
                                <a :href="`P-PROFILE.html?user_id=${article.authorId}`" class="author-name">{{ article.authorName }}</a>
                            </div>
                            <span class="category-tag" :class="getCategoryClass(article.category)">{{ article.category }}</span>
                            <div class="article-stats">
                                <span class="stat-item"><i class="far fa-eye stat-icon"></i>{{ article.views }}</span>
                                <span class="stat-item"><i class="far fa-thumbs-up stat-icon"></i>{{ article.likes }}</span>
                                <span class="stat-item"><i class="far fa-comment stat-icon"></i>{{ article.comments }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

// 定义一个文章列表的示例数据
const allArticles = ref([
    {
        id: 1,
        title: '深入理解JavaScript异步编程：从回调到Async/Await',
        authorName: 'David Chen',
        authorId: 1,
        authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
        category: '前端开发',
        views: '3.2k',
        likes: '521',
        comments: '78',
        tab: 'weekly',
    },
    {
        id: 2,
        title: 'LLM大模型微调技术实战：从理论到实践',
        authorName: 'Sarah Lin',
        authorId: 2,
        authorAvatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
        category: '人工智能',
        views: '3.1k',
        likes: '458',
        comments: '72',
        tab: 'weekly',
    },
    {
        id: 3,
        title: '2023年前端开发趋势与最佳实践',
        authorName: 'Alex Zhang',
        authorId: 3,
        authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
        category: '前端开发',
        views: '2.8k',
        likes: '432',
        comments: '65',
        tab: 'weekly',
    },
    {
        id: 4,
        title: 'Spring Boot 3.0新特性详解与实战案例',
        authorName: 'Michael Wu',
        authorId: 4,
        authorAvatar: 'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
        category: '后端开发',
        views: '2.4k',
        likes: '342',
        comments: '56',
        tab: 'weekly',
    },
    {
        id: 5,
        title: 'Web应用安全漏洞分析与防御策略',
        authorName: 'Jason Chen',
        authorId: 5,
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
        category: '网络安全',
        views: '2.1k',
        likes: '276',
        comments: '45',
        tab: 'weekly',
    },
    {
        id: 6,
        title: '使用React Hook构建高性能组件',
        authorName: 'David Chen',
        authorId: 1,
        authorAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80',
        category: '前端开发',
        views: '5.5k',
        likes: '680',
        comments: '92',
        tab: 'monthly',
    },
    // 添加更多文章数据...
]);

// 标签页状态
const tabs = ref([
    { id: 'weekly', name: '周榜' },
    { id: 'monthly', name: '月榜' },
    { id: 'yearly', name: '年度榜' },
]);

const activeTab = ref('weekly');

// 根据 activeTab 动态过滤文章列表
const rankedArticles = computed(() => {
    return allArticles.value.filter(article => article.tab === activeTab.value);
});

// 根据 activeTab 动态生成描述
const rankingDescription = computed(() => {
    switch (activeTab.value) {
        case 'weekly':
            return '周榜数据统计周期：2023年10月16日 - 2023年10月22日，每周一更新。';
        case 'monthly':
            return '月榜数据统计周期：2023年10月1日 - 2023年10月31日，每月一日更新。';
        case 'yearly':
            return '年度榜数据统计周期：2023年1月1日 - 2023年12月31日，每年一月一日更新。';
        default:
            return '';
    }
});

// 动态获取更新时间
const updateTime = computed(() => {
    // 实际项目中这里可以根据当前日期动态生成
    return '2023-10-23';
});

// 根据排名获取徽章的 CSS 类
const getRankClass = (rank) => {
    if (rank === 1) return 'rank-1';
    if (rank === 2) return 'rank-2';
    if (rank === 3) return 'rank-3';
    return 'rank-other';
};

// 根据文章分类获取标签的 CSS 类
const getCategoryClass = (category) => {
    switch (category) {
        case '前端开发': return 'category-frontend';
        case '人工智能': return 'category-ai';
        case '后端开发': return 'category-backend';
        case '网络安全': return 'category-security';
        default: return 'category-other';
    }
};
</script>

<style scoped>
/* 使用 scoped 样式，确保样式只应用于此组件 */
.ranking-container {
    margin: 0 auto;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
    color: #1F2937;
}

.ranking-header {
    margin-bottom: 24px;
}

.header-main {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 16px;
}

@media (min-width: 768px) {
    .header-main {
        flex-direction: row;
        align-items: center;
        margin-bottom: 0;
    }
}

.header-title {
    font-size: 24px;
    font-weight: 700;
    color: #1F2937;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
}

@media (min-width: 768px) {
    .header-title {
        margin-bottom: 0;
    }
}

.header-icon {
    color: #F59E0B;
    margin-right: 8px;
}

.ranking-tabs {
    display: flex;
    background-color: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
    padding: 4px;
    width: fit-content;
}

.tab-button {
    padding: 8px 16px;
    font-size: 14px;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    border: none;
    background: none;
    transition: all 0.2s ease;
    color: #4B5563;
}

.tab-button.active {
    background-color: #4F46E5;
    color: white;
}

.tab-button:hover:not(.active) {
    background-color: #E5E7EB;
}

.ranking-description-box {
    margin-top: 16px;
    background-color: #EFF6FF;
    border-left: 4px solid #3B82F6;
    padding: 16px;
    border-radius: 8px;
}

.ranking-description-content {
    display: flex;
    align-items: center;
}

.description-icon-wrapper {
    flex-shrink: 0;
}

.description-icon {
    color: #3B82F6;
}

.description-text-wrapper {
    margin-left: 12px;
}

.description-text {
    font-size: 14px;
    color: #1E40AF;
}

.ranking-content {
    background-color: #fff;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
    overflow: hidden;
}

.ranking-list-header {
    padding: 16px;
    background-color: #F9FAFB;
    border-bottom: 1px solid #E5E7EB;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.list-title {
    font-size: 18px;
    font-weight: 600;
    color: #1F2937;
}

.update-time {
    font-size: 14px;
    color: #6B7280;
}

.update-icon {
    margin-right: 4px;
}

.ranking-list {
    display: flex;
    flex-direction: column;
}

.article-card {
    padding: 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #E5E7EB;
    transition: all 0.2s ease;
}

.article-card:last-child {
    border-bottom: none;
}

.article-card:hover {
    background-color: rgba(243, 244, 246, 0.5);
}

.rank-badge {
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: bold;
    font-size: 14px;
    margin-right: 16px;
    color: white;
}

.rank-1 { background-color: #FFD700; }
.rank-2 { background-color: #C0C0C0; }
.rank-3 { background-color: #CD7F32; }
.rank-other { background-color: #E5E7EB; color: #4B5563; }

.article-info {
    flex: 1;
    min-width: 0;
}

.article-title {
    font-size: 18px;
    font-weight: bold;
    color: #1F2937;
    margin-bottom: 8px;
    display: block;
    text-decoration: none;
    transition: color 0.2s ease;
}

.article-title:hover {
    color: #4F46E5;
}

.article-meta {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    font-size: 14px;
    color: #6B7280;
    gap: 16px;
}

.author-info {
    display: flex;
    align-items: center;
}

.author-avatar {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
}

.author-name {
    text-decoration: none;
    color: #6B7280;
    transition: color 0.2s ease;
}

.author-name:hover {
    color: #4F46E5;
}

.category-tag {
    font-size: 12px;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 9999px; /* Tailwind's rounded-full */
}

.category-frontend { background-color: #EDE9FE; color: #8B5CF6; }
.category-ai { background-color: #D1FAE5; color: #10B981; }
.category-backend { background-color: #DBEAFE; color: #3B82F6; }
.category-security { background-color: #FEE2E2; color: #EF4444; }
.category-other { background-color: #F3F4F6; color: #4B5563; }

.article-stats {
    display: flex;
    align-items: center;
    gap: 16px;
}

.stat-item {
    display: flex;
    align-items: center;
}

.stat-icon {
    margin-right: 4px;
}
</style>
