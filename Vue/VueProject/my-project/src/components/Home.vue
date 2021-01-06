<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容哈哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <!-- <router-view /> -->
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: "Home",
  created() {
    console.log("created....");
  },
  destroyed() {
    console.log("destroyed....");
  },
};
</script>