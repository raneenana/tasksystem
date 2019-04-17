<template>
  <div class="wrap">
    <h2>添加试题</h2>
    <div class="content">
      <div>
        <form action="">
          <h3>题目信息</h3>
          <div class="form-item">
            <div class="item">
              <label class="" title="题干">题干</label>
            </div>
            <div class="title">
              <input class="ipt" placeholder="请输入题目标题，不超过20个字" type="text" value="">
            </div>
          </div>
          <div class="form-item">
            <div class="item">
              <label class="" title="题目主题">题目主题</label>
            </div>
            <Tinymce />
            <div class="f-item">
              <label for="title" class="add-form-item-required" title="试卷名称">请选择考试类型:</label>
              <el-select v-model="examoptions.value" placeholder="请选择">
                <el-option v-for="item in examoptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
            <div class="f-item">
              <label for="title" class="add-form-item-required" title="试卷名称">请选择课程类型:</label>
              <el-select v-model="typeoptions.value" placeholder="请选择">
                <el-option v-for="item in typeoptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
            <div class="f-item">
              <label for="title" class="add-form-item-required" title="试卷名称">请选择题目类型:</label>
              <el-select v-model="typeoptions.value" placeholder="请选择">
                <el-option v-for="item in typeoptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
            <Tinymce />
            <button class="sbmit" type="primary" @click="sbmit">提交</button>
            <el-button type="text" @click="dialogVisible = true">提交</el-button>
            <el-dialog title="提示" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
              <span>这是一段信息</span>
              <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
              </span>
            </el-dialog>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Tinymce from '@/components/Tinymce'
export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      dialogVisible: false,
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
      tableData: [{
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
      }]
    }
  },
  methods: {
    sbmit() {

    },
    addQuestion() {},
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
.content .form-item{
  position: relative;
  margin-left: 0;
  margin-right: 0;
  margin-bottom: 24px;
  height: auto;
  zoom: 1;
  display: block;
  line-height: 1.5;
  font-size: 14px;
  font-weight: 400;
  box-sizing: border-box;
}
.content .form-item .item{
  padding: 0 0 8px;
  margin: 0;
  display: block;
  text-align: left;
  line-height: 1.5;
  white-space: initial;
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
.f-item{
  width:15%;
  margin:30px 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}
.f-item label{
  padding-bottom:10px;
  box-sizing: border-box;
}
.sbmit{
  width:10%;
  height:40px;
  border:none;
  outline: none;
  border-radius: 5px;
  background: #00f;
  color:#fff;
  margin-top:35px;
  box-sizing: border-box;
}
</style>
