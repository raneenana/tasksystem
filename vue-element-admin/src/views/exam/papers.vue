<template>
  <div class="wrap">
    <h2>查看试题</h2>
    <div class="content">
      <div>
        <form class="add-form">
          <div class="add-form-top">
            <label for="title" class="add-form-item-required" title="试卷名称">课程类型:</label>
            <div class="add-item-every">
              <div>all</div>
              <div>every</div>
              <div>things</div>
              <div>none</div>
              <div>javascript</div>
              <div>javascript</div>
              <div>javascript</div>
              <div>javascript</div>
              <div>javascript</div>
              <div>javascript</div>
              <div>javascript</div>
              <div>javascript</div>
              <div>javascript</div>
              <div>javascript</div>
            </div>
          </div>
          <div class="add-form-bottom">
            <div class="add-form-item">
              <label for="title" class="add-form-item-required" title="试卷名称">考试类型:</label>
              <el-select v-model="examoptions.value" placeholder="请选择">
                <el-option v-for="item in examoptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
            <div class="add-form-item">
              <label for="title" class="add-form-item-required" title="试卷名称">试题题目:</label>
              <el-select v-model="typeoptions.value" placeholder="请选择">
                <el-option v-for="item in typeoptions" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
            <el-button type="primary"><i class="el-icon-search" />查询</el-button>
          </div>
        </form>
      </div>
      <div>
        <ul>
          <li v-for="(item,index) in newData" :key="index" @click="detail">
            <div class="left">
              <p>{{ item.name }}</p>
              <div>
                <p>代码不全</p>
                <p>代码不全</p>
                <p>代码不全</p>
              </div>
              <p class="color">{{ item.autor }}</p>
            </div>
            <router-link to="/addQuestion" class="edit color" @click="edit">编辑</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      newData: [{
        name: '封装图片加载Promise',
        type: ['代码不全', '代码不全', '代码不全'],
        autor: 'cehnmanjiefabu'
      }, {
        name: '封装图片加载Promise',
        type: ['代码不全', '代码不全', '代码不全'],
        autor: 'cehnmanjiefabu'
      }, {
        name: '封装图片加载Promise',
        type: ['代码不全', '代码不全', '代码不全'],
        autor: 'cehnmanjiefabu'
      }],
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
      }, {
        information: '渐进式',
        class: '1609',
        creator: '王',
        startTime: '2019-3-10',
        endTime: '2019-3-17'
      }, {
        information: '组件式',
        class: '1610',
        creator: '任',
        startTime: '2019-3-10',
        endTime: '2019-3-17'
      }]
    }
  },
  methods: {
    detail() {
      this.$router.push({ path: 'detail' })
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
.content>div .add-form {
  font-size: 14px;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.content>div .add-form label{
  font-size: 14px;
  font-weight: normal;
}
.content>div .add-form-top {
  display: flex;
}
.add-form-top .add-item-every {
  width:90%;
  display: flex;
  flex-wrap:wrap;
  line-height: 39.9999px;
}
.add-item-every .add-form label{
  width:200px;
}
.add-form-top .add-item-every div{
  list-style: none;
  display: inline-block;
  line-height: 20px;
  height: 22px;
  padding: 0 7px;
  border-radius: 2px;
  background: #fafafa;
  font-size: 12px;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  opacity: 1;
  margin-right: 8px;
  margin-bottom: 20px;
  cursor: pointer;
}
.content div .add-form-bottom {
  display: flex;
}
.content div .add-form-bottom .add-form-item{
  margin-right: 60px;
}
.content div ul{
  width:100%;
  list-style: none;
}
.content div ul li{
  border-bottom:1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.content div ul li:hover{
  background: rgba(232, 245, 249, 0.65);
}
.content div ul li:last-child{
  border:none;
}
.content div ul li .left{
  display: flex;
  flex-direction: column;
}
.content div ul li .left div{
  display: flex;
}
.content div ul li .left div p{
  padding:0 10px;
  border:1px solid #ccc;
  box-sizing: border-box;
  margin-left:10px;
}
.content div ul li .left div p:nth-child(1){
  color: #1890ff;
  background: #e6f7ff;
  border-color: #91d5ff;
}
.content div ul li .left div p:nth-child(2){
  color: #2f54eb;
  background: #f0f5ff;
  border-color: #adc6ff;
}
.content div ul li .left div p:nth-child(3){
  color: #fa8c16;
  background: #fff7e6;
  border-color: #ffd591;
}
.color{
  color:#00f;
}
.edit{
  padding-right:10px;
  box-sizing: border-box;
}
</style>
