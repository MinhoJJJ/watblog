<template>
    <div class="black-bg" v-if="modalStatus == 1">
    <div class="white-bg">
      <h4>{{vueDongSan[modalIndex].title}}</h4>
      <h4>{{vueDongSan[modalIndex].content}}</h4>
      <input v-model="inputValue">
      <input type="range" min="1" max="12">
      <p>{{inputValue}}개월 선택함: {{vueDongSan[modalIndex].price * inputValue}}</p>
      <p><button @click="closeModal">닫기</button></p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal', 
    data(){
      return{
        inputValue: 1,
      }  
    },
    watch: {
      inputValue(a){   // 매개변수 (a,b) 주면 변경 전, 변경 후 데이터 가져옴
        if (isNaN(a) == true){
          alert('문자입력하지마라');
          this.inputValue = 1;
        }
      }
    },
    props:{
        vueDongSan : Array,
        modalIndex : Number,
        modalStatus : Number,
    },
    methods: {
      closeModal() {
        this.$emit('hideModal'); // 이벤트를 발생시켜 부모로 변경 요청
      },
    }
}
</script>

<style>
div {
  box-sizing: border-box;
}
.black-bg {
  width: 100%; height:100%;
  background: rgba(0,0,0,0.5);
  position: fixed; 
  padding: 20px;
}
.white-bg {
  width: 100%; background: white;
  border-radius: 8px;
  padding: 20px;
}  
</style>