<template>
  <el-container>
    <el-aside width="200px">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
      >
      <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-eleme"></i>
            <span slot="title">网络文学</span>
          </template>
          <el-menu-item index="2-1">男频</el-menu-item>
          <el-menu-item index="2-2">女频</el-menu-item>
          <el-menu-item index="2-3">玄幻奇幻</el-menu-item>
          <el-menu-item index="2-4">现代都市</el-menu-item>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span slot="title">教育</span>
          </template>
          <el-menu-item-group>
            <span slot="title">教材</span>
            <el-menu-item index="3-1">研究生/本科/专科</el-menu-item>
            <el-menu-item index="3-2">公共课</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="外语">
            <el-menu-item index="3-3">英语综合课程</el-menu-item>
            <el-menu-item index="3-4">日语专项训练</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="考试">
            <el-menu-item index="3-5">学历考试</el-menu-item>
            <el-menu-item index="3-6">公务员</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span slot="title">小说</span>
          </template>
          <el-menu-item index="4-1">中国当代小说</el-menu-item>
          <el-menu-item index="4-2">中国近现代小说</el-menu-item>
          <el-menu-item index="4-3">中国古典小说</el-menu-item>
          <el-menu-item index="4-4">侦探/悬疑/推理</el-menu-item>
        </el-submenu>

        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-medal"></i>
            <span slot="title">文艺</span>
          </template>
          <el-menu-item-group>
            <span slot="title">文学</span>
            <el-menu-item index="5-1">纪实文学</el-menu-item>
            <el-menu-item index="5-2">文学理论</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="传记">
            <el-menu-item index="5-3">历代帝王</el-menu-item>
            <el-menu-item index="5-4">领袖首脑</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="艺术">
            <el-menu-item index="5-5">艺术理论</el-menu-item>
            <el-menu-item index="5-6">绘画/音乐</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="6">
          <template slot="title">
            <i class="el-icon-truck"></i>
            <span slot="title">生活</span>
          </template>
          <el-menu-item-group>
            <span slot="title">亲子家教</span>
            <el-menu-item index="6-1">家教方法</el-menu-item>
            <el-menu-item index="6-2">成功案例</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="育儿早教">
            <el-menu-item index="6-3">育儿百科</el-menu-item>
            <el-menu-item index="6-4">亲子互动</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="保健养生">
            <el-menu-item index="6-5">中医养生</el-menu-item>
            <el-menu-item index="6-6">饮食健康</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="7">
          <template slot="title">
            <i class="el-icon-mobile-phone"></i>
            <span slot="title">科技</span>
          </template>
          <el-menu-item-group>
            <span slot="title">科普读物</span>
            <el-menu-item index="7-1">宇宙知识</el-menu-item>
            <el-menu-item index="7-2">生物世界</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="计算机/网络">
            <el-menu-item index="7-3">计算机理论</el-menu-item>
            <el-menu-item index="7-4">程序设计</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="医学">
            <el-menu-item index="7-5">临床医学理论</el-menu-item>
            <el-menu-item index="7-6">预防医学</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <!-- <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>科技</span>
          </template>
          <el-menu-item-group>
            <template slot="title">计算机/网络</template>
            <el-menu-item index="1-1">计算机教材</el-menu-item>
            <el-menu-item index="1-2">计算机理论与教程</el-menu-item>
            <el-menu-item index="1-3">软件系统</el-menu-item>
            <el-menu-item index="1-4">程序设计</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="科普读物">
            <el-menu-item index="1-5">科学知识</el-menu-item>
            <el-menu-item index="1-6">百科知识</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>教育</span>
          </template>
          <el-menu-item-group>
            
            <el-menu-item index="2-1">外语</el-menu-item>
            <el-menu-item index="2-2">考试</el-menu-item>
            <el-menu-item index="2-3">中小学教辅</el-menu-item>
            <el-menu-item index="2-4">工具书</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-document"></i>
            <span>生活</span>
          </template>
          <el-menu-item-group>
            
            <el-menu-item index="3-1">亲子/家教</el-menu-item>
            <el-menu-item index="3-2">保健/养生</el-menu-item>
            <el-menu-item index="3-3">体育/运动</el-menu-item>
            <el-menu-item index="3-4">休闲/爱好</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="el-icon-setting"></i>
            <span>文艺</span>
          </template>
          <el-menu-item-group>
      
            <el-menu-item index="4-1">小说</el-menu-item>
            <el-menu-item index="4-2">青春文学</el-menu-item>
            <el-menu-item index="4-3">艺术</el-menu-item>
            <el-menu-item index="4-4">传记</el-menu-item>
          </el-menu-item-group>
        </el-submenu> -->
      </el-menu>
    </el-aside>
    <el-main>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="默认↓" name="first">默认</el-tab-pane>
        <el-tab-pane label="下载量↓" name="second">下载量</el-tab-pane>
        <el-tab-pane label="评分↓" name="third">评论量</el-tab-pane>
      </el-tabs>
      <el-divider></el-divider>
      <ul class="list" v-infinite-scroll="load" infinite-scroll-disabled="disabled">
        <li v-for="line in lines">
          <el-row type="flex">
            <el-col :span="4" v-for="book in line" :offset="2">
              <el-card shadow="hover" :body-style="{ padding: '0px'}" >
                <el-image style="height:250px" :src="book.image"></el-image>
                <div style="padding: 14px;">
                  <span>{{book.name}}</span>
                  <div class="bottom clearfix">
                    <el-popover
                      placement="bottom-start"
                      title="简介"
                      width="200"
                      trigger="hover"
                      :content="book.intro"
                    >
                      <!-- <el-button >hover 激活</el-button> -->
                      <p class="intro" slot="reference">{{book.intro}}</p>
                    </el-popover>

                    <el-button type="text" class="button" @click="detail">详情</el-button>
                  </div>
                </div>
              </el-card>
            </el-col>
          </el-row>
          <el-divider></el-divider>
        </li>
      </ul>
      <p v-if="loading">加载中...</p>
      <p v-if="noMore">没有更多了</p>

      <!-- <el-row>
        <el-col :span="4" v-for="book2 in booklist2"  :offset="2">
          <el-card shadow="hover" :body-style="{ padding: '0px' }">
           <el-image style="height:250px" :src="book2.image"></el-image>
           <div style="padding: 14px;">
              <span>{{book2.name}}</span>
              <div class="bottom clearfix">
                <el-popover
                  placement="bottom-start"
                  title="简介"
                  width="200"
                  trigger="hover"
                  :content="book2.intro"
                >
                  <el-button >hover 激活</el-button>
                  <p class="intro" slot="reference">{{book2.intro}}</p>
                </el-popover>

                <el-button type="text" class="button">下载</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>-->
    </el-main>
  </el-container>
</template>

<script>
import books from "../books";
import book2 from "../books2";
export default {
  data() {
    return {
      booklist: books,
      booklist2: book2,
      lines: [books, book2, books, book2],
      loading: false,
      activeName: "first"
    };
  },
  computed: {
    noMore() {
      return this.lines.length >= 5;
    },
    disabled() {
      return this.loading || this.noMore;
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    load() {
      (this.loading = true),
        setTimeout(() => {
          this.lines.push(this.booklist);
          this.loading = false;
        }, 2000);
    },
    detail(){
      this.$router.replace('/detail')
    }
  }
};
</script>

<style>
.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}
p {
  display: inline-block;
  width: auto;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
