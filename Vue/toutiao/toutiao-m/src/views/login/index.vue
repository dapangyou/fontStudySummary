<template>
  <div class="login-container">
    <van-nav-bar
      class="app-nav-bar"
      title="注册/登录"
      left-arrow
      @click-left="$router.back()"
    />
    <van-form
      :show-error="false"
      :show-error-message="false"
      ref="loginForm"
      @submit="onLogin"
      @failed="onFailed"
      validate-first
    >
      <!-- 登录表单 -->
      <van-field
        v-model="user.mobile"
        icon-prefix="iconfont"
        left-icon="iconshouji"
        placeholder="请输入手机号"
        :rules="formRules.mobile"
        name="mobile"
        center
      />
      <van-field
        v-model="user.code"
        clearable
        icon-prefix="iconfont"
        left-icon="iconyanzhengma"
        placeholder="请输入验证码"
        :rules="formRules.code"
        name="code"
        center
      >
        <template #button>
          <van-count-down
            :time="1000 * 60"
            format="ss s"
            v-if="isCounterDownShow"
            @finish="isCounterDownShow = false"
          />
          <van-button
            v-else
            size="small"
            round
            class="send-btn"
            @click.prevent="onSendMsg"
            :loading="isSendMsgLoading"
            >发送验证码</van-button
          >
        </template>
      </van-field>
      <div class="login-btn-wrap">
        <van-button type="info" block class="login-btn">登录</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login, sendMsg } from "@/api/user";
export default {
  name: "LoginIndex",
  data() {
    return {
      user: {
        // 手机号
        mobile: "13999999999",
        // 验证码
        code: "246810",
      },
      formRules: {
        mobile: [
          { required: true, message: "请输入手机号" },
          { pattern: /^1[3|5|7|8|9]\d{9}$/, message: "手机号格式不正确" },
        ],
        code: [
          { required: true, message: "请输入验证码" },
          { pattern: /^\d{6}$/, message: "验证码格式不正确" },
        ],
      },
      // 控制倒计时和发送按钮的显示状态
      isCounterDownShow: false,
      // 发送验证码按钮的loading状态
      isSendMsgLoading: false,
    };
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {
    onClickLeft() {},
    async onLogin() {
      this.$toast.loading({
        message: "登录中...",
        forbidClick: false,
        duration: 0, //展示的时长  为0时不会消失
      });
      try {
        const { data } = await login(this.user);
        this.$toast.success("登录成功");
        // 将后端返回的登录状态token
        this.$store.commit("setUser", data.data);
        // console.log(res);
        this.$router.back();
      } catch (error) {
        // console.log('登录失败',error);
        this.$toast.fail("登录失败");
      }
    },
    onFailed(error) {
      // console.log('验证失败',error);
      if (error.errors[0]) {
        this.$toast({
          message: error.errors[0].message,
          position: "top",
        });
      }
    },
    async onSendMsg() {
      // 校验手机号码
      // prevent 阻止事件的默认行为  点击按钮不会提交事件了
      // console.log("send message....");
      // 验证手机号
      try {
        // data: 验证错误的消息
        await this.$refs["loginForm"].validate("mobile");
        // 发送验证码 显示loading状态
        this.isSendMsgLoading = true;
        // 验证通过请求发送验证码
        const res = await sendMsg(this.user.mobile);
        // 隐藏按钮 显示倒计时
        console.log(res);
        this.isCounterDownShow = true;
      } catch (error) {
        let message = "";
        // 验证失败
        if (error && error.response && error.response.status == 429) {
          message = "短信发送太频繁,请稍后重试";
        } else if (error.name == "mobile") {
          message = error.message;
        } else {
          message = "发送失败,请稍后重试";
        }
        this.$toast({
          message,
          position: "top",
        });
      }
      this.isSendMsgLoading = false;
    },
  },
};
</script>
<style lang='less' scoped>
.login-container {
  .login-btn-wrap {
    padding: 26px 16px;
    .login-btn {
      background-color: #6db4fb;
      border: none;
      .van-button__text {
        font-size: 15px;
      }
    }
  }
  .send-btn {
    height: 30px;
    background-color: #ededed;
    .van-button__text {
      font-size: 11px;
      color: #666;
    }
  }
}
</style>