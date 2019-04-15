<template>
  <div class="layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px; margin-top: 10px;">班级管理</h2>
    <div class="layout-content">
      <el-button type="primary" class="button" @click="dialogFormVisible = true">+添加班级</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
      ><el-table-column
         prop="date"
         label="班级名"
         width="312"
       />
        <el-table-column
          prop="name"
          label="课程名"
          width="594"
        />
        <el-table-column
          prop="address"
          label="教师号"
          width="312"
        />
        <el-table-column
          prop="edit"
          label="操作"
          width="312"
        >
          <el-button type="text" @click="dialogFormVisible = true">修改</el-button>|<span style="color:#1890ff">删除</span>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加班级" :visible.sync="dialogFormVisible" width="520px" height="317px">
      <el-form :model="form">
        <el-form-item label="班级名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="班级名" />
        </el-form-item>
        <el-form-item label="教室号" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择教室号">
            <el-option label="34315" value="34315" />
            <el-option label="34305" value="34305" />
            <el-option label="34315" value="34315" />
            <el-option label="24315" value="24315" />
            <el-option label="34395" value="34395" />
          </el-select>
        </el-form-item>
        <el-form-item label="课程名" :label-width="formLabelWidth">
          <el-select v-model="form.regions" placeholder="请选择课程号">
            <el-option label="javascript下" value="javascript下" />
            <el-option label="javascript上" value="javascript上" />
            <el-option label="node" value="node" />
            <el-option label="小程序" value="小程序" />
            <el-option label="vue" value="vue" />
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">提 交</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '1701B',
        name: 'node基础',
        address: '34303',
        edit: ''
      }, {
        date: '1701B',
        name: 'node基础',
        address: '34303',
        edit: ''
      }, {
        date: '1701B',
        name: 'node基础',
        address: '34303',
        edit: ''
      }, {
        date: '1701B',
        name: 'node基础',
        address: '34303',
        edit: ''
      }],
      dialogFormVisible: false,
      form: {
        name: '',
        region: '',
        regions: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '120px'
    }
  },
  created() {
    var fly = require('flyio')
    fly.get('/manger/student')
      .then(function(response) {
        console.log(response)
      })
      .catch(function(error) {
        console.log(error)
      })
  }
}
</script>

<style scoped>
  .chart-container {
    position: relative;
    width: 100%;
    height: calc(100vh - 84px);
  }
  .layout {
    display: flex;
    flex-direction: column;
    flex: auto;
    background: #f0f2f5;
    min-height: 0;
  }
  thead{
    color: rgba(0, 0, 0, 0.85)!important;
    background: #f0f2f5!important;
    font-weight: 100!important;
  }
  h2{
      margin-top: 0;
      margin-bottom: 0.5em;
      color: rgba(0, 0, 0, 0.85);
      font-weight: 500;
  }
  .layout-content {
      flex: auto;
      min-height: 0;
      box-sizing: border-box;
  }
  .layout-content {
      flex: auto;
      min-height: 0;
      background: rgb(255, 255, 255);
      padding: 24px;
      margin: 0px 0px 20px;
      border-radius: 10px;
  }
  .button{
    display: flex;
    background: #0139fd;
    margin-bottom: 15px;
  }
  .table{
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
</style>

