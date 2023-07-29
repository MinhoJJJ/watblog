<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <!-- <div class="menu"><a v-for="(a,i) in menubar" :key="i">{{ a }}{{product[i]}}</a></div> -->
  <!-- <button v-on:click="police++">허위매물신고</button> <span>신고수: {{ police }}</span> -->
  <!-- <button @mouseover="police++">허위매물신고</button> <span>신고수: {{ police }}</span> -->
  <!-- <button @input="police++">허위매물신고</button> <span>신고수: {{ police }}</span> -->

  <!-- <div class="menu"><a v-for="a in menubar" :key="a">{{ a }}</a></div>
  <div v-for="(a,i) in product" :key="i">
    {{product[i]}}
    <p>{{price[i]}}</p>
    <p><button @click="plus(i)">허위매물신고</button> <span>신고수: {{ police[i] }}</span></p>
  </div> -->

  <div v-if="1==1">
      안녕하세요.
  </div>
  <div v-else-if="1==3">
      안녕안하세요
  </div>
  <div v-else>
      안녕안하세요
  </div>

  <div class="black-bg" v-if="modalStatus == 1">
    <div class="white-bg">
      <h4>{{vueDongSan[modalIndex].title}}</h4>
      <h4>{{vueDongSan[modalIndex].content}}</h4>
      {{vueDongSan[modalIndex].price}}
      <p><button @click="hideModal">닫기</button></p>
    </div>
  </div>
<!-- 속성은 {{}}, 내용은 : -->
  <div class="menu"><a v-for="a in menubar" :key="a">{{ a }}</a></div>
  <div v-for="(a,i) in vueDongSan" :key="i">
    <img :src= "vueDongSan[i].image" class="room-img">
    <p @click="showModal(i)">{{vueDongSan[i].title}}</p>
    <p>{{vueDongSan[i].price}}</p>
  </div>



</template>

<script>

import vueDongSan from './assets/data.js';
export default {
  name: 'App',
  data(){  // state라고 부름
      return{
        vueDongSan: vueDongSan,
        modalStatus: 0,
        modalIndex: 0,
        스타일 : 'color : red',
        menubar : ['Home','Products','Price'],
        product : ['역삼동 원룸', '천호동 원룸','마포구 원룸'],
      }
    },
  methods: {
    plus(i){
      this.police[i]++;
    },
    showModal(index){
      this.modalIndex=index;
      this.modalStatus=1;
    },
    hideModal(){
      this.modalStatus=0;
    },
    getImageSrc(index) {
      // Assuming your image files are named as "room0.jpg", "room1.jpg", ...
      var number=index.toString();
      return "./assets/room"+number+".jpg";
    },
  },
  components: {
  }
}
</script>

<style>
body{
  margin: 0;
}
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}  

.room-img{
  width: 40%;
  margin-top: 40px;
}
.menu{
  background: darkgoldenrod;
  padding: 15px;
  border-radius: 5px;
}
.menu a{
    color: white;
    padding: 10px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
