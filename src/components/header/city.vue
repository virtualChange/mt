<template>
  <div class="header-bar-position">
    <i></i>
    <span class="current-city">北京</span>
    <router-link to="change-city" class="change-city">切换城市</router-link>
    <div class="near-city">
      <div class="near-citys">
        [
        <router-link to="/" class="city-guess">门头沟区</router-link>
        <router-link to="/" class="city-guess">大厂回族自治县</router-link>
        <router-link to="/" class="city-guess">廊坊</router-link>
        ]
      </div>
    </div>
    <div class="user-entry">
      <router-link to="userUP" class="user-up">立即登录</router-link>
      <router-link to="userUP" class="sign-in">注册</router-link>
    </div>
  </div>
</template>

<style lang="scss">
// @import '@/assets/css/reset/index.scss'
</style>
