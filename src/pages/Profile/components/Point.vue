<script setup>

</script>

<template>
<!-- 我的积分与等级区域 -->
<section id="my-points-section">
    <div class="flex items-center justify-between mb-4">
        <h2 class="text-xl font-bold text-gray-800 flex items-center">
            <i class="fas fa-award text-primary mr-2"></i>
            我的积分与等级
        </h2>
    </div>
    
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <!-- 积分卡片 -->
        <div id="points-card" class="bg-white rounded-xl shadow-card p-6">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-800">当前积分</h3>
                <i class="fas fa-coins text-2xl text-warning"></i>
            </div>
            <div class="text-3xl font-bold text-primary mb-2">1,250</div>
            <p class="text-gray-500 text-sm">本月获得：+320积分</p>
        </div>
        
        <!-- 等级卡片 -->
        <div id="level-card" class="bg-white rounded-xl shadow-card p-6">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-800">当前等级</h3>
                <i class="fas fa-crown text-2xl text-warning"></i>
            </div>
            <div class="text-3xl font-bold text-primary mb-2">Lv.4</div>
            <p class="text-gray-500 text-sm">称号：技术达人</p>
        </div>
        
        <!-- 升级进度卡片 -->
        <div id="upgrade-card" class="bg-white rounded-xl shadow-card p-6">
            <div class="flex items-center justify-between mb-4">
                <h3 class="text-lg font-semibold text-gray-800">升级进度</h3>
                <i class="fas fa-level-up-alt text-2xl text-info"></i>
            </div>
            <div class="text-3xl font-bold text-primary mb-2">75%</div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 mb-2">
                <div class="bg-primary rounded-full h-2.5" style="width: 75%"></div>
            </div>
            <p class="text-gray-500 text-sm">距离Lv.5还需：250积分</p>
        </div>
    </div>
    
    <!-- 积分明细 -->
    <div class="bg-white rounded-xl shadow-card overflow-hidden mb-6">
        <div class="p-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800">积分明细</h3>
        </div>
        <div class="overflow-x-auto">
            <table id="points-table" class="w-full">
                <thead class="bg-gray-50">
                    <tr>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">时间</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">类型</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">描述</th>
                        <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">积分变动</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr id="points-record-1">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-22</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">文章发布</td>
                        <td class="px-6 py-4 text-sm text-gray-500">发布文章《Vue 3 + TypeScript + Vite 项目最佳实践指南》</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-tertiary">+50</td>
                    </tr>
                    <tr id="points-record-2">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-21</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">文章点赞</td>
                        <td class="px-6 py-4 text-sm text-gray-500">文章《深入理解JavaScript异步编程》获得100个点赞</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-tertiary">+20</td>
                    </tr>
                    <tr id="points-record-3">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-20</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">评论回复</td>
                        <td class="px-6 py-4 text-sm text-gray-500">回复了10条评论</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-tertiary">+10</td>
                    </tr>
                    <tr id="points-record-4">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-18</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">每日登录</td>
                        <td class="px-6 py-4 text-sm text-gray-500">连续登录7天</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-tertiary">+7</td>
                    </tr>
                    <tr id="points-record-5">
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2023-10-15</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">文章发布</td>
                        <td class="px-6 py-4 text-sm text-gray-500">发布文章《深入理解JavaScript异步编程：从回调到Async/Await》</td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-tertiary">+50</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    
    <!-- 等级特权说明 -->
    <div class="bg-white rounded-xl shadow-card overflow-hidden">
        <div class="p-4 border-b border-gray-200">
            <h3 class="text-lg font-semibold text-gray-800">等级特权</h3>
        </div>
        <div class="p-4">
            <div id="level-privileges" class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <span class="flex items-center justify-center w-6 h-6 bg-primary text-white text-xs font-bold rounded-full mr-2">1</span>
                        <h4 class="font-medium text-gray-800">Lv.1 新手上路</h4>
                    </div>
                    <p class="text-gray-600 text-sm">基础功能使用权限，可以浏览、评论、点赞文章</p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <span class="flex items-center justify-center w-6 h-6 bg-primary text-white text-xs font-bold rounded-full mr-2">2</span>
                        <h4 class="font-medium text-gray-800">Lv.2 初级开发者</h4>
                    </div>
                    <p class="text-gray-600 text-sm">可以发布文章，参与话题讨论</p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <span class="flex items-center justify-center w-6 h-6 bg-primary text-white text-xs font-bold rounded-full mr-2">3</span>
                        <h4 class="font-medium text-gray-800">Lv.3 进阶开发者</h4>
                    </div>
                    <p class="text-gray-600 text-sm">文章优先展示，评论置顶权限</p>
                </div>
                <div class="border border-primary rounded-lg p-4 bg-primary bg-opacity-5">
                    <div class="flex items-center mb-2">
                        <span class="flex items-center justify-center w-6 h-6 bg-primary text-white text-xs font-bold rounded-full mr-2">4</span>
                        <h4 class="font-medium text-primary">Lv.4 技术达人</h4>
                        <span class="ml-2 text-xs bg-primary text-white px-2 py-0.5 rounded-full">当前等级</span>
                    </div>
                    <p class="text-gray-600 text-sm">可创建话题，文章免审核，专属徽章展示</p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <span class="flex items-center justify-center w-6 h-6 bg-gray-400 text-white text-xs font-bold rounded-full mr-2">5</span>
                        <h4 class="font-medium text-gray-800">Lv.5 技术专家</h4>
                    </div>
                    <p class="text-gray-600 text-sm">可申请专栏，获得内容推荐特权，专属客服支持</p>
                </div>
                <div class="border border-gray-200 rounded-lg p-4">
                    <div class="flex items-center mb-2">
                        <span class="flex items-center justify-center w-6 h-6 bg-gray-400 text-white text-xs font-bold rounded-full mr-2">6</span>
                        <h4 class="font-medium text-gray-800">Lv.6 技术大牛</h4>
                    </div>
                    <p class="text-gray-600 text-sm">平台特邀作者，内容激励计划，线下活动优先参与权</p>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped>

</style>