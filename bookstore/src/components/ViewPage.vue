<template>
  <!-- <v-layout>
    <v-header>
      <v-row>
       
        <v-col span="2">
            <slot name="left-field"></slot>
        </v-col>
       
        <v-col span="4">
            <slot name="search-field"></slot>
        </v-col>
        
        <v-col span="12">
            <slot name="filter-field"></slot>
        </v-col>
        
        <v-col span="6">
            <slot name="right-field"></slot>
        </v-col>
      </v-row>
    </v-header>
    <v-content>
        <slot></slot>
    </v-content>
  </v-layout> -->

  <el-container>
      <el-header>
          <el-row>
              <!-- 左按钮区 -->
              <el-col :span="2">
                  <slot name = "left-field"></slot>
              </el-col>
              <!-- 搜索框 -->
              <el-col :span="4">
                  <slot name="search-field"></slot>
              </el-col>
              <!-- 过滤条件区 -->
              <el-col :span="12">
                  <slot name="filter-field"></slot>
              </el-col>
             <!-- 右按钮区 -->
              <el-col :span="6">
                  <slot name="right-field"></slot>
              </el-col>
          </el-row>
      </el-header>
      <el-main>
          <!-- 表格区 -->
          <slot></slot>
      </el-main>
  </el-container>
</template>
<script>
export default {};
</script>

<style>
.el-container{
    margin-top: 10px;
}
.el-header{
    padding-top: 10px;
}
</style>
