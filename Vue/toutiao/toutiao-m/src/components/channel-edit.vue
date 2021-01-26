<template>
  <div class="wrapper">
    <van-cell center :border="false">
      <div slot="title" class="channel-title">我的频道</div>
      <van-button
        type="primary"
        plain
        round
        size="mini"
        @click="isEdit = !isEdit"
        >{{ isEdit ? "完成" : "编辑" }}</van-button
      >
    </van-cell>

    <!-- 
        :class="{active: index === }"
     -->
    <van-grid :gutter="10">
      <van-grid-item
        v-for="(item, index) in userChannels"
        :key="index"
        :text="item.name"
        class="grid-item"
        :icon="isEdit && index !== 0 ? 'clear' : ''"
        @click="onUserChannelClick(item, index)"
        :class="{ active: index === active }"
      />
    </van-grid>
    <van-cell center :border="false">
      <div slot="title">频道推荐</div>
    </van-cell>

    <van-grid :gutter="10">
      <van-grid-item
        v-for="(item, index) in recommendChannels"
        :key="index"
        :text="item.name"
        class="grid-item"
        @click="onAdd(item)"
      />
    </van-grid>
  </div>
</template>

<script>
import {
  getAllChannels,
  addUserChannel,
  deleteUserChannel,
} from "@/api/channel";
import { mapState } from "vuex";
import { setItem } from "@/utils/storage";
export default {
  name: "ChannelEdit",
  components: {},
  props: {
    "user-channels": {
      type: Array,
      required: true,
    },
    active: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      // 所有频道数据
      allChannels: [],
      isEdit: false,
    };
  },
  watch: {},
  computed: {
    //   推荐的频道列表
    recommendChannels() {
      return this.allChannels.filter((channel) => {
        return !this.userChannels.find((userChannel) => {
          return userChannel.id === channel.id;
        });
      });
    },
    ...mapState(["user"]),
  },
  methods: {
    async loadAllChannels() {
      const { data } = await getAllChannels();
      this.allChannels = data.data.channels;
    },
    async onAdd(channel) {
      this.userChannels.push(channel);
      //  TODO  数据持久化
      if (this.user) {
        await addUserChannel({
          channels: [{ id: channel.id, seq: this.userChannels.length }],
        });
      } else {
        //   如果没有登录 数据存储到本地
        setItem("user-channels", this.userChannels);
      }
    },
    onUserChannelClick(channel, index) {
      if (this.isEdit && index !== 0) {
        //  删除
        this.deleteChannel(channel, index);
      } else {
        //  切换频道
        this.switchChannel(index);
      }
    },
    async deleteChannel(channel, index) {
      // 如果删除的是当前频道之前的频道
      if (index <= this.active) {
        // 更新之前频道的索引
        this.$emit("update-active", this.active - 1);
      }
      this.userChannels.splice(index, 1);
      // TODO 数据持久化
      if (this.user) {
        // 如果登录了 持久化到线上
        await deleteUserChannel(channel.id);
      } else {
        // 没有登录  持久化到本地
        setItem("user-channels", this.userChannels);
      }
    },
    switchChannel(index) {
      console.log("切换频道");
      this.$emit("update-active", index);
      //   关闭弹出层
      this.$emit("close");
    },
  },
  created() {
    this.loadAllChannels();
  },
  mounted() {},
};
</script>
<style lang="less" scoped>
.wrapper {
  padding-top: 54px;
  .channel-title {
    font-size: 16px;
    color: #333;
  }
  .grid-item {
    width: 80px;
    height: 43px;
    /deep/.van-grid-item__content {
      background-color: #f4f5f6;
      .van-grid-item__text {
        font-size: 14px;
        color: #222;
        margin-top: 0;
      }
    }
    /deep/ .van-grid-item__content {
      position: relative;
      /deep/ .van-grid-item__icon {
        position: absolute;
        top: -5px;
        right: -5px;
        font-size: 20px;
        color: #ccc;
      }
    }
  }
  .active {
    /deep/ .van-grid-item__text {
      color: red !important;
    }
  }
}
</style>