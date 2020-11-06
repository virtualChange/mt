<template>
  <div class="header-box">
    <div class="header-bar-seach">
      <div class="logo">
        <a href="//bj.meituan.com">
          <img
            src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png"
            alt="美团"
          />
        </a>
      </div>
      <div>
        <div class="search-input" v-focus="isFocus">
          <el-input v-model="search" placeholder="搜索商家或地点"></el-input>
          <el-button type="primary" icon="el-icon-search"></el-button>

          <ul class="relevance" v-if="isFocus && search">
            <!-- 关联 -->
            <li
              v-for="(re, index) in relevance"
              :key="index"
              @click="chooseClick(re)"
            >
              <router-link :to="{ name: 'goodList', params: { name: re } }">{{
                re
              }}</router-link>
            </li>
          </ul>
        </div>
        <ul class="recommend">
          <!-- 推荐 -->
          <!-- <li v-for="(re,index) in recommend" :key='index'>{{re}}</li> -->
          <li>2</li>
          <li>3</li>
          <li>4</li>
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
      relevance: null,
      recommend: null
    }
  },
  watch: {
    search (val) {
      // 检测输入框的输入,延迟请求数据
      this.delayGet(this, val)
    }
  },
  methods: {
    getRelevance () {
      // 请求该关联数据
      this.axios
        .get('/api/meituan/header/search.json', {
          params: {
            appkey: 'virtual_1569514431385'
          }
        })
        .then((res) => {
          this.relevance = res.list
        })
    },
    chooseClick (word) {
      this.search = word
      this.isFocus = false
    }
  },
  mounted () {
    this.delayGet = this.util.shake(this.getRelevance, 500)
  }
  // mounted () {
  //   // 当输入框聚焦时才请求数据
  //   this.axios
  //     .get('/api/meituan/header/search.json', {
  //       params: {
  //         appkey: 'virtual_1569514431385'
  //       }
  //     })
  //     .then((res) => {
  //       console.log(res)
  //       this.relevance = res.list
  //     })
  //     // /api/meituan/header/searchHotWords.json
  // }
}
</script>
