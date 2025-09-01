<script setup>
import LeftCard from '../../../components/LeftCard.vue'
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

</script>

<template>

    <!-- 左侧卡片 -->
      <LeftCard
      :categoryList="categoryList"
        >
      </LeftCard>

</template>

<style scoped>

</style>