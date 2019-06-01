<template>
  <div>
    <div id="bread">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>科技</el-breadcrumb-item>
        <el-breadcrumb-item>计算机/网络</el-breadcrumb-item>
        <el-breadcrumb-item>计算机教材</el-breadcrumb-item>
        <el-breadcrumb-item>C#程序设计教程(第3版)</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <br>
    <div id="aside">
      <div id="image">
        <el-image style="width: auto; height: 380px;" :src="url"></el-image>
          <div id="divider">
        <span>收藏</span>
        <el-divider direction="vertical"></el-divider>
        <span>分享</span>
        <el-divider direction="vertical"></el-divider>
        <span>手机阅读</span>
      </div>
      </div>
    
    </div>
    <div id="content">
      <h1>C#程序设计教程(第3版)</h1>
      <br>
      <br>
      <div id="cishu">
        <div id="price">
          <p>下载数: <span style="color:red;font-size:26px;">666</span></p>
          <br>
          <p>字数:60.1万</p>
        </div>
        <div id="rate">
          <el-rate v-model="value" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
          <span>127正在阅读</span>
          <el-divider direction="vertical"></el-divider>
          <span>2人评论</span>
        </div>
      </div>
      <br>
      <br>
      <br>
      <br>
      <br>
      <br>
      <p>作者:马骏主编</p>
      <br>
      <p>出版社:高等教育出版分社</p>
      <br>
      <p>出版时间:2014-01-01</p>
      <br>
      <p>所属分类:科技 > 计算机/网络 > 计算机教材</p>
      <br>
      <br>
      <div>
      <el-button type="primary" round>下载</el-button>
      </div>
    </div>
    <div id="aside-right">
      <h3>同类书排行榜</h3>
      <br>
      <div id="ranking">
      <el-collapse>
        <el-collapse-item v-for="list in booklist" >
          <template slot="title">{{list.name}}</template>
          <div>
            <el-image style="width: 100px; height: 130px;float:left" :src="list.image"></el-image>
            <h3>{{list.name}}</h3>
            {{list.intro}}
          </div>
        </el-collapse-item>
      </el-collapse>
      </div>
    </div>
    
    <div id="comment">
      <el-divider></el-divider>
      <el-tabs type="border-card">
        <el-tab-pane label="读书简介">
          <el-divider>
            <i class="el-icon-reading">读书简介</i>
          </el-divider>
          <article>&nbsp;&nbsp;&nbsp;&nbsp;本书主要介绍C#语言、WinForm和WPF应用程序开发的基础知识。全书共14章，前6章介绍C#语言和WinForm开发的基础知识，包括开发环境、基本数据类型、流程控制语句、类和结构、接口委托与事件、泛型与LINQ、目录与文件操作等；后8章介绍如何开发WPF应用程序，包括WPF控件、资源与样式控制、动画与多媒体、数据绑定与数据验证、数据库与实体数据模型、二维图形图像处理、三维图形和三维呈现。同时在附录中给出了本书的上机练习和综合实验。 本书提供配套的PPT课件以及在VS2012下调试通过的所有参考源程序和全部习题参考解答。 本书可作为高等院校计算机及相关专业的教材，也可作为初、中级程序员的参考用书。</article>
          <article>&nbsp;&nbsp;&nbsp;&nbsp;本书主要介绍C#语言、WinForm和WPF应用程序发的基础知识。全书共14章，前6章介绍C#语言和WinForm发的基础知识，包括发环境、基本数据类型、流程控制语句、类和结构、口委托与事件、泛型与LINQ、目录与文件操作等；后8章介绍如何发WPF应用程序，包括WPF控件、资源与样式控制、动画与多媒体、数据绑定与数据验证、数据库与实体数据模型、二维图形图像处理、三维图形和三维呈现。同时在附录中给出了本书的上机练习和综合实验。</article>

          <article>&nbsp;&nbsp;&nbsp;&nbsp;本书提供配套的PPT课件以及在VS2012下调试通过的所有参考源程序和全部习题参考解答。 本书可作为高等院校计算机及相关专业的教材，也可作为初、中级程序员的参考用书。</article>【推荐语】
          <br>1.*畅销的国内原创C#教材。
          <br>2.“十二五”普通高等教育本科***规划教材。
          <br>3.全书内容是作者经过多年教学验证的，案例都是从作者实际发中抽取出来的，实用性非常强。
          <br>4.教材配套资料全，适合教师需求。
          <br>5.与同类书籍相比，教材对基本概念的讲解透彻，条理清晰，步骤详细，非常适合自学。
          <br>
        </el-tab-pane>
        <el-tab-pane label="目录">
          <el-divider>
            <i class="el-icon-finished">目录</i>
          </el-divider>第3版前言
          <br>第1篇 C#程序设计基础
          <br>第1章 C#代码编写基础
          <br>第2章 基本数据类型和流程控制语句
          <br>第3章 类和结构
          <br>第4章 接口、委托与事件
          <br>第5章 泛型与LINQ
          <br>第6章 目录与文件操作
          <br>第2篇 WPF应用程序
          <br>第7章 WPF应用程序入门
          <br>
        </el-tab-pane>
        <el-tab-pane label="评论">
          <el-divider>
            <i class="el-icon-s-comment">评论</i>
          </el-divider>
          <comment @func="localComments"></comment>
          <ul id="comment">
            <li v-for="item in commentlist" :key="item.id">
              <!-- <span>评论人:{{item.user}} </span> -->
              {{item.content}}
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import books from "../books";
import book2 from "../books2";
import Comment from "./Comment";
export default {
  data() {
    return {
      booklist: books,
      url:
        "http://img62.ddimg.cn/digital/product/85/50/1900668550_ii_cover.jpg?version=d496d012-e8b0-420f-ae32-258958cd8d2c555",
      value: 3.7,
      commentlist: []
    };
  },
  components: {
    Comment
  },
  methods: {
    created() {
      this.localComments();
    },
    localComments() {
      var list = JSON.parse(localStorage.getItem("cmts"));
      this.commentlist = list;
    }
  }
};
</script>

}
<style>
div#aside {
  position: relative;
  width: 30%;
  height: 450px;
  background-color: white;
  float: left;
}
div#content {
  width: 40%;
  height: 450px;
  background-color:white;
  float: left;
}
div#comment {
  width: 70%;
  height: 600px;
  background-color: white;
  clear: both;
}
div#aside-right {
  width: 30%;
  height: 450px;
  background-color: white;
  float: right;
}
div#ranking{
  
  border: 1px solid #ebe6e1;
 
}
div#aside-right h3 {
  text-align: center;
}
div#image{
  width: 300px;
  height: 400px;
  position: absolute;
  left:0;
  top: 0;
  bottom: 0;
  right: 0;
  margin-left:50px;
  text-align: center;
  border: 1px solid #ebe6e1;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
}
div#divider{
  float: left;
  text-align: center;
  margin-left: 50px;
  
}
div#cishu{
  width: 90%;
  height: 100px;
  margin-right: 20px;
  float: left;
  background-color: gainsboro;
  border: 1px dashed #ebe6e1;
}
div#price{
  float: left;
  height: 40px;
}
div#rate{
  float: right;
  margin-top: 10px;
  margin-right: 10px;
}

ul#comment li {
  list-style: none;
  height: 30px;
  line-height: 30px;
  border-bottom: 1px dashed gray;
  text-indent: 15px;
  font-size: 14px;
}
</style>
