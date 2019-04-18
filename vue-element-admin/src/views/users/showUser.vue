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
      activeName: 'first'
    }
  },
  computed: {
    ...mapState({
      date: state => state.showUsers.dateList
    })
  },
  created() {
    console.log(this.date)
  },
  async mounted() {
    await this.dateList()
  },

  methods: {
    ...mapActions({
      dateList: 'showUsers/dateList',
      identity: 'showUsers/identity'
    }),
    async handleClick(tab, event) {
      console.log(tab, event)
      await this.identity()
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
.content .table {
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border-radius: 2px 2px 0 0;
  border-spacing: 2px;
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  border-spacing: 2px;
}
.table thead th {
  display: table-cell;
  vertical-align: inherit;
}
.content .table thead {
  font-size: 14px;
  height: 50px;
  font-variant: tabular-nums;
  line-height: 1.5;
  color: rgba(0, 0, 0, 0.65);
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
}
.content .table tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
.content .table tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
.content .table td,th {
  padding: 16px 16px;
  border-bottom: 1px solid #e8e8e8;
  transition: all 0.3s, border 0s;
}
</style>
