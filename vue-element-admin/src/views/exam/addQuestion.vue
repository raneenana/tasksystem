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
              <el-select v-model="examType.value" placeholder="请选择">
                <el-option v-for="item in examType" :key="item.exam_id" :label="item.label" :value="item.exam_name" />
              </el-select>
            </div>
            <div class="f-item">
              <label for="title" class="add-form-item-required" title="试卷名称">请选择课程类型:</label>
              <el-select v-model="subjectType.value" placeholder="请选择">
                <el-option v-for="item in subjectType" :key="item.subject_id" :label="item.label" :value="item.subject_text" />
              </el-select>
            </div>
            <div class="f-item">
              <label for="title" class="add-form-item-required" title="试卷名称">请选择题目类型:</label>
              <el-select v-model="questionsType.value" placeholder="请选择">
                <el-option v-for="item in questionsType" :key="item.questions_type_id" :label="item.label" :value="item.questions_type_text" />
              </el-select>
            </div>
            <Tinymce />
            <button class="sbmit" type="primary" @click="sbmit">提交</button>
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
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'TinymceDemo',
  components: { Tinymce },
  data() {
    return {
      dialogVisible: false,
      value: '',
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
  computed: {
    ...mapState({
      examType: state => state.addQuestion.examType,
      subjectType: state => state.addQuestion.subjectType,
      questionsType: state => state.addQuestion.questionsType
    })
  },

  methods: {
    ...mapMutations({
      updataState: 'addQuestion/updataState'
    }),
    ...mapActions({
      getExamType: 'addQuestion/getExamType',
      getSubjectType: 'addQuestion/getSubjectType',
      getQuestionsTpe: 'addQuestion/getQuestionsTpe'
    }),
    addQuestion() {},
    sbmit() {
      this.dialogVisible = true
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  },
  created() {
    this.getExamType()
    this.getSubjectType()
    this.getQuestionsTpe()
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
