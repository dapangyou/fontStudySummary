<template>
  <div class="search-history">
    <van-cell title="搜索历史">
      <div v-if="isDeleteShow">
        <span @click="$emit('update-history', [])">全部删除</span>
        &nbsp;&nbsp;
        <span @click="isDeleteShow = false">完成</span>
      </div>
      <van-icon name="delete" v-else @click="isDeleteShow = true" />
    </van-cell>
    <van-cell
      v-for="(item, index) in searchHistoryList"
      :key="index"
      :title="item"
      @click="onDelete(item, index)"
    >
      <van-icon name="close" v-show="isDeleteShow" />
    </van-cell>
  </div>
</template>

<script>
import { setItem } from "@/utils/storage";
export default {
  name: "searchHistory",
  data() {
    return {
      isDeleteShow: false,
    };
  },
  props: {
    searchHistoryList: {
      type: Array,
      required: true,
    },
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    onDelete(history, index) {
      if (this.isDeleteShow) {
        // 如果是删除状态 则执行删除操作
        this.searchHistoryList.splice(index, 1);
        // 持久化删除
        // 删除本地存储
        setItem("search-history", this.searchHistoryList);
        // 删除线上数据
      } else {
        // 非删除状态  展示搜索结果
        this.$emit("search", history);
      }
      // console.log(index);
    },
  },
};
</script>
<style lang='less' scoped>
.search-history {
  text-align: left;
}
</style>