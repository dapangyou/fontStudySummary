<template>
  <div id="app">
    <router-view></router-view>
    <tab-bar></tab-bar>
  </div>
</template>

<script>
import TabBar from "./components/TabBar/TabBar";
export default {
  name: "App",
  components: {
    TabBar,
  },
};
</script>

<style lang="stylus" scoped ref="stylesheet/stylus">
#app {
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
}
</style>>