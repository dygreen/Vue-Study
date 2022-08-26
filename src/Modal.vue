<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{ 원룸들[누른상품번호].title }}</h4>
      <p>{{ 원룸들[누른상품번호].content }}</p>
      <img :src="원룸들[누른상품번호].image" class="room-img">
      <p>{{ 원룸들[누른상품번호].price }}원</p>
      <button @click="$emit('closeModal', 원룸들[누른상품번호].id)">X</button>
    </div>
  </div>
</template>


<script>
  export default {
    name : 'Modal',
    props : {
      원룸들 : Array,
      누른상품번호 : Number,
      모달창열렸니 : Boolean,
    }
  }
</script>


<style>

</style>