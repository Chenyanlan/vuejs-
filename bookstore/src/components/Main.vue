<template>
    <div>
        欢迎!<button @click= "login">点击登录</button>
    </div>
</template>

<script>
export default {
    methods:{
        login(){ 
          this.$router.replace('/login') 
        }
    }
}
</script>

<style>

</style>
