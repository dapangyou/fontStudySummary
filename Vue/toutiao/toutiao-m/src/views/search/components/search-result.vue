<template>
  <div class="search-result">
    <van-list
      v-model="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="(item,index) in list" :key="index" :title="item.title" />
    </van-list>
  </div>
</template>

<script>
import {getSearchResults} from "@/api/search"
export default {
  name: "SearchResult",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      // 页码
      page: 1,
      // 每页数据条数
      prePage: 10,
    };
  },
  props: {
    searchText: {
      type:String,
      required: true
    }
  },
  components: {},

  computed: {},

  mounted() {},

  methods: {
    async onLoad() {
      // 1.请求获取数据
      const {data} = await getSearchResults({
        page: this.page,
        pre_page: this.prePage,
        q: this.searchText
      });
      // console.log(data);
      // 2.将数据放到数据列表中、
      const {results} = data.data;
      this.list.push(...results);
      // 3.关闭本次loading
      this.loading = false;
      // 4.判断是否有数据
      if(results.length) {
        this.page ++;
      }else {
        // 关闭加载更多
        this.finished = true;
      }
      // 如果有 则更新获取下一页数据页码
      // 如果没有 就把finished设为true  关闭加载更多

    },
  },
};
</script>
<style lang='less' scoped>
</style>