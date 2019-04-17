<template>
  <div class="wrap">
    <h2>添加用户 </h2>
    <div class="content">
      <div class="top">
        <div>
          <p>
            <span class="active">添加用户</span>
            <span>更新用户</span>
          </p>
        </div>
        <div>
          <p>
            <span class="active">添加用户</span>
          </p>
        </div>
        <div>
          <p>
            <span class="active">添加用户</span>
          </p>
        </div>
      </div>
      <div class="bottom">
        hahha
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.wrap>h2 {
  width:100%;
  height:50px;
  padding-left: 30px;
  box-sizing: border-box;
  font-weight: normal;
  line-height: 50px;
}
.wrap .content {
  width: 95%;
  /* height: 500px; */
  border: 1px solid #ccc;
  margin: 0 auto;
}
.wrap .top {
  width: 100%;
  height: auto;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.wrap .top>div {
  width: 33.3%;
}
.wrap .top div>p {
  width: 100%;
  /* height: 50px; */
  padding: 0 5px;
  box-sizing: border-box;
}
.wrap .top div>p span {
  padding: 5px 10px;
  border: 1px solid #ccc;
  margin: auto 0;
}
.wrap .top div>p span.active {
  border-color: blue;
  color: blue;
}
</style>
