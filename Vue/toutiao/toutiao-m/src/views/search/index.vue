<template>
  <div class="search-container">
    <!-- 搜索栏 -->
    <form action="/">
      <van-search
        v-model="searchText"
        show-action
        @search="onSearch(searchText)"
        @cancel="$router.back()"
        placeholder="请输入搜索关键词"
        @focus="isResultShow = false"
      />
    </form>

    <!-- 搜索结果 -->
    <search-result
      v-if="isResultShow"
      class="search-result"
      :search-text="searchText"
    ></search-result>
    <!-- 联想建议 -->
    <search-suggestion
      v-else-if="searchText"
      :search-text="searchText"
      @search="onSearch"
    ></search-suggestion>

    <!-- 历史记录 -->
    <search-history
      v-else
      :searchHistoryList="searchHistoryList"
      @search="onSearch"
      @update-history="searchHistoryList = $event"
    ></search-history>
  </div>
</template>

<script>
import SearchHistory from "./components/search-history.vue";
import SearchSuggestion from "./components/search-suggestion";
import SearchResult from "./components/search-result";
import { setItem, getItem } from "@/utils/storage";
// import {getUserHistoryList} from "@/api/search"
import { getUserHistoryList } from "@/api/search";
import { mapState } from "vuex";
export default {
  name: "SearchIndex",
  data() {
    return {
      // 搜索输入框的内容
      searchText: "",
      //   控制搜索结果的显示
      isResultShow: false,
      // 历史搜索记录
      searchHistoryList: [],
    };
  },

  components: {
    SearchSuggestion,
    SearchHistory,
    SearchResult,
  },
  created() {
    // const {data} = await getUserHistoryList();
    // console.log(data);
    this.loadSearchHistory();
  },

  computed: {
    ...mapState(["user"]),
  },

  mounted() {},
  watch: {
    searchHistoryList() {
      setItem("search-history", this.searchHistoryList);
    },
  },
  methods: {
    async loadSearchHistory() {
      let localHistoryList = getItem("search-history") || [];
      if (this.user) {
        const { data } = await getUserHistoryList();
        // 将Set转化成数组
        localHistoryList = [
          ...new Set([...localHistoryList, ...data.data.keywords]),
        ];
        // console.log(data.data.keywords);
      }
      // if (localHistoryList) {
      // }
      console.log(localHistoryList);
      this.searchHistoryList = localHistoryList;
    },
    onSearch(searchText) {
      // console.log("search");
      // console.log(searchText);
      this.searchText = searchText;

      // 记录搜索历史记录
      const index = this.searchHistoryList.indexOf(searchText);
      if (index !== -1) {
        this.searchHistoryList.splice(index, 1);
      }
      this.searchHistoryList.unshift(searchText);

      // setItem("search-history", this.searchHistoryList);

      this.isResultShow = true;
    },
    // onCancel() {
    //   console.log("cancel");
    // },
  },
};
</script>
<style lang='less' scoped>
.search-container {
  .search-result {
    position: fixed;
    left: 0;
    right: 0;
    top: 54px;
    bottom: 0;
    overflow-y: auto;
    text-align: left;
  }
}
</style>