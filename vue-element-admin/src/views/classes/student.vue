<template>
  <div class="layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px; margin-top: 10px;">学生管理</h2>
    <div class="layout-content">
      <div class="top">
        <el-input v-model="input" style="width: 165px; margin-right: 15px;" placeholder="请输入学生姓名" />
        <el-select v-model="value" style="width: 165px; margin-right: 15px;" placeholder="请选择教室号">
          <el-option
            v-for="item in allStud.studentarr"
            :key="item.student_id"
            :label="item.room_text"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="valueclass" style="width: 165px; margin-right: 15px;" placeholder="班级名">
          <el-option
            v-for="item in allStud.studentarr"
            :key="item.student_id"
            :label="item.grade_name"
            :value="item.value"
          />
        </el-select>
        <el-button type="primary" class="button">搜索</el-button>
        <el-button type="primary" class="button">重置</el-button>
      </div>
      <el-table
        :data="allData"
        style="width: 100%"
      >
        <el-table-column
          label="姓名"
          width="216"
        >
          <template slot-scope="scope">
            {{ scope.row.student_name }}
          </template>
        </el-table-column>
        <el-table-column
          label="学号"
          width="359"
        >
          <template slot-scope="scope">
            {{ scope.row.student_id }}
          </template>
        </el-table-column>
        <el-table-column
          label="班级"
          width="216"
        >
          <template slot-scope="scope">
            {{ scope.row.grade_name }}
          </template>
        </el-table-column>
        <el-table-column
          label="教室"
          width="204"
        >
          <template slot-scope="scope">
            {{ scope.row.room_text }}
          </template>
        </el-table-column>
        <el-table-column
          label="密码"
          width="459"
        >
          <template slot-scope="scope">
            {{ scope.row.student_pwd }}
          </template>
        </el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="danger"
              @click="deleteRow(scope.row.student_id)"
            >删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          :page-sizes="[5, 10, 20, 50, 100]"
          :page-size="10"
          layout="total, sizes, prev, pager, next, jumper"
          :total="allStud.studentarr.length"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      input: '',
      value: '',
      valueclass: '',
      allData: []
    }
  },
  computed: {
    ...mapState({
      allStud: state => state.classes
    })
  },
  created() {
    this.student()
    this.allData = this.allStud.studentarr.slice(0, 10)
    console.log(this)
    // console.log('student', this.allStud.studentarr)
  },
  methods: {
    ...mapActions({
      student: 'classes/allStudent',
      deletestudent: 'classes/deletestudent'
    }),
    async deleteRow(id) {
      await this.deletestudent({ student_id: id })
      await this.student()
    }
  }
}
</script>

<style scoped>
  .top{
    width: 100%;
    display: flex;
  }
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

