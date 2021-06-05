<template>
  <div class="app-container">
    <div class="head_nav">
      <div class="head_title">
        <span>教务教学管理系统</span>
      </div>
      <div class="kuozhanLogo" @click="getMore">
        <img v-if="!upFlag" src="../../assets/icon/xia.png">
        <img v-else src="../../assets/icon/shang.png">
      </div>
      <div class="homeLogo" @click="goHomePage">
        <img src="../../assets/icon/shouye.png">
      </div>
    </div>
    <div class="fun_con" v-show="upFlag">
      <div class="fun_item">
        <div class="fun_item_img">
          <img class="fun_item_img_img" src="../../assets/icon/xueji2.png">
        </div>
        <div class="fun_item_title">
          <span>学籍管理</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img class="fun_item_img_img" src="../../assets/icon/peiyang2.png">
        </div>
        <div class="fun_item_title">
          <span>培养方案</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/guihua2.png">
        </div>
        <div class="fun_item_title">
          <span>学生个人规划</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/jiaoxue2.png">
        </div>
        <div class="fun_item_title">
          <span>教学任务管理</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/kaishe.png">
        </div>
        <div class="fun_item_title">
          <span>开设新课程</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/paike2.png">
        </div>
        <div class="fun_item_title">
          <span>校园排课</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/xuanke.png">
        </div>
        <div class="fun_item_title">
          <span>学生选课</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/kebiao.png">
        </div>
        <div class="fun_item_title">
          <span>课表管理</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/guanlian.png">
        </div>
        <div class="fun_item_title">
          <span>设置课程关联</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/pingjiao.png">
        </div>
        <div class="fun_item_title">
          <span>评教评学</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/chengji.png">
        </div>
        <div class="fun_item_title">
          <span>成绩管理</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/shangchuan.png">
        </div>
        <div class="fun_item_title">
          <span>文件上传</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/xiazai.png">
        </div>
        <div class="fun_item_title">
          <span>文件下载</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/tiaojian.png">
        </div>
        <div class="fun_item_title">
          <span>毕业条件设定</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/shenqing.png">
        </div>
        <div class="fun_item_title">
          <span>毕业申请管理</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/zhuangtai.png">
        </div>
        <div class="fun_item_title">
          <span>学生状态跟踪</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/mima.png">
        </div>
        <div class="fun_item_title">
          <span>密码管理</span>
        </div>
      </div>
      <div class="fun_item">
        <div class="fun_item_img">
          <img src="../../assets/icon/quanxian.png">
        </div>
        <div class="fun_item_title">
          <span>用户权限管理</span>
        </div>
      </div>
    </div>
    <div class="main_container">
      <div class="left_menu_container">
        <div class="all_menu">
          <el-menu
            router
            default-active="/scheduleManagement/test1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose">
            <el-menu-item index="/scheduleManagement/test1">
              <i class="el-icon-menu"></i>
              <span slot="title">学期课程总览</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title">查看学院课表</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title">查看课程安排</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title">课表维护</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title">教学日历管理</span>
            </el-menu-item>
            <el-menu-item>
              <i class="el-icon-menu"></i>
              <span slot="title">课表导出</span>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="right_content_container">
        <div style="width: 100%;height: auto;">
          <router-view></router-view>
          <br style="clear:both;"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'scheduleManagement',
  data () {
    return {
      upFlag: false
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    getMore: function () {
      this.upFlag = !this.upFlag
    },
    goHomePage: function () {
      this.$router.push('/applicationPage')
    }
  }
}
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
  /*background-color: pink;*/
  position: relative;
}
.head_nav {
  width: 100%;
  height: 8%;
  background-color: #0066cc;
  position: relative;
}
.head_title {
  width: 15%;
  height: 40%;
  position: absolute;
  /*background-color: #6bbc72;*/
  left: 5%;
  top: 30%;
}
.head_title span {
  color: white;
  font-size: 1.2rem;
  font-weight: bold;
}
.homeLogo {
  width: 1.5%;
  height: 40%;
  /*background-color: #6bbc72;*/
  position: absolute;
  right: 2%;
  top: 25%;
  cursor: pointer;
}
.homeLogo img {
  width: 100%;
  height: 100%;
}
.kuozhanLogo {
  width: 1.5%;
  height: 40%;
  /*background-color: #6bbc72;*/
  position: absolute;
  right: 5%;
  top: 25%;
  cursor: pointer;
}
.kuozhanLogo img {
  width: 100%;
  height: 100%;
}
.main_container {
  width: 100%;
  height: 92%;
}
.left_menu_container {
  width: 20%;
  height: 100%;
  /*background-color: skyblue;*/
  float: left;
}
.all_menu {
  width: 80%;
  /*height: 100%;*/
  margin-left: 10%;
  margin-top: 10%;
}
.right_content_container {
  width: 80%;
  height: 100%;
  float: right;
  background-color: white;
}
.fun_con {
  width: 100%;
  height: 15%;
  background-color: #1b7ee2;
  position: fixed;
  display: flex;
  z-index: 9999;
  flex-wrap: wrap;
  overflow: auto;
}
.fun_item {
  width: 6%;
  height: 80%;
  /*background-color: white;*/
  background-color: rgb(255,255,255);
  border-radius: 5px;
  justify-content: space-evenly;
  /*margin: 30px auto;*/
  margin-left: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  position: relative;
}
.fun_item_img {
  width: 100%;
  height: 75%;
  /*background-color: pink;*/
  display: inline-block;
  top: 8%;
  position: absolute;
}
.fun_item_img img {
  width: 70%;
  height: 80%;
  margin-left: 15%;
}
.fun_item_title {
  text-align: center;
  margin-top: 70%;
}
.fun_item_title span {
  font-size: 0.8rem;
  color: dimgrey;
  font-weight: bold;
}
</style>
