<script setup>

</script>

<template>
<!-- 个人资料头部 -->
<section id="profile-header" class="bg-white rounded-xl shadow-card p-6 mb-6">
    <div class="flex flex-col md:flex-row items-center md:items-start">
        <div class="mb-4 md:mb-0 md:mr-6">
            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="用户头像" class="w-24 h-24 rounded-full object-cover border-4 border-white shadow">
        </div>
        <div class="flex-1 text-center md:text-left">
            <h1 id="user-name" class="text-2xl font-bold text-gray-800">Jane Doe</h1>
            <p id="user-bio" class="text-gray-600 mt-2 mb-4">前端开发工程师 | 热爱技术分享 | 喜欢探索新技术和解决问题</p>
            <div class="flex flex-wrap justify-center md:justify-start gap-4">
                <div class="flex items-center">
                    <i class="fas fa-file-alt text-primary mr-2"></i>
                    <span id="article-count" class="text-gray-700">32 篇文章</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-user-friends text-primary mr-2"></i>
                    <span id="follower-count" class="text-gray-700">128 粉丝</span>
                </div>
                <div class="flex items-center">
                    <i class="fas fa-users text-primary mr-2"></i>
                    <span id="following-count" class="text-gray-700">56 关注</span>
                </div>
            </div>
        </div>
        <div class="mt-4 md:mt-0 flex items-center right-0">
            <div class="flex flex-col items-center bg-gray-50 rounded-lg p-3 border border-gray-200">
                <span id="user-level" class="text-primary font-bold text-xl">Lv.4</span>
                <span class="text-gray-500 text-sm">技术达人</span>
                <div class="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div id="level-progress" class="bg-primary rounded-full h-2" style="width: 75%"></div>
                </div>
                <span id="user-points" class="text-gray-600 text-xs mt-1">1,250 积分</span>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>

</style>