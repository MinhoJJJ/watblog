<template>
  <div :class="filter + ' filter-item'" :style="`background-Image: url(${url})`">
    <slot></slot>
    <button @click="fire">버튼</button>
  </div>
</template>

<script>
export default {
    name: 'FilterBox',
    props:{
      url:String,
      filter:String,  // 게시물.핋터 :class
    },
    methods:{
      fire(){
        this.emitter.emit('shoot', this.filter)
      },
    }
}
</script>

<style>
    .filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color : white;
    background-size: cover;
    background-position : center;
    }
</style>