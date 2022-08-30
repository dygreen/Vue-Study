<template>
  <!-- 모달창 -->
  <Transition name="fade">
    <Modal :원룸들="원룸들" :누른상품번호="누른상품번호" :모달창열렸니="모달창열렸니" @closeModal="모달창열렸니 = false; 누른상품번호 = $event"/>
  </Transition>
<!--  @openModal="모달창열렸니 = true; 누른상품번호 = $event"-->
  <!-- v-if 와 v-else-if 와 v-else
  : v-if가 참이 아니면 v-else를 보여주세요
  <div v-if="1 == 2">안녕하세요</div>
  <div v-else-if="1 == 3">안녕하세요2</div>
  <div v-else>안녕하세요3</div>
  -->

  <!-- props보내고 싶을 때 => 콜론을 안붙이면 문자로 전달됨
   작명 = "문자자료"
   :작명 = "숫자자료"
   1. 보내고 2. 등록하고 3. 사용하기

  <Discount :데이터이름="[1,2,3]" />
  <Discount :데이터이름="{ age:20 }" />
  <Discount :데이터이름="100" />
  <Discount 데이터이름="안녕하쇼" />
   -->

  <div class="menu">
    <a v-for="작명 in 메뉴들" :key="작명">{{작명}}</a>
    <!--
    HTML 반복문: <태그 v-for="(a,i) in 반복할횟수/데이터" :key="a">
    1. 변수 작명은 2개까지 가능함
    2. (반복할횟수/데이터)에 array/object 집어넣을 수 있음 -> 자료 안의 데이터 갯수만큼 반복됨
    3. 그럼 작명한 변수는 데이터안의 자료가 됨

    :key=""의 용도
    1. 반복문 쓸 때 꼭 써야함
    2. 반복문 돌린 요소를 컴퓨터가 구분하기 위해 씀: 반복문 돌면서 변하는 숫자/문자
    -->
  </div>

  <!--  <div v-for="room in products" :key="room">
    <h4>{{ room }}</h4>
    <p>{{ price2 }}만원</p>
  </div>-->

  <!-- 이벤트 -->
  <Discount v-if="showDiscount == true"/>
  <!--
   HTML 한 단어로 줄이고 싶으면 Component 만들기
   1. vue 파일 만들어서 HTML 넣고
   2. 원하는 곳에서 그 파일 import/등록/사용
   -->

  <button @click="priceSort">가격순정렬</button>
  <button @click="sortBack">원래대로</button>


  <div>
    <img src="./assets/room0.jpg" class="room-img">
    <h4 :style="스타일" @click="모달창열렸니 = true">{{ products[0] }}</h4>
    <p>{{ price1 }}만원</p>
    <!--
    데이터 바인딩: {{데이터이름}}
    1. 자주 변경되는 데이터들은 밑에 저장해놨다가 데이터바인딩
    2. HTML 속성도 데이터바인딩 가능 :속성="데이터이름"
    -->
    <button @click="신고수[0]++">허위매물신고</button>
    <span>신고수 : {{신고수[0]}}</span>
    <!--
     버튼 눌렀을 때 자바스크립트 실행하려면: v-on:click="" || @click
     -->
  </div>
  <div>
    <img src="./assets/room1.jpg" class="room-img">
    <h4>{{ products[1] }}</h4>
    <p>{{ price2 }}만원</p>
    <button @click="신고수[1]++">허위매물신고</button>
    <span>신고수 : {{신고수[1]}}</span>
  </div>
  <div>
    <img :src="원룸들[2].image" class="room-img">
<!--    <h4>{{ products[2] }}</h4>-->
    <h4>{{ 원룸들[2].title }}</h4>
    <p>{{ 원룸들[2].price }}원</p>
<!--    <button @click="신고수[2]++">허위매물신고</button>
    <span>신고수 : {{신고수[2]}}</span>-->
  </div>

  <!-- 반복문으로 6개 상품 나열하기 -->
  <Cards :원룸="원룸들[i]" v-for="(a,i) in 원룸들" :key="i" @openModal="모달창열렸니 = true; 누른상품번호 = $event" />
  <!-- 자식이 보낸 데이터는 $event 변수에 담겨있음 -->

</template>



<script>
import data from './assets/oneroom.js';
import Discount from "./Discount.vue";
import Modal from "./Modal.vue";
import Cards from "./Cards.vue";

export default {
  name: 'App',
  data(){
    return {
      // 데이터(state) 저장하는 공간: 데이터는 object 자료로 저장해야 함
      price1 : 60,
      price2 : 70,
      메뉴들 : ['Home', 'Shop', 'About'],
      스타일 : 'color : blue',
      신고수 : [0,0,0],
      모달창열렸니 : false,
      누른상품번호 : 0,

      products : ['역삼동원룸','천호동원룸','마포구원룸'],
      원룸들오리지널 : [...data],
      원룸들 : data,
      showDiscount : true,
    }
  },

  methods : { /* Vue에서 함수만들고 싶을 때 */
    increase(){
      this.신고수++;
    },
    sortBack(){
      // this.원룸들 = this.원룸들오리지널; /* 버튼 몇 번 누르다보면 제대로 동작하지 않음 => 등호로 array를 집어넣으면 왼쪽 오른쪽 값 공유해주세요라는 뜻임 */
      this.원룸들 = [...this.원룸들오리지널];
    },
    priceSort(){
      this.원룸들.sort(function(a,b){
        return a.price - b.price;
      });
    },
  },

  /* mounted(){
    setTimeout(() => {
      this.showDiscount = false;
    },2000);
  },*/

  components: { /*컴포넌트 등록
  1. import하고 2. 등록하고 3. <쓰셈/>
  */
    Discount : Discount,
    Modal : Modal,
    Cards : Cards,
  }
}
</script>



<style>
.start {
  opacity: 0;
  transition: all 1s;
}

.end {
  opacity: 1;
}

/* 퇴장 애니메이션 */
.fade-leave-from {
  opacity: 1;
}
.fade-leave-active {
  transition: all 1s;
}
.fade-leave-to {
  opacity: 0;
}

/* 등장 애니메이션 */
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 1s;
}
.fade-enter-to {
  opacity: 1;
}


body {
  margin: 0;
}

div {
  box-sizing: border-box;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  position: fixed;
  padding: 20px;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.room-img {
  width: 100%;
  margin-top: 40px;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

</style>
