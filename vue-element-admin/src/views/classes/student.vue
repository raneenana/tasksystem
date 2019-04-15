<template>
  <div class="layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px; margin-top: 10px;">学生管理</h2>
    <div class="layout-content">
      <el-button type="primary" class="button">重置</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
      ><el-table-column
         prop="date"
         label="姓名"
         width="216"
       />
        <el-table-column
          prop="idCard"
          label="学号"
          width="359"
        />
        <el-table-column
          prop="class"
          label="班级"
          width="216"
        />
        <el-table-column
          prop="classroom"
          label="教室"
          width="359"
        />
        <el-table-column
          prop="password"
          label="密码"
          width="210"
        />
        <el-table-column
          prop="edit"
          label="操作"
        >
          <span>修改</span>|<span>删除</span>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          :current-page="currentPage4"
          :page-sizes="[5, 10, 20, 50,100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
        />
      </div>
    </div>
  </div>

</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '张三',
        idCard: '102711000869',
        class: '1609B',
        classroom: '34401',
        password: '@zhangna',
        edit: '删除'
      }, {
        date: '张三',
        idCard: '102711000869',
        class: '1609B',
        classroom: '34405',
        password: '@zhangna',
        edit: '删除'
      }, {
        date: '张三',
        idCard: '102711000869',
        class: '1609B',
        classroom: '34401',
        password: '@zhangna',
        edit: '删除'
      }, {
        date: '张三',
        idCard: '102711000869',
        class: '1609B',
        classroom: '34401',
        password: '@zhangna',
        edit: '删除'
      }]
    }
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

