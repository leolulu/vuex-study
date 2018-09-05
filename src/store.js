import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vuexnum: 0,
    todos:[
      {id:1,text:'第一个待办事项',done:false},
      {id:2,text:'第二个待办事项',done:true},
      {id:3,text:'第三个待办事项',done:true}
    ]
  },
  getters:{
    doneTodos: state=>{
      return state.todos.filter(i=>i.done)
    }
  },
  mutations: {
    changevuexnumto(state, value) {
      state.vuexnum = value
    },
    vuexnumplus(state) {
      state.vuexnum += 1
    }
  },
  actions: {

  }
})