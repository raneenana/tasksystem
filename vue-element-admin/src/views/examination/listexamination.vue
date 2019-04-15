<template>
  <div class="list-wrap">
    <h2>试卷列表</h2>
    <div class="add-layout-content">
      <form class="add-form">
        <div class="add-form-item">
          <label for="title" class="add-form-item-required" title="考试类型">考试类型:</label>
          <el-select v-model="examoptions.value" placeholder="请选择">
            <el-option
              v-for="item in examoptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
        <div class="add-form-item">
          <label for="title" class="add-form-item-required" title="课程">课程:</label>
          <el-select v-model="typeoptions.value" placeholder="请选择">
            <el-option
              v-for="item in typeoptions"
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
        <el-button-group>
          <el-button plain>全部</el-button>
          <el-button plain>进行中</el-button>
          <el-button plain>已结束</el-button>
        </el-button-group>
      </div>
      <el-table
        :data="tableData"
        style="width: 100%;font-size:12px"
      >
        <el-table-column
          prop="information"
          label="试卷信息"
          width="300"
        />
        <el-table-column
          prop="class"
          label="班级"
          width="220"
        />
        <el-table-column
          prop="creator"
          label="创建人"
          width="150"
        />
        <el-table-column
          prop="startTime"
          label="开始时间"
          width="200"
        />
        <el-table-column
          prop="endTime"
          label="结束时间"
          width="200"
        />
        <el-table-column
          prop="operation"
          label="操作"
          width="160"
        >
          <router-link :to="{path:'detail'}">
            <el-button
              type="text"
              size="small"
            >
              详情
            </el-button>
          </router-link>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      examoptions: [
        {
          value: '0',
          label: '周考1'
        },
        {
          value: '1',
          label: '周考2'
        },
        {
          value: '2',
          label: '周考3'
        },
        {
          value: '3',
          label: '月考'
        }
      ],
      value: '',
      typeoptions: [
        {
          value: '0',
          label: 'javaScript上'
        },
        {
          value: '1',
          label: 'javaScript下'
        },
        {
          value: '2',
          label: '模块化开发'
        },
        {
          value: '3',
          label: '移动端开发'
        },
        {
          value: '4',
          label: 'node基础'
        },
        {
          value: '5',
          label: '组件化开发(vue)'
        },
        {
          value: '6',
          label: '渐进式开发(react)'
        },
        {
          value: '7',
          label: '项目实战'
        },
        {
          value: '8',
          label: 'javaScript高级'
        },
        {
          value: '9',
          label: 'node高级'
        }
      ],
      tableData: [
        {
          information: 'Nodejs开发第二周摸底考试',
          class: '1608',
          creator: '陈',
          startTime: '2019-3-10',
          endTime: '2019-3-17'
        },
        {
          information: '渐进式',
          class: '1609',
          creator: '王',
          startTime: '2019-3-10',
          endTime: '2019-3-17'
        },
        {
          information: '组件式',
          class: '1610',
          creator: '任',
          startTime: '2019-3-10',
          endTime: '2019-3-17'
        }
      ]
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
.add-layout-title{
  display: flex;
  justify-content: space-between;
  h4{
    color: rgba(0, 0, 0, 0.85);
    font-weight: 500;
  }
  .add-layout-button{
    // display: flex;
    button{
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

