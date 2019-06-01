<template>
  <div>
    <!-- <div class="from-group">
      <label>评论人:</label>
      <el-input type="text" class="form-control" v-model="user"></el-input>
    </div> -->
    <div>
      <label>评论内容:</label><el-rate></el-rate>
      <el-input
        type="textarea"
        :row="7"
        v-model="content"
      ></el-input>
      <!-- <textarea class="content" ></textarea> -->
    </div>
    <br>
    <div>
      <el-row :gutter="20">
        <el-col :span="6" :offset="20">
      <el-button type="success" icon="el-icon-check" round @click="addContent">发送评论</el-button></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            // user:'',
            content:''
        }
    },
    methods:{
        addContent(){
            var comment = {
                id:Date.now(),
                // user:this.user,
                content: this.content
            };
            var list = JSON.parse(localStorage.getItem('cmts')||'[]');

           list.unshift(comment);
           localStorage.setItem('cmts',JSON.stringify(list));
            this.user=this.content='';
            this.$emit('func')
        }
    }
};
</script>

<style>
.content{
    width: 913px;
    height: 178px;
    padding: 10px;
    border: 1px solid #7a7a7a;
    resize: none;
    margin-top: 10px;

}
</style>
