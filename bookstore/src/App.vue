<template>
    <el-container>
      <el-header class="header" height="100px">
        <h1>主界面</h1>
      </el-header>
      <el-main>
        <router-view/>
      </el-main>
    </el-container>
    <!-- <v-layout>
      <v-header class="header" height="100px">
       <h1>主界面</h1>
      </v-header>
      <v-content class="content">
        <router-view></router-view>
      </v-content>
      <v-footer class="footer">联系我们</v-footer>
    </v-layout> -->
</template>

<script>
// import DataTable from './components/DataTable'
export default {
  name: "App"
  // components:{
  //   DataTable
  // }
};
</script>

<style>
.header{
  background-color:skyblue;
  color: white;
}
/* .footer{
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 100%;
  background-color:skyblue;
}
.content{
  background-color:white;
  height: auto;
}
h1{
  color: white;
} */
</style>
