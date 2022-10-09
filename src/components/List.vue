<template>
  <!-- 
    $route : 현재 경로
    $router : 페이지 이동관련 기능 ($router.go(1) | $router.push())

    https://router.vuejs.org/guide/essentials/named-views.html
   -->
  <div v-for="(lists,i) in 블로그글" :key="i">
    <h5 @click="$router.push(`/detail/${i}`)">{{ 블로그글[i].title }}</h5>
    <p>{{ 블로그글[i].date }}</p>
  </div>
</template>

<script>
  export default {
    name : 'list',
    props : {
      블로그글 : Array,
    }
  }
</script>

<style>
</style>