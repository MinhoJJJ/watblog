<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <!-- <div class="menu"><a v-for="(a,i) in menubar" :key="i">{{ a }}{{product[i]}}</a></div> -->
  <!-- <button v-on:click="police++">허위매물신고</button> <span>신고수: {{ police }}</span> -->

  <div class="menu"><a v-for="a in menubar" :key="a">{{ a }}</a></div>
  <div>
    {{product[0]}}  
    <p>{{price[0]}}</p>
    <button @click="police++">허위매물신고</button> <span>신고수: {{ police }}</span>
  </div>


</template>

<script>

export default {
  name: 'App',
  data(){
      return{
        price1: 60,  //하드코딩하면 나중에 변경어려워서 데이터 바인딩하고, 실시간 자동 렌더링 쓰려면 이렇게해야함
        price2: 70,
        police: 0,
        스타일 : 'color : red',
        menubar : ['Home','Products','Price'],
        product : ['역삼동 원룸', '천호동 원룸','마포구 원룸'],
        price   : ['50만원','60만원','70만원'],
      }
    },
  components: {
  }
}
</script>

<style>
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
