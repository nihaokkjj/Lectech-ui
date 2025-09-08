<script setup>
import Left from './components/Left.vue';
import ProfileHeader from './components/ProfileHeader.vue';
import Footer from './components/Footer.vue'
import Article from './components/Article.vue'
import Collection from './components/Collection.vue';
import Comment from './components/Comment.vue';
import Point from './components/Point.vue';
import Following from './components/Following.vue';
import Settings from './components/Settings.vue';
import {ref} from 'vue'

const displayId = ref(0)
//切换展示界面
const switchPage = (number) => {
  displayId.value = number
  console.log('switch', number)
}
</script>

<template>
  <div class="left-content">
  <Left @changePage="switchPage"></Left>
  </div>
  <div class="main-content flex-1 min-w-0">
    <ProfileHeader></ProfileHeader>
    <Article v-show="displayId === 0"></Article>
    <Collection v-show="displayId === 1"></Collection>
    <Comment v-show="displayId === 2"></Comment>
    <Point v-show="displayId === 3"></Point>
    <Following v-show="displayId === 4"></Following>
    <Settings v-show="displayId === 5"></Settings>
  </div>
  <Footer></Footer>
</template>

<style scoped>
  .left-content {
    display: none;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-bottom: 2rem;
    position: absolute;
    top: 5rem;
    left: 1rem;
  }
  @media (min-width: 768px){
  .left-content {
    display: inline-block;
  }
  .main-content {
    margin-left: 30rem;
  }
}
@media (min-width: 800px) {
    .main-content {
        margin-left: 5rem;
    }
}
</style>