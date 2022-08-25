# Vuedongsan
> [Vue] 공부 정리
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