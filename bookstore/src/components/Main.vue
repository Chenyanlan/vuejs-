<template>
  <div>
      <span v-if="user">
          <div id="toubu">
            {{user.name}}
            <el-button type="warning" @click="loginout">点击注销</el-button>
          </div>
          <el-divider></el-divider>   
      </span>
      <span v-if="user">
           <data-table></data-table>  
      </span>
      <el-button v-else type="success" @click="login">点击登录</el-button>
  </div>
</template>

<script>
import DataTable from "./DataTable";
export default {
  components: {
    DataTable
  },
  methods: {
    login() {
      this.$router.replace("/login");
    },
    loginout() {
      this.$store.dispatch("loginout").then(() => {
        this.$router.replace("/login");
      });
    },
    studynote() {
      this.$router.replace("/viewpage");
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  }
};
</script>

<style>
#toubu{
    background-color: #f9f9f9;
}
</style>
