<template>
<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li>Next</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  
  <Container :insta="insta" :step="step"/>
  <button @click='more()'>더보기</button>

  <!-- <div v-if="step==0">내용0</div>
  <div v-if="step==1">내용1</div>
  <div v-if="step==2">내용2</div>
  <button @click="step=0">버튼0</button>
  <button @click="step=1">버튼1</button>
  <button @click="step=2">버튼2</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
</template>

<script>
import Container from './components/Container.vue';
import insta from './components/data.js';
import axios from 'axios'


export default {
  name: 'App',
  components: {
    Container: Container,
  },
  data(){
    return{
      step: 0,
      insta:insta,
      cnt:0
    }
  },
  methods : {
    // more(){
    //   if(this.cnt==0){
    //       axios.get('https://codingapple1.github.io/vue/more0.json')       //axios.post ('URL', 보낼 데이터)  post는 내가 보내고싶은것을 보냄  .then은 성공시,  .catch는 실패시
    //       .then((data)=>{   //.then(function(data){
    //       console.log(data);
    //       this.insta.push(data.data);
    //    })
    //   }
    //   if(this.cnt==1){
    //       axios.get('https://codingapple1.github.io/vue/more1.json')       //axios.post ('URL', 보낼 데이터)  post는 내가 보내고싶은것을 보냄  .then은 성공시,  .catch는 실패시
    //       .then((data)=>{   //.then(function(data){
    //       console.log(data);
    //       this.insta.push(data.data);
    //    })
    //   }
    //   this.cnt++;
    // },
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.cnt}.json`)
      .then(data => {
        this.insta.push(data.data);
        this.cnt++;
      })
 } 
  }
}
</script>

<style>
@import 'style.css'
</style>
