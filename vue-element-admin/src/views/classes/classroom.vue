<template>
  <div class="layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px; margin-top: 10px;">教室管理</h2>
    <div class="layout-content">
      <el-button type="primary" class="button" @click="dialogFormVisible = true">+添加教室</el-button>
      <el-table
        :data="tableData"
        style="width: 100%"
      ><el-table-column
         prop="date"
         label="教室号"
         width="887"
       />
        <el-table-column
          prop="edit"
          label="操作"
        >
          <el-button type="text" @click="open2">删除</el-button>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog title="添加教室" :visible.sync="dialogFormVisible" width="520px" height="317px">
      <el-form :model="form">
        <el-form-item label="教室号" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off" placeholder="教室号" />
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
        edit: ''
      }, {
        date: '1701B',
        edit: ''
      }, {
        date: '1701B',
        edit: ''
      }, {
        date: '1701B',
        edit: ''
      }],
      dialogFormVisible: false,
      form: {
        name: ''
      },
      formLabelWidth: '120px'
    }
  },
  methods: {
    open2() {
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.$message({
          type: 'success',
          message: '删除成功!'
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
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

