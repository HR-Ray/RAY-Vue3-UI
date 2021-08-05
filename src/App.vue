<template>
  <h1>Vue3造轮子</h1>
  <div class="navigationBar">
    导航栏：
    <router-link to="/">首页</router-link>
    | <router-link to="/switch">Switch</router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>
