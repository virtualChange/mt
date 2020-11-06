<template>
  <div class="header-bar">
      <nav-bar />
      <search-bar />
  </div>
</template>
<script>

import searchBar from '@/components/header/searchBar'
import navBar from '@/components/header/navBar'
export default {
  components: {
    searchBar,
    navBar
  }
}
</script>

<style lang="scss">
@import "@/assets/css/public/header";
</style>
