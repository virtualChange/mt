<template>
  <div class="header-bar-position">
    <i></i>
    <span class="current-city">{{ address }}</span>
    <router-link :to="{ name: 'changeCity' }" class="change-city"
      >切换城市</router-link
    >
    <div class="near-city">
      <div class="near-citys">
        [
        <router-link to="/" class="city-guess">门头沟区</router-link>
        <router-link to="/" class="city-guess">大厂回族自治县</router-link>
        <router-link to="/" class="city-guess">廊坊</router-link>
        ]
      </div>
    </div>
    <div class="user-entry" v-if="!userName">
      <router-link :to="{ name: 'login' }" class="user-up"
        >立即登录</router-link
      >
      <router-link :to="{ name: 'register' }" class="sign-in">注册</router-link>
    </div>
    <div class="logins" v-else>
      <div class="user-name">{{ userName}}</div>
      <div class="relogin" @click='relogin'>退出</div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState(['address', 'userName'])
  },
  methods: {
    relogin () {
      this.$store.commit('relogin')
    }
  }
}
</script>
<style lang="scss">
// @import '@/assets/css/reset/index.scss'
</style>
