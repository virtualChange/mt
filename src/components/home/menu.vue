<template>
  <div class="menu-box">
    <dl v-if="menuList" class="menu-main">
      <dt>
        <h2>全部分类</h2>
      </dt>
      <div class="wrap" @mouseleave="mouseLeave">
        <dd
          v-for="menu in menuList"
          :key="menu.name"
          @mouseenter="mouseEnter(menu.name, $event)"
        >
          <i :class="menu.type"></i>
          {{ menu.name }}
          <span class="el-icon-arrow-right"></span>
        </dd>
      </div>
    </dl>

    <div
      class="sub-menu"
      v-if="select"
      @mouseenter="subMenuEnter"
      @mouseleave="subMenuLeave"
    >
      <dl v-for="(item, index) in items" :key="index">
        <dt>
          <h4>{{ item.title }}</h4>
          <span>更多<span class="el-icon-arrow-right"></span></span>
        </dt>
        <dd v-for="i in item.items" :key="i">
          {{ i }}
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: null,
      menuList: null
    }
  },
  methods: {
    mouseEnter (name, event) {
      this.select = name
    },
    mouseLeave ($event) {
      this.timer = setTimeout(() => {
        this.select = null
      }, 200)
    },
    subMenuEnter () {
      window.clearTimeout(this.timer)
    },
    subMenuLeave () {
      this.select = null
    }
  },
  computed: {
    items () {
      if (!this.menuList) {
        return ''
      }
      const result = this.menuList.find((item) => {
        return item.name === this.select
      })
      return result.items
    }
  },
  mounted () {
    this.axios
      .get('/api/meituan/index/nav.json', {
        params: {
          appkey: 'virtual_1569514431385'
        }
      })
      .then((res) => {
        this.menuList = res
      })
  }
}
</script>
