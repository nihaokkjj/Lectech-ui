<script setup>

import { useRouter } from 'vue-router';


const router = useRouter();

const goToDetail = (id) => {
  router.push({
    name: 'topic-detail',
    params: {
      id,
    },
  });
}

</script>

<template>
    <div id="topic-2" class="topic-card p-5 border-b border-gray-200">
                    <div class="flex flex-col md:flex-row">
                        <div class="flex-1 min-w-0">
                            <h3 class="text-lg font-bold mb-2 hover:text-primary transition-colors">
                                <a href="#" id="topic-title-2" class="topic-title" data-topic-id="2" @click="goToDetail(2)"># 前端框架选型对比</a>
                            </h3>
                            <p class="desc text-gray-600 text-sm mb-3">React vs Vue vs Angular vs Svelte，各框架优缺点与适用场景分析，分享实际项目中的选型经验和最佳实践。</p>
                            <div class="flex flex-wrap gap-2 mb-3">
                                <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">React</span>
                                <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Vue</span>
                                <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Angular</span>
                                <span class="tag text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded-full">Svelte</span>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <div class="avatar-stack flex -space-x-3">
                                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="参与者头像" class="avatar w-6 h-6 rounded-full object-cover border-2 border-white">
                                        <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="参与者头像" class="avatar w-6 h-6 rounded-full object-cover border-2 border-white">
                                        <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="参与者头像" class="avatar w-6 h-6 rounded-full object-cover border-2 border-white">
                                        <div class="avatar w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs text-gray-600 border-2 border-white">+5</div>
                                    </div>
                                    <span class="text-gray-500 text-xs ml-2">856人参与</span>
                                </div>
                                <div class="flex items-center space-x-3 text-gray-500 text-sm">
                                    <span><i class="far fa-comment mr-1"></i>92</span>
                                    <span><i class="far fa-clock mr-1"></i>2023-10-18</span>
                                </div>
                            </div>
                        </div>
                        <div class="mt-3 md:mt-0 md:ml-4 flex flex-col justify-center">
                            <button id="join-topic-2" class="join-topic-btn bg-primary hover:bg-secondary text-white px-4 py-2 rounded-lg btn-primary-effect" data-topic-id="2">
                                <i class="fas fa-plus mr-1"></i> 参与讨论
                            </button>
                        </div>
                    </div>
                </div>
</template>


<style lang="scss">
@import '../../../style.scss';

.topic-title{
  color: black;
  font-weight: 700;
}

.topic-card { 
    text-align: left;
}

.desc{
    text-align: left;
}

// 基础布局类
.flex {
  display: flex;
}

.flex-col {
  flex-direction: column;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.justify-center {
  justify-content: center;
}

.min-w-0 {
  min-width: 0;
}

.flex-1 {
  flex: 1;
}

// 显示控制类
.hidden {
  display: none;
}

.md\:flex {
  @media (min-width: 768px) {
    display: flex;
  }
}

.md\:flex-row {
  @media (min-width: 768px) {
    flex-direction: row;
  }
}

.md\:mt-0 {
  @media (min-width: 768px) {
    margin-top: 0;
  }
}

.md\:ml-4 {
  @media (min-width: 768px) {
    margin-left: 1rem;
  }
}

// 尺寸与间距类
.mt-3 {
  margin-top: 0.75rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-3 {
  margin-bottom: 0.75rem;
}

.ml-2 {
  margin-left: 0.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

.mr-1 {
  margin-right: 0.25rem;
}

.mt-6 {
  margin-top: 1.5rem;
}

.space-x-3 > * + * {
  margin-left: 0.75rem;
}

.-space-x-3 > * + * {
  margin-left: -0.75rem;
}

.gap-2 {
  gap: 0.5rem;
}

.p-5 {
  padding: 1.25rem;
}

.p-1 {
  padding: 0.25rem;
}

.p-4 {
  padding: 1rem;
}

.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}

.py-1\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}

.w-6 {
  width: 1.5rem;
}

.h-6 {
  height: 1.5rem;
}

.w-9 {
  width: 2.25rem;
}

.h-9 {
  height: 2.25rem;

}

.w-full {
  width: 100%;
}

// 文本样式类
.text-xl {
  font-size: $text-xl;
}

.text-lg {
  font-size: $text-lg;
}

.text-sm {
  font-size: $text-sm;
}

.text-xs {
  font-size: $text-xs;
}

.font-bold {
  font-weight: 700;
}

// 颜色类
.text-gray-800 {
  color: $gray-800;
}

.text-gray-600 {
  color: $gray-600;
}

.text-gray-500 {
  color: $gray-500;
}

.text-gray-700 {
  color: $gray-700;
}

.text-white {
  color: white;
}

.text-primary {
  color: $primary;
}

.bg-white {
  background-color: white;
}

.bg-gray-100 {
  background-color: $gray-100;
}

.bg-gray-200 {
  background-color: $gray-200;
}

.bg-primary {
  background-color: $primary;
}

// 背景透明度
.bg-opacity-10 {
  opacity: 0.6;  //0.1
}

// 圆角类
.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.rounded-xl {
  border-radius: $rounded-xl;
}

// 边框类
.border-b {
  border-bottom: 1px solid;
}

.border-2 {
  border-width: 2px;
}

.border-gray-200 {
  border-color: $gray-200;
}

.border-white {
  border-color: white;
}

// 阴影类
.shadow-card {
  box-shadow: $shadow-card;
}

.shadow-sm {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
}

// 溢出控制
.overflow-hidden {
  overflow: hidden;
}

// 对象适应
.object-cover {
  object-fit: cover;
}

// 过渡效果
.transition-colors {
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}

// 悬停效果
.hover\:text-primary:hover {
  color: $primary;
}

.hover\:bg-secondary:hover {
  background-color: $secondary;
}

.hover\:bg-gray-100:hover {
  background-color: $gray-100;
}

// 按钮特效
.btn-primary-effect {
  box-shadow: $shadow-btn;
  transition: all 0.2s ease;
  
  &:hover {
    box-shadow: $shadow-hover;
    transform: translateY(-1px);
  }
}

// Flex wrap
.flex-wrap {
  flex-wrap: wrap;
}

// Cursor
.cursor-pointer {
  cursor: pointer;
}

  .card-hover {
            transition: all 0.3s ease;
        }
        
        .card-hover:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .tag {
            transition: all 0.2s ease;
        }
        
        .tag:hover {
            background-color: rgba(79, 70, 229, 0.1);
            color: #4F46E5;
        }
        
        .nav-link {
            position: relative;
            transition: all 0.2s ease;
        }
        
        .nav-link.active::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #4F46E5;
        }
        
        .nav-link:hover:not(.active)::after {
            content: '';
            position: absolute;
            bottom: -6px;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #6366F1;
            transform: scaleX(0.7);
            opacity: 0.7;
            transition: all 0.2s ease;
        }
        
        .btn-primary-effect {
            transition: all 0.2s ease;
        }
        
        .btn-primary-effect:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 8px rgba(79, 70, 229, 0.3);
        }
        
        .topic-card {
            transition: all 0.2s ease;
        }
        
        .topic-card:hover {
            background-color: rgba(243, 244, 246, 0.5);
        }
        
        .avatar-stack .avatar:not(:first-child) {
            margin-left: -12px;
        }
        
        .discussion-card {
            border-bottom: 1px solid #E5E7EB;
            transition: all 0.2s ease;
        }
        
        .discussion-card:hover {
            background-color: rgba(243, 244, 246, 0.5);
        }


</style>
