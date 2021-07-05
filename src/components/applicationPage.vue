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
        <div class="fun_item" @click="goHome">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/shouye.png">
            </div>
            <div class="fun_title">
              <span>首页</span>
            </div>
          </div>
        </div>
        <div class="fun_item" @click="gotoOffice">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/banshi.png">
            </div>
            <div class="fun_title">
              <span>办事大厅</span>
            </div>
          </div>
        </div>
        <div class="fun_item" style="background-color: #0b71c6">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/yinyong.png">
            </div>
            <div class="fun_title">
              <span>应用中心</span>
            </div>
          </div>
        </div>
        <div class="fun_item" @click="gotoBigScreen">
          <div class="fun_content">
            <div class="fun_icon">
              <img src="../assets/icontwo/tongji.png">
            </div>
            <div class="fun_title">
              <span>统计中心</span>
            </div>
          </div>
        </div>
        <div class="fun_item" @click="gotoPersonalCenter">
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
    <div class="application_con" style="margin-top: 9%">
      <div class="application_title">
        <div class="first_tit">
          <span>教务教学管理系统</span>
        </div>
        <div class="second_tit">
          <span>Teaching administration teaching management</span>
        </div>
      </div>
      <div class="app_all_con">
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/xueji2.png">
          </div>
          <div class="fun_title_two">
            <span>学籍管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/peiyang2.png">
          </div>
          <div class="fun_title_two">
            <span>培养方案</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/guihua2.png">
          </div>
          <div class="fun_title_two">
            <span>学生个人规划</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/jiaoxue2.png">
          </div>
          <div class="fun_title_two">
            <span>教学任务管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/kaishe.png">
          </div>
          <div class="fun_title_two">
            <span>开设新课程</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/paike2.png">
          </div>
          <div class="fun_title_two">
            <span>校园排课</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/xuanke.png">
          </div>
          <div class="fun_title_two">
            <span>学生选课</span>
          </div>
        </div>
        <div class="new_icon_con" @click="gotoKebiao">
          <div class="fun_icon_two">
            <img src="../assets/icon/kebiao.png">
          </div>
          <div class="fun_title_two">
            <span>课表管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/guanlian.png">
          </div>
          <div class="fun_title_two">
            <span>设置课程关联</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/pingjiao.png">
          </div>
          <div class="fun_title_two">
            <span>评教评学</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/chengji.png">
          </div>
          <div class="fun_title_two">
            <span>成绩管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/shangchuan.png">
          </div>
          <div class="fun_title_two">
            <span>文件上传</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/xiazai.png">
          </div>
          <div class="fun_title_two">
            <span>文件下载</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/tiaojian.png">
          </div>
          <div class="fun_title_two">
            <span>毕业条件设定</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/shenqing.png">
          </div>
          <div class="fun_title_two">
            <span>毕业申请管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/zhuangtai.png">
          </div>
          <div class="fun_title_two">
            <span>学生状态跟踪</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/mima.png">
          </div>
          <div class="fun_title_two">
            <span>密码管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/icon/quanxian.png">
          </div>
          <div class="fun_title_two">
            <span>用户权限管理</span>
          </div>
        </div>
        <div class="hidden_con">

        </div>
        <div class="hidden_con">

        </div>
      </div>
    </div>
    <div class="application_con top_control">
      <div class="application_title">
        <div class="first_tit">
          <span>科研系统</span>
        </div>
        <div class="second_tit">
          <span>The scientific research management</span>
        </div>
      </div>
      <div class="app_all_con">
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/zhineng.png">
          </div>
          <div class="fun_title_two">
            <span>智能分析</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/xinxi.png">
          </div>
          <div class="fun_title_two">
            <span>信息采集</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/lixiang.png">
          </div>
          <div class="fun_title_two">
            <span>项目立项</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/xiangmu.png">
          </div>
          <div class="fun_title_two">
            <span>项目管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/yusuan.png">
          </div>
          <div class="fun_title_two">
            <span>预算管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/zhinengfuwu.png">
          </div>
          <div class="fun_title_two">
            <span>智能服务</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/pingshen.png">
          </div>
          <div class="fun_title_two">
            <span>科研评审</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/quanxian.png">
          </div>
          <div class="fun_title_two">
            <span>权限管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/jifen.png">
          </div>
          <div class="fun_title_two">
            <span>积分配置</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/scientific_icon/gexing.png">
          </div>
          <div class="fun_title_two">
            <span>个性配置</span>
          </div>
        </div>
        <div class="hidden_con">

        </div><div class="hidden_con">

      </div>
      </div>
    </div>
    <div class="application_con top_control">
      <div class="application_title">
        <div class="first_tit">
          <span>教师发展平台</span>
        </div>
        <div class="second_tit">
          <span>The teacher Development Platform</span>
        </div>
      </div>
      <div class="app_all_con">
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/fenxi.png">
          </div>
          <div class="fun_title_two">
            <span>诊改分析</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/geren.png">
          </div>
          <div class="fun_title_two">
            <span>个人信息</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/tijiao.png">
          </div>
          <div class="fun_title_two">
            <span>任务提交</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/shenhe.png">
          </div>
          <div class="fun_title_two">
            <span>审核历史</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/gongzi.png">
          </div>
          <div class="fun_title_two">
            <span>工资信息</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/zhineng.png">
          </div>
          <div class="fun_title_two">
            <span>智能服务</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/renwu.png">
          </div>
          <div class="fun_title_two">
            <span>诊改任务</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/guanli.png">
          </div>
          <div class="fun_title_two">
            <span>人员管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/shenpi.png">
          </div>
          <div class="fun_title_two">
            <span>专项审批</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/chaxun.png">
          </div>
          <div class="fun_title_two">
            <span>智能查询</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/zuzhi.png">
          </div>
          <div class="fun_title_two">
            <span>组织结构</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/hetong.png">
          </div>
          <div class="fun_title_two">
            <span>合同管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/personal_icon/quanxian.png">
          </div>
          <div class="fun_title_two">
            <span>权限管理</span>
          </div>
        </div>
        <div class="hidden_con">

        </div>
        <div class="hidden_con">

        </div>

      </div>
    </div>
    <div class="application_con top_control">
      <div class="application_title">
        <div class="first_tit">
          <span>学生发展平台</span>
        </div>
        <div class="second_tit">
          <span>The student Development Platform</span>
        </div>
      </div>
      <div class="app_all_con">
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/student_icon/guihua.png">
          </div>
          <div class="fun_title_two">
            <span>学涯规划</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/student_icon/xueji.png">
          </div>
          <div class="fun_title_two">
            <span>学籍管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/student_icon/kecheng.png">
          </div>
          <div class="fun_title_two">
            <span>我的课程</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/student_icon/sekecheng.png">
          </div>
          <div class="fun_title_two">
            <span>第二课程</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/student_icon/qingjia.png">
          </div>
          <div class="fun_title_two">
            <span>请假管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/student_icon/jiangzhu.png">
          </div>
          <div class="fun_title_two">
            <span>校园奖助</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/student_icon/xiaoyuan.png">
          </div>
          <div class="fun_title_two">
            <span>校园生活</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/student_icon/biye.png">
          </div>
          <div class="fun_title_two">
            <span>毕业反馈</span>
          </div>
        </div>
        <div class="hidden_con">

        </div>
        <div class="hidden_con">

        </div>
      </div>
    </div>
    <div class="application_con1 top_control">
      <div class="application_title">
        <div class="first_tit">
          <span>资产系统</span>
        </div>
        <div class="second_tit">
          <span>The assets management</span>
        </div>
      </div>
      <div class="app_all_con">
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/yonghu.png">
          </div>
          <div class="fun_title_two">
            <span>用户信息</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/kucun.png">
          </div>
          <div class="fun_title_two">
            <span>库存管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/pici.png">
          </div>
          <div class="fun_title_two">
            <span>批次管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/shoufa.png">
          </div>
          <div class="fun_title_two">
            <span>收发存统计</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/gouzhuwu.png">
          </div>
          <div class="fun_title_two">
            <span>构筑物管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/yusuanshenqing.png">
          </div>
          <div class="fun_title_two">
            <span>预算申请</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/yusuan.png">
          </div>
          <div class="fun_title_two">
            <span>预算管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/jieyong.png">
          </div>
          <div class="fun_title_two">
            <span>借用资产</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/zichan.png">
          </div>
          <div class="fun_title_two">
            <span>资产管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/tuihuan.png">
          </div>
          <div class="fun_title_two">
            <span>退换申请</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/tuihuanguanli.png">
          </div>
          <div class="fun_title_two">
            <span>退换管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/zichanpandian.png">
          </div>
          <div class="fun_title_two">
            <span>资产盘点</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/baofei.png">
          </div>
          <div class="fun_title_two">
            <span>报废查询</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/liuzhuan.png">
          </div>
          <div class="fun_title_two">
            <span>流转管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/fenlei.png">
          </div>
          <div class="fun_title_two">
            <span>分类管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/bumen.png">
          </div>
          <div class="fun_title_two">
            <span>部门管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/kufang.png">
          </div>
          <div class="fun_title_two">
            <span>库房管理</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/liucheng.png">
          </div>
          <div class="fun_title_two">
            <span>流程配置</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/juese.png">
          </div>
          <div class="fun_title_two">
            <span>角色配置</span>
          </div>
        </div>
        <div class="new_icon_con">
          <div class="fun_icon_two">
            <img src="../assets/assets_icon/quanxian.png">
          </div>
          <div class="fun_title_two">
            <span>权限配置</span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title="用户登录"
      :visible.sync="dialogVisible"
      width="40%">
<!--      :before-close="handleClose">-->
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
}.application_con1 {
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
.app_all_con1 {
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
  font-size: 0.8rem;
}
</style>
