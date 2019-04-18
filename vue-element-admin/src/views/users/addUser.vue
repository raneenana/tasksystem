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
              <el-button @click="reset">重置</el-button>
            </p>
          </div>
        </div>
        <div class="border">
          <p>
            <span class="active">添加身份</span>
          </p>
          <div class="mainForm">
            <el-input v-model="idValue" placeholder="请输入身份" style="width:90%; margin:10px 0" />
            <p>
              <el-button type="primary" @click="addIden">确定</el-button>
              <el-button @click="reset">重置</el-button>
            </p>
          </div>
        </div>
        <div class="border">
          <p>
            <span class="active">添加接口权限</span>
          </p>
          <div class="mainForm">
            <el-input v-model="apiMsg.name" placeholder="请输入api接口权限名称" style="width:90%; margin:10px 0" />
            <el-input v-model="apiMsg.url" placeholder="请输入api接口权限url" style="width:90%; margin:10px 0" />
            <el-input v-model="apiMsg.method" placeholder="请输入api接口权限方法" style="width:90%; margin:10px 0" />
            <p>
              <el-button type="primary" @click="addApi">确定</el-button>
              <el-button @click="reset">重置</el-button>
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
            <el-select v-model="viewMsg" placeholder="请选择已有视图" style="margin-top:10px;">
              <el-option
                v-for="item in viewOpt"
                :key="item.view_id"
                :label="item.view_authority_text"
                :value="item.view_id"
                style="margin-left:5px;"
              />
            </el-select>
            <p>
              <el-button type="primary" @click="addView">确定</el-button>
              <el-button @click="reset">重置</el-button>
            </p>
          </div>
        </div>
        <div class="border">
          <p>
            <span class="active">给身份设置api接口权限</span>
          </p>
          <div class="mainForm">
            <el-select v-model="setApi.idMsg" placeholder="请选择身份id" style="margin-top:10px;">
              <el-option
                v-for="item in allIden"
                :key="item.identity_id"
                :label="item.identity_text"
                :value="item.identity_text"
                style="margin-left:5px;"
              />
            </el-select>
            <el-select v-model="setApi.apiMsg" placeholder="请选择api接口权限" style="margin-top:10px;">
              <el-option
                v-for="item in apiOpt"
                :key="item.api_authority_id"
                :label="item.api_authority_text"
                :value="item.api_authority_text"
                style="margin-left:5px;"
              />
            </el-select>
            <p>
              <el-button type="primary" @click="idAuth">确定</el-button>
              <el-button @click="reset">重置</el-button>
            </p>
          </div>
        </div>
        <div class="border">
          <p>
            <span class="active">给身份设置视图权限</span>
          </p>
          <div class="mainForm">
            <el-select v-model="idAuthorize" placeholder="请选择身份id" style="margin-top:10px;">
              <el-option
                v-for="item in allIden"
                :key="item.identity_id"
                :label="item.identity_text"
                :value="item.identity_text"
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
              <el-button @click="reset">重置</el-button>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      input: '',
      password: '',
      value: '',
      idValue: '',
      setApi: {
        idMsg: '',
        apiMsg: ''
      },
      idAuthorize: '',
      apiMsg: {
        name: '',
        url: '',
        method: ''
      },
      viewMsg: '',
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
  },
  computed: {
    ...mapState({
      viewOpt: state => state.adduser.viewOpt,
      allIden: state => state.adduser.allIden,
      apiOpt: state => state.adduser.apiOpt
    })
  },
  async created() {
    await this.allViewList()
    // if (res.code ===1 ) {
    //   this.viewOpt = res.data
    // }
    await this.getAllIndetity()
    await this.getApiAuth()
  },
  methods: {
    ...mapActions({
      addIndentity: 'adduser/addIdentity',
      addApiAuth: 'adduser/addApiAuth',
      allViewList: 'adduser/allViewList',
      addViewAuth: 'adduser/addViewAuth',
      getAllIndetity: 'adduser/getAllIndetity',
      getApiAuth: 'adduser/getApiAuth',
      setApiAuth: 'adduser/setApiAuth'
    }),
    // 添加身份
    async addIden() {
      if (!this.idValue) {
        alert('身份信息不能为空')
        return false
      }
      var res = await this.addIndentity({ identity_text: this.idValue })
      if (res.code === 1) {
        alert(res.msg)
        this.idValue = ''
      }
    },
    // 添加接口权限信息
    async addApi() {
      if (!this.apiMsg.name) {
        alert('api接口名不能为空')
        return false
      }
      if (!this.apiMsg.url) {
        alert('api路径不能为空')
        return false
      }
      if (!this.apiMsg.method) {
        alert('api接口方法不能为空')
        return false
      }
      var res = await this.addApiAuth({
        api_authority_text: this.apiMsg.name,
        api_authority_url: this.apiMsg.url,
        api_authority_method: this.apiMsg.method
      })
      if (res.code === 1) {
        alert(res.msg)
        this.apiMsg = {
          name: '',
          url: '',
          method: ''
        }
      }
    },
    // 添加视图接口权限
    async addView() {
      // console.log(this.viewMsg)
      if (!this.viewMsg) {
        alert('视图信息不能为空')
        return false
      }
      var item = this.viewOpt.filter((item) => {
        return item.view_id === this.viewMsg
      })
      var id = item[0].view_id
      var text = item[0].view_authority_text
      const res = await this.addViewAuth({ view_authority_text: text, view_id: id })
      if (!res) {
        alert('视图接口重复')
        this.viewMsg = ''
      } else {
        if (res.code === 1) {
          alert(res.msg)
          this.viewMsg = ''
        }
      }
    },
    // 身份设置api接口权限
    async idAuth() {
      console.log(this.setApi)
      if (!this.setApi.idMsg) {
        alert('身份id不能为空')
        return false
      }
    },
    reset() {
      this.idValue = ''
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
