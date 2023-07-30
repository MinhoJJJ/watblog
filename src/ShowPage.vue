<template>
  <div v-for="(a,i) in vueDongSan" :key="i">
    <img :src= "vueDongSan[i].image" class="room-img">
    <p @click="showModal(i)">{{vueDongSan[i].title}}</p>
    <p @click="$emit('openModal',i)">{{vueDongSan[i].price}}</p>
  </div>
</template>

<script>
export default {
    nmae:'ShowPage',
    props:{
        vueDongSan : Array,
    },
    methods: {
        showModal(index){
            this.$parent.showModal(index);
        },
    }
}
</script>

<style>

</style>