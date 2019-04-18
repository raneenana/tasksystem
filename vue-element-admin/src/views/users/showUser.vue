<template>
  <div class="wrap">
    <div class="head">
      <h3>展示用户</h3>
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="用户管理" name="first" style="font-size:26px; font-weight:normal; padding:10px 20px;">用户管理</el-tab-pane>
        <el-tab-pane label="身份数据" name="second" style="font-size:26px; font-weight:normal; padding:10px 20px;">身份数据</el-tab-pane>
        <el-tab-pane label="api接口权限" name="third" style="font-size:26px; font-weight:normal; padding:10px 20px;">api接口权限</el-tab-pane>
        <el-tab-pane label="身份和api接口关系" name="fourth" style="font-size:26px; font-weight:normal; padding:10px 20px;">身份和api接口关系</el-tab-pane>
        <el-tab-pane label="视图接口权限" name="fifth" style="font-size:26px; font-weight:normal; padding:10px 20px;">视图接口权限</el-tab-pane>
        <el-tab-pane label="身份和视图权限关系" name="six" style="font-size:26px; font-weight:normal; padding:10px 20px;">身份和视图权限关系</el-tab-pane>
      </el-tabs>
    </div>
    <div class="content">
      <!-- <h2>用户数据</h2> -->
      <el-table :data="date" style="width: 100%">
        <el-table-column prop="user_name" label="用户名" width="380" />
        <el-table-column prop="user_pwd" label="密码" width="380" />
        <el-table-column prop="identity_text" label="身份" />
      </el-table>
    </div>
    <el-pagination background layout="prev, pager, next" style="float:right;margin:20px 0;" :total="date.length" />
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      activeName: 'first',
      apiList: []
    }
  },
  computed: {
    ...mapState({
      date: state => state.adduser.dateList
    })
  },
  created() {
    // console.log(this.date)
    this.apiList = ['dateList', 'showViewAuth', 'allViewList', 'showApiAuth', 'getApiAuth', 'getAllIndetity']
  },
  async mounted() {
    await this.dateList()
  },

  methods: {
    ...mapActions({
      dateList: 'adduser/dateList',
      showViewAuth: 'adduser/showViewAuth', // 身份与视图权限信息
      allViewList: 'adduser/allViewList', // 视图接口
      showApiAuth: 'adduser/showApiAuth', // 身份与api接口权限信息
      getApiAuth: 'adduser/getApiAuth', // api接口信息
      getAllIndetity: 'adduser/getAllIndetity' // 身份信息
    }),
    async handleClick(tab, event) {
      console.log(tab, event)
      await this.showViewAuth()
      console.log(this.date)
    }
  }
}
</script>
<style scoped>
.wrap .head h3 {
  width:100%;
  height:50px;
  padding-left: 30px;
  box-sizing: border-box;
  font-weight: normal;
  line-height: 50px;
}
.content {
  padding: 0 30px;
  box-sizing: border-box;
}
.content #pane_first {
  font-size: 30px;
  font-weight: normal;
}
</style>
