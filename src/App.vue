<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="menu"><a v-for="a in menubar" :key="a">{{ a }}</a></div>

  <Modal :vueDongSan="vueDongSan" :modalStatus="modalStatus" :modalIndex="modalIndex" @hideModal="hideModal"/>
  <ShowPage :vueDongSan="vueDongSan" @showModal="showModal"/>
  <DiscountModal/>

</template>

<script>

import vueDongSan from './assets/data.js';
import DiscountModal from './DiscountModal.vue';
import Modal from './Modal.vue';
import ShowPage from './ShowPage.vue';


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
    getImageSrc(index) {
      // Assuming your image files are named as "room0.jpg", "room1.jpg", ...
      var number=index.toString();
      return "./assets/room"+number+".jpg";
    },
    hideModal() {
      this.modalStatus = 0;
    },
  },
  components: {
    Modal: Modal,
    DiscountModal: DiscountModal,
    ShowPage: ShowPage,
  },
}
</script>

<style>
body{
  margin: 0;
}
div {
  box-sizing: border-box;
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
