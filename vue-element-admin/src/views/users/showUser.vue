<template>
  <div class="wrap">
    <div class="head">
      <h3>展示用户</h3>
      <div class="nav">
        <span class="active">用户数据</span>
        <span>身份数据</span>
        <span>api接口权限</span>
        <span>身份和api接口关系</span>
        <span>视图接口权限</span>
        <span>身份和视图权限关系</span>
      </div>
    </div>
    <div class="content">
      <h2>用户数据</h2>
    </div>
  </div>
</template>
<script>
export default {}
</script>
<style>
.wrap .head h3 {
  width:100%;
  height:50px;
  padding-left: 30px;
  box-sizing: border-box;
  font-weight: normal;
  line-height: 50px;
}
.head .nav {
  box-sizing: border-box;
  padding-left: 30px;
}
.head .nav span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  padding: 0 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
}
.head .nav .active {
  color: #295eff;
  border: 1px solid #295eff;
}
.content {
  padding: 0 30px;
  box-sizing: border-box;
}
.content h2 {
  font-weight: normal;
}
</style>
