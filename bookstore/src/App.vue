<template>
    <v-layout>
      <v-header class="header" height="100px">
       <h1>主界面</h1>
      </v-header>
      <v-content class="content">
        <router-view/>
      </v-content>
      <v-footer class="footer">Footer</v-footer>
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
  background-color:skyblue;
}
.content{
  background-color:white;
  height: 500px;
}
h1{
  color: white;
}
</style>
