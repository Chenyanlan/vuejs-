<template>
  <!-- <h1>登录界面</h1>
       用户名:<input/> <br>
       密码:<input/> <br>
  <button @click= "signin">点击登录</button>-->
  <v-form direction="horizontal" class="login-form" :rules= "rules" :model= "ruleForm" ref="loginForm">
    <v-form-item label="用户名" prop="name">
      <v-input type="text" placeholder="用户名" size="large" v-model= "ruleForm.name"></v-input>
    </v-form-item>
    <v-form-item label="密码" required prop="pass">
      <v-input type="password" placeholder="密码" size="large" v-model= "ruleForm.pass"></v-input>
    </v-form-item>
    <v-form-item>
      <v-button type="primary" @click= "signin" size="large" icon="smile-o">
        <span>登录</span>
      </v-button>
      <v-button type="primary" @click= "register" size="large" icon="smile-o">
        <span>注册</span>
      </v-button>
    </v-form-item>
  </v-form>
  <!-- <v-form class="login-form">
    <v-form-item>
      <v-input placeholder="用户名" size = "large">
        <v-icon type="user" slot="before"></v-icon>
      </v-input>
    </v-form-item>
    <br/>
    <v-form-item required>
      <v-input placeholder="密码" type="password" size = "large">
        <v-icon type="lock" slot="before"></v-icon>
      </v-input>
    </v-form-item>
    <v-form-item>
      <v-button type="primary" @click= "signin">登录</v-button>
    </v-form-item>
  </v-form>-->
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "",
        pass: ""
      },
      rules: {
        name: [{ required: true, message: "用户名不能为空" }],
        pass: [{ required: true, message: "密码不能为空" }]
      }
    };
  },
  methods: {
    signin() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$ajax.post('/users/validate',this.ruleForm).then((res)=>{
            if(res.data){
              this.$store.dispatch('login',res.data).then(()=>{
                this.$notification.success({
                  message:'成功登录',
                  description:'欢迎你, ' + res.data.name +'!'
                })
                 this.$router.replace("/");
              })
            }else{
              this.$message.error("用户名或密码错误");
            }
          }).catch((err)=>{
             this.$message.error("网络错误,请重试");
          })
        } else {
          return false;
        }
      });
    },
    register(){
      this.$router.replace("/register");
    }
  }
};
</script>

<style>
.login-form {
  width: 200px;
  height: 200px;
  margin: 0 auto;
}
</style>
