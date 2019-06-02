<template>
  <el-container>
    <el-header class="header" height="122px">
      <div id="logo">
        图书资源
        <div id="search">
          <el-button icon="el-icon-search">搜索</el-button>
        </div>
        <div id="search1">
          <el-input placeholder="搜索书名/作者名"></el-input>
        </div>
      </div>
      <hr style="height:1px;border:none;border-top:1px solid rgb(97, 78, 60);">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="rgb(233, 233, 226)"
        text-color="rgb(97, 78, 60)"
      >
        <el-submenu index="1">
          <template slot="title">全部分类</template>
          <el-submenu index="1-1">
            <template slot="title">网络文学</template>
            <el-menu-item index="1-1-1">男频</el-menu-item>
            <el-menu-item index="1-1-2">女频</el-menu-item>
            <el-menu-item index="1-1-3">玄幻奇幻</el-menu-item>
            <el-menu-item index="1-1-4">现代都市</el-menu-item>
          </el-submenu>
          <el-submenu index="1-2">
            <template slot="title">教育</template>
            <el-menu-item index="1-2-1">教材</el-menu-item>
            <el-menu-item index="1-2-2">外语</el-menu-item>
            <el-menu-item index="1-2-3">考试</el-menu-item>
          </el-submenu>
          <el-submenu index="1-3">
            <template slot="title">小说</template>
            <el-menu-item index="1-3-1">中国当代小说</el-menu-item>
            <el-menu-item index="1-3-2">中国近现代小说</el-menu-item>
            <el-menu-item index="1-3-3">中国古典小说</el-menu-item>
            <el-menu-item index="1-3-4">侦探/推理/悬疑</el-menu-item>
          </el-submenu>
          <el-submenu index="1-4">
            <template slot="title">文艺</template>
            <el-menu-item index="1-4-1">文学</el-menu-item>
            <el-menu-item index="1-4-2">传记</el-menu-item>
            <el-menu-item index="1-4-3">艺术</el-menu-item>
          </el-submenu>
          <el-submenu index="1-5">
            <template slot="title">生活</template>
            <el-menu-item index="1-5-1">亲子家教</el-menu-item>
            <el-menu-item index="1-5-2">育儿早教</el-menu-item>
            <el-menu-item index="1-5-3">保健养生</el-menu-item>
          </el-submenu>
          <el-submenu index="1-6">
            <template slot="title">科技</template>
            <el-menu-item index="1-6-1">科普读物</el-menu-item>
            <el-menu-item index="1-6-2">计算机/网络</el-menu-item>
            <el-menu-item index="1-6-3">医学</el-menu-item>
          </el-submenu>
        </el-submenu>

        <el-menu-item index="2" @click="shouye">首页</el-menu-item>
        <el-menu-item index="3" @click="home">分类</el-menu-item>
        <el-menu-item index="4" @click="main">学习进度管理</el-menu-item>
        <el-menu-item index="5" @click="userhome">个人中心</el-menu-item>
      </el-menu>
    </el-header>

    <el-main>
      <!-- <hr style="height:1px;border:none;border-top:1px solid #E4E7ED;"> -->
      <br>
      <br>
      <router-view/>
    </el-main>
    <el-footer>
      <span>关于我们</span>
      <el-divider direction="vertical"></el-divider>
      <span>联系我们</span>
      <el-divider direction="vertical"></el-divider>
      <span>法律声明</span>
      <el-divider direction="vertical"></el-divider>
      <span>帮助中心</span>
    </el-footer>
  </el-container>
  <!-- <v-layout>
      <v-header class="header" height="100px">
       <h1>主界面</h1>
      </v-header>
      <v-content class="content">
        <router-view></router-view>
      </v-content>
      <v-footer class="footer">联系我们</v-footer>
  </v-layout>-->
</template>

<script>
// import DataTable from './components/DataTable'
export default {
  name: "App",
  methods: {
    home() {
      this.$router.replace("/home");
    },
    main() {
      this.$router.replace("/");
    },
    shouye() {
      this.$router.replace("/shouye");
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    userhome(){
      this.$router.replace("/userhome");
    }
  },
  data() {
    return {
      activeIndex: "1"
    };
  }
};
</script>

<style>
div#logo {
  background-color: rgb(233, 233, 226);
  color: rgb(97, 78, 60);
  font-size: 26px;
  padding-top: 10px;
  padding-left: 70px;
  padding-bottom: 10px;
}
div#search {
  float: right;
  margin-right: 150px;
}
div#search1 {
  float: right;
}
.el-header {
  background-color: rgb(233, 233, 226);
}
.el-footer {
  text-align: center;
  line-height: 60px;
  background-color: rgb(233, 233, 226);
}
</style>
