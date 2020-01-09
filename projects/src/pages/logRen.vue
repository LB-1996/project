<template>
  <div>
    <!-- <h1>登录注册</h1> -->
    <article class="logTop">
      <span class="iconfont iconcha"></span>
      <span>
        广州
        <a class="iconfont iconwebicon212"></a>
      </span>
    </article>
    <!-- 登录注册 -->
    <article class="modeSlete">
      <span
        v-for="(item) in methodlog"
        :key="item.id"
        :to="item.path"
        @click="chang(item.id)"
        :class="{modeSleteAct:isnum==item.id}"
      >{{item.con}}</span>
    </article>
    <!-- 这里是切换登录注册的位置 -->
    <article>
      <!-- 登录 -->
      <article v-if="isok">
        <van-cell-group>
          <van-field center clearable placeholder="请输入账号"></van-field>
        </van-cell-group>
        <van-cell-group>
          <van-field center clearable placeholder="请输入登录密码"></van-field>
        </van-cell-group>
        <button class="buttons">账号密码登录</button>
        <article class="findpas">
          <span>免费注册</span>
          <span>找回密码</span>
        </article>
      </article>
      <!-- 注册 -->
      <article v-else>
        <van-cell-group>
          <van-field center clearable placeholder="请输入手机号">
            <van-button slot="button" size="small" type="primary">发送验证码</van-button>
          </van-field>
        </van-cell-group>

        <van-cell-group>
          <van-field center clearable placeholder="请输入短信验证码"></van-field>
        </van-cell-group>
        <button class="buttons">手机号码登录 / 注册</button>
      </article>
    </article>
    <!-- 其他登录方式 -->
    <article class="other">其他登录方式</article>
    <figure>
      <figcaption id="img" class="iconfont iconweixin"></figcaption>
      <figcaption class="wx">微信</figcaption>
    </figure>
    <article class="bon">
      登录 / 注册即表示您已同意
      <a>食行会员注册协议</a>
    </article>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      isok: false,
      isnum: 1,
      methodlog: [
        { id: 1, con: "手机号登录注册" },
        { id: 2, con: "账号密码登录" }
      ]
    };
  },
  methods: {
    chang(idx) {
      this.isnum = idx;
      if (idx == 1) {
        this.isok = false;
      } else if (idx == 2) {
        this.isok = true;
      }
    }
  }
};
</script>
<style>
@import url(http://at.alicdn.com/t/font_1605782_3xfw9iqhbu7.css);
@import url(../css/logRen.min.css);
</style>