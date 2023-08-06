import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: 'kim',
      age: 20,
      like: 0,
      likeBool: true,
      more: {},
    }
  },
  mutations :{
    changeName(state){
      state.name='park'
    },
    changeAge(state,a){
      state.age=30+a
    },
    changeLike(state){
      if(state.likeBool){
        state.like++;
        state.likeBool=false;
      }else{
        state.like--;
        state.likeBool=true;
      }
    },
    changeMore(state, data){
      state.more= {data};
      console.log(state.more);

    }
  },
  actions: {
    getData(context){
      axios.get(`https://codingapple1.github.io/vue/more0.json`).then((a)=>{
        context.commit('changeMore',a.data);
      })
    }
  },
})

export default store