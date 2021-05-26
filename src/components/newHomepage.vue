<template>
  <div class="app_container">
    <div class="header">
      <div class="school_logo">
        <img src="../assets/zhongke.png">
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
        <div class="fun_item" style="background-color: #0b71c6">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/shouye.png">
            </div>
            <div class="fun_title">
              <span>首页</span>
            </div>
          </div>
        </div>
        <div class="fun_item">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/banshi.png">
            </div>
            <div class="fun_title">
              <span>办事大厅</span>
            </div>
          </div>
        </div>
        <div class="fun_item" @click="gotoAppPage">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/yinyong.png">
            </div>
            <div class="fun_title">
              <span>应用中心</span>
            </div>
          </div>
        </div>
        <div class="fun_item">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/tongji.png">
            </div>
            <div class="fun_title">
              <span>统计中心</span>
            </div>
          </div>
        </div>
        <div class="fun_item">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/geren.png">
            </div>
            <div class="fun_title">
              <span>个人中心</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pic_container">
      <div class="main_pic">
        <img src="../assets/main_bg.png">
      </div>
    </div>
    <div class="news_container">
      <div class="main_news_con">
        <div class="one_news_con">
          <div class="news_title_con">
            <div class="title_fact_con">
              <span class="news_title_span">校园要闻</span>
            </div>
          </div>
          <div class="news_content">
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">关于收看河北电视台新闻联播的通知</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-05-23</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">河北大学新闻传播学院招生简章</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-05-22</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">我院编辑出版专业师生赴京进行专业参观学习</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2020-05-21</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">关于举办保定市“高校联盟”之河</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-05-20</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">新闻传播学院2021年博士研究生招生考核成绩公示</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-05-17</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">我院教职工女子排球队在河北大学2021年“校庆杯”教职工排球比赛中获得季军</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-05-17</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">城市注意度报告专家咨询暨学术讲座在河北大学新闻传播学院举办</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-05-16</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">关于收看河北电视台新闻联播的通知</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-05-14</span></el-col>
            </el-row>
          </div>
        </div>
        <div class="two_news_con">
          <div class="news_title_con">
            <div class="title_fact_con">
              <span class="news_title_span">教务通知</span>
            </div>
          </div>
          <div class="news_content">
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">新闻传播学院关于2020级校内转专业学生考核成绩的公示</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-04-19</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">2020级学生转专业新闻传播学院选拔考核安排</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-04-07</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">新闻传播学院第九届青年教师课堂教学大赛结果公示</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2021-01-01</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">新闻传播学院成功举办青年教师课堂大赛</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2020-12-21</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">2015级硕士研究生学术沙龙 第十一场纪要</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2016-01-18</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">新闻传播学院2016年研究生复试工作细则</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2016-03-25</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">河北大学新闻传播学院2019硕博连读研究生选拔细则</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2018-10-13</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">河北大学新闻传播学院2018年博士研究生招生复试实施细则2018-03-06</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2018-10-13</span></el-col>
            </el-row>
          </div>
        </div>
        <div class="three_news_con">
          <div class="news_title_con">
            <div class="title_fact_con">
              <span class="news_title_span">学生工作</span>
            </div>
          </div>
          <div class="news_content">
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">新闻传播学院青马班开班仪式和第一讲顺利举行</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2017-11-21</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">嘉闻班素质拓展活动顺利进行</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2017-11-21</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">第六期发展对象人选第一次党课</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2017-05-20</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">我院召开团委新老书记交接会议</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2016-12-25</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">新闻传播学院2016-2017届主席团竞选结果公示</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2016-09-08</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">我院召开2017级新生学分制学籍管理培训会</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2017-09-18</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">河北中天德尚文化传媒有限公司招聘信息</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2015-04-16</span></el-col>
            </el-row>
            <el-row class="news_item">
              <el-col :span="18"><span style="font-size: 0.9rem">新闻传播学院3+2 篮球赛决赛精彩连连</span></el-col>
              <el-col :span="6"><span style="font-size: 0.9rem;color: dimgrey">2020-11-07</span></el-col>
            </el-row>
          </div>
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
<!--    <div class="copyright">-->
<!--      <span>版权所有© Copyright 2020-2021 中科智禾</span>-->
<!--    </div>-->
  </div>
</template>

<script>
import validCode from '@/components/myComponents/validCode'
export default {
  name: 'newHomepage',
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
      checked: false
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
    gotoAppPage: function () {
      this.$router.push('/applicationPage')
    },
    gotoKebiao: function () {
      this.$router.push('/scheduleManagement')
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
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
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
  margin-top: 40%;
  font-size: 0.8rem;
}
.pic_container {
  width: 100%;
  height: 65%;
  /*background-color: pink;*/
}
.main_pic {
  width: 90%;
  height: 100%;
  background-color: white;
  margin-left: 5%;
}
.main_pic img {
  width: 100%;
  height: 100%;
}
.news_container {
  width: 100%;
  height: 40%;
}
.main_news_con {
  width: 90%;
  height: 100%;
  margin-left: 5%;
  /*background-color: hotpink;*/
  display: flex;
}
.one_news_con {
  width: 33.3%;
  height: 100%;
  /*background-color: #6bbc72;*/
}
.two_news_con {
  width: 33.3%;
  height: 100%;
  /*background-color: #2767c5;*/
}
.three_news_con {
  width: 33.3%;
  height: 100%;
  /*background-color: #5ecab4;*/
}
.news_title_con {
  height: 14%;
  width: 90%;
  /*background-color: white;*/
  margin-left: 5%;
  border-bottom: #109ee5 1px solid;
  position: relative;
}
.title_fact_con {
  width: 100%;
  height: 70%;
  /*background-color: #2767c5;*/
  position: absolute;
  top: 15%;
  border-left: #0b71c6 6px solid;
}
.news_title_span {
  width: 100%;
  height: 100%;
  color: #154293;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  margin-left: 5%;
  /*justify-content: center;*/
}
.news_content {
  width: 90%;
  /*background-color: white;*/
  margin-left: 5%;
  height: 86%;
  /*background-color: #5ecab4;*/
}
.news_item {
  margin-top: 1%;
  width: 100%;
  height: 10%;
  /*white-space: nowrap;*/
  overflow: hidden;
  text-overflow: ellipsis;
}
.news_item span:hover {
  cursor: pointer;
  color: red;
  border-bottom: 1px solid red;
}
</style>
