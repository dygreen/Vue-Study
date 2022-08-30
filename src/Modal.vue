<template>
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>{{ 원룸들[누른상품번호].title }}</h4>
      <p>{{ 원룸들[누른상품번호].content }}</p>
      <img :src="원룸들[누른상품번호].image" class="room-img">
      <input v-model="month">
      <!--유저가 input에 입력한 값을 데이터로 저장하는 방법
      1. <input @input="month = $event.target.value">
      2. <input v-model="month"> -> v-mode = 여러가지 <input> v-model 전부 가능(textarea, select 등등)!
      -->
      <p> {{ month }}개월 선택함 : {{ 원룸들[누른상품번호].price * month }}원</p>
      <button @click="$emit('closeModal', 원룸들[누른상품번호].id)">X</button>
    </div>
  </div>
</template>


<script>
  export default {
    name : 'Modal',
    data(){
      return {
        month: 1,
      }
    },

    beforeUpdate(){
      if( this.month == 2 ){
        alert('2개월은 너무 적습니다..');
      }
    },

    watch : {
      month(a){ /** month라는 데이터가 변할 때마다 여기있는 코드가 실행됨 */
      /* watch : { 감시할데이터(){} }
      month(a) 안에 파라미터 아무거나 작명해 사용 가능
        => 파라미터 = month가 변경될 값 의미
        첫째는 변경될 값, 둘째는 변경전 값을 의미함
       */
        if ( a >= 13 ){
          alert('13이상 입력할 수 없습니다.');
        }

        if ( isNaN(a) == true ){
          alert('문자를 입력할 수 없습니다.');
          console.log(a);
          this.month = 1;
        }
      }
    },
    props : {
      원룸들 : Array,
      누른상품번호 : Number,
      모달창열렸니 : Boolean,
    }
  }
</script>


<style>

</style>