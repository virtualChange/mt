<template>
  <div class="header-bar clear-fix">
      <city />
      <header-nav />
      <search-bar />
  </div>
</template>
<script>
import city from '@/components/header/city'
import headerNav from '@/components/header/nav'
import searchBar from '@/components/header/searchBar'

export default {
  components: {
    city,
    headerNav,
    searchBar
  }
}
</script>

<style lang="scss">
@import '@/assets/css/public/header';
</style>
