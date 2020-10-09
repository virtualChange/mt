<template>
  <div class="header-box">
    <div class="header-bar-seach">
      <div class="logo">
        <a href="//bj.meituan.com">
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </a>
      </div>
      <div class="search-input" v-focus="isFocus">
        <el-input v-model="search" placeholder="搜索商家或地点"></el-input>
        <el-button type="primary" icon="el-icon-search"></el-button>

        <ul class="recommend">
          <!-- 推荐 -->
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
        </ul>
        <ul class="relevance" v-show="isFocus">
          <!-- 关联 -->
          <li v-for="temp in 4" :key="temp">{{ temp }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      search: '',
      isFocus: false,
      isClick: false,
      clickWord: ''
    }
  }
}
</script>
