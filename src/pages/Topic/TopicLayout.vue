<!-- TopicLayout.vue -->
<script setup>
import Sidebar from './components/Sidebar.vue'
import Rightsidebar from './components/Rightsidebar.vue'
import Header from './components/Header.vue';
</script>

<template>
  <div class="flex">
    <!-- <Header /> -->
    <!-- 左侧边栏 -->
    <!-- <Sidebar /> -->
    
    <!-- 主内容区域 -->
    <main class="flex-1 min-w-0">
      <router-view></router-view>
    </main>
    
    <!-- 右侧边栏 -->
    <Rightsidebar />
  </div>
</template>

<style scoped>
.flex {
  display: flex;
}

.flex-1 {
  flex: 1;
}

.min-w-0 {
  min-width: 0;
}
#sidebar {
  width: 14rem;
  margin-right: 1.5rem;
  flex-shrink: 0;
}

#right-sidebar {
  width: 18rem;
  margin-left: 1.5rem;
  flex-shrink: 0;
}

@media (max-width: 1279px) {
  #right-sidebar {
    display: none;
  }
}

@media (max-width: 1023px) {
  #sidebar {
    display: none;
  }
}
</style>