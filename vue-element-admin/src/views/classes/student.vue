<template>
  <div class="layout" style="padding: 0px 24px 24px;">
    <h2 style="padding: 20px 0px; margin-top: 10px;">学生管理</h2>
    <div class="layout-content">
      <div class="top">
        <el-input v-model="input" style="width: 165px; margin-right: 15px;" placeholder="请输入学生姓名" />
        <el-select v-model="value" style="width: 165px; margin-right: 15px;" placeholder="请选择教室号">
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-select v-model="valueclass" style="width: 165px; margin-right: 15px;" placeholder="班级名">
          <el-option
            v-for="item in optionsClass"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
        <el-button type="primary" class="button">搜索</el-button>
        <el-button type="primary" class="button">重置</el-button>
      </div>
      <el-table
        :data="allStud.studentarr"
        style="width: 100%"
      ><el-table-column
         prop="student_name"
         label="姓名"
         width="216"
       />
        <el-table-column
          prop="student_id"
          label="学号"
          width="359"
        />
        <el-table-column
          prop="grade_name"
          label="班级"
          width="216"
        />
        <el-table-column
          prop="room_text"
          label="教室"
          width="359"
        />
        <el-table-column
          prop="student_pwd"
          label="密码"
          width="210"
        />
        <el-table-column
          prop=""
          label="操作"
        >
          <span>修改</span>|<span>删除</span>
        </el-table-column>
      </el-table>
      <div class="block">
        <el-pagination
          :page-sizes="[5, 10, 20, 50, 100]"
          :page-size="20"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
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
      // tableData: [{
      //   date: '张三',
      //   idCard: '102711000869',
      //   class: '1609B',
      //   classroom: '34401',
      //   password: '@zhangna',
      //   edit: '删除'
      // }, {
      //   date: '张三',
      //   idCard: '102711000869',
      //   class: '1609B',
      //   classroom: '34405',
      //   password: '@zhangna',
      //   edit: '删除'
      // }, {
      //   date: '张三',
      //   idCard: '102711000869',
      //   class: '1609B',
      //   classroom: '34401',
      //   password: '@zhangna',
      //   edit: '删除'
      // }, {
      //   date: '张三',
      //   idCard: '102711000869',
      //   class: '1609B',
      //   classroom: '34401',
      //   password: '@zhangna',
      //   edit: '删除'
      // }],
      options: [{
        value: '选项1',
        label: '34401'
      }, {
        value: '选项2',
        label: '34402'
      }, {
        value: '选项3',
        label: '34403'
      }, {
        value: '选项4',
        label: '34404'
      }, {
        value: '选项5',
        label: '34405'
      }],
      optionsClass: [{
        value: '选项1',
        label: '1609A'
      }, {
        value: '选项2',
        label: '1609B'
      }, {
        value: '选项3',
        label: '1608A'
      }, {
        value: '选项4',
        label: '1608B'
      }, {
        value: '选项5',
        label: '1608C'
      }]
    }
  },
  computed: {
    ...mapState({
      allStud: state => state.classes
    })
  },
  created() {
    this.student()
    console.log('student', this.allStud)
  },
  methods: {
    ...mapActions({
      student: 'classes/allStudent'
    })
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

