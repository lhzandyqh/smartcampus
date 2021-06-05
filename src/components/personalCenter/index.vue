<template>
  <div class="app_container">
    <div class="header">
      <div class="school_logo">
        <img src="../../assets/zhongke.png">
      </div>
      <div class="head_title">
        <span class="title_span">智慧校园门户</span>
      </div>
      <div class="login_con" v-if="loginFlag">
        <div class="nologin">
          <span class="nologin_title" @click="openLoginDialog">用户登录</span>
        </div>
      </div>
      <div v-else class="login_fun">
        <div class="login_fun_con">
          <span class="fun_title_three">相关下载</span>
          <span class="fun_title_three">校园首页</span>
          <span class="fun_title_three">意见反馈</span>
          <span class="fun_title_three">绑定邮箱</span>
          <span class="fun_title_three">修改密码</span>
          <span class="fun_title_three">退出登录</span>
        </div>
      </div>
    </div>
    <div class="nav_con">
      <div class="fun_con">
        <div class="fun_item" @click="goHome">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../../assets/icontwo/shouye.png">
            </div>
            <div class="fun_title">
              <span>首页</span>
            </div>
          </div>
        </div>
        <div class="fun_item" @click="gotoOffice">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../../assets/icontwo/banshi.png">
            </div>
            <div class="fun_title">
              <span>办事大厅</span>
            </div>
          </div>
        </div>
        <div class="fun_item" @click="gotoAppPage">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../../assets/icontwo/yinyong.png">
            </div>
            <div class="fun_title">
              <span>应用中心</span>
            </div>
          </div>
        </div>
        <div class="fun_item" @click="gotoBigScreen">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../../assets/icontwo/tongji.png">
            </div>
            <div class="fun_title">
              <span>统计中心</span>
            </div>
          </div>
        </div>
        <div class="fun_item" style="background-color: #0b71c6">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../../assets/icontwo/geren.png">
            </div>
            <div class="fun_title">
              <span>个人中心</span>
            </div>
          </div>
        </div>
      </div>
    </div>
<!--    <div style="width: 100%;height: 200%">-->
    <div class="content">
      <div class="content_left">
        <div class="section_one">
          <div class="personal_title">
            <div class="head_portrait">
              <img src="../../assets/touxiang.jpg">
            </div>
            <div class="personal_msg_one">哈哈哈</div>
            <div class="personal_msg_two">2013040402080&nbsp;&nbsp;|</div>
            <div class="personal_msg_three">中国科学院沈阳计算技术研究所</div>
          </div>
          <div class="personal_btn">
            <img src="../../assets/banshi.png">
            <span>我要办事</span>
          </div>
          <div class="personal_select">
            <div class="personal_select_title">
              <span>个人信息</span>
            </div>
            <div class="personal_select_title">
              <span>通知消息</span>
            </div>
            <div class="personal_select_title">
              <span>下载中心</span>
            </div>
            <div class="personal_select_title">
              <span>我的预约</span>
            </div>
            <div class="personal_select_title">
              <span>电子签章</span>
            </div>
            <div class="personal_select_title">
              <span>委托审批</span>
            </div>
          </div>
        </div>
        <div class="section_two">
          <div class="section_two_title">
            <span>流程干预</span>
            <span class="more_btn">更多&nbsp;></span>
          </div>
          <div class="section_two_content"></div>
          <div class="section_two_footer">...</div>
        </div>
      </div>
      <div class="content_right">
        <div class="section_three">
          <div class="section_three_title">
            <span>今日信息</span>
          </div>
          <div class="section_three_content">
            <div class="left_item">
              <img class="left_logo" src="../../assets/shenqing.png">
              <div class="left_line"></div>
              <div class="left_msg_one">0</div>
              <div class="left_msg_two">/0</div>
              <span class="left_explain" style="text-overflow: ellipsis;overflow: hidden">进行中/已完结</span>
            </div>
            <div class="left_item">
              <img class="left_logo" src="../../assets/daiban.png">
              <div class="left_line"></div>
              <div class="left_msg_one">0</div>
              <div class="left_msg_two">/0</div>
              <span class="left_explain" style="text-overflow: ellipsis;overflow: hidden">待处理/已处理</span>
            </div>
            <div class="left_item">
              <img class="left_logo" src="../../assets/zhihui.png">
              <div class="left_line"></div>
              <div class="left_msg_one">0</div>
              <div class="left_msg_two">/0</div>
              <span class="left_explain" style="text-overflow: ellipsis;overflow: hidden">&nbsp;&nbsp;未读/已读</span>
            </div>
          </div>
          <div class="section_three_footer">...</div>
        </div>
        <div class="section_four">
          <div class="section_four_title">
            <span>我的待办</span>
<!--            <div class="btn_one" @click="bntClick_one">-->
            <el-button class="btn_one" @click="bntClick_one">待处理&nbsp;(0)</el-button>
            <el-button class="btn_two" @click="bntClick_two">已处理&nbsp;(0)</el-button>
<!--              <span>待处理&nbsp;(0)</span>-->
<!--            </div>-->
<!--            <div class="btn_two" @click="bntClick_two">-->
<!--              <span>已处理&nbsp;(0)</span>-->
<!--            </div>-->
            <span class="more_btn">全部&nbsp;></span>
          </div>
          <div class="section_four_content">
            <div class="undone" v-if="undoneVisible">
              <span>暂无待处理任务</span>
            </div>
            <div class="done" v-else >
              <span>暂无已处理任务</span>
            </div>
          </div>
          <div class="section_four_footer">...</div>
        </div>
      </div>
    </div>
    <el-dialog
      title="用户登录"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose">
      <!--      <span>这是一段信息</span>-->
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
      <span slot="footer" class="dialog-footer">
<!--    <el-button @click="dialogVisible = false">取 消</el-button>-->
        <!--    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>-->
  </span>
    </el-dialog>
    <div class="copyright">
      <span>版权所有© Copyright 2020-2021 中科智禾</span>
    </div>
  </div>
</template>

<script>
import validCode from '@/components/myComponents/validCode'
export default {
  name: 'personalCenter',
  components: {
    validCode
  },
  data () {
    return {
      loginFlag: true,
      loginForm: {},
      dialogVisible: false,
      code: '',
      // 随机抽取四位数
      identifyCodes: '1234567890abcdef',
      identifyCode: '',
      checked: false,
      undoneVisible: true,
      doneVisible: false
    }
  },
  mounted () {
    this.identifyCode = ''
    this.makeCode(this.identifyCodes, 4)
  },
  methods: {
    openLoginDialog: function () {
      this.dialogVisible = true
    },
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
        this.loginFlag = !this.loginFlag
        this.dialogVisible = false
      }
    },
    goHome: function () {
      this.$router.push('/')
    },
    gotoAppPage: function () {
      this.$router.push('/applicationPage')
    },
    gotoOffice: function () {
      this.$router.push('/officeHall')
    },
    gotoPersonalCenter: function () {
      this.$router.push('/personalCenter')
    },
    gotoKebiao: function () {
      // if (this.loginFlag) {
      //   this.$message({
      //     message: '未登录 请登录后再试',
      //     type: 'warning'
      //   })
      // } else {
      // }
      this.$router.push('/scheduleManagement')
    },
    gotoBigScreen: function () {
      window.open('https://zhongkeruitong.top/zgbigscreen-show3/#/dashboard')
    },
    bntClick_one () {
      this.undoneVisible = true
    },
    bntClick_two () {
      this.undoneVisible = false
    }
  }
}
</script>

<style scoped>
.app_container {
  height: 100%;
  width: 100%;
  position: relative;
  background-color: #f5f7f6;
}
.header {
  height: 10%;
  width: 100%;
  background-color: white;
  /*position: relative;*/
  top: 0;
  position: fixed;
  z-index: 999;
}
.school_logo {
  width: 4.5%;
  height: 75%;
  /*background-color: pink;*/
  position: absolute;
  left: 5%;
  top: 12%;
}
.school_logo img {
  width: 100%;
  height: 100%;
}
.head_title {
  width: 10%;
  height: 50%;
  /*background-color: pink;*/
  position: absolute;
  left: 11%;
  top: 25%;
  /*text-align: center;*/
  border-left: #707476 3px solid;
}
.title_span {
  width: 100%;
  height: 100%;
  color: #154293;
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav_con {
  height: 6%;
  width: 100%;
  background-color: white;
  top: 10%;
  position: fixed;
  z-index: 999;
}
.fun_con {
  width: 90%;
  height: 100%;
  background-color: #154293;
  /*position: absolute;*/
  margin-left: 5%;
  display: flex;
}
.fun_item {
  width: 10%;
  height: 100%;
  cursor: pointer;
  /*background-color: pink;*/
}
.fun_item:hover {
  background-color: #0b71c6;
}
.content {
  width: 90%;
  height: 110%;
  margin-top: 8.5%;
  margin-left: 5%;
  /*background-color: blue;*/
}
.content_left {
  float: left;
  width: 25%;
  height: 100%;
  /*background-color: yellow;*/
}
.content_right {
  float: left;
  width: 74%;
  height: 100%;
  margin-left: 1%;
  /*background-color: blue;*/
}
.section_one {
  width: 100%;
  height: 50%;
  /*border: 1px solid #4f4c4c;*/
  border-radius: 0 0 5px 5px;
  background-color: white;
}
.section_two {
  position: relative;
  width: 100%;
  height: 48%;
  margin-top: 5%;
  border-radius: 5px;
  background-color: #ffffff;
}
.section_two_title {
  position: relative;
  width: 100%;
  height: 20%;
  border-bottom: 1px solid #e0dada;
  /*text-align: center;*/
}
.section_two_title .more_btn {
  font-size: 14px;
  margin-left: 75%;
  margin-top: 2%;
  color: #888888;
}
.section_two_title span {
  position: absolute;
  font-size: 25px;
  left: 10%;
  top: 30%;
}
.section_two_content {
  width: 100%;
  height: 70%;
  /*background-color: yellow;*/
  border-bottom: 1px solid #e0dada;
  background: url("../../assets/bc1.png") no-repeat center;
}
.section_two_footer {
  position: absolute;
  top: 90%;
  left: 90%;
  font-size: 20px;
  color: #888;
}
.section_three {
  position: relative;
  width: 100%;
  height: 30%;
  border-radius: 5px;
  background-color: white;
}
.section_three_title {
  position: relative;
  width: 100%;
  height: 30%;
  /*border-bottom: 1px solid #888888;*/
  /*text-align: center;*/
}
.section_three_title span {
  position: absolute;
  font-size: 25px;
  left: 5%;
  top: 30%;
}
.section_three_content {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 55%;
  border-bottom: 1px solid #e0dada;
  /*background-color: yellow;*/
}
.left_item {
  width: 30%;
  height: 80%;
  /*background-color: #5e80e4;*/
  display: flex;
  justify-content: space-evenly;
  margin: 1% auto;
  cursor: pointer;
  position: relative;
  box-shadow:0px 0px 5px #d2d4d5;
}
.left_logo {
  width: 25%;
  height: 65%;
  /*background-color: #bf5151;*/
  position: absolute;
  top:15%;
  left:10%
}
.left_line {
  position: absolute;
  left: 45%;
  top: 25%;
  height: 45%;
  border-right: 1px solid #b1adad;
}
.left_msg_one {
  position: absolute;
  font-size: 35px;
  font-weight: bold;
  color: #154293;
  left: 65%;
  top: 15%;
}
.left_msg_two {
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  left: 73%;
  top: 35%;
}
.left_explain {
  width: 50%;
  /*background-color: white;*/
  position: absolute;
  top:55%;
  left:60%;
  color: #888888;
  font-size: 0.8rem;
}
.section_three_footer {
  position: absolute;
  top: 85%;
  left: 96%;
  font-size: 20px;
  color: #888;
}
.section_four {
  position: relative;
  width: 100%;
  height: 69%;
  margin-top: 1%;
  border-radius: 5px;
  background-color: #ffffff;
}
.section_four_title {
  position: relative;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid #e0dada;
}
.section_four_title span {
  position: absolute;
  font-size: 25px;
  left: 5%;
  top: 30%;
}
.section_four_title .more_btn {
  font-size: 14px;
  margin-left: 89%;
  margin-top: 1%;
  color: #888888;
}
.btn_one {
  float: left;
  margin-left: 30%;
  margin-top: 2%;
}
.btn_two {
  float: left;
  margin-left: 5%;
  margin-top: 2%;
}
/*.btn_one span {*/
/*  position: absolute;*/
/*  font-size: 15px;*/
/*  color: #888;*/
/*  top: 5px;*/
/*  left: 25px;*/
/*}*/
.btn_one:hover {
  background-color: #cadcec;
  color: #08529b;
}
/*.btn_one span:hover {*/
/*  color: #08529b;*/
/*}*/
.section_four_content {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 78%;
  border-bottom: 1px solid #e0dada;
  /*background-color: yellow;*/
}
.undone {
  width: 100%;
  height: 100%;
  background: url("http://zhongkeruitong.top/zg_smartCampus/bc2.png") no-repeat center;
}
.undone span {
  position: absolute;
  color: #888888;
  font-size: 13px;
  left: 46%;
  top: 75%;
}
.done {
  width: 100%;
  height: 100%;
  background: url("http://zhongkeruitong.top/zg_smartCampus/bc2.png") no-repeat center;
}
.done span {
  position: absolute;
  color: #888888;
  font-size: 13px;
  left: 46%;
  top: 75%;
}
.section_four_footer {
  position: absolute;
  top: 93%;
  left: 96%;
  font-size: 20px;
  color: #888;
}
.personal_title {
  position: relative;
  width: 100%;
  height: 30%;
  background-color: #154293;
}
.head_portrait {
  position: absolute;
  width: 16%;
  height: 50%;
  left: 10%;
  top: 24%;
  border-radius: 40px;
  background-color: #d9d9cd;
  overflow: hidden;
}
.head_portrait img {
  width: 100%;
  height: 100%;
}
.personal_msg_one {
  position: absolute;
  left: 30%;
  top: 30%;
  color: white;
}
.personal_msg_two {
  position: absolute;
  left: 30%;
  top: 50%;
  font-size: 12px;
  color: white;
}
.personal_msg_three {
  position: absolute;
  left: 30%;
  top: 62%;
  font-size: 12px;
  color: white;
}
.personal_btn {
  position: relative;
  width: 80%;
  height: 10%;
  margin: 5% 10%;
  border-radius: 30px;
  /*text-align: center;*/
  background-color: #154293;
}
.personal_btn img {
  width: 5%;
  height: 35%;
  margin-top: 5%;
  margin-left: 35%;
}
.personal_btn span {
  position: absolute;
  color: white;
  font-size: 14px;
  text-align: center;
  left: 41%;
  top: 10px;
}
.personal_select {
  width: 100%;
  height: 50%;
  display: flex;
  flex-wrap: wrap;
  /*background-color: #5daf34;*/
}
.personal_select_title {
  width: 35%;
  height: 18%;
  display: flex;
  margin-left: 10%;
  margin-top: 2%;
  border: 1px solid grey;
  border-radius: 8px 20px 8px 20px;
  align-items: center;
  /*text-align: center;*/
  font-size: 13px;
}
.personal_select_title span {
  padding: 28%;
}
.icon_con {
  float: left;
  width: 26%;
  height: 100%;
  background-color: #2767c5;
  margin-left: 9%;
  display: flex;
  align-items: center;
}
.icon_con img {
  width: 60%;
  height: 50%;
  align-items: center;
}
.title_con {
  height: 100%;
  width: 65%;
  /*background-color: white;*/
  display: inline-block;
}
.title_con span {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.fun_content {
  width: 80%;
  height: 100%;
  /*background-color: black;*/
  margin-left: 10%;
  display: flex;
}
.fun_icon {
  width: 35%;
  height: 100%;
  /*background-color: #2767c5;*/
  display: flex;
  align-items: center;
}
.fun_icon img {
  width: 65%;
  height: 50%;
}
.fun_title {
  width: 70%;
  height: 100%;
}
.fun_title span {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 0.96rem;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}
.top_control {
  margin-top: 1%;
}
.application_con {
  width: 90%;
  height: 40%;
  /*background-color: pink;*/
  /*position: absolute;*/
  margin-left: 5%;
  position: relative;
}
.application_title {
  height: 50px;
  width: 20%;
  /*background-color: #5ecab4;*/
  border-left: #0b71c6 3px solid;
}
.first_tit {
  /*text-align: center;*/
  /*font-weight: bold;*/
  font-size: 1.1rem;
  margin-left: 5%;
}
.second_tit {
  margin-left: 5%;
  font-size: 0.3rem;
  color: dimgrey;
}
.app_all_con {
  margin-top: 5px;
  width: 100%;
  height: 80%;
  background-color: white;
  border-radius: 10px;
  display: flex;
  flex-wrap: wrap;
  overflow: auto;
}
.new_icon_con {
  width: 18%;
  height: 25%;
  border-radius: 10px;
  /*background-color: pink;*/
  /*margin-top: 2%;*/
  display: flex;
  justify-content: space-evenly;
  margin: 12px auto;
  cursor: pointer;
}
.new_icon_con:hover{
  /*border: 1px #707476 solid;*/
  box-shadow: 0px 0px 5px #707476;
}
.fun_icon_two {
  width: 30%;
  height: 100%;
  /*background-color: #2767c5;*/
  align-items: center;
  text-align: center;
}
.fun_icon_two img {
  display: inline-block;
  margin-top: 15%;
  width: 60%;
  height: 70%;
}
.fun_title_two {
  width: 50%;
  height: 100%;
  padding-left: 10%;
}
.fun_title_two span {
  width: 100%;
  height: 100%;
  color: black;
  font-size: 0.96rem;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
}
.hidden_con {
  width: 18%;
  height: 25%;
  /*background-color: pink;*/
  margin-top: 2%;
  display: flex;
  justify-content: space-evenly;
  margin: 20px auto;
  overflow:hidden;
}
/*::-webkit-scrollbar {*/
/*  display: none; !* Chrome Safari *!*/
/*}*/
.login_con {
  width: 10%;
  height: 50%;
  /*background-color: pink;*/
  position: absolute;
  right: 6%;
  top: 25%;
}
.nologin {
  width: 100%;
  height: 100%;
}
.nologin_title{
  width: 100%;
  height: 100%;
  color: #707476;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
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
.login_fun {
  width: 25%;
  height: 50%;
  /*background-color: pink;*/
  position: absolute;
  right: 6%;
  top: 25%;
}
.login_fun_con {
  width: 100%;
  height: 100%;
  display: flex;
}
.fun_title_three {
  width: 100%;
  height: 100%;
  color: #0b71c6;
  font-size: 0.9rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  /*justify-content: center;*/
  cursor: pointer;
}
.copyright {
  width: 100%;
  height: 5%;
  /*background-color: #44b7e7;*/
  /*background-color: #004c8c;*/
  text-align: center;
  color: #707476;
  /*position: absolute;*/
  /*bottom: -29%;*/
  margin-top: 1%;
  font-size: 0.8rem;
}
</style>
