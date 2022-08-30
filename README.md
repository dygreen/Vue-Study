# Vuedongsan
> [Vue] 공부 정리
> 
> branch: master(부동산앱), blog(블로그앱)
> 
> [2022.08.25 ~ ]
***
## 공부 내용 ✏
* HTML에 데이터바인딩 {{데이터}} (state관리)
```vue
<div>
  <img src="./assets/room1.jpg" class="room-img">
      <h4>{{ products[1] }}</h4>
      <p>{{ price2 }}만원</p>
      <button @click="신고수[1]++">허위매물신고</button>
  <span>신고수 : {{신고수[1]}}</span>
</div>

<script>
export default {
  name: 'App',
  data(){
    return {
    // 데이터(state) 저장하는 공간: 데이터는 object 자료로 저장해야 함
    price1 : 60,
    price2 : 70,
    신고수 : [0,0,0],
    products : ['역삼동원룸','천호동원룸','마포구원룸'],
    }
  },
}
</script>
```
* v-for 반복문으로 데이터바인딩
```vue
<div v-for="(a,i) in 원룸들" :key="i">
  <img :src="원룸들[i].image" class="room-img">
  <h4>{{ 원룸들[i].title }}</h4>
  <p>{{ 원룸들[i].price }}원</p>
</div>
```
* v-if 문법으로 모달창 만들기
```vue
<div class="black-bg" v-if="모달창열렸니 == true">
  <div class="white-bg">
    <h4>상세페이지임</h4>
    <p>상세페이지 내용임</p>
    <button @click="모달창열렸니 = false">X</button>
  </div>
</div>
```
* Component 분리하고, props로 데이터 전달하여 띄우기
```vue
<Cards :원룸들="원룸들" :누른상품번호="누른상품번호" :모달창열렸니="모달창열렸니"/>

<script>
  import Cards from "./Cards.vue";

  export default {
    name: 'App',

    components: { /*컴포넌트 등록*/
      Discount : Discount,
      Modal : Modal,
      Cards : Cards,
    }
  }
</script>
```
* Custom event(`$emit`, `@click`) 문법으로 props값 변경하기
* CSS 애니메이션 주기 : `class` / `<Transition>`
```vue
<!-- class 적용 경우 -->
<div class="start" :class="{ end : 모달창열렸니 }"> <!-- 조건부로 class명 부착 가능 -> 오른쪽이 true 혹은 true와 비슷한 자료일 때 부착됨 -->
  <Modal :원룸들="원룸들" :누른상품번호="누른상품번호" :모달창열렸니="모달창열렸니" @closeModal="모달창열렸니 = false; 누른상품번호 = $event"/>
</div>

<!-- Transition 태그 적용 경우 -->
<Transition name="fade">
  <Modal :원룸들="원룸들" :누른상품번호="누른상품번호" :모달창열렸니="모달창열렸니" @closeModal="모달창열렸니 = false; 누른상품번호 = $event"/>
</Transition>
```
```css
/* 등장 애니메이션 */
.fade-enter-from { /* 애니메이션 동작 전 상태 */
  opacity: 0;
}
.fade-enter-active { /* 애니메이션 동작 중 상태 */
  transition: all 1s;
}
.fade-enter-to { /* 애니메이션 동작 후 상태 */
  opacity: 1;
}
```
* 라이프사이클에 따른 기능 추가
```vue
export default {
  beforeUpdate(){
    if( this.month == 2 ){
      alert('2개월은 너무 적습니다..');
    }
  }

mounted() {
  setInterval(() => {
    if ( this.percent > 0 ){
      this.percent--;
    }
    },1000);
  }
}
```