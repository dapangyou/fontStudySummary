<template>
  <div class="article-list">
    <van-pull-refresh
      v-model="isRefreshLoading"
      @refresh="onRefresh"
      :success-text="refreshSuccessText"
      :success-duration="1500"
    >
      <van-list
        class="article-detail"
        v-model="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <article-item
          v-for="(item, index) in articles"
          :key="index"
          :article="item"
        ></article-item>
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getArticles } from "@/api/article";
import ArticleItem from "./article-item";
export default {
  name: "",
  data() {
    return {
      articles: [],
      finished: false,
      loading: false,
      //   获取下一页的时间戳
      timestamp: null,
      //下拉刷新的loading
      isRefreshLoading: false,
      //   下拉刷新成功
      refreshSuccessText: "",
    };
  },
  props: {
    channel: {
      type: Object,
      require: true,
    },
  },
  components: { ArticleItem },

  computed: {},

  mounted() {},

  methods: {
    async onLoad() {
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: Date.now(),
        with_top: 1,
      });
      //   console.log(data);
      const { results } = data.data;
      this.articles.push(...results);
      this.loading = false;

      //   4.数据全部加载完成
      if (results.length) {
        //   更新页码
        this.timestamp = data.data.pre_timestamp;
      } else {
        this.finished = true;
      }
    },
    async onRefresh() {
      const { data } = await getArticles({
        channel_id: this.channel.id,
        timestamp: this.timestamp || Date.now(),
        with_top: 1,
      });
      // 把数据方直到数据列表中
      this.articles.unshift(...data.data.results);
      this.isRefreshLoading = false;
      const { results } = data.data;
      this.refreshSuccessText = `更新了${results.length}条数据`;
      //   console.log(data);
    },
  },
};
</script>
<style lang='less' scoped>
.article-list {
  position: fixed;
  left: 0;
  right: 0;
  top: 90px;
  bottom: 50px;
  overflow-y: auto;
  .article-detail {
    text-align: left;
  }
}
</style>