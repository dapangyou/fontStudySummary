<template>
  <div class="home">
    <ly-tab
      v-model="selectIded"
      :items="items"
      :options="options"
      @change="handleChange"
      class="fix"
    ></ly-tab>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      selectIded: 0,
      items: [
        { label: "热门" },
        { label: "服饰" },
        { label: "鞋包" },
        { label: "母婴" },
        { label: "百货" },
        { label: "食品" },
        { label: "内衣" },
        { label: "男装" },
        { label: "电器" },
      ],
      options: {
        //设置选中的颜色
        activeColor: "#e9232c",
      },
      subRouteUrl: [
        "/home/hot",
        "/home/dress",
        "/home/box",
        "/home/mbaby",
        "/home/general",
        "/home/shirt",
        "/home/man",
        "/home/man",
        "/home/ele",
      ],
    };
  },
  methods: {
    handleChange(item, index) {
      this.$router.replace(this.subRouteUrl[index]);
    },
  },
};
</script>
<style scoped lang="stylus" ref="stylesheet/stylus">
.home {
  background: #f5f5f5;
  width: 100%;
  height: 100%;

  .fix {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 998;
  }
}
</style>