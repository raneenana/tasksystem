<template>
  <div class="add-layout">
    <h2>添加考试</h2>
    <div class="add-layout-content">
      <div class="add-layout-content">
        <form class="add-form">
          <div class="add-form-item">
            <div class="add-form-item-label">
              <label for="title" class="add-form-item-required" title="试卷名称">试卷名称:</label>
            </div>
            <div class="add-form-item-control-wrapper">
              <el-input
                style="width:45%"
                size="medium"
                placeholder="请输入内容"
              />
            </div>
          </div>
          <div class="add-form-item">
            <div class="add-form-item-label">
              <label for="title" class="add-form-item-required" title="选择考试类型">选择考试类型：</label>
            </div>
            <div class="add-form-item-control-wrapper">
              <el-select v-model="examoptions.value" placeholder="请选择">
                <el-option
                  v-for="item in examoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="add-form-item">
            <div class="add-form-item-label">
              <label for="title" class="add-form-item-required" title="选择课程">选择课程：</label>
            </div>
            <div class="add-form-item-control-wrapper">
              <el-select v-model="typeoptions.value" placeholder="请选择">
                <el-option
                  v-for="item in typeoptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                />
              </el-select>
            </div>
          </div>
          <div class="add-form-item">
            <div class="add-form-item-label">
              <label for="title" class="add-form-item-required" title="设置题量">设置题量：</label>
            </div>
            <div class="add-form-item-control-wrapper">
              <el-input-number v-model="num" controls-position="right" :min="0" :max="10" @change="handleChange" />
            </div>
          </div>
          <div class="add-form-item">
            <div class="add-form-item-label">
              <label for="title" class="add-form-item-required" title="考试时间">考试时间：</label>
            </div>
            <div class="add-form-item-control-wrapper">
              <el-date-picker v-model="startTime" type="date" placeholder="选择开始日期" :picker-options="pickerOptionsStart" @change="startTimeChang" /> —
              <el-date-picker v-model="endTime" type="date" placeholder="选择结束日期" :picker-options="pickerOptionsOver" @change="endTimeChang" />
            </div>
          </div>
        </form>
      </div>
      <el-button type="primary">创建试卷</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0,
      startTime: '',
      endTime: '',
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
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.add-layout {
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
.add-form {
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  label {
    font-size: 14px;
    font-weight: normal;
  }
}
.add-form-item {
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  margin-bottom: 24px;
  vertical-align: top;
}
.add-form-item-label {
  text-align: right;
  vertical-align: middle;
  line-height: 39.9999px;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  ::before {
    display: inline-block;
    margin-right: 4px;
    content: "*";
    font-family: SimSun;
    line-height: 1;
    font-size: 14px;
    color: #f5222d;
  }
}
</style>
