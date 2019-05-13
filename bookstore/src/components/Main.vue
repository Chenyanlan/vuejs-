<template>
    <div>
        <span v-if= "user">
            {{user.name}}
            <v-button type="warning" @click= "loginout">注销</v-button>
        </span>
        <v-button v-else type="success" @click= "login">登录</v-button>
    </div>
</template>

<script>
export default {
    methods:{
        login(){ 
            this.$router.replace('/login') 
        },
        loginout(){
            this.$store.dispatch('loginout').then(()=>{
                this.$router.replace('/login') 
            })
        }
    },
    computed:{
        user(){
            return this.$store.state.user
        }
    }
}
</script>

<style>

</style>
