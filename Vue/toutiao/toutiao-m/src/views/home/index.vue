<template>
  <div class="home-container">
    <van-nav-bar class="app-nav-bar">
      <van-button
        slot="title"
        icon="search"
        type="info"
        round
        size="small"
        class="search-btn"
        to="/search"
        >搜索</van-button
      >
    </van-nav-bar>
    <!-- 文章频道列表 -->
    <van-tabs v-model="active" class="channel-tabs">
      <van-tab
        :title="channel.name"
        v-for="channel in channels"
        :key="channel.id"
      >
        <article-list :channel="channel"></article-list>
      </van-tab>
      <div slot="nav-right" class="wap-nav-place"></div>
      <div
        slot="nav-right"
        @click="isChannelEditShow = true"
        class="wap-nav-wrap"
      >
        <van-icon name="wap-nav" />
      </div>
    </van-tabs>

    <van-popup
      v-model="isChannelEditShow"
      position="bottom"
      class="channel-edit-popup"
      closeable
      get-container="body"
      close-icon-position="top-left"
    >
      <!-- 
      $event 代表的是事件参数
     -->
      <channel-edit
        :user-channels="channels"
        @close="isChannelEditShow = false"
        @update-active="active = $event"
        :active="active"
      />
    </van-popup>
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getItem } from "@/utils/storage";
import { getChannels } from "@/api/user";
import ChannelEdit from "@/components/channel-edit";
import ArticleList from "@/components/article-list";
export default {
  name: "HomeIndex",
  data() {
    return {
      active: 2,
      // 频道列表
      channels: [],
      // 控制编辑频道的显示状态
      isChannelEditShow: false,
    };
  },

  components: {
    ArticleList,
    ChannelEdit,
  },

  computed: {
    ...mapState(["user"]),
  },

  mounted() {},

  created() {
    this.loadChannels();
  },

  methods: {
    // 加载频道列表
    async loadChannels() {
      let channels = [];
      if (this.user) {
        // 获取用户频道
        const { data } = await getChannels();
        channels = data.data.channels;
      } else {
        // 未登录  判断是否有本地存储的数据
        const localChannels = getItem("user-channels");
        if (localChannels) {
          // 如果有本地存储的列表则使用
          channels = localChannels;
        } else {
          // 如果没有 就获取默认的
          const { data } = await getChannels();
          channels = data.data.channels;
        }
      }
      this.channels = channels;
    },
    // onUpdateActive() {
    //   console.log(event);
    //   this.active = index;
    //   console.log(index);
    // },
  },
};
</script>
<style lang='less' scoped>
.home-container {
  /deep/ .van-nav-bar__title {
    max-width: unset;
  }
  .app-nav-bar {
    background-color: #3d9cfa;
    .search-btn {
      width: 277px;
      height: 32px;
      background-color: #5babfb;
      border: none;
      .van-icon {
        font-size: 16px;
      }
      .van-button__text {
        font-size: 14px;
      }
    }
  }
  .channel-tabs {
    /deep/ .van-tab {
      border-right: 1px solid #edeff3;
      border-bottom: 1px solid #edeff3;
    }
    /deep/ .van-tabs__line {
      width: 20px !important;
      height: 3px;
      bottom: 20px;
      background-color: #3296fa;
      border-radius: 30px;
    }
    .wap-nav-place {
      width: 33px;
      flex-shrink: 0;
    }
    /deep/ .wap-nav-wrap {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 33px;
      height: 44px;
      right: 0;
      background-color: #fff;
      opacity: 0.9;
      .van-icon {
        font-size: 25px;
      }
    }
  }
}
.channel-edit-popup {
  height: 100%;
}
</style>