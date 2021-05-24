<template>
  <div class="app_container">
    <div class="login_container">
      <div class="login_head">
        <div class="head_span">
          <span>高校教学教务系统</span>
        </div>
      </div>
      <div class="login_main">
        <div class="username_con">
          <el-input
            placeholder="请输入用户名"
            style="width: 70%;color: white"
            prefix-icon="el-icon-user-solid"
            v-model="loginForm.username">
          </el-input>
        </div>
        <div class="password_con">
          <el-input prefix-icon="el-icon-unlock" style="width: 70%" placeholder="请输入密码" v-model="loginForm.password" show-password></el-input>
        </div>
        <div class="verify_con">
          <el-row>
            <el-col :span="11">
              <el-input
                placeholder="请输入验证码"
                v-model="loginForm.validcode">
              </el-input>
            </el-col>
            <el-col :span="7">
              <div class="code" @click="refreshCode">
                <valid-code :identifyCode="identifyCode"></valid-code>
              </div>
            </el-col>
          </el-row>
        </div>
        <div class="button_con">
          <el-button type="primary" style="width: 70%" @click="login">登录</el-button>
        </div>
        <div class="foot_con">
          <span>忘记密码</span>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>版权所有© Copyright 2020-2021 中科智禾</span>
    </div>
  </div>
</template>

<script>
import validCode from '@/components/myComponents/validCode'
export default {
  name: 'loginPage',
  components: {
    validCode
  },
  data () {
    return {
      loginForm: {
        username: '',
        password: '',
        validcode: ''
      },
      code: '',
      // 随机抽取四位数
      identifyCodes: '1234567890abcdef',
      identifyCode: '',
      checked: false
    }
  },
  mounted () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    // 验证码处理
    randomNum (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },

    // 刷新验证码
    refreshCode () {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes, 4)
    },
    makeCode (o, l) {
      for (let i = 0; i < l; i++) {
        // eslint-disable-next-line standard/computed-property-even-spacing
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ]
      }
      console.log(this.identifyCode)
    },
    login: function () {
      if (this.loginForm.username === '' || this.loginForm.password === '') {
        this.$message({
          message: '用户名或密码未填写',
          type: 'warning'
        })
      } else if (this.loginForm.validcode === '') {
        this.$message({
          message: '验证码未填写',
          type: 'warning'
        })
      } else {
        this.$router.push('/iconpage')
      }
    }
  }
}
</script>

<style scoped>
.app_container {
  width: 100%;
  height: 100%;
  /*background: url('../assets/main_bg.png') no-repeat;*/
  background: url('https://zhongkeruitong.top/zg-jiaowu/1.png') no-repeat;
  background-size: 100%;
  position: relative;
}
.login_container {
  width: 30%;
  height: 60%;
  position: absolute;
  left: 0;
  right: 0;
  margin:100px auto;
  border-radius: 10%;
}
.login_head {
  width: 100%;
  height: 20%;
  /*background-color: pink;*/
  margin:0 auto;
  /*text-align: center;*/
}
.head_span {
  height:100%;
  width:100%;
  display: table;
  text-align: center;
}
.head_span span {
  display:table-cell;
  vertical-align:middle;
  font-size: 2.6rem;
  color: white;
}
.login_main {
  width: 100%;
  height: 70%;
  background-color: rgba(123,147,192,0.6);
  border-radius: 2%;
}
.username_con {
  text-align: center;
  width: 100%;
  height: 15%;
  padding-top: 5%;
}
.password_con {
  text-align: center;
}
.verify_con {
  width: 100%;
  height: 15%;
  margin-top: 4%;
  margin-left: 15%;
  text-align: center;
}
.code {
}
.button_con {
  text-align: center;
}
.foot_con {
  margin-top: 5%;
  cursor: pointer;
}
.foot_con span {
  display: inline-block;
  color: white;
  font-size: 0.8rem;
  float: right;
  margin-right: 15%;
}
.copyright {
  width: 100%;
  height: 5%;
  /*background-color: #44b7e7;*/
  /*background-color: #004c8c;*/
  text-align: center;
  color: #707476;
  position: absolute;
  bottom: 1%;
  font-size: 0.8rem;
}
</style>
