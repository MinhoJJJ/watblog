<template>
  <div>
    gd
    <Post/>
    <Post/>
    <Post :insta="insta"/>
    {{insta.name[0]}}
</div>
</template>

<script>
import Post from './Post.vue';
export default {
    name: 'Container',
    components: {
    Post: Post,
  },
  props:{
      insta:Array,
  },
}
</script>

<style>

</style>