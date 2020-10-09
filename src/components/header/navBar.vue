<template>
  <div class="header-top-bar">
    <city />
    <header-nav />
  </div>
</template>

<script>
import city from '@/components/header/city'
import headerNav from '@/components/header/nav'
export default {
  components: {
    city,
    headerNav
  }
}
</script>
