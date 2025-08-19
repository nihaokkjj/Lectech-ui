<script setup>
import { ref } from 'vue'

// 定义按钮状态
const isLiked = ref(false)
const isDisliked = ref(false)
const isCollected = ref(false)
const showShareMenu = ref(false)

// 切换点赞状态
const toggleLike = () => {
  isLiked.value = !isLiked.value
  // 如果点过赞，取消点踩状态
  if (isLiked.value) {
    isDisliked.value = false
  }
}

// 切换点踩状态
const toggleDislike = () => {
  isDisliked.value = !isDisliked.value
  // 如果点过踩，取消点赞状态
  if (isDisliked.value) {
    isLiked.value = false
  }
}

// 切换收藏状态
const toggleCollect = () => {
  isCollected.value = !isCollected.value
}

// 切换分享菜单显示状态
const toggleShareMenu = () => {
  showShareMenu.value = !showShareMenu.value
}

// 点击其他地方隐藏分享菜单
import { onMounted, onBeforeUnmount } from 'vue'
let handleClickOutside

onMounted(() => {
  handleClickOutside = (e) => {
    const shareButton = document.getElementById('share-btn')
    const shareMenu = document.getElementById('share-menu')
    
    if (shareButton && shareMenu && 
        !shareButton.contains(e.target) && 
        !shareMenu.contains(e.target)) {
      showShareMenu.value = false
    }
  }
  
  document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
  if (handleClickOutside) {
    document.removeEventListener('click', handleClickOutside)
  }
})
</script>

<template>
  <!-- 文章操作区 -->
  <section id="article-actions" class="bg-white rounded-xl shadow-card p-4 mb-6">
    <div class="flex flex-wrap justify-between items-center">
      <div class="flex space-x-4">
        <button 
          id="like-btn" 
          class="flex items-center space-x-1 text-gray-600 hover:text-primary transition-colors"
          :class="{ 'text-primary': isLiked }"
          @click="toggleLike"
        >
          <i 
            class="far fa-thumbs-up text-xl" 
            :class="{ 'fas': isLiked, 'far': !isLiked }"
          ></i>
          <span id="like-count">245</span>
        </button>
        
        <button 
          id="dislike-btn" 
          class="flex items-center space-x-1 text-gray-600 hover:text-danger transition-colors"
          :class="{ 'text-danger': isDisliked }"
          @click="toggleDislike"
        >
          <i 
            class="far fa-thumbs-down text-xl" 
            :class="{ 'fas': isDisliked, 'far': !isDisliked }"
          ></i>
          <span id="dislike-count">12</span>
        </button>
        
        <button 
          id="comment-btn" 
          class="flex items-center space-x-1 text-gray-600 hover:text-info transition-colors"
        >
          <i class="far fa-comment text-xl"></i>
          <span id="comment-count">36</span>
        </button>
      </div>
      
      <div class="flex space-x-4">
        <button 
          id="collect-btn" 
          class="flex items-center space-x-1 text-gray-600 hover:text-warning transition-colors"
          :class="{ 'text-warning': isCollected }"
          @click="toggleCollect"
        >
          <i 
            class="far fa-star text-xl" 
            :class="{ 'fas': isCollected, 'far': !isCollected }"
          ></i>
          <span>收藏</span>
        </button>
        
        <div class="relative">
          <button 
            id="share-btn" 
            class="flex items-center space-x-1 text-gray-600 hover:text-info transition-colors"
            :class="{ 'text-info': showShareMenu }"
            @click="toggleShareMenu"
          >
            <i class="fas fa-share-alt text-xl"></i>
            <span>分享</span>
          </button>
          
          <!-- 分享弹出菜单 -->
          <div 
            id="share-menu" 
            class="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-10 py-2"
            :class="{ 'hidden': !showShareMenu }"
          >
            <a href="#" id="share-wechat" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <i class="fab fa-weixin text-green-500 mr-2"></i>
              <span>微信</span>
            </a>
            <a href="#" id="share-weibo" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <i class="fab fa-weibo text-red-500 mr-2"></i>
              <span>微博</span>
            </a>
            <a href="#" id="share-link" class="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-100">
              <i class="fas fa-link text-blue-500 mr-2"></i>
              <span>复制链接</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

/* 基础组件样式 */
#article-actions {
  background-color: white;
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  padding: 1rem;
  margin-bottom: 1.5rem;
}

/* 按钮通用样式 */
#like-btn,
#dislike-btn,
#comment-btn,
#collect-btn,
#share-btn {
  display: flex;
  align-items: center;
  color: $gray-600;
  transition: color 0.2s ease;
  
  &.space-x-1 > * + * {
    margin-left: 0.25rem;
  }
}

/* 激活状态样式 */
#like-btn.text-primary {
  color: $primary;
}

#dislike-btn.text-danger {
  color: $danger;
}

#comment-btn.text-info {
  color: $info;
}

#collect-btn.text-warning {
  color: $warning;
}

#share-btn.text-info {
  color: $info;
}

/* 悬停样式 */
#like-btn:hover {
  color: $primary;
}

#dislike-btn:hover {
  color: $danger;
}

#comment-btn:hover,
#share-btn:hover {
  color: $info;
}

#collect-btn:hover {
  color: $warning;
}

/* 分享菜单样式 */
#share-menu {
  &.hidden {
    display: none;
  }
  
  position: absolute;
  right: 0;
  margin-top: 0.5rem;
  width: 12rem;
  background-color: white;
  border-radius: $rounded-xl;
  box-shadow: $shadow-card;
  z-index: 10;
  padding: 0.5rem 0;
  
  a {
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
    color: $gray-700;
    
    &:hover {
      background-color: $gray-100;
    }
  }
}

/* 图标样式 */
.far,
.fas {
  font-size: $text-xl;
}

/* 布局相关类 */
.flex {
  display: flex;
}

.flex-wrap {
  flex-wrap: wrap;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.space-x-1 > * + * {
  margin-left: 0.25rem;
}

.space-x-4 > * + * {
  margin-left: 1rem;
}

/* 定位相关类 */
.relative {
  position: relative;
}

.absolute {
  position: absolute;
}

.right-0 {
  right: 0;
}

.mt-2 {
  margin-top: 0.5rem;
}

/* 尺寸相关类 */
.w-48 {
  width: 12rem;
}

/* 内边距相关类 */
.p-4 {
  padding: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

/* 外边距相关类 */
.mb-6 {
  margin-bottom: 1.5rem;
}

.mr-2 {
  margin-right: 0.5rem;
}

/* 背景颜色类 */
.bg-white {
  background-color: white;
}

/* 文本颜色类 */
.text-gray-600 {
  color: $gray-600;
}

.text-gray-700 {
  color: $gray-700;
}

.text-green-500 {
  color: $tertiary;
}

.text-red-500 {
  color: $danger;
}

.text-blue-500 {
  color: $info;
}

/* 圆角类 */
.rounded-xl {
  border-radius: $rounded-xl;
}

.rounded-lg {
  border-radius: $rounded-xl; /* 使用已定义的变量 */
}

/* 阴影类 */
.shadow-card {
  box-shadow: $shadow-card;
}

.shadow-lg {
  box-shadow: $shadow-card; /* 使用已定义的变量 */
}

/* z-index类 */
.z-10 {
  z-index: 10;
}

/* 背景颜色悬停类 */
.hover\:bg-gray-100:hover {
  background-color: $gray-100;
}

/* 文本颜色悬停类 */
.hover\:text-primary:hover {
  color: $primary;
}

.hover\:text-danger:hover {
  color: $danger;
}

.hover\:text-info:hover {
  color: $info;
}

.hover\:text-warning:hover {
  color: $warning;
}

/* 过渡效果类 */
.transition-colors {
  transition: color 0.2s ease;
}
</style>