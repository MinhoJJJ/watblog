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
  <div v-if="step==1">켜져있습니다.</div>
  <div v-if="step==2">꺼져있습니다.</div>
  <button @click="step=0">버튼0</button>
  <button @click="step=1">버튼1</button>
  <button @click="step=2">버튼2</button> -->

  <div class="footer">
    <ul class="footer-button-plus">
      <input type="file" id="file" class="inputfile" />
      <label for="file" class="input-plus">+</label>
    </ul>
 </div>
 <p>{{now2()}}  , {{cnt}}</p>
 <p>{{now}}  , 계산결과라서 () 안씀</p>
 <button @click="cnt++">응애추가</button>
 <!-- "store.commit('증가',10))" -->
</template>

<script>
import Container from './components/Container.vue';
import insta from './components/data.js';
import axios from 'axios'
import {mapMutations, mapState} from 'vuex'


export default {
  // component, computed 이런게 있는건 optionAPI
  name: 'App',
  components: {
    Container: Container,
  },
  data(){
    return{
      step: 3,
      insta:insta,
      cnt:0
    }
  },

  methods : {
      ...mapMutations(['more']),
    // more(){
    //   if(this.cnt==0){
    //       axios.get('https://codingapple1.github.io/vue/more0.json')       //axios.post ('URL', 보낼 데이터)  post는 내가 보내고싶은것을 보냄  .then은 성공시,  .catch는 실패시
    //       .then((data)=>{   //.then(function(data){
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
    },
    now2(){
      return new Date();
    },

  },
  // 뷰 파일이 첫 로드 됬을때만 뜸
  // 일반적으로 state도 computed에 담아서 씀
  computed : {  
    now(){
      return new Date();
    },
    ...mapState([name]),
  }
}
</script>

<style>
@import 'style.css'
</style>
