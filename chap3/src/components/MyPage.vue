<template>
<div style="padding : 10px">
  <h4>팔로워</h4>
  <input placeholder="?" />
  <div class="post-header" v-for="(a,i) in follower" :key="i">
    <div class="profile" :style="{backgroundImage : `url(${a.image})`}"></div>
    <span class="profile-name">{{a.name}}</span>
  </div>
</div>
</template>

<script>
import {onMounted,ref} from 'vue';  //reactive
import axios from 'axios';
// import {useStore} from 'vuex'

export default {
    name : 'mypage',

    setup(){  // setup(props, context)
        // let {one, two} =toRefs(props)  , destructuring 문법,  watch
        // watch(one, ()=>{ })
        // computed(()=> { return follower.value.length }) 데이터 연산결과 저장하는 곳
        // let sotre = useStore();  //commit , mapState는 못쓸거임
    
        let follower=ref([]);  //ref는 레퍼런스를 만들다라는 의미, scoped
        //let test =reactive({name:'kim'})

        //function dothis(){}  

        onMounted(()=>{
            axios.get('/follower.json').then((a)=>{
                follower.value = a.data;
            });
        })
        return {follower}
    },
}
</script>

<style>

</style>