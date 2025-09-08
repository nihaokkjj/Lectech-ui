<script setup>

</script>

<template>
<!-- 我的评论区域 -->
<section id="my-comments-section">
    <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800 flex items-center">
            <i class="fas fa-comment text-primary mr-2"></i>
            我的评论
        </h2>
    </div>
    
    <div class="bg-white rounded-xl shadow-card overflow-hidden">
        <!-- 评论列表项1 -->
        <div id="comment-1" class="p-4 border-b border-gray-200">
            <div class="flex items-start">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center mb-2">
                        <span class="text-gray-500 text-xs"><i class="far fa-clock mr-1"></i>2023-10-21</span>
                        <span class="text-gray-500 text-xs ml-3">评论于文章：<a href="#" class="text-primary hover:underline">Vue 3 + TypeScript + Vite 项目最佳实践指南</a></span>
                    </div>
                    <p class="text-gray-700 mb-3">非常实用的文章！我最近正在使用Vue 3和TypeScript搭建一个项目，这篇文章提供的最佳实践对我帮助很大，特别是关于组件设计和状态管理的部分。</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3 text-gray-500 text-sm">
                            <span><i class="far fa-thumbs-up mr-1"></i>15</span>
                            <span><i class="far fa-comment-dots mr-1"></i>2条回复</span>
                        </div>
                        <button id="delete-comment-1-btn" class="text-gray-500 hover:text-danger px-2 py-1 rounded">
                            <i class="fas fa-trash-alt mr-1"></i>删除
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 评论列表项2 -->
        <div id="comment-2" class="p-4 border-b border-gray-200">
            <div class="flex items-start">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center mb-2">
                        <span class="text-gray-500 text-xs"><i class="far fa-clock mr-1"></i>2023-10-18</span>
                        <span class="text-gray-500 text-xs ml-3">评论于文章：<a href="#" class="text-primary hover:underline">LLM大模型微调技术实战：从理论到实践</a></span>
                    </div>
                    <p class="text-gray-700 mb-3">感谢作者的分享！我一直在寻找关于如何在消费级GPU上进行LLM微调的实用指南，这篇文章正好解答了我的疑惑。请问作者对于LoRA和QLoRA在不同场景下的选择有什么建议？</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3 text-gray-500 text-sm">
                            <span><i class="far fa-thumbs-up mr-1"></i>23</span>
                            <span><i class="far fa-comment-dots mr-1"></i>1条回复</span>
                        </div>
                        <button id="delete-comment-2-btn" class="text-gray-500 hover:text-danger px-2 py-1 rounded">
                            <i class="fas fa-trash-alt mr-1"></i>删除
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
        <!-- 评论列表项3 -->
        <div id="comment-3" class="p-4">
            <div class="flex items-start">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center mb-2">
                        <span class="text-gray-500 text-xs"><i class="far fa-clock mr-1"></i>2023-10-15</span>
                        <span class="text-gray-500 text-xs ml-3">评论于文章：<a href="#" class="text-primary hover:underline">Spring Boot 3.0新特性详解与实战案例</a></span>
                    </div>
                    <p class="text-gray-700 mb-3">文章写得很全面，对Spring Boot 3.0的新特性介绍得非常清晰。我特别关注GraalVM原生镜像这部分，因为它对微服务启动时间和资源消耗的优化非常显著。不过在实际项目中，我遇到了一些兼容性问题，希望作者能分享一下解决这类问题的经验。</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3 text-gray-500 text-sm">
                            <span><i class="far fa-thumbs-up mr-1"></i>18</span>
                            <span><i class="far fa-comment-dots mr-1"></i>3条回复</span>
                        </div>
                        <button id="delete-comment-3-btn" class="text-gray-500 hover:text-danger px-2 py-1 rounded">
                            <i class="fas fa-trash-alt mr-1"></i>删除
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- 分页 -->
    <div class="flex justify-center mt-6">
        <nav id="comments-pagination" class="flex items-center bg-white rounded-lg shadow-sm p-1">
            <a href="#" id="comments-prev-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                <i class="fas fa-chevron-left"></i>
            </a>
            <a href="#" id="comments-page-1" class="w-9 h-9 flex items-center justify-center text-white bg-primary rounded-lg">1</a>
            <a href="#" id="comments-page-2" class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100">2</a>
            <a href="#" id="comments-next-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                <i class="fas fa-chevron-right"></i>
            </a>
        </nav>
    </div>
</section>
</template>

<style scoped>

</style>