<template>
  <div id="app">
    <router-view></router-view>

    <!-- 底部导航栏 -->
    <van-tabbar route active-color="#07c160" inactive-color="#000">
      <van-tabbar-item
        replace
        :to="item.path"
        v-for="item in navItem"
        :key="item.id"
        :icon="item.ico"
      >{{item.name}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  data: function() {
    return {
      navItem: [
        {
          id: 1,
          name: "首页",
          ico: "wap-home-o",
          path: "/home"
        },
        {
          id: 2,
          name: "分类",
          path: "/classify",
          ico: "qr"
        },

        {
          id: 3,
          name: "购物车",
          path: "/cart",
          ico: "shopping-cart-o"
        },
        {
          id: 4,
          name: "我的",
          path: "/mine",
          ico: "user-circle-o"
        }
      ]
    };
  },
  name: "app",
  components: {
    // HelloWorld
  }
};
</script>

<style>
</style>
