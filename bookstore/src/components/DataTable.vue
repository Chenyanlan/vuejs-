<template>
    <view-page>
        <!-- 左按钮区
        <template slot="left-field">
            <v-button type="danger" icon="plus"><span>添加</span></v-button>
        </template>
        搜索框
        <template slot="search-field">
            <v-input placeholder="请输入搜索内容" icon="search"></v-input>
        </template>
        过滤条件区
        <template slot="filter-field">
            <v-select placeholder="选择类型" v-model="filterType"></v-select>
            <v-data-picker v-model="rangeDate1" range clearable @confirm="confirm" @change = "rangechage"></v-data-picker>
        </template>
        右按钮区
        <template slot="right-field">
            <v-button type="primary" icon="sync"><span>刷新</span></v-button>
        </template>
        表格区
        <v-data-table :data='loadData' :columns='columns'></v-data-table> -->


        <template slot="left-field">
            <el-button type="danger" icon="el-icon-circle-plus-outline">添加</el-button>
        </template>
        <template slot="search-field">
            <el-input suffix-icon="el-icon-search" placeholder="请输入搜索内容"></el-input>
        </template>
        <template slot="filter-field">
            <el-select v-model="filterType" placeholder="选择类型"></el-select>
            <el-date-picker type="daterange" start-placeholder="开始日期" end-placeholder="结束日期"></el-date-picker>
        </template>
        <template slot="right-field">
            <el-button type="primary" icon="el-icon-refresh">刷新</el-button>
        </template>
        <!-- 表格区 -->
        <el-table :data="loadData">
            <el-table-column type="expand">
                <template slot-scope="scope">
                    <el-card header="内容简介">
                        {{scope.row.content}}
                    </el-card>
                </template>
            </el-table-column>
            <el-table-column label="学习书籍" prop="name">
            </el-table-column>
            <el-table-column label="作者">
                <template slot-scope="scope">
                    {{scope.row.author.join(',')}}
                </template>
            </el-table-column>
            <el-table-column label="学习计划状态">
                <template slot-scope="scope">
                    {{new Date(scope.row.completeDate).toLocaleDateString()}}
                </template>
            </el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button type="warning" size="small" icon="el-icon-edit"></el-button>
                    <el-button type="danger" size="small" icon="el-icon-delete"></el-button>
                </template>
            </el-table-column>
        </el-table>
    </view-page> 
</template>
<script>
import ViewPage from './ViewPage'
export default {
    components:{
        ViewPage
    },
    data(){
        return {
            loadData:[],
            filterType:'',
            status:['未开始','开始中','搁置中','已完成']
        }
    },
    mounted(){
        this.update()
    },
    methods:{
        update(){
            this.$ajax.get('todos').then((res)=>{
                if(res.data){
                    this.loadData = res.data
                    console.log(res.data);
                }
            }).catch(err=>this.$notify({
                type:'error',
                message:err
            }))
        }
    }
}
</script>
<style>

</style>
