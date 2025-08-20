<script setup></script>

<template>
    <!-- 左侧菜单 -->
        <aside id="sidebar" class=" w-56 mr-6 flex-shrink-0"> <!--hidden lg:block -->
            <div class="bg-white rounded-xl shadow-card p-4 sticky top-20">
                <h3 id="topics-filter-title" class="text-gray-700 font-semibold mb-3" style="text-align: left;">话题筛选</h3>
                <ul id="topics-filter-list" class="space-y-2">
                    <li>
                        <a href="#" id="filter-all" class="flex items-center py-2 px-3 rounded-lg bg-primary bg-opacity-10 text-primary">
                            <i class="fas fa-layer-group mr-2"></i>
                            <span>全部话题</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="filter-hot" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-fire mr-2"></i>
                            <span>热门话题</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="filter-new" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-clock mr-2"></i>
                            <span>最新话题</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="filter-following" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-user-check mr-2"></i>
                            <span>我关注的</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="filter-participated" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-comments mr-2"></i>
                            <span>我参与的</span>
                        </a>
                    </li>
                </ul>
            </div>
            
            <div class="bg-white rounded-xl shadow-card p-4 mt-6 sticky top-20">
                <h3 id="topic-categories-title" class="text-gray-700 font-semibold mb-3" style="text-align: left;">话题分类</h3>
                <ul id="topic-categories-list" class="space-y-2">
                    <li>
                        <a href="#" id="category-frontend" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-code mr-2"></i>
                            <span>前端开发</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="category-backend" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-server mr-2"></i>
                            <span>后端开发</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="category-mobile" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-mobile-alt mr-2"></i>
                            <span>移动开发</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="category-ai" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-brain mr-2"></i>
                            <span>人工智能</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="category-bigdata" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-database mr-2"></i>
                            <span>大数据</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="category-cloud" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-cloud mr-2"></i>
                            <span>云计算</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" id="category-security" class="flex items-center py-2 px-3 rounded-lg text-gray-600 hover:bg-gray-100">
                            <i class="fas fa-shield-alt mr-2"></i>
                            <span>网络安全</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
        
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

// 容器和布局类
#sidebar {
  width: 14rem; // w-56 (56 * 0.25rem = 14rem)
  margin-right: 1.5rem; // mr-6 (6 * 0.25rem = 1.5rem)
  flex-shrink: 0;
}

.flex {
  display: flex;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.items-center {
  align-items: center;
}

.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.5rem; // space-y-2 (2 * 0.25rem = 0.5rem)
}

.py-2 {
  padding-top: 0.5rem; // py-2 (2 * 0.25rem = 0.5rem)
  padding-bottom: 0.5rem;
}

.px-3 {
  padding-left: 0.75rem; // px-3 (3 * 0.25rem = 0.75rem)
  padding-right: 0.75rem;
}

// 显示控制类
.hidden {
  display: none;
}

.lg\:block {
  @media (min-width: 1024px) {
    display: block;
  }
}

// 尺寸与间距类
.w-56 {
  width: 14rem; // 56 * 0.25rem = 14rem
}

.mr-6 {
  margin-right: 1.5rem; // 6 * 0.25rem = 1.5rem
}

.p-4 {
  padding: 1rem; // 4 * 0.25rem = 1rem
}

.mt-6 {
  margin-top: 5rem; // 6 * 0.25rem = 1.5rem
}

.mb-3 {
  margin-bottom: 0.75rem; // 3 * 0.25rem = 0.75rem
}

.mr-2 {
  margin-right: 0.5rem; // 2 * 0.25rem = 0.5rem
}

// 文本样式类
.text-gray-700 {
  color: $gray-700;
}

.text-gray-600 {
  color: $gray-600;
}

.text-primary {
  color: $primary;
}

.font-semibold {
  font-weight: 600;
}

// 背景与颜色类
.bg-white {
  background-color: #ffffff;
}

.bg-primary {
  background-color: $primary;
}

.bg-gray-100 {
  background-color: $gray-100;
}

// 背景透明度类
.bg-opacity-10 {
  opacity: 100%;
}

// 圆角类
.rounded-lg {
  border-radius: 0.5rem; // rounded-lg
}

.rounded-xl {
  border-radius: $rounded-xl; // 0.75rem
}

// 阴影类
.shadow-card {
  box-shadow: $shadow-card;
}

// 定位类
.sticky {
  position: sticky;
}

.top-20 {
  top: 5rem; // 20 * 0.25rem = 5rem
}

// 其他工具类
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.5rem;
}

// 悬停效果类
.hover\:bg-gray-100:hover {
  background-color: $primary;
}

// 自定义组件样式
#sidebar {
  .bg-white {
    background-color: #ffffff;
  }
  
  .rounded-xl {
    border-radius: $rounded-xl;
  }
  
  .shadow-card {
    box-shadow: $shadow-card;
  }
  
  .p-4 {
    padding: 1rem;
  }
  
  .sticky {
    position: sticky;
  }
  
  .top-20 {
    top: 5rem;
  }
  
  #topics-filter-title,
  #topic-categories-title {
    color: $gray-700;
    font-weight: 600;
    margin-bottom: 0.75rem;
  }
  
  #topics-filter-list,
  #topic-categories-list {
    list-style: none;
    padding: 0;
    margin: 0;
    
    li {
      a {
        display: flex;
        align-items: center;
        padding: 0.5rem 0.75rem;
        border-radius: 0.5rem;
        color: $gray-600;
        text-decoration: none;
        transition: all 0.2s ease;
        
        &:hover {
          background-color: $gray-100;
        }
        
        &.text-primary,
        &#filter-all {
          background-color: rgba($primary, 0.1);
          color: $primary;
          
          &:hover {
            background-color: rgba($primary, 0.2);
          }
        }
        
        i {
          margin-right: 0.5rem;
        }
      }
    }
  }
}

// 响应式调整
@media (max-width: 1023px) {
  .lg\:block {
    display: none;
  }
}
</style>