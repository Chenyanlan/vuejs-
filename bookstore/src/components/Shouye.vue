<template>
  <el-container>
    <el-aside width="300px">
      <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">展开</el-radio-button>
        <el-radio-button :label="true">收起</el-radio-button>
      </el-radio-group>
      <el-divider>
        <i class="el-icon-reading"></i> 图书分类
      </el-divider>
      <el-menu
        default-active="1-4-1"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        :collapse="isCollapse"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-star-off"></i>
            <span slot="title">特色书单</span>
          </template>
          <el-menu-item-group>
            <span slot="title">童书</span>
            <el-menu-item index="1-1">小学语文课外推荐阅读</el-menu-item>
            <el-menu-item index="1-2">国际大奖童书作品</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="文艺">
            <el-menu-item index="1-3">中国古诗词</el-menu-item>
            <el-menu-item index="1-4">中国当代诗歌</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="生活">
            <el-menu-item index="1-5">玩出来的专注力</el-menu-item>
            <el-menu-item index="1-6">孩子越大越难管</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
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
      </el-menu>
    </el-aside>
    <el-main>
      <el-carousel arrow="always" height="400px">
        <el-carousel-item v-for="item in images" :key="item">
          <div id="card">
            <el-image :src="item.url" :fit="none" style="width:80%;"></el-image>
          </div>
        </el-carousel-item>
      </el-carousel>
      <el-divider>
        <i class="el-icon-reading"></i> 新书上传
      </el-divider>

      <el-row type="flex">
        <el-col :span="4" v-for="book in booklist" :offset="2">
          <el-card shadow="hover" :body-style="{ padding: '0px'}">
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
      <!-- <v-card title="开门红预热" no-hovering>
        <v-card-grid :style="{width: '25%', textAlign: 'center',height:'50%',backgroundColor:'red',color:'white'}">
         <strong>畅销榜</strong>
        </v-card-grid>
        <v-card-grid :style="{width: '25%', textAlign: 'center',height:'50%'}">Content</v-card-grid>
        <v-card-grid :style="{width: '25%', textAlign: 'center',height:'50%'}">Content</v-card-grid>
        <v-card-grid :style="{width: '25%', textAlign: 'center',height:'50%'}">Content</v-card-grid>
        <v-card-grid :style="{width: '25%', textAlign: 'center',height:'50%'}">Content</v-card-grid>
        <v-card-grid :style="{width: '25%', textAlign: 'center',height:'50%'}">Content</v-card-grid>
        <v-card-grid :style="{width: '25%', textAlign: 'center',height:'50%'}">Content</v-card-grid>
        <v-card-grid :style="{width: '25%', textAlign: 'center',height:'50%'}">Content</v-card-grid>
      </v-card>-->
      <br>
      <div id="left">
        <h1>
          <strong>下载量</strong>
        </h1>
        <hr style="height:1px;border:none;border-top:1px solid #E4E7ED;">

        <el-row>
          <el-col :span="24">
            <br>
            <div>
              <el-image style="width: 100px; height: 120px;float:left" :src="url1" :fit="fill"></el-image>
              <div style="float:right;margin-right:10px">
                <h1>人生海海</h1>
                <br>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>作家:麦家
                <br>小说/中国文学
                <br>回归乡村，回到家庭叙事，写得曲折回环，荡人心肠。
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <br>
            <div>
              <el-image style="width: 100px; height: 120px;float:left" :src="url2" :fit="fill"></el-image>
              <div style="float:right;margin-right:10px">
                <h1>黑箱</h1>
                <br>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>作家:[日]伊藤诗织
                <br>女性/纪实
                <br>“我的声音会化作你的声音，或者你珍视的人的声音。”
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <br>
            <div>
              <el-image style="width: 100px; height: 120px;float:left" :src="url3" :fit="fill"></el-image>
              <div style="float:right;margin-right:10px">
                <h1>2081</h1>
                <br>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>作家:[美]库尔特·冯内古特
                <br>短篇小说 / 美国文学
                <br>也许只有精通痛苦的人才能精通幽默。 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <br>
            <div>
              <el-image style="width: 100px; height: 120px;float:left" :src="url4" :fit="fill"></el-image>
              <div style="float:right;margin-right:10px">
                <h1>棉花帝国</h1>
                <br>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>作家:[美]斯文·贝克特
                <br>全球史 / 资本主义
                <br>棉花帝国的扩张过程，也是一个全球化的过程。&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
      <div id="right">
         <h1>
          <strong>评论量</strong>
        </h1>
        <hr style="height:1px;border:none;border-top:1px solid #E4E7ED;">
         <el-row>
          <el-col :span="24">
            <br>
            <div>
              <el-image style="width: 100px; height: 120px;float:left" :src="url5" :fit="fill"></el-image>
              <div style="float:right;margin-right:10px">
                <h1>奥丽芙·基特里奇</h1>
                <br>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>作家:[美] 伊丽莎白·斯特劳特
                <br>小说/ 美国文学
                <br>所有人都穿着皇帝的新装，却好像他们自己并不游行
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <br>
            <div>
              <el-image style="width: 100px; height: 120px;float:left" :src="url6" :fit="fill"></el-image>
              <div style="float:right;margin-right:10px">
                <h1>奥斯特利茨</h1>
                <br>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>作家:[德]温弗里德•塞巴尔德
                <br>德语文学 / 长篇小说
                <br>找到了一种抒情与批判共存、轻与重兼备的叙事方式
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <br>
            <div>
              <el-image style="width: 100px; height: 120px;float:left" :src="url7" :fit="fill"></el-image>
              <div style="float:right;margin-right:10px">
                <h1>女性与权力</h1>
                <br>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>作家:[英] 玛丽·比尔德
                <br>社会学 / 女权
                <br>人们对男性的态度是“我不同意你的看法”&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <br>
            <div>
              <el-image style="width: 100px; height: 120px;float:left" :src="url8" :fit="fill"></el-image>
              <div style="float:right;margin-right:10px">
                <h1>午夜北平</h1>
                <br>
                <el-rate
                  v-model="value"
                  disabled
                  show-score
                  text-color="#ff9900"
                  score-template="{value}"
                ></el-rate>作家:[英]保罗·法兰奇
                <br>海外中国研究 / 近代史
                <br>午夜北平的紧张气氛，像展开一幅错综、吊诡的画卷
              </div>
            </div>
          </el-col>
        </el-row>
      </div>
    </el-main>
    <v-affix :offset-bottom="120" @change="onChange">
      <button type="button" class="ant-btn">
        <span>调研</span>
      </button>
    </v-affix>
  </el-container>
</template>

<script>
import image from "../images";
import books from "../books";
import book2 from "../books2";
export default {
  data() {
    return {
      images: image,
      isCollapse: true,
      booklist: books,
      url1: "https://img3.doubanio.com/view/subject/m/public/s32266692.jpg",
      url2: "https://img3.doubanio.com/view/subject/m/public/s30025945.jpg",
      url3: "https://img3.doubanio.com/view/subject/m/public/s29840640.jpg",
      url4: "https://img1.doubanio.com/view/subject/m/public/s32271479.jpg",
      url5:"https://img1.doubanio.com/view/subject/m/public/s29993079.jpg",
      url6:"https://img3.doubanio.com/view/subject/m/public/s29951872.jpg",
      url7:"https://img1.doubanio.com/view/subject/m/public/s29993079.jpg",
      url8:"https://img3.doubanio.com/view/subject/m/public/s30011086.jpg",
      value: 3.7
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    onChange: affixed => console.log(affixed)
  }
};
</script>

<style>
div#card {
  text-align: center;
}
p {
  display: inline-block;
  width: auto;
  height: 20px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
div#left {
  width: 40%;
  float: left;
  background-color: white;
  margin-left: 30px;
  border: 1px solid #ebe6e1;
  padding: 10px;
}
div#right {
  width: 40%;
  float: right;
  background-color: white;
  margin-right: 50px;
  border: 1px solid #ebe6e1;
  padding: 10px;
}
</style>
