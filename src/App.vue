<template>

  <!-- 모달창 -->
  <div class="black-bg" v-if="모달창열렸니 == true">
    <div class="white-bg">
      <h4>상세페이지임</h4>
      <p>상세페이지 내용임</p>
      <button @click="모달창열렸니 = false">X</button>
    </div>
  </div>

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
    <img src="./assets/room2.jpg" class="room-img">
    <h4>{{ products[2] }}</h4>
    <p>가격은 아무거나</p>
    <button @click="신고수[2]++">허위매물신고</button>
    <span>신고수 : {{신고수[2]}}</span>
  </div>
</template>



<script>
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

      products : ['역삼동원룸','천호동원룸','마포구원룸'],
    }
  },

  methods : { /* Vue에서 함수만들고 싶을 때 */
    increase(){
      this.신고수++;
    }
  },

  components: {
  }
}
</script>



<style>
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
