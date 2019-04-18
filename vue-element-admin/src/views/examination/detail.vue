<template>
  <div class="add-layout">
    <h2>详情页</h2>
    <div class="add-layout-content">
      <div class="content-list">
        <div class="top-title">
          <h3>报考院校</h3>
          <p>考试时间：1小时30分钟 监考人：刘于 开始考试时间：2018.9.10 10:00 阅卷人：刘于</p>
        </div>
        <div class="list">
          <div class="style_questionitem__3ETlC">
            <h4>1：aaa </h4>
            <div class="markdown">
              <pre>
 let loadImg = (src)=>{
    return new Promise((resolve, reject)=>{
        // write your code here
    })
 }
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
.add-layout {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  // flex: auto;
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
  display: flex;
  // flex: auto;
  min-height: 0;
  background: rgb(255, 255, 255);
  padding: 24px;
  margin: 0px 20px 20px 0px;
  border-radius: 10px;
}
h3,
h4 {
  font-weight: normal;
  display: block;
  font-size: 1.3em;
  margin-block-start: 0.83em;
  margin-block-end: 0.83em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
h4 {
  font-size: 14px;
  margin: 0;
  padding: 0;
}
a {
  color: #0139fd;
  background-color: initial;
  text-decoration: none;
  outline: none;
  cursor: pointer;
  transition: color 0.3s;
}
.content-list {
  width: 100%;
  margin-bottom: 10px;
}
.top-title {
  text-align: center;
  p {
    font-size: 14px;
  }
}
.style_questionitem__3ETlC {
  text-align: left;
  border: 1px solid #ccc;
  padding: 20px;
  margin-bottom: 20px;
}
.markdown,
pre,
code {
  margin: 0;
  padding: 0;
}
.markdown pre {
  margin-top: 5px;
  height: 100%;
  display: block;
  padding: 2em;
  line-height: 1.2;
  // max-height: 35em;
  color: #657b83;
  background: #f6f6f6;
  background-size: 30px 30px;
  font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier,
    monospace;
  font-size: 14px;
  white-space: normal;
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
