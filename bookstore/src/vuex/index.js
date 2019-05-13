import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    //数据保存在state字段,全局变量
    state:{
        user:undefined
    },
    //想要修改state的数据,就需要这个选项
    //mutations 只能采取同步方法
    //这里的第一个参数必须是 state,要修改这个字段
    mutations:{
        login(state, payload){
            state.user = payload
        },
        loginout(state){
            state.user = undefined
        }
    },
    //异步方法用actions 
    //actions 不能直接修改state中的数据,所以需要调用commit 来触发mutations中的方法
    actions:{
        login(context,payload){
            context.commit('login',payload)
        },
        loginout(context){
            context.commit('loginout')
        }
    }
})
//相当于创建了一个store 的vue实例
export default store