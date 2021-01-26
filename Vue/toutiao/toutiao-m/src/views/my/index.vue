<template>
  <div class="my-container">
    <van-cell-group v-if="user" class="top_banner">
      <van-cell
        title="单元格"
        value="内容"
        center
        class="base-info"
        :border="false"
      >
        <div slot="icon">
          <van-image
            slot="icon"
            fit="cover"
            round
            :src="currentUser.photo"
            class="avater"
          />
          <!-- <img :src="currentUser.photo" alt="" /> -->
        </div>
        <div slot="title" class="name">{{ currentUser.name }}</div>
        <van-button size="small" round class="update-btn">编辑资料</van-button>
      </van-cell>
      <van-grid :border="false" class="data-info">
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{ currentUser.art_count }}</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{ currentUser.follow_count }}</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{ currentUser.fans_count }}</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div slot="text" class="text-wrap">
            <div class="count">{{ currentUser.like_count }}</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>

    <div v-else class="not-login" @click="$router.push('/login')">
      <div>
        <img src="./avater.png" alt="" class="mobile" />
      </div>
      <div class="text">登录 / 注册</div>
    </div>

    <van-grid :column-num="2" class="nav-wrap mb-4">
      <van-grid-item
        icon-prefix="iconfont"
        icon="iconshoucang"
        text="收藏"
        class="nav-wrap-item"
      />
      <van-grid-item
        icon-prefix="iconfont"
        icon="iconlishi"
        text="历史"
        class="nav-wrap-item"
      />
    </van-grid>
    <van-cell
      title="消息通知"
      is-link
      url="/vant/mobile.html"
      class="link-position"
    />
    <van-cell title="胡佳同学" is-link to="index" class="link-position mb-4" />
    <van-cell
      v-if="user"
      title="退出登录"
      class="logout-cell"
      @click="onLogout"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import { getCurrentUser } from "@/api/user";
export default {
  name: "MyIndex",
  data() {
    return {
      // 当前登陆人user
      currentUser: {},
    };
  },

  components: {},

  computed: {
    ...mapState(["user"]),
  },
  created() {
    this.loadCurrentUser();
  },
  mounted() {},

  methods: {
    //退出登录
    onLogout() {
      // 提示用户确认退出
      this.$dialog
        .confirm({
          title: "退出提示",
          message: "确认退出吗",
        })
        .then(() => {
          // 清除登录状态
          this.$store.commit("setUser", null);
        })
        .catch(() => {
          // on cancel
        });
    },
    async loadCurrentUser() {
      const { data } = await getCurrentUser();
      this.currentUser = data.data;
      // console.log(data);
    },
  },
};
</script>
<style lang='less' scoped>
.link-position {
  text-align: left;
}
.my-container {
  .top_banner {
    background: url("./banner.png") no-repeat;
    background-size: cover;
    .base-info {
      background: unset;
      height: 115px;
      box-sizing: border-box;
      padding-top: 38px;
      padding-bottom: 11px;
      .avater {
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
        margin-right: 11px;
      }
      .name {
        text-align: left;
        color: #fff;
        font-size: 15px;
      }
      .update-btn {
        height: 16px;
        color: #666;
        font-size: 10px;
      }
    }

    .data-info {
      .data-info-item {
        height: 65px;
        color: #fff;
        .text-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .count {
            font-size: 18px;
          }
          .text {
            font-size: 11px;
          }
        }
      }
    }
  }
  .not-login {
    height: 180px;
    background: url("./banner.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .mobile {
      width: 66px;
      height: 66px;
    }
    .text {
      color: #fff;
      font-size: 14px;
    }
  }
  .nav-wrap {
    /deep/ .nav-wrap-item {
      height: 70px;
      background-color: #fff;
      .iconfont {
        font-size: 22px;
      }
      .iconfont-iconshoucang {
        color: #eb5253;
      }
      .iconfont-iconlishi {
        color: #ff9d1d;
      }
      .van-grid-item__text {
        color: #333;
        font-size: 14px;
      }
    }
  }
  .logout-cell {
    color: #db6262;
  }
}
.mb-4 {
  margin-bottom: 4px;
}
/deep/ .van-grid-item__content {
  background: unset;
}
</style>