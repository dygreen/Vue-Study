<template>
  <div>
    <img :src="원룸.image" class="room-img">
    <h4 @click="$emit('openModal', 원룸.id)">{{ 원룸.title }}</h4>
    <!--  커스텀 이벤트 전송: 부모가 가진 데이터를 변경하고 싶으면 부모에게 부탁해야 함
    $emit('작명', 전달할자료)
     -->
    <p>{{ 원룸.price }}원</p>
  </div>
</template>


<script>
  export default {
    props : {
      원룸 : Object,
    },
  /*  emit을 함수 안에서 하고 싶으면
  * methods : {
  *   open(){ -> 함수명은 영어로!
  *     this.$emit('openModal', this.원룸.id)
  *   }
  * }
  * */
  }
</script>


<style>

</style>