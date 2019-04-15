<template>
  <div class="wrap">
    <h2>添加用户 </h2>
    <div class="content">
      <div class="top">
        <div class="border">
          <p>
            <span class="active">添加用户</span>
            <span>更新用户</span>
          </p>
          <div class="mainForm">
            <el-input v-model="input" placeholder="请输入内容" style="width:90%; margin:10px 0" />
            <el-input v-model="password" type="password" placeholder="请输入密码" autocomplete="off" style="width:90%; margin:10px 0" />
            <el-select v-model="value" placeholder="请选择" style="margin-top:10px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="margin-left:5px;"
              />
            </el-select>
            <p>
              <el-button type="primary">确定</el-button>
              <el-button>重置</el-button>
            </p>
          </div>
        </div>
        <div class="border">
          <p>
            <span class="active">添加身份</span>
          </p>
          <div class="mainForm">
            <el-input v-model="input" placeholder="请输入身份" style="width:90%; margin:10px 0" />
            <p>
              <el-button type="primary">确定</el-button>
              <el-button>重置</el-button>
            </p>
          </div>
        </div>
        <div class="border">
          <p>
            <span class="active">添加接口权限</span>
          </p>
          <div class="mainForm">
            <el-input v-model="input" placeholder="请输入api接口权限名称" style="width:90%; margin:10px 0" />
            <el-input v-model="input" placeholder="请输入api接口权限url" style="width:90%; margin:10px 0" />
            <el-input v-model="input" placeholder="请输入api接口权限方法" style="width:90%; margin:10px 0" />
            <p>
              <el-button type="primary">确定</el-button>
              <el-button>重置</el-button>
            </p>
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="border">
          <p>
            <span class="active">添加视图接口权限</span>
          </p>
          <div class="mainForm">
            <el-select v-model="value" placeholder="请选择已有视图" style="margin-top:10px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="margin-left:5px;"
              />
            </el-select>
            <p>
              <el-button type="primary">确定</el-button>
              <el-button>重置</el-button>
            </p>
          </div>
        </div>
        <div class="border">
          <p>
            <span class="active">给身份设置api接口权限</span>
          </p>
          <div class="mainForm">
            <el-select v-model="value" placeholder="请选择身份id" style="margin-top:10px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="margin-left:5px;"
              />
            </el-select>
            <el-select v-model="value" placeholder="请选择api接口权限" style="margin-top:10px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="margin-left:5px;"
              />
            </el-select>
            <p>
              <el-button type="primary">确定</el-button>
              <el-button>重置</el-button>
            </p>
          </div>
        </div>
        <div class="border">
          <p>
            <span class="active">给身份设置视图权限</span>
          </p>
          <div class="mainForm">
            <el-select v-model="value" placeholder="请选择身份id" style="margin-top:10px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="margin-left:5px;"
              />
            </el-select>
            <el-select v-model="value" placeholder="请选择视图权限id" style="margin-top:10px;">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
                style="margin-left:5px;"
              />
            </el-select>
            <p>
              <el-button type="primary">确定</el-button>
              <el-button>重置</el-button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      password: '',
      value: '',
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ]
    }
  }
}
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
.wrap .content>div {
  width: 100%;
  height: auto;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.wrap .content .bottom {
  border: none;
}
.wrap .border {
  width: 33.3%;
  padding-left:10px;
  box-sizing: border-box;
  padding-bottom: 20px;
  border-right: 1px solid #ccc;
}
.wrap .border:last-child {
  border: none;
}
.wrap .border>p {
  width: 100%;
  /* height: 50px; */
  padding: 0 5px;
  box-sizing: border-box;
}
.wrap .border>p span {
  padding: 5px 10px;
  border: 1px solid #ccc;
  margin: auto 0;
  margin-left: 0;
}
.wrap .border>p span.active {
  border-color: blue;
  color: blue;
}
</style>
