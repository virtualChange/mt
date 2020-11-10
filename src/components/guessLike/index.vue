<template>
  <div class="guess-like">
    <h3>猜你喜欢</h3>
    <ul>
      <li v-for="(guess, index) in guessList" :key="index">
        <img src="" alt="" />
        <p class="logo"></p>
        <p class="addre"></p>
        <h4 class="price"></h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      guessList: ''
    }
  },
  created () {
    this.axios
      .get('/api/meituan/list/recommend.json', {
        params: {
          appkey: 'virtual_1569514431385'
        }
      })
      .then((res) => {
        this.guessList = res
        console.log(res)
      })
  }
}
</script>
