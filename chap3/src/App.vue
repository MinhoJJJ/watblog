<template>
  <div>{{ $store.state.name }}</div>
  <button @click="$store.state.name=`qark`" >qjxms</button>
<div class="header">
    <ul class="header-button-left">
      <li>Cancel</li>
    </ul>
    <ul class="header-button-right">
      <li v-if="step==0" @click="step++;">Next</li>
      <li v-if="step==2" @click="publish">발행</li>
    </ul>
    <img src="./assets/logo.png" class="logo" />
  </div>
  
  <Container :insta="insta" :step="step" :url="url" @write="작성한글 = $event" :myFilter="myFilter"/>
  <button @click='more()'>더보기</button>

  <!-- <div v-if="step==0">내용0</div>
  <div v-if="step==1">내용1</div>
  <div v-if="step==2">내용2</div>
  <button @click="step=0">버튼0</button>
  <button @click="step=1">버튼1</button>
  <button @click="step=2">버튼2</button> 

  파일 업로드 방식
  1. FileReader()
  2. URL.createObjectURL()
  바이너리 데이터를 다룰땐 blob을 사용

  멀티 선택가능
  <input @change="upload" multiple accept="iamage/* "type="file" id="file" class="inputfile" />


-->

  <div class="footer">
    <ul class="footer-button-plus">
      <input @change="upload" type="file" id="file" class="inputfile" />
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
      cnt:0,
      url: "",
      myFilter:"",
    }
  },
  mounted(){
    this.emitter.on('shoot',(a) =>{
      this.myFilter=a;
    });
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
    },
    upload(e){
      let fileList= e.target.files
      let url=URL.createObjectURL(fileList[0]);
      this.url=url;
      this.step=1;
    },
    publish(){
      var 내게시물 = {
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=1",
        postImage: this.이미지,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.작성한글,
        filter: "perpetua"
    };
        this.insta.unshift(내게시물);
       this.step = 0;
    },

  }
}
</script>

<style>
@import 'style.css'
</style>
