<script setup>
import {ref, defineProps} from 'vue'

defineProps ({
    categoryList: {
        type: Array,
        required: true,
        validator: (value) => {
            return value.every(item => 
                typeof item.id === 'number' &&
                typeof item.name === 'string' &&
                typeof item.icon === 'string'
            )
        }
    }
})


//访问的类别
const activeId = ref(0)

const changeList = (id)=>{
  activeId.value = id
}
</script>

<template>
    <aside id="sidebar" class="sidebar">
      <div class="sidebar-card">
        <h3 id="categories-title" class="categories-title">文章分类</h3>
        <ul class="categories-list">
          <li
          v-for="list in categoryList" 
          :key="list.id"
         >
            <div  
            class="category-link"
            :class="{'category-active-link': activeId === list.id}"
            @click="changeList(list.id)"
            >
              <i class="fas" :class="list.icon"></i>
              <span>{{list.name}}</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
</template>

<style scoped>
/* 左侧菜单 */
.sidebar {
    display: none;
    width: 14rem;
    margin-right: 1.5rem;
    flex-shrink: 0;
    padding-bottom: 2rem;
    position: absolute;
}

/* 在中等屏幕及以上显示 */
@media (min-width: 1024px) {
    .sidebar {
        display: block;
        position: fixed;
    }
}

.sidebar-card {
    background-color: #ffffff;
    border-radius: 0.75rem;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    position: sticky;
    top: 2rem;
}

.categories-title {
    color: #374151;
    font-weight: 600;
    margin-bottom: 0.75rem;
}

.categories-list {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

/* 链接样式 */
.category-link {
    display: flex;
    align-items: center;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    border-radius: 0.5rem;
    color: #4b5563;
}

/* 图标和文字间距 */
.category-link i {
    margin-right: 0.5rem;
}

/* 链接悬停样式 */
.category-link:hover {
    background-color: #f3f4f6;
}

/* 激活状态的链接样式 */
.category-active-link {
    background-color: rgba(79, 70, 229, 0.1);
    color: #4F46E5;
}
</style>