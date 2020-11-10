<template>
  <div class="comment">
    <div class="header">
      <h3>{{ commentNum }}条网友点评</h3>
      <div class="sort">
        <span
          v-for="(item, index) in ['质量排序', '时间排序']"
          :key="index"
          @click="click(index)"
          :class="{ active: index === active }"
          >{{ item }}</span
        >
      </div>
    </div>
    <div class="comment-info" v-for="(item, index) in comment" :key="index">
      <div class="head-img">
        <img :src="item.image" alt="" />
      </div>
      <div class="info">
        <div class="user-name">{{ item.username }}</div>
        <score :score="comment.score" />
        <div class="text">{{ item.evalaute }}</div>
        <div class="img">
          <img
            :src="pic"
            alt=""
            v-for="(pic, index) in item.pics"
            :key="index"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import score from './score'
export default {
  props: ['comment', 'commentNum'],
  components: {
    score
  },
  data () {
    return {
      active: 1
    }
  },
  methods: {
    click (index) {
      this.active = index
    }
  }
}
</script>
