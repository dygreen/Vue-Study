<template>
  <!-- $route = 현재 URL 정보가 담겨있음 
  $route.params = 파라미터 자리에 기입된거 알려줌
  ==> {{$route.params.id}}
  -->
  <div>
    <h4>상세페이지</h4>
    <h5>{{블로그글[$route.params.id].title}}</h5>
    <p>{{블로그글[$route.params.id].content}}</p>
    <router-view></router-view> <!-- children을 어디서 보여줄지 정하는 'router-view' -->
  </div>
</template>

<script>
  export default {
    props : {
      블로그글: Array,
    }
  }
</script>

<style>
</style>