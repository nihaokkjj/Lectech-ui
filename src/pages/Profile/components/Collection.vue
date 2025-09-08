<script setup>

</script>

<template>
<!-- 我的收藏区域 -->
<section id="my-collections-section">
    <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800 flex items-center">
            <i class="fas fa-bookmark text-primary mr-2"></i>
            我的收藏
        </h2>
    </div>
    
    <div class="bg-white rounded-xl shadow-card overflow-hidden">
        <!-- 收藏文章列表项1 -->
        <article id="collection-1" class="article-card p-4">
            <div class="flex flex-col md:flex-row">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center mb-2">
                        <span class="bg-green-100 text-green-600 text-xs font-medium py-1 px-2 rounded-full">人工智能</span>
                        <span class="text-gray-500 text-xs ml-3"><i class="far fa-clock mr-1"></i>2023-10-20</span>
                        <span class="text-gray-500 text-xs ml-3"><i class="far fa-user mr-1"></i>Sarah Lin</span>
                    </div>
                    <h3 class="text-lg font-bold mb-2 hover:text-primary transition-colors">LLM大模型微调技术实战：从理论到实践</h3>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-2">详细介绍了大型语言模型(LLM)的微调技术，包括LoRA、QLoRA等低资源微调方法，以及如何在消费级GPU上进行有效的模型定制训练。</p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">LLM</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">AI</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">模型微调</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3 text-gray-500 text-sm">
                            <span><i class="far fa-eye mr-1"></i>3.1k</span>
                            <span><i class="far fa-thumbs-up mr-1"></i>458</span>
                            <span><i class="far fa-comment mr-1"></i>72</span>
                        </div>
                        <button id="remove-collection-1-btn" class="text-gray-500 hover:text-danger px-2 py-1 rounded">
                            <i class="fas fa-times mr-1"></i>取消收藏
                        </button>
                    </div>
                </div>
            </div>
        </article>
        
        <!-- 收藏文章列表项2 -->
        <article id="collection-2" class="article-card p-4">
            <div class="flex flex-col md:flex-row">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center mb-2">
                        <span class="bg-blue-100 text-blue-600 text-xs font-medium py-1 px-2 rounded-full">后端开发</span>
                        <span class="text-gray-500 text-xs ml-3"><i class="far fa-clock mr-1"></i>2023-10-18</span>
                        <span class="text-gray-500 text-xs ml-3"><i class="far fa-user mr-1"></i>Michael Wu</span>
                    </div>
                    <h3 class="text-lg font-bold mb-2 hover:text-primary transition-colors">Spring Boot 3.0新特性详解与实战案例</h3>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-2">本文详细介绍了Spring Boot 3.0的核心新特性，包括对Java 17的支持、GraalVM原生镜像、新的Observability API等，并通过实战案例展示如何应用。</p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Spring Boot</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Java</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">后端</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3 text-gray-500 text-sm">
                            <span><i class="far fa-eye mr-1"></i>2.4k</span>
                            <span><i class="far fa-thumbs-up mr-1"></i>342</span>
                            <span><i class="far fa-comment mr-1"></i>56</span>
                        </div>
                        <button id="remove-collection-2-btn" class="text-gray-500 hover:text-danger px-2 py-1 rounded">
                            <i class="fas fa-times mr-1"></i>取消收藏
                        </button>
                    </div>
                </div>
            </div>
        </article>
        
        <!-- 收藏文章列表项3 -->
        <article id="collection-3" class="article-card p-4 border-b-0">
            <div class="flex flex-col md:flex-row">
                <div class="flex-1 min-w-0">
                    <div class="flex items-center mb-2">
                        <span class="bg-red-100 text-red-600 text-xs font-medium py-1 px-2 rounded-full">网络安全</span>
                        <span class="text-gray-500 text-xs ml-3"><i class="far fa-clock mr-1"></i>2023-10-19</span>
                        <span class="text-gray-500 text-xs ml-3"><i class="far fa-user mr-1"></i>Jason Chen</span>
                    </div>
                    <h3 class="text-lg font-bold mb-2 hover:text-primary transition-colors">Web应用安全漏洞分析与防御策略</h3>
                    <p class="text-gray-600 text-sm mb-3 line-clamp-2">全面分析了Web应用常见的安全漏洞，如XSS、CSRF、SQL注入、文件上传等，并提供了详细的防御策略和最佳实践。</p>
                    <div class="flex flex-wrap gap-2 mb-3">
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">网络安全</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Web安全</span>
                        <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">漏洞分析</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center space-x-3 text-gray-500 text-sm">
                            <span><i class="far fa-eye mr-1"></i>2.1k</span>
                            <span><i class="far fa-thumbs-up mr-1"></i>276</span>
                            <span><i class="far fa-comment mr-1"></i>45</span>
                        </div>
                        <button id="remove-collection-3-btn" class="text-gray-500 hover:text-danger px-2 py-1 rounded">
                            <i class="fas fa-times mr-1"></i>取消收藏
                        </button>
                    </div>
                </div>
            </div>
        </article>
    </div>
    
    <!-- 分页 -->
    <div class="flex justify-center mt-6">
        <nav id="collections-pagination" class="flex items-center bg-white rounded-lg shadow-sm p-1">
            <a href="#" id="collections-prev-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                <i class="fas fa-chevron-left"></i>
            </a>
            <a href="#" id="collections-page-1" class="w-9 h-9 flex items-center justify-center text-white bg-primary rounded-lg">1</a>
            <a href="#" id="collections-page-2" class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100">2</a>
            <a href="#" id="collections-next-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                <i class="fas fa-chevron-right"></i>
            </a>
        </nav>
    </div>
</section>
</template>

<style scoped>

</style>