<template>
  <div class="wrap">
    <h2>试题分类</h2>
    <div class="content">
      <div>
        <div class="style_buttons">
          <button type="button" class="btn" @click="dialogVisible = true">
            <i class="el-icon-plus" />
            <span>添加类型</span>
          </button>
        </div>
        <div class="style_lists">
          <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="date" label="类型ID" width="280" />
            <el-table-column prop="name" label="类型名称" width="280" />
            <el-table-column prop="address" label="操作" />
          </el-table>
        </div>
        <el-dialog title="创建新类型" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
          <div class="title">
            <input class="ipt" placeholder="请输入类型名称" type="text" value="">
          </div>
          <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            <el-button @click="dialogVisible = false">取 消</el-button>
          </span>
        </el-dialog>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }],
      dialogVisible: false
    }
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style>
.wrap{
  padding: 0px 24px 24px;
  background: #f0f2f5;
  display: flex;
  flex-direction: column;
}
.wrap h2{
  padding: 20px 0px;
  margin-top: 10px;
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
.content{
  flex: auto;
  line-height: 1.5;
  font-size:14px;
  color: rgba(0, 0, 0, 0.65);
}
.content h3{
  margin-top: 0;
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
}
.content>div{
    background: rgb(255, 255, 255);
    padding: 24px;
    margin: 0px 0px 20px;
    border-radius: 10px;
}
.style_buttons{
  width:90%;
  height:40px;
  position: relative;
  margin-bottom: 25px;
  display: flex;
}
.btn{
  height:40px;
  padding: 0 40px!important;
  border-radius: 4px!important;
  border: 0!important;
  font-size: 14px!important;
  color: #fff!important;
  background: linear-gradient(-90deg,#4e75ff,#0139fd)!important;
}
.title{
  width:90%;
  height:40px;
}
.title .ipt{
  width:65%;
  height:100%;
  border-radius: 2px;
  border:none;
  border: 1px solid #ccc;
  padding-left:10px;
  font-size: 16px;
  box-sizing: border-box;
}
el-dialog{
  width:90%;
}
</style>
