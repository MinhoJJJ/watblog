<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="menu">
    <a v-for="indexs in menubar" :key="indexs">{{indexs}}</a>
  </div>
  <div>
    <h4 :style="스타일" v-for="(a,i) in product" :key="i">
    {{ a }}
    <span>{{price[i]}}</span></h4>
  </div>
  <div>
    <h4 :style="스타일">{{product[1]}}</h4>
    <p>{{price1}}  만원</p>
  </div> 
</template>

<script>

export default {
  name: 'App',
  data(){
      return{
        price1: 60,  //하드코딩하면 나중에 변경어려워서 데이터 바인딩하고, 실시간 자동 렌더링 쓰려면 이렇게해야함
        price2: 70,
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
