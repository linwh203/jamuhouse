<template>
  <div class="home">
    <div class="home-nav">
      <navbar hide="star"/>
    </div>
    <div class="section">
      <img src="../assets/bg-event.png" alt="">
    </div>
    <ul class="list">
      <li class="list-item" v-for="(item, index) in eventList" :key=index>
        <div @click="goLink(item.link)" class="list-item-text">
          <span class="dot"></span>
          {{item.name}}
        </div>
        <div>{{item.time}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
import navbar from '../components/head'

export default {
  components:{
    navbar
  },
  data() {
    return {
      eventList: this.eventData
    }
  },
  methods: {
    goLink(link) {
      window.location.href = link
    }
  },
  created() {
    const event = window.localStorage.getItem('event')
    console.log(event)
    if(event&&this.eventData.length<1) {
      this.eventList = JSON.parse(event)
    }
  }
}
</script>

<style scoped lang="less">
.home{
  // position: relative;
  // .home-nav{
  //   width: 100vw;
  //   position: absolute;
  //   top: 0;
  //   z-index: 998;
  //   background: #fff;
  // }
}
.section{
  position: relative;
  img{
    width: 100%;
  }
}
.list{
    margin-bottom: 230px;
    padding: 0 20px;
  &-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    line-height: 44px;
    border-top: 1px solid #333;/*no*/
    &-text{
      display: flex;
      align-items: center;
    }
  }
  &-item:nth-last-of-type(1) {
    border-bottom: 1px solid #333;/*no*/
  }
  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #01450b;
    display: block;
    margin-right: 16px;
  }
}
</style>
