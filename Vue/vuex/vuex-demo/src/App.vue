<template>
  <div id="app">
    <h2>{{messasge}}</h2>
    <h2>{{counter}}</h2>
    <button @click="addition">+</button>
    <button @click="subtraction">-</button> 

    <h2>mutations中的操作</h2>
    <button @click="addCount(5)">+5</button>
    <button @click="addCount(10)">+10</button>

    <button @click="addStudent">添加学生</button>


    <!-- App内容： getter相关 -->
    <h2>$store中的getter相关</h2>
    <h2>{{$store.getters.powerCounter}}</h2>

    <h2>年龄超过20的的学生</h2>
    <h2>{{$store.getters.more20Stu}}</h2>
      <h2>{{$store.getters.more20StuLength}}</h2>
    <h2>{{$store.getters.moreAgeStu(10)}}</h2>
    <hello-vuex :counter="counter"/>


    <h2>{{$store.state.info}}</h2>
    <button @click="updateInfo">修改信息</button>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex";
export default {
  name: "App",
  components: {
    HelloVuex
  },
  data() {
    return {
      messasge: "我是App组件",
      counter: 0         
    }
  },
  methods: {
    addition() {
      this.$store.commit('increment');
    },
    subtraction() {
      this.$store.commit('decrement');
    },
    addCount(count) {
      // 1.普通的提交风格
      this.$store.commit('incrementCount',count);
      //  2.特殊的提交风格
      this.$store.commit({
        type: "incrementCount",
        count
      });
    },
    addStudent() {
      this.$store.commit('addStudent');
    },
    updateInfo() {
      this.$store.dispatch('aUpdateInfo');
    }
  }
};
</script>

<style>
</style>
