<template>
    <v-layout>
      <v-header class="header" height="100px">
       <h1>主界面</h1>
      </v-header>
      <v-content class="content">
        <router-view/>
      </v-content>
      <v-footer class="footer">联系我们</v-footer>
    </v-layout>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
.header{
  background-color:skyblue;
}
.footer{
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
}
</style>
