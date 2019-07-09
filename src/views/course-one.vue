<template>
  <div class="home">
    <div class="logo flex-center">
      <img src="../assets/logo.png" alt="">
    </div>
    <div class="swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item class="swipe-item"><img src="../assets/coursebanner-1.png" alt=""></mt-swipe-item>
        <mt-swipe-item class="swipe-item"><img src="../assets/coursebanner-2.png" alt=""></mt-swipe-item>
      </mt-swipe>
    </div>
    <div class="section">
      <img src="../assets/course1-bg.png" alt="">
      <div class="btn-1" @click="goPage('course1-1')"><img src="../assets/course-btn.png" alt=""></div>
      <div class="btn-2" @click="goPage('course1-2')"><img src="../assets/course-btn.png" alt=""></div>
    </div>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui';
import router from '@/router';

export default {
  methods: {
    goPage(name) {
      router.push({
        name: name,
      })
    }
    // Toast('Hello world!');
  }
}
</script>

<style scoped lang="less">
.logo{
  height:150px;
  img{
    width: 214px;
    height: 96px;
    display: inline-block;
  }
}
.swipe{
  height: 370px;
  img{
    height: 100%;
    width: 100%;
    display: block;
  }
}
.section{
  margin-bottom: 230px;
  position: relative;
  img{
    width: 100%;
  }
  .btn-1{
    width: 194px;
    height: 40px;
    position: absolute;
    top: 1032px;
    left: 0;right: 0;
    margin:auto;
  }
  .btn-2{
    width: 194px;
    height: 40px;
    position: absolute;
    top: 2064px;
    left: 0;right: 0;
    margin:auto;
  }
}
.border-bottom{
  border-bottom:2px solid #000;/*no*/ 
}
</style>
