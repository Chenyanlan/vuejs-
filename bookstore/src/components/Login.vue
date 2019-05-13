<template>
  <!-- <h1>登录界面</h1>
       用户名:<input/> <br>
       密码:<input/> <br>
  <button @click= "signin">点击登录</button>-->
  <v-form direction="horizontal" class="login-form">
    <v-form-item label="用户名">
      <v-input type="text" placeholder="用户名" size="large"></v-input>
    </v-form-item>
    <v-form-item label="密码" required>
      <v-input type="password" placeholder="密码" size="large"></v-input>
    </v-form-item>
    <v-form-item>
      <v-button type="primary" @click= "signin">确定</v-button>
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
  </v-form> -->
</template>

<script>
export default {
  methods: {
    signin() {
      this.$router.replace("/");
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
