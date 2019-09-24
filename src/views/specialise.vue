<template>
  <div class="home">
    <div class="home-nav">
      <navbar hide="specialise"/>
    </div>
    <div class="section">
      <img src="../assets/specialise.png" alt="">
    </div>
  </div>
</template>

<script>
// import { Toast } from 'mint-ui';
import navbar from '../components/head'

export default {
  components:{
    navbar
  },
  methods: {
    // Toast('Hello world!');
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
</style>
