<template>
  <div class="home">
    <navbar />
    <div class="swipe">
      <mt-swipe :auto="3000">
        <mt-swipe-item class="swipe-item" v-for="img in bannerList" :key="img"><img :src="img" alt=""></mt-swipe-item>
        <!-- <mt-swipe-item class="swipe-item"><img src="img/home/banner-2.png" alt=""></mt-swipe-item> -->
      </mt-swipe>
    </div>
    <div class="section">
      <div class="section-title border-bottom">
        <h1>疗程</h1>
        <h2>OUR TREATMENTS</h2>
      </div>
      <div class="section-text flex-center">
        <img src="../assets/section-text-1.png" alt="">
      </div>
      <div class="section-link">
        <div class="section-link-item">
          <div class="section-link-item-main" @click="goPage('course1')">
            <div class="section-link-item-main-text">
              <h3>JAMU产后修复护理</h3>
              <h4>JAMU POSTNATAL CARE</h4>
            </div>
            <img class="section-link-item-main-arrow" src="../assets/section-icon-arrow.png">
          </div>
          <img class="section-link-item-bg" src="../assets/section-bg-1.png" alt="">
        </div>
        <div class="section-link-item">
          <div class="section-link-item-main" @click="goPage('course2')">
            <div class="section-link-item-main-text">
              <h3>孕产期舒缓芳香疗法</h3>
              <h4>PRENATAL & POSTNATAL CARE</h4>
              <!-- <h4>POSTNATAL CARE</h4> -->
            </div>
            <img class="section-link-item-main-arrow" src="../assets/section-icon-arrow.png">
          </div>
           <img class="section-link-item-bg" src="../assets/section-bg-2.png" alt="">
        </div>
        <div class="section-link-item">
          <div class="section-link-item-main" @click="goPage('course3')">
            <div class="section-link-item-main-text">
              <h3>母乳全段护理</h3>
              <h4>BREAST MILK NURSING</h4>
            </div>
            <img class="section-link-item-main-arrow" src="../assets/section-icon-arrow.png">
          </div>
           <img class="section-link-item-bg" src="../assets/section-bg-3.png" alt="">
        </div>
      </div>
    </div>
    <div class="middle-banner" @click="goPage('about')">
      <!-- <div class="middle-banner-text">
        <h1>JAMU的起源</h1>
        <img src="../assets/section-mid-text-line.png" class="middle-banner-text-line">
      </div> -->
      <img src="../assets/banner-middle.png" alt="" class="middle-banner-bg">
    </div>
    <div class="section">
      <div class="section-title">
        <h1>关于我们</h1>
        <h2>ABOUT US</h2>
      </div>
      <div class="section-about">
        <div class="section-about-item" @click="goPage('intro')">
          <img src="../assets/section-about-bg-1.png" alt="" class="section-about-item-img">
          <h4>走进JAMU HOUSE</h4>
          <h5>ABOUT JAMU HOUSE</h5>
        </div>
        <div class="section-about-item" @click="goPage('specialise')">
          <img src="../assets/section-about-bg-2.png" alt="" class="section-about-item-img">
          <h4>专业及安全</h4>
          <h5>PORFESSIONAL</h5>
        </div>
        <div class="section-about-item" @click="goPage('event')">
          <img src="../assets/section-about-bg-3.png" alt="" class="section-about-item-img">
          <h4>最新活动</h4>
          <h5>LATEST EVENTS</h5>
        </div>
      </div>
    </div>
    <div class="section padding-bottom" >
      <div class="section-title">
        <h1>美丽见证</h1>
        <h2>TESTIMONIALS</h2>
      </div>
      <div class="section-star" @click="goPage('star')">
        <div class="section-star-left">
          <img src="../assets/section-gallery-left-1.png" alt="" class="section-star-left-img">
        </div>
        <div class="section-star-mid">
          <img src="../assets/section-gallery-mid-1.png" alt="" class="section-star-mid-img">
          <img src="../assets/section-gallery-mid-2.png" alt="" class="section-star-mid-img">
        </div>
        <div class="section-star-right">
          <img src="../assets/section-gallery-right-1.png" alt="" class="section-star-right-img">
        </div>
      </div>
    </div>
    <!-- <div class="section">
      <div class="section-title border-bottom">
        <h1>专家顾问</h1>
        <h2>EXPERT CONSULTANT</h2>
      </div>
      <div class="section-expert">
        <div class="section-expert-info">
          <div class="section-expert-info-item">
            <div class="section-expert-info-item-avatar">
              <img src="../assets/section-expert-1.png" class="section-expert-info-item-avatar-img">
            </div>
            <div class="section-expert-info-item-name">BUNNY</div>
            <div class="section-expert-info-item-text">
              Historically, UAB football has been a terrible program. That said, bill clark has done a fantastic job with us
            </div>
          </div>
          <div class="section-expert-info-item">
            <div class="section-expert-info-item-avatar">
              <img src="../assets/section-expert-2.png" class="section-expert-info-item-avatar-img">
            </div>
            <div class="section-expert-info-item-name">ARON</div>
            <div class="section-expert-info-item-text">
              Historically, UAB football has been a terrible program. That said, bill clark has done a fantastic job with us
            </div>
          </div>
          <div class="section-expert-info-item">
            <div class="section-expert-info-item-avatar">
              <img src="../assets/section-expert-3.png" class="section-expert-info-item-avatar-img">
            </div>
            <div class="section-expert-info-item-name">ESTELLE</div>
            <div class="section-expert-info-item-text">
              Historically, UAB football has been a terrible program. That said, bill clark has done a fantastic job with us
            </div>
          </div>
        </div>
        <div class="section-expert-bg">
          <img src="../assets/section-expert-bg.png" class="section-expert-bg-img">
        </div>
      </div>
    </div> -->
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
  data() {
    return {
      bannerList: this.jsonData.homeBanner
    }
  },
  methods: {
    goPage(name) {
      router.push({
        name: name,
      })
    }
  },
  mounted() {
    const banner = window.localStorage.getItem('banner')
    // console.log(JSON.parse(banner).homeBanner)
    if(banner&&!this.jsonData) {
      this.bannerList = JSON.parse(banner).homeBanner
    }
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
  height: 430px;
  margin-bottom:36px;
  img{
    height: 100%;
    width: 100%;
    display: block;
  }
}
.section{
  margin-bottom: 50px;
  &-title{
    text-align: center;
    padding:38px 0; 
    h1{
      font-size:30px; /*px*/
      font-weight: normal;
      margin-bottom: 10px;
    }
    h2{
      font-size:33px; /*px*/
      font-family: Helvetica;
      font-weight: normal;
    }
  }
  &-text{
    padding:36px 0 85px;
    img{
      width: 540px;
      height: 96px;
      display: inline-block;
    }
  }
  &-link{
    &-item{
      position: relative;
      margin-bottom:20px;
      &-main{
        position: absolute;
        top: 34px;left: 30px;
        z-index:2;
        width: 350px;
        height: 160px;
        background: #fff;
        color:#000;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        &-text{
          margin: 0 10px 0 0;
          text-align: right;
          h3{
            font-size:22px; /*px*/
            // font-weight: normal;
          }
          h4{
            font-size:20px; /*px*/
            white-space:nowrap;
            // transform: scale(0.95);
            margin-right:0%;
            // font-weight: normal;
          }
        }
        &-arrow{
          width: 18px;
          height: 56px;
          margin-right: 20px;
        }
      }
      &-bg{
        margin-left:164px;
        width: 494px;
        height: 230px;
        display: inline-block;
      }
    }
  }
  &-about{
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
    &-item{
      width: 215px;
      height: 267px;
      border:2px solid #000;/*no*/
      display: flex;
      flex-direction: column;
      align-items: center;
      &-img{
        width: 217px;
        height: 145px;
        display: block;
      }
      h4{
        margin-top: 30px;
        font-size:20px;
        white-space: nowrap;
        transform: scale(0.8);
      }
      h5{
        font-size:20px;
        white-space: nowrap;
        transform: scale(0.8);
      }
    }
  }
  &-star{
    display: flex;
    justify-content: center;
    margin: 0 30px;
    font-size:0;
    &-left{
      margin-right: 12px;
      &-img{
        width: 223px;
        height: 365px;
      }
    }
    &-mid{
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-right: 12px;
      &-img{
        width: 222px;
        height: 176px;
      }
    }
    &-right{
      &-img{
        width: 223px;
        height: 365px;
      }
    }
  }
  &-expert{
    &-info{
      display: flex;
      justify-content: center;
      margin-top: 40px;
      &-item{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin: 0 20px;
        &-avatar{
          width: 152px;
          height: 152px;
          border-radius: 50%;
          overflow: hidden;
          margin-bottom: 24px;
          &-img{
            width: 100%;
            height: 100%;
            float: left;
          }
        }
        &-name{
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 20px;
        }
        &-text{
          width: 180px;
          height: 200px;
          overflow:hidden;
          word-wrap:break-word;
          font-size: 18px;
        }
      }
    }
    &-bg{
      font-size: 0;
      &-img{
        width: 100%;
        height: 334px;
      }
    }
  }
}
.middle-banner{
  position: relative;
  font-size:0;
  &-text{
    position: absolute;
    top: 206px;
    left: 130px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h1{
      text-align: center;
      color:#73b32f;
      font-size:24px;
    }
    &-line{
      width: 158px;
      height: 10px;
    }
  }
  &-bg{
    width: 100%;
    height: 444px;
    display: inline-block;
  }
}
.border-bottom{
  border-bottom:2px solid #000;/*no*/ 
}
.padding-bottom{
  margin-bottom: 420px;
}
</style>
