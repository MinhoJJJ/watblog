<template>
  <img alt="Vue logo" src="./assets/logo.png">

  <div class="menu"><a v-for="a in menubar" :key="a">{{ a }}</a></div>
  <DiscountModal/>
  <select @change="handleSortOption">
    <option value="default">원래대로 돌리기</option>
    <option value="high">가격순 높은순 정렬</option>
    <option value="low">가격순 낮은순정렬</option>
    <option value="alphabetical">가나다라 정렬</option>
  </select>
  <button @click="sortPrice()">가격순 정렬</button>
  <button @click="sortBack()">원래대로 돌리기</button>


  <transition name="fade">
    <Modal :vueDongSan="vueDongSan" :modalStatus="modalStatus" :modalIndex="modalIndex" @hideModal="hideModal"/>
  </transition>

  <ShowPage @openModal="showModal($event)" :vueDongSan="vueDongSan" @showModal="showModal"/>

    <div v-for="(a,i) in people" :key="i">
    <p >안녕하세요 {{i+1}}번째 사람 {{a}} 입니다.</p>
  </div>
  

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
        vueDongSanBackUp: [...vueDongSan],
        vueDongSan: vueDongSan,
        modalStatus: 0,
        modalIndex: 0,
        스타일 : 'color : red',
        people : ['철수','영희','마이클','잭','맥'],
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
    sortPrice() {
      // this.vueDongSan.sort((a, b) => a.price - b.price);
      this.vueDongSan.sort(function(a,b){
          return a.price-b.price;
      });

      this.vueDongSan.sort();
    },
    sortBack() {
      this.vueDongSan=[...this.vueDongSanBackUp];
    },
    handleSortOption(event){
      const selectedOption = event.target.value;
      if(selectedOption=='low'){
        this.sortPrice();
      }else if(selectedOption=='high'){
        this.vueDongSan.sort(function(a,b){
          return b.price-a.price;
        });
      }else if(selectedOption=='alphabetical'){
        this.vueDongSan.sort(function(a,b){
          return a.title.localeCompare(b.title);
        });
      }else if(selectedOption=='default'){
        this.sortBack();
      }
    }
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
.fade-enter-from{
  opacity: 0;
  transform:  translateY(-1000px);
}
.fade-enter-active{
    transition:  all 1s;
}
.fade-enter-to{
  opacity: 1;
  transform:  translateY(0px);

}

.fade-leave-from{
  opacity: 1;
}
.fade-leave-active{
    transition:  all 1s;
}
.fade-leave-to{
  opacity: 0;
}

</style>
