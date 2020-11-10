<template>
  <div class="recommend">
    <h3 class="title">推荐菜</h3>
    <div class="exhibition">
      <div class="img">
        <ul>
          <li>
            <img
              src="https://qcloud.dpfile.com/pc/ZbBrF9nWQY9c-wiF9DphA5lkrmqy7a4ePJIYGBr8sep5bOTPq6ux6oh0ul1b-att5g_3Oo7Z9EXqcoVvW9arsw.jpg"
              alt=""
            />
            <span>金枪鱼饭团 ￥28</span>
          </li>
          <li>
            <img
              src="https://qcloud.dpfile.com/pc/wo_yO1WslAttNs5qGxK1YuaWnk09ARwZcFxWjrxAkB0BdtXFmHf-3FYR83vKLz6D5g_3Oo7Z9EXqcoVvW9arsw.jpg"
              alt=""
            />
            <span>金枪鱼饭团 ￥28</span>
          </li>
          <li>
            <img
              src="https://qcloud.dpfile.com/pc/4QEKz-uRTL_dFtWhCcZ6tPXzqrOrl0cgealulTPfgL-Gl7P2LDahuKcUL6ACqjCJ5g_3Oo7Z9EXqcoVvW9arsw.jpg"
              alt=""
            />
            <span>金枪鱼饭团 ￥28</span>
          </li>
          <li>
            <img
              src="https://qcloud.dpfile.com/pc/PZkNN7dduWjMw56O1wJDJN0N0RoXtrF1aDJ3pS3e6tqAyTjjHS_lW9BWB8yAarnt5g_3Oo7Z9EXqcoVvW9arsw.jpg"
              alt=""
            />
            <span>金枪鱼饭团 ￥28</span>
          </li>
          <li>
            <img
              src="https://qcloud.dpfile.com/pc/TKiy93LwTV6uWpWsyPiDOrdN9_DeU0pw7-gE-_Rqxq3k5eQBceroAiCnhEKF-SAx5g_3Oo7Z9EXqcoVvW9arsw.jpg"
              alt=""
            />
            <span>金枪鱼饭团 ￥28</span>
          </li>
          <li>
            <img
              src="https://qcloud.dpfile.com/pc/j53ZXGvVgMMQwRshCYzIZ9XLahrfdpnQg7jMj52ts8Axnd-9DYxckhfccXEojqxs5g_3Oo7Z9EXqcoVvW9arsw.jpg"
              alt=""
            />
            <span>金枪鱼饭团 ￥28</span>
          </li>
        </ul>
      </div>
      <div class="food">
        <ul>
          <li v-for="item in recommend" :key="item">{{item}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['recommend']
}
</script>
