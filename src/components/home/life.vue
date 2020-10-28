<template>
  <div class="m-life">
    <el-row>
      <ul class="nav">
        <li>
          <router-link to="/" class="takeout">美团外卖</router-link>
        </li>
        <li>
          <router-link to="/" class>猫眼电影</router-link>
        </li>
        <li>
          <router-link to="/" class>美团酒店</router-link>
        </li>
        <li>
          <router-link to="/" class="apartment">民宿/公寓</router-link>
        </li>
        <li>
          <router-link to="/" class="business">商家入驻</router-link>
        </li>
        <li>
          <router-link to="/" class>美团公益</router-link>
        </li>
      </ul>
    </el-row>
    <el-row class="menu-right">
      <el-col :span="14">
        <slider />
      </el-col>
      <el-col :span="4">
        <div class="life"></div>
      </el-col>
      <el-col :span="6">
        <div class="user">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/e350c4a/img/avatar.jpg"
            alt=""
          />
          <p class="user-name">Hi！你好</p>
          <p class="btn-register">
            <router-link to="{name:'register'}">
              <el-button round>注册</el-button>
            </router-link>
          </p>
          <p class="btn-login">
            <router-link to="{name:'login'}">
              <el-button round>立即登录</el-button>
            </router-link>
          </p>
        </div>
      </el-col>
    </el-row>
    <el-row class="menu-down">
      <el-col :span="7">
        <div class="hotel"></div>
      </el-col>
      <el-col :span="7">
        <div class="music"></div>
      </el-col>
      <el-col :span="4">
        <div class="coop"></div>
      </el-col>
      <el-col :span="6">
        <div class="down-app">
          <img
            src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png"
            alt="下载APP"
          />
          <p>美团APP手机版</p>
          <p class="last-p">
            <span class="red">一元起</span>
            吃喝玩乐
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import slider from './slider.vue'
export default {
  components: {
    slider
  },
  data () {
    return {}
  }
}
</script>
