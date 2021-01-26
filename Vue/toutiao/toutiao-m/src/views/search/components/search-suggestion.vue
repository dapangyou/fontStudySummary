<template>
  <div class="search-suggestion">
    <van-cell icon="search" 
      v-for="(item, index) in suggestions" 
      :key="index"
      @click="$emit('search',item)"
    >
      <div slot="title" v-html="highlight(item)"></div>
    </van-cell>
  </div>
</template>

<script>
import { getSearchSuggestions } from "@/api/search";
import { debounce } from "lodash";
export default {
  name: "searchSuggestion",
  data() {
    return {
      suggestions: [],
      htmlStr: "",
    };
  },
  props: {
    searchText: {
      type: String,
      required: true,
    },
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    highlight(str) {
      return str.replace(
        new RegExp(this.searchText, "gi"),
        `<span style="color: red">${this.searchText}</span>`
      );
    },
  },
  watch: {
    // searchText() {
    //   console.log("hello");
    // },
    searchText: {
      // 当数据发生变化则会执行handle处理函数
      //   函数防抖
      handler: debounce(async function () {
        const { data } = await getSearchSuggestions(this.searchText);
        this.suggestions = data.data.options;
        // console.log(data);
      }, 200),
      // 该回调会在侦听开始立即被调用
      immediate: true,
    },
  },
};
</script>
<style lang='less' scoped>
.search-suggestion {
  text-align: left;
}
</style>