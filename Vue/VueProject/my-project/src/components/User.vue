<template>
  <div>
    <h2>我是用户</h2>
    <p>我是用户内容哈哈哈哈</p>
    <h2>{{ $route.params.userId }}</h2>
  </div>
</template>
<script>
export default {
  name: "User",
};
</script>