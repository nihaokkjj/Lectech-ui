<script setup>
import {ref} from 'vue'

const activeId = ref(0)
</script>

<template>
<!-- 我的关注/粉丝区域 -->
<section id="my-follows-section">
    <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800 flex items-center">
            <i class="fas fa-user-friends text-primary mr-2"></i>
            我的关注/粉丝
        </h2>
        <div class="flex space-x-2">
            <button 
            class="px-3 py-1.5 text-sm text-gray-600 hover:text-primary rounded-lg"
            :class="{'activeButton': activeId === 0}"
            @click="activeId = 0"
            >我的关注</button>
            <button 
            class="px-3 py-1.5 text-sm text-gray-600 hover:text-primary rounded-lg"
            :class="{'activeButton': activeId === 1}"
            @click="activeId = 1"
            >我的粉丝</button>
        </div>
    </div>
    
    <!-- 我的关注列表 -->
    <div id="following-list" class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <!-- 关注用户1 -->
        <div id="following-1" class="bg-white rounded-xl shadow-card p-4">
            <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="用户头像" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4 flex-1">
                    <h4 class="text-gray-800 font-medium">David Chen</h4>
                    <p class="text-gray-500 text-xs">前端开发 | 42篇文章</p>
                </div>
                <button id="unfollow-1-btn" class="text-gray-500 hover:text-danger px-3 py-1 rounded-lg border border-gray-300 text-sm">
                    <i class="fas fa-user-minus mr-1"></i>取消关注
                </button>
            </div>
        </div>
        
        <!-- 关注用户2 -->
        <div id="following-2" class="bg-white rounded-xl shadow-card p-4">
            <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="用户头像" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4 flex-1">
                    <h4 class="text-gray-800 font-medium">Sarah Lin</h4>
                    <p class="text-gray-500 text-xs">人工智能 | 38篇文章</p>
                </div>
                <button id="unfollow-2-btn" class="text-gray-500 hover:text-danger px-3 py-1 rounded-lg border border-gray-300 text-sm">
                    <i class="fas fa-user-minus mr-1"></i>取消关注
                </button>
            </div>
        </div>
        
        <!-- 关注用户3 -->
        <div id="following-3" class="bg-white rounded-xl shadow-card p-4">
            <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="用户头像" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4 flex-1">
                    <h4 class="text-gray-800 font-medium">Michael Wu</h4>
                    <p class="text-gray-500 text-xs">后端开发 | 35篇文章</p>
                </div>
                <button id="unfollow-3-btn" class="text-gray-500 hover:text-danger px-3 py-1 rounded-lg border border-gray-300 text-sm">
                    <i class="fas fa-user-minus mr-1"></i>取消关注
                </button>
            </div>
        </div>
        
        <!-- 关注用户4 -->
        <div id="following-4" class="bg-white rounded-xl shadow-card p-4">
            <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="用户头像" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4 flex-1">
                    <h4 class="text-gray-800 font-medium">Jason Chen</h4>
                    <p class="text-gray-500 text-xs">网络安全 | 28篇文章</p>
                </div>
                <button id="unfollow-4-btn" class="text-gray-500 hover:text-danger px-3 py-1 rounded-lg border border-gray-300 text-sm">
                    <i class="fas fa-user-minus mr-1"></i>取消关注
                </button>
            </div>
        </div>
    </div>
    
    <!-- 我的粉丝列表 -->
    <div id="followers-list" class="grid grid-cols-1 md:grid-cols-2 gap-4 hidden">
        <!-- 粉丝用户1 -->
        <div id="follower-1" class="bg-white rounded-xl shadow-card p-4">
            <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="用户头像" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4 flex-1">
                    <h4 class="text-gray-800 font-medium">Alex Zhang</h4>
                    <p class="text-gray-500 text-xs">前端开发 | 15篇文章</p>
                </div>
                <button id="follow-back-1-btn" class="text-primary hover:bg-primary hover:text-white px-3 py-1 rounded-lg border border-primary text-sm transition-colors">
                    <i class="fas fa-user-plus mr-1"></i>关注
                </button>
            </div>
        </div>
        
        <!-- 粉丝用户2 -->
        <div id="follower-2" class="bg-white rounded-xl shadow-card p-4">
            <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="用户头像" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4 flex-1">
                    <h4 class="text-gray-800 font-medium">Emily Wang</h4>
                    <p class="text-gray-500 text-xs">大数据 | 22篇文章</p>
                </div>
                <button id="follow-back-2-btn" class="bg-gray-200 text-gray-600 px-3 py-1 rounded-lg text-sm">
                    <i class="fas fa-check mr-1"></i>已关注
                </button>
            </div>
        </div>
        
        <!-- 粉丝用户3 -->
        <div id="follower-3" class="bg-white rounded-xl shadow-card p-4">
            <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="用户头像" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4 flex-1">
                    <h4 class="text-gray-800 font-medium">Kevin Liu</h4>
                    <p class="text-gray-500 text-xs">移动开发 | 18篇文章</p>
                </div>
                <button id="follow-back-3-btn" class="text-primary hover:bg-primary hover:text-white px-3 py-1 rounded-lg border border-primary text-sm transition-colors">
                    <i class="fas fa-user-plus mr-1"></i>关注
                </button>
            </div>
        </div>
        
        <!-- 粉丝用户4 -->
        <div id="follower-4" class="bg-white rounded-xl shadow-card p-4">
            <div class="flex items-center">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="用户头像" class="w-12 h-12 rounded-full object-cover">
                <div class="ml-4 flex-1">
                    <h4 class="text-gray-800 font-medium">Daniel Zhao</h4>
                    <p class="text-gray-500 text-xs">云计算 | 25篇文章</p>
                </div>
                <button id="follow-back-4-btn" class="bg-gray-200 text-gray-600 px-3 py-1 rounded-lg text-sm">
                    <i class="fas fa-check mr-1"></i>已关注
                </button>
            </div>
        </div>
    </div>
    
    <!-- 分页 -->
    <div class="flex justify-center mt-6">
        <nav id="follows-pagination" class="flex items-center bg-white rounded-lg shadow-sm p-1">
            <a href="#" id="follows-prev-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                <i class="fas fa-chevron-left"></i>
            </a>
            <a href="#" id="follows-page-1" class="w-9 h-9 flex items-center justify-center text-white bg-primary rounded-lg">1</a>
            <a href="#" id="follows-page-2" class="w-9 h-9 flex items-center justify-center text-gray-700 rounded-lg hover:bg-gray-100">2</a>
            <a href="#" id="follows-next-page" class="w-9 h-9 flex items-center justify-center text-gray-500 rounded-lg hover:bg-gray-100">
                <i class="fas fa-chevron-right"></i>
            </a>
        </nav>
    </div>
</section>
</template>

<style scoped>
.activeButton {
    background-color: rgba(79, 70, 229, 0.1);
    color: rgb(79 70 229);
}
</style>