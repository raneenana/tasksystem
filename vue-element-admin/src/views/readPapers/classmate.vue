<template>
  <div class="list-wrap">
    <h2>试卷列表</h2>
    <div class="add-layout-content">
      <form class="add-form">
        <div class="add-form-item">
          <label for="title" class="add-form-item-required" title="状态">状态:</label>
          <el-select v-model="classList.value" placeholder="请选择" />
        </div>
        <div class="add-form-item">
          <label for="title" class="add-form-item-required" title="班级">班级:</label>
          <el-select v-model="classList.value" placeholder="请选择">
            <el-option
              v-for="item in classList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <el-button type="primary"><i class="el-icon-search" />查询</el-button>
      </form>
    </div>
    <div class="add-layout-content">
      <div class="add-layout-title">
        <h4>试卷列表</h4>
      </div>

      <el-table
        :data="arr"
        style="width: 100%;font-size:12px"
      >
        <el-table-column
          label="班级"
          width="160"
        >
          {{ room }}
        </el-table-column>
        <el-table-column
          prop="student_name"
          label="姓名"
          width="160"
        />
        <el-table-column
          label="阅卷状态"
          width="100"
        >
          <template slot-scope="scope">
            {{ scope.row.status ? '已阅' : '未阅' }}
          </template></el-table-column>
        <el-table-column
          prop="start_time"
          label="开始时间"
          width="210"
        />
        <el-table-column
          prop="end_time"
          label="结束时间"
          width="210"
        />
        <el-table-column
          prop="yield"
          label="成材率"
          width="100"
        />
        <el-table-column
          prop="operation"
          label="操作"
          width="160"
        >
          <el-button
            type="text"
            size="small"
          >
            批卷
          </el-button>
        </el-table-column>
      </el-table>
      <div class="block" style="float:right;margin-top:10px">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          background
          :page-sizes="[5, 10, 15, 20]"
          :page-size="10"
          layout="sizes, prev, pager, next, jumper"
          :total="studentData.length"
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
      id: '',
      room: '',
      arr: [],
      size: 10,
      page: 1,
      classList: [
        {
          value: '0',
          label: '1608A'
        },
        {
          value: '1',
          label: '1608B'
        },
        {
          value: '2',
          label: '1909A'
        },
        {
          value: '3',
          label: '1609B'
        }
      ],
      tableData: [
        {
          class: '1608',
          name: 'AA',
          status: '--',
          startTime: '2019-3-10',
          endTime: '2019-3-17',
          yield: '---'
        }
      ]
    }
  },
  computed: {
    ...mapState({
      studentData: state => state.readPapers.studentData
    })
  },
  async created() {
    var obj = JSON.parse(window.localStorage.getItem('classMsg'))
    this.id = obj.id
    this.room = obj.name
    // console.log(this.studentData)
  },
  async mounted() {
    console.log(this.ize)
    await this.getStudent({
      grade_id: this.id
    })
    this.arr = this.studentData.slice(0, this.size * 1)
    console.log(this.arr)
  },
  methods: {
    ...mapActions({
      getStudent: 'readPapers/getStudentList'
    }),
    async handleSizeChange(val) {
      // console.log(val)
      this.size = val
      await this.getStudent({
        grade_id: this.id
      })
      this.arr = this.studentData.slice(0, this.size * 1)
      console.log(this.arr)
    },
    async handleCurrentChange(tab) {
      this.page = tab
      this.arr = this.studentData.slice((this.page - 1) * this.size, this.page * this.size)
      console.log(tab)
    }
  }
}
</script>

<style lang="scss" scoped>
.list-wrap {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: auto;
  background: #f0f2f5;
  min-height: 0;
  padding: 0px 24px 24px;
}
h2 {
  padding: 20px 0px;
  margin-top: 10px;
  margin-bottom: 0.5em;
  color: rgba(0, 0, 0, 0.85);
  font-weight: 500;
  font-size: 1.5em;
}
.add-layout-content {
  width: 100%;
  height: 100%;
  flex: auto;
  min-height: 0;
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 0px 20px;
  border-radius: 10px;
}
.add-layout-title {
  display: flex;
  justify-content: space-between;
  h4 {
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .add-layout-button {
    // display: flex;
    button {
      flex-shrink: 0;
      margin: 0;
    }
  }
}
.add-form {
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  label {
    font-size: 14px;
    font-weight: normal;
  }
}
.add-form-item {
  margin-right: 60px;
}
</style>

