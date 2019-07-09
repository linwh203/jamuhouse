<template>
  <div id="app">
    <router-view></router-view>
    <div class="app-nav">
      <div class="app-nav-phone flex-center">
        <img src="./assets/app-nav-phone.png" class="app-nav-phone-img">
      </div>
      <div class="app-nav-btns">
        <div class="app-nav-btns-item nav-btn-one flex-center" @click="call">
          <img src="./assets/icon-phone.png" alt="">
          <p>预约体验</p>
        </div>
        <div class="app-nav-btns-item nav-btn-two flex-center" @click="email">
          <img src="./assets/icon-chat.png" alt="">
          <p>悄悄提问</p>
        </div>
        <div class="app-nav-btns-item nav-btn-three flex-center" @click="home">
          <img src="./assets/icon-home.png" alt="">
          <p>首页</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';

export default {
  name: 'app',
  data() {
    return {
      phonenumber: 4008207156
    }
  },
  methods: {
    call() {
      window.location.href = `tel://${this.phonenumber}`
    },
    email() {
      Toast('EMAIL: service@jamuhouse.cn')
    },
    home() {
      this.$router.replace({
        path:'/'
      })
    }
  },
}
</script>

<style src="./common.less" lang="less"></style>
