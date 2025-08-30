<script setup>
import {ref} from 'vue'

const categoryList = ref([
  {id: 0, name: '全部文章', icon: 'fa-laptop-code'},
  {id: 1, name: '前端开发', icon: 'fa-code'},
  {id: 2, name: '后端开发', icon: 'fa-server'},
  {id: 3, name: '移动开发', icon: 'fa-mobile-alt'},
  {id: 4, name: '人工智能', icon: 'fa-brain'},
  {id: 5, name: '大数据', icon: 'fa-database'},
  {id: 6, name: '云计算', icon: 'fa-cloud'},
  {id: 7, name: '网络安全', icon: 'fa-shield-alt'},
])

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
@import './scss/leftcard.scss'
</style>