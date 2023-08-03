<template>
  <div>
    {{insta[0].name}}
    <Post :insta="insta"/>
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