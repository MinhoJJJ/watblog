<template>
    <div class="black-bg" v-if="modalStatus == 1">
    <div class="white-bg">
      <h4>{{vueDongSan[modalIndex].title}}</h4>
      <h4>{{vueDongSan[modalIndex].content}}</h4>
      {{vueDongSan[modalIndex].price}}
      <p><button @click="closeModal">닫기</button></p>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal', 
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