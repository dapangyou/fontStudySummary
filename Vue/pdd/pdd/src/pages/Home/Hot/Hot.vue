<template>
  <div class="hot">
    <!-- 轮播图 -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../images/rowing/s1.png" alt="" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="../images/rowing/s2.png" alt="" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="../images/rowing/s3.png" alt="" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="../images/rowing/s4.png" alt="" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="../images/rowing/s5.png" alt="" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="../images/rowing/s6.png" alt="" width="100%" />
        </div>
        <div class="swiper-slide">
          <img src="../images/rowing/s7.png" alt="" width="100%" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>
    </div>
    <!-- 中间导航 -->
    <hot-nav></hot-nav>

    <!-- 广告位 -->
    <div class="hot-ad">
      <img src="@/pages/Home/images/ad/home_ad.gif" alt="" />
    </div>
    <!-- 商品列表 -->
    <hot-shop-list></hot-shop-list>
    <hot-shop-list></hot-shop-list>
    <hot-shop-list></hot-shop-list>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/swiper.min.css";
import HotNav from "./HotNav";
import HotShopList from "./HotShopList";
import request from "api/ajax";

export default {
  name: "Hot",
  components: {
    HotNav,
    HotShopList,
  },
  mounted() {
    //   创建swipper实例
    new Swiper(".swiper-container", {
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      loop: true, // 循环模式选项
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination",
      },
    });
  },
};
</script>

<style scoped lang="stylus" ref="stylesheet/stylus">
.hot {
  width: 100%;
  height: 100%;
  background: #f5f5f5;
  padding-top: 46px;

  .hot-ad {
    background-color: #fff;
    margin: 8px 0;
    padding: 5px;

    img {
      width: 100%;
    }
  }
}
</style>
