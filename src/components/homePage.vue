<template>
  <div class="home-page">
    <el-row>
      <el-col :span="4">
        <dl v-if="menuList">
          <dt>标题</dt>
          <dd v-for="menu in menuList" :key="menu.name">
            {{ menu.name }}
            <span :class="menu.type"></span>
          </dd>
        </dl>

        <div class="sub-menu" v-if="select">
          <dl v-for="(item, index) in items" :key="index">
            <dt>
              <h4>{{ item.title }}</h4>
            </dt>
            <dd v-for='i in item.items' :key='i'>
                {{i}}
            </dd>
          </dl>
        </div>
      </el-col>
      <el-row :span="20"></el-row>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      select: '美食',
      menuList: null
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
        console.log(res)
        this.menuList = res
      })
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/homePage";
</style>
