<template>
  <el-tabs tab-position="left" style="height: 900px;" type="border-card">
    <el-tab-pane label="个人中心" disabled>个人中心</el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-s-home"></i>我的首页
      </span>
      <h1>我的首页</h1>
      <el-divider></el-divider>
      <div id="touxiang">
        <el-image style="width: 100px; height: 100px" :src="url" :fit="fit"></el-image>
      </div>
      <div id="name">User</div>
      <br>
      <div id="jinyan">
        <el-progress :text-inside="true" :stroke-width="22" :percentage="80" status="warning"></el-progress>
      </div>
      <br>
      <br>
      <br>
      <el-divider></el-divider>
      <v-card title="账号安全" no-hovering>
        <v-card-grid :style="{width: '50%', textAlign: 'center'}">
          <h3>我的邮箱</h3>
          <el-button size="small" type="info" round>已绑定</el-button>
        </v-card-grid>
        <v-card-grid :style="{width: '50%', textAlign: 'center'}">
          <h3>我的手机</h3>
          <el-button size="small" type="info" round>已绑定</el-button>
        </v-card-grid>
        <v-card-grid :style="{width: '50%', textAlign: 'center'}">
          <h3>设置密保</h3>
          <el-button size="small" type="primary" round>去设置</el-button>
        </v-card-grid>
        <v-card-grid :style="{width: '50%', textAlign: 'center'}">
          <h3>实名认证</h3>
          <el-button size="small" type="primary" round>去认证</el-button>
        </v-card-grid>
      </v-card>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-s-custom"></i>我的信息
      </span>
      <h1>我的信息</h1>
      <el-divider></el-divider>
      <div style="width:60%">
        <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
          <el-form-item label="名称:">
            <el-input v-model="formLabelAlign.name"></el-input>
          </el-form-item>
          <el-form-item label="签名:">
            <el-input v-model="formLabelAlign.region"></el-input>
          </el-form-item>
          <el-form-item label="性别:">
            <div>
              <el-radio-group v-model="radio3">
                <el-radio-button label="男"></el-radio-button>
                <el-radio-button label="女"></el-radio-button>
                <el-radio-button label="保密"></el-radio-button>
              </el-radio-group>
            </div>
          </el-form-item>
          <el-form-item label="出生日期:">
            <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
          </el-form-item>
        </el-form>
      </div>
    </el-tab-pane>

    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-star-on"></i>我的收藏
      </span>
      <h1>我的收藏</h1>
      <el-divider></el-divider>
      <el-row>
        <el-col :span="24">
          <br>
          <div>
            <el-image style="width: 100px; height: 120px;float:left" :src="url1" :fit="fill"></el-image>
            <div style="float:left;margin-left:20px">
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
            <div id="cancel">
                <el-button type="warning" round>取消收藏</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <br>
          <div>
            <el-image style="width: 100px; height: 120px;float:left" :src="url2" :fit="fill"></el-image>
            <div style="float:left;margin-left:20px">
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
            <div id="cancel">
                <el-button type="warning" round>取消收藏</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <br>
          <div>
            <el-image style="width: 100px; height: 120px;float:left" :src="url3" :fit="fill"></el-image>
            <div style="float:left;margin-left:20px">
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
            <div id="cancel">
                <el-button type="warning" round>取消收藏</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="24">
          <br>
          <div>
            <el-image style="width: 100px; height: 120px;float:left" :src="url4" :fit="fill"></el-image>
            <div style="float:left;margin-left:20px">
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
            <div id="cancel">
                <el-button type="warning" round>取消收藏</el-button>
            </div>
          </div>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane>
      <span slot="label">
        <i class="el-icon-upload"></i>我的上传
      </span>
      <h1>我的上传</h1>
      <el-divider></el-divider>
      <div id="update">
        还没有上传过图书哦~
        <el-upload
          class="upload-demo"
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-change="handleChange"
          :file-list="fileList"
        >
          <!-- <el-button size="small" type="primary">点击上传</el-button> -->
          <div slot="tip" class="el-upload__tip">只能上传pdf/word/words文件，且不超过50mb</div>
        </el-upload>
      </div>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      url:
        "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",
      url1: "https://img3.doubanio.com/view/subject/m/public/s32266692.jpg",
      url2: "https://img3.doubanio.com/view/subject/m/public/s30025945.jpg",
      url3: "https://img3.doubanio.com/view/subject/m/public/s29840640.jpg",
      url4: "https://img1.doubanio.com/view/subject/m/public/s32271479.jpg",
      value: 3.7,
      value1: "",
      radio3: "保密",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      imageUrl: "",
      fileList: [
        {
          name: "food.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        },
        {
          name: "food2.jpeg",
          url:
            "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
        }
      ]
    };
  },
  methods: {
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3);
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === "image/jpeg";
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error("上传头像图片只能是 JPG 格式!");
      }
      if (!isLt2M) {
        this.$message.error("上传头像图片大小不能超过 2MB!");
      }
      return isJPG && isLt2M;
    }
  }
};
</script>

<style>
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409eff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.avatar {
  width: 178px;
  height: 178px;
  display: block;
}
div#touxiang {
  float: left;
  margin-left: 30px;
}
div#update {
  text-align: center;
}
div#name {
  margin-left: 180px;
  font-size: 20px;
  color: #409eff;
}
div#jinyan {
  width: 40%;
  float: right;
  margin-right: 620px;
}
div#cancel{
    margin-top: 10px;
    margin-right: 10px;
    float: right;
}
</style>
