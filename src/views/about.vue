<template>
  <div class="home">
    <div class="home-nav">
      <navbar hide="about"/>
    </div>
    <div class="section">
      <img src="../assets/about-us.png" alt="">
      <div class="btn-service" @click="goPage()"><img src="../assets/service.png" alt=""></div>
    </div>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui';
import router from '@/router';
import navbar from '../components/head'

export default {
  components:{
    navbar
  },
  methods: {
    goPage() {
      router.push({
        name: 'course1'
      })
    }
  }
}
</script>

<style scoped lang="less">
.home{
  position: relative;
  .home-nav{
    width: 750px;
    position: absolute;
    top: 0;
    z-index: 998;
    background: #fff;
  }
}
.section{
  margin-bottom: 230px;
  position: relative;
  img{
    width: 100%;
  }
}
.btn-service {
  width: 215px;
  height: 45px;
  position: absolute;
  top: 5185px;
  left: 0;right: 0;
    margin:auto;
}
</style>
