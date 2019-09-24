<template>
  <div class="logo flex-center">
    <img src="../assets/logo.png" class="logo-icon" alt="">
    <div class="nav">
      <img src="../assets/nav-icon.png" class="nav-icon" alt="" @click="showNav">
    </div>
    <ul v-if="show" class="nav-list">
      <!-- <li @click="home()">首页</li> -->
      <li @click="goPage('intro')" v-if="hide != 'intro'">走进JAMU HOUSE</li>
      <li @click="goPage('course1')" v-if="hide != 'course1'">JAMU产后修复护理</li>
      <li @click="goPage('course2')" v-if="hide != 'course2'">孕产期舒缓芳香疗法</li>
      <li @click="goPage('course3')" v-if="hide != 'course3'">母乳全段护理</li>
      <li @click="goPage('specialise')" v-if="hide != 'specialise'">专业与安全</li>
      <li @click="goPage('event')" v-if="hide != 'event'">最新活动</li>
      <li @click="goPage('star')" v-if="hide != 'star'">美丽见证</li>
    </ul>
  </div>
</template>

<script>
import router from '@/router';

export default {
  name: 'HelloWorld',
  data() {
    return {
      show: false
    }
  },
  props: {
    hide: {
      type: String,
      default: 'home'
    }
  },
  methods: {
    home() {
      router.replace({
        path:'/'
      })
    },
    goPage(name) {
      router.push({
        name: name,
      })
    },
    showNav() {
      this.show = !this.show
    }
  },
  mounted() {
   
  }
}
</script>

<style scoped lang="less">
.logo{
  height:150px;
  position: relative;
  &-icon{
    width: 214px;
    height: 96px;
    display: inline-block;
  }
  .nav{
    position: absolute;
    right: 34px;
    &-icon{
      width: 46px;
      height: 26px;
    }
    &-list{
      position: absolute;
      top: 120px;
      z-index: 998;
      right: 28px;
      padding-left:44px;
      background: #01450b;
      li{
        list-style:disc;
        width: 220px;
        line-height: 46px;
        color: #fff;
        font-size: 20px;
      }
    }
  }
  
}
</style>
