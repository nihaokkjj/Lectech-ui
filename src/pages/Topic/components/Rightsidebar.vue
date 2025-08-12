<script setup></script>

<template>
    <!-- 右侧面板 - 仅在大屏幕(≥1440px)显示 -->
        <aside id="right-sidebar" class="hidden xl:block w-72 ml-6 flex-shrink-0">
            <!-- 热门话题 -->
            <div class="bg-white rounded-xl shadow-card p-4 mb-6  top-20" style="position: relative;">
                <h3 class="text-gray-800 font-bold mb-4 flex items-center">
                    <i class="fas fa-fire-flame-curved text-danger mr-2"></i>
                    热门话题
                </h3>
                <ul id="hot-topics-sidebar" class="space-y-3">
                    <li class="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                        <a href="#" id="hot-topic-1" class="block" data-topic-id="1">
                            <h4 class="text-gray-800 font-medium mb-1" style="text-align: left;"># 大型语言模型与AI应用</h4>
                            <p class="text-gray-600 text-sm mb-2 line-clamp-2" style="text-align: left;">讨论大型语言模型(LLM)的发展趋势、应用场景及实践经验</p>
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-gray-500"><i class="fas fa-users mr-1"></i>1.2k人参与</span>
                                <span class="text-primary">进行中</span>
                            </div>
                        </a>
                    </li>
                    <li class="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                        <a href="#" id="hot-topic-2" class="block" data-topic-id="2">
                            <h4 class="text-gray-800 font-medium mb-1" style="text-align: left;"># 前端框架选型对比</h4>
                            <p class="text-gray-600 text-sm mb-2 line-clamp-2" style="text-align: left;">React vs Vue vs Angular vs Svelte，各框架优缺点与适用场景分析</p>
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-gray-500"><i class="fas fa-users mr-1"></i>856人参与</span>
                                <span class="text-primary">进行中</span>
                            </div>
                        </a>
                    </li>
                    <li class="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                        <a href="#" id="hot-topic-3" class="block" data-topic-id="3">
                            <h4 class="text-gray-800 font-medium mb-1" style="text-align: left;"># 微服务架构实践</h4>
                            <p class="text-gray-600 text-sm mb-2 line-clamp-2" style="text-align: left;">分享微服务架构设计、实现与优化的经验，解决实际项目中的挑战</p>
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-gray-500"><i class="fas fa-users mr-1"></i>732人参与</span>
                                <span class="text-primary">进行中</span>
                            </div>
                        </a>
                    </li>
                    <li class="bg-gray-50 rounded-lg p-3 hover:bg-gray-100 transition-colors">
                        <a href="#" id="hot-topic-4" class="block" data-topic-id="4">
                            <h4 class="text-gray-800 font-medium mb-1" style="text-align: left;"># 移动端跨平台开发技术</h4>
                            <p class="text-gray-600 text-sm mb-2 line-clamp-2" style="text-align: left;">探讨Flutter、React Native、Uni-app等跨平台技术的优劣势</p>
                            <div class="flex items-center justify-between text-xs">
                                <span class="text-gray-500"><i class="fas fa-users mr-1"></i>615人参与</span>
                                <span class="text-primary">进行中</span>
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
            
            <!-- 活跃参与者 -->
            <div class="bg-white rounded-xl shadow-card p-4" style="margin-top: 7rem;">
                <h3 class="text-gray-800 font-bold mb-4 flex items-center">
                    <i class="fas fa-user-group text-info mr-2"></i>
                    活跃参与者
                </h3>
                <ul id="active-participants" class="space-y-4">
                    <li class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="参与者头像" class="w-10 h-10 rounded-full object-cover">
                        <div class="ml-3 flex-1 min-w-0">
                            <h4 class="text-gray-800 font-medium">Sarah Lin</h4>
                            <p class="text-gray-500 text-xs">人工智能 | 38篇文章</p>
                        </div>
                        <button id="follow-user-1" class="text-primary text-sm font-medium hover:text-secondary">
                            <i class="fas fa-plus mr-1"></i>关注
                        </button>
                    </li>
                    <li class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="参与者头像" class="w-10 h-10 rounded-full object-cover">
                        <div class="ml-3 flex-1 min-w-0">
                            <h4 class="text-gray-800 font-medium">David Chen</h4>
                            <p class="text-gray-500 text-xs">前端开发 | 42篇文章</p>
                        </div>
                        <button id="follow-user-2" class="text-primary text-sm font-medium hover:text-secondary">
                            <i class="fas fa-plus mr-1"></i>关注
                        </button>
                    </li>
                    <li class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="参与者头像" class="w-10 h-10 rounded-full object-cover">
                        <div class="ml-3 flex-1 min-w-0">
                            <h4 class="text-gray-800 font-medium">Michael Wu</h4>
                            <p class="text-gray-500 text-xs">后端开发 | 35篇文章</p>
                        </div>
                        <button id="follow-user-3" class="text-primary text-sm font-medium hover:text-secondary">
                            <i class="fas fa-plus mr-1"></i>关注
                        </button>
                    </li>
                    <li class="flex items-center">
                        <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=64&q=80" alt="参与者头像" class="w-10 h-10 rounded-full object-cover">
                        <div class="ml-3 flex-1 min-w-0">
                            <h4 class="text-gray-800 font-medium">Emily Wang</h4>
                            <p class="text-gray-500 text-xs">大数据 | 28篇文章</p>
                        </div>
                        <button id="follow-user-4" class="text-primary text-sm font-medium hover:text-secondary">
                            <i class="fas fa-plus mr-1"></i>关注
                        </button>
                    </li>
                </ul>
            </div>
        </aside>
</template>

<style lang="scss" scoped>
@import '../../../style.scss';

// 基础布局类
.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-between {
  justify-content: space-between;
}

.flex-1 {
  flex: 1;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.min-w-0 {
  min-width: 0;
}

.block {
  display: block;
}

// 显示控制类
.hidden {
  display: none;
}

.xl\:block {
  @media (min-width: 1280px) {
    display: block;
  }
}

// 尺寸与间距类
.w-72 {
  width: 18rem; // 72 * 0.25rem = 18rem
}

.w-10 {
  width: 2.5rem; // 10 * 0.25rem = 2.5rem
}

.h-10 {
  height: 2.5rem; // 10 * 0.25rem = 2.5rem
}

.ml-6 {
  margin-left: 1.5rem; // 6 * 0.25rem = 1.5rem
}

.mr-2 {
  margin-right: 0.5rem; // 2 * 0.25rem = 0.5rem
}

.ml-3 {
  margin-left: 0.75rem; // 3 * 0.25rem = 0.75rem
}

.mb-4 {
  margin-bottom: 1rem; // 4 * 0.25rem = 1rem
}

.mb-1 {
  margin-bottom: 0.25rem; // 1 * 0.25rem = 0.25rem
}

.mb-2 {
  margin-bottom: 0.5rem; // 2 * 0.25rem = 0.5rem
}

.mr-1 {
  margin-right: 0.25rem; // 1 * 0.25rem = 0.25rem
}

.p-4 {
  padding: 1rem; // 4 * 0.25rem = 1rem
}

.p-3 {
  padding: 0.75rem; // 3 * 0.25rem = 0.75rem
}

.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}

.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}

.space-y-3 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 0.75rem; // 3 * 0.25rem = 0.75rem
}

.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem; // 4 * 0.25rem = 1rem
}

// 文本样式类
.text-gray-800 {
  color: $gray-800;
}

.text-gray-600 {
  color: $gray-600;
}

.text-gray-500 {
  color: $gray-500;
}

.text-primary {
  color: $primary;
}

.text-danger {
  color: $danger;
}

.text-info {
  color: $info;
}

.text-secondary {
  color: $secondary;
}

.text-sm {
  font-size: $text-sm; // 0.875rem
}

.text-xs {
  font-size: $text-xs; // 0.75rem
}

.font-bold {
  font-weight: 700;
}

.font-medium {
  font-weight: 500;
}

// 背景与颜色类
.bg-white {
  background-color: #ffffff;
}

.bg-gray-50 {
  background-color: $gray-50;
}

.bg-gray-100 {
  background-color: $gray-100;
}

// 圆角类
.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
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
.object-cover {
  object-fit: cover;
}

.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.transition-colors {
  transition-property: color, background-color;
  transition-duration: 0.2s;
  transition-timing-function: ease;
}

// 悬停效果类
.hover\:bg-gray-100:hover {
  background-color: $gray-100;
}

.hover\:text-secondary:hover {
  color: $secondary;
}

// 自定义组件样式
#right-sidebar {
  width: 18rem; // w-72
  margin-left: 1.5rem; // ml-6
  flex-shrink: 0;
  
  @media (min-width: 1280px) {
    display: block;
  }
  
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
  
  .mb-6 {
    margin-bottom: 1.5rem; // 6 * 0.25rem = 1.5rem
  }
  
  .sticky {
    position: sticky;
  }
  
  .top-20 {
    top: 5rem;
  }
  
  h3 {
    color: $gray-800;
    font-weight: 700;
    margin-bottom: 1rem;
    
    .text-danger {
      color: $danger;
    }
    
    .text-info {
      color: $info;
    }
    
    .mr-2 {
      margin-right: 0.5rem;
    }
  }
  
  #hot-topics-sidebar {
    list-style: none;
    padding: 0;
    margin: 0;
    
    .bg-gray-50 {
      background-color: $gray-50;
    }
    
    .rounded-lg {
      border-radius: 0.5rem;
    }
    
    .p-3 {
      padding: 0.75rem;
    }
    
    .transition-colors {
      transition: background-color 0.2s ease;
    }
    
    li {
      &:hover {
        background-color: $gray-100;
      }
      
      a {
        display: block;
        text-decoration: none;
        
        h4 {
          color: $gray-800;
          font-weight: 500;
          margin-bottom: 0.25rem;
        }
        
        .text-gray-600 {
          color: $gray-600;
        }
        
        .text-sm {
          font-size: $text-sm;
        }
        
        .mb-2 {
          margin-bottom: 0.5rem;
        }
        
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .flex {
          display: flex;
        }
        
        .items-center {
          align-items: center;
        }
        
        .justify-between {
          justify-content: space-between;
        }
        
        .text-xs {
          font-size: $text-xs;
        }
        
        .text-gray-500 {
          color: $gray-500;
        }
        
        .mr-1 {
          margin-right: 0.25rem;
        }
      }
    }
  }
  
  #active-participants {
    list-style: none;
    padding: 0;
    margin: 0;
    
    .space-y-4 > :not([hidden]) ~ :not([hidden]) {
      margin-top: 1rem;
    }
    
    li {
      display: flex;
      align-items: center;
      
      .w-10 {
        width: 2.5rem;
      }
      
      .h-10 {
        height: 2.5rem;
      }
      
      .rounded-full {
        border-radius: 9999px;
      }
      
      .object-cover {
        object-fit: cover;
      }
      
      .ml-3 {
        margin-left: 0.75rem;
      }
      
      .flex-1 {
        flex: 1;
      }
      
      .min-w-0 {
        min-width: 0;
      }
      
      h4 {
        color: $gray-800;
        font-weight: 500;
        margin: 0;
      }
      
      .text-gray-500 {
        color: $gray-500;
      }
      
      .text-xs {
        font-size: $text-xs;
      }
      
      button {
        color: $primary;
        font-size: $text-sm;
        font-weight: 500;
        background: none;
        border: none;
        cursor: pointer;
        padding: 0;
        
        &:hover {
          color: $secondary;
        }
        
        .mr-1 {
          margin-right: 0.25rem;
        }
      }
    }
  }
}

// 响应式隐藏
@media (max-width: 1279px) {
  .xl\:block {
    display: none;
  }
}
</style>