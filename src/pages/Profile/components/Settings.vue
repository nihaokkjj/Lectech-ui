<script setup>

</script>

<template>
<!-- 编辑资料区域 -->
<section id="edit-profile-section">
    <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800 flex items-center">
            <i class="fas fa-user-edit text-primary mr-2"></i>
            编辑资料
        </h2>
    </div>
    
    <div class="bg-white rounded-xl shadow-card overflow-hidden">
        <form id="profile-edit-form" class="p-6">
            <div class="mb-6">
                <label for="avatar-upload" class="block text-gray-700 font-medium mb-2">头像</label>
                <div class="flex items-center">
                    <img id="current-avatar" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&q=80" alt="当前头像" class="w-20 h-20 rounded-full object-cover mr-4">
                    <div>
                        <label for="avatar-upload" class="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg cursor-pointer hover:bg-gray-200 inline-block">
                            <i class="fas fa-upload mr-2"></i>上传新头像
                        </label>
                        <input type="file" id="avatar-upload" class="hidden" accept="image/*">
                        <p class="text-gray-500 text-xs mt-2">支持jpg、png、gif格式，文件大小不超过2MB</p>
                    </div>
                </div>
            </div>
            
            <div class="mb-6">
                <label for="username" class="block text-gray-700 font-medium mb-2">用户名</label>
                <input type="text" id="username" name="username" value="Jane Doe" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
            
            <div class="mb-6">
                <label for="bio" class="block text-gray-700 font-medium mb-2">个人简介</label>
                <textarea id="bio" name="bio" rows="4" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">前端开发工程师 | 热爱技术分享 | 喜欢探索新技术和解决问题</textarea>
                <p class="text-gray-500 text-xs mt-1">不超过100字</p>
            </div>
            
            <div class="mb-6">
                <label for="email" class="block text-gray-700 font-medium mb-2">邮箱</label>
                <input type="email" id="email" name="email" value="jane.doe@example.com" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
            
            <div class="mb-6">
                <label for="phone" class="block text-gray-700 font-medium mb-2">手机号</label>
                <input type="tel" id="phone" name="phone" value="138****5678" class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary">
            </div>
            
            <div class="flex justify-end space-x-4">
                <button type="button" id="cancel-edit-btn" class="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">取消</button>
                <button type="submit" id="save-profile-btn" class="px-6 py-2 bg-primary text-white rounded-lg hover:bg-secondary btn-primary-effect">保存修改</button>
            </div>
        </form>
    </div>
</section>
</template>

<style scoped>

</style>