<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/home" activeColor="red">
        <img slot="item-icon" src="./assets/img/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/homeselected.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/category" activeColor="blue">
        <img slot="item-icon" src="./assets/img/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/categoryselected.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/cart" activeColor="green">
        <img slot="item-icon" src="./assets/img/cart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="./assets/img/cartselected.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tab-bar-item>
      <tab-bar-item path="/my" activeColor="pink">
        <img slot="item-icon" src="./assets/img/my.svg" alt="" />
        <img slot="item-icon-active" src="./assets/img/myselected.svg" alt="" />
        <div slot="item-text">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/tabbar/TabBar";
import TabBarItem from "./components/tabbar/TabBarItem";
export default {
  name: "App",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>
<style scoped>
@import url("./assets/css/base.css");

</style>


