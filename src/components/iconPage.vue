<template>
  <div class="app_container">
    <div class="header_container">
      <div class="schoollogo_con">
        <img src="../assets/schoollogo.png">
      </div>
      <div class="school_title">
        <span>高校教学教务系统</span>
      </div>
      <div class="user_con_img">
        <img src="../assets/icon/ren.png">
      </div>
      <div class="user_con_title">
        <span>普通用户角色</span>
      </div>
      <div class="set_con">
        <img src="../assets/icon/shezhi.png">
      </div>
      <div class="close_con" @click="gotoLoginPage">
        <img src="../assets/icon/kaiguan.png">
      </div>
    </div>
    <div class="icon_container">
      <div class="litter_con">
        <div class="first_layer">
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #91c84c">
                <img src="../assets/icon/mima.png">
              </div>
            </div>
            <div class="icon_title">
              <span>密码管理</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #ed7563">
                <img src="../assets/icon/yonghu.png">
              </div>
            </div>
            <div class="icon_title">
              <span>用户权限管理</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #f5c15c">
                <img src="../assets/icon/xueji.png">
              </div>
            </div>
            <div class="icon_title">
              <span>学籍管理</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #5e80e4">
                <img src="../assets/icon/peiyang.png">
              </div>
            </div>
            <div class="icon_title">
              <span>培养方案</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #58c3ae">
                <img src="../assets/icon/geren.png">
              </div>
            </div>
            <div class="icon_title">
              <span>学生个人规划</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #a050a8">
                <img src="../assets/icon/jiaoxue.png">
              </div>
            </div>
            <div class="icon_title">
              <span>教学任务管理</span>
            </div>
          </div>
        </div>
        <div class="second_layer">
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #6bbc72">
                <img src="../assets/icon/kaishe.png">
              </div>
            </div>
            <div class="icon_title">
              <span>开设新课程</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #5aaff5">
                <img src="../assets/icon/paike.png">
              </div>
            </div>
            <div class="icon_title">
              <span>校园排课</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #5ea1f8">
                <img src="../assets/icon/xuanke.png">
              </div>
            </div>
            <div class="icon_title">
              <span>学生选课</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #99cd57">
                <img src="../assets/icon/kebiao.png">
              </div>
            </div>
            <div class="icon_title">
              <span>课表管理</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #5ecab4">
                <img src="../assets/icon/guanlian.png">
              </div>
            </div>
            <div class="icon_title">
              <span>设置课程关联</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #a3ba80">
                <img src="../assets/icon/pingjia.png">
              </div>
            </div>
            <div class="icon_title">
              <span>评教评学</span>
            </div>
          </div>
        </div>
        <div class="third_layer">
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #ef9759">
                <img src="../assets/icon/chengji.png">
              </div>
            </div>
            <div class="icon_title">
              <span>成绩管理</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #66ced7">
                <img src="../assets/icon/shangchuan.png">
              </div>
            </div>
            <div class="icon_title">
              <span>文件上传</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #ea6a79">
                <img src="../assets/icon/xiazai.png">
              </div>
            </div>
            <div class="icon_title">
              <span>文件下载</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #f8cf59">
                <img src="../assets/icon/tiaojian.png">
              </div>
            </div>
            <div class="icon_title">
              <span>毕业条件设定</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #e94da2">
                <img src="../assets/icon/biyeshenqing.png">
              </div>
            </div>
            <div class="icon_title">
              <span>毕业申请管理</span>
            </div>
          </div>
          <div class="icon_item">
            <div class="icon_img_con" @click="gotoCom">
              <div class="myIcon" style="background-color: #3578f2">
                <img src="../assets/icon/zhuangtai.png">
              </div>
            </div>
            <div class="icon_title">
              <span>学生状态跟踪</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="copyright">
      <span>版权所有© Copyright 2020-2021 中科智禾</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iconPage',
  methods: {
    gotoCom: function () {
      this.$message({
        message: '模块暂未开放',
        type: 'warning'
      })
    },
    gotoLoginPage: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.app_container {
  height: 100%;
  width: 100%;
  position: relative;
}
.header_container {
  width: 100%;
  height: 8%;
  background-color: #2767c5;
  position: relative;
}
.icon_container {
  width: 100%;
  height: 92%;
  /*background-color: pink;*/
  background: url('https://zhongkeruitong.top/zg-jiaowu/2.png') no-repeat;
  background-size: 100%;
  position: relative;
}
.user_con_img {
  width: 1.5%;
  height: 40%;
  position: absolute;
  right: 15%;
  /*background-color: pink;*/
  margin-top: 1%;
  cursor: pointer;
}
.user_con_img img {
  width: 100%;
  height: 100%;
  display: inline-block;
  /*margin-top: 45%;*/
}
.user_con_title {
  position: absolute;
  right: 8%;
  top: 30%;
  cursor: pointer;
}
.user_con_title span {
  display: inline-block;
  /*margin-top: 25%;*/
  color: white;
  font-size: 1rem;
}
.user_con img {
  margin-top: 10%;
}
.user_con span {
  color: white;
  font-size: 1rem;
}
.set_con {
  width: 1.5%;
  height: 40%;
  position: absolute;
  right: 5%;
  margin-top: 1%;
  cursor: pointer;
}
.set_con img {
  width: 100%;
  height: 100%;
  display: inline-block;
  /*margin-top: 45%;*/
}
.close_con {
  width: 1.5%;
  height: 40%;
  position: absolute;
  right: 2%;
  margin-top: 1%;
  cursor: pointer;
}
.close_con img {
  width: 100%;
  height: 100%;
  display: inline-block;
  /*margin-top: 45%;*/
}
.litter_con {
  position: absolute;
  width: 70%;
  height: 70%;
  /*background-color: pink;*/
  left: 0;
  right: 0;
  margin:100px auto;
}
.first_layer {
  width: 100%;
  height: 33.3%;
  /*background-color: white;*/
  display: flex;
  justify-content: center;
}
.second_layer {
  width: 100%;
  height: 33.3%;
  /*background-color: white;*/
  display: flex;
  justify-content: center;
}
.third_layer {
  width: 100%;
  height: 33.3%;
  /*background-color: white;*/
  display: flex;
  justify-content: center;
}
.icon_item {
  width: 16%;
  height: 100%;
  /*background-color: skyblue;*/
}
.icon_img_con {
  height: 80%;
  width: 100%;
  /*background-color: #707476;*/
  position: relative;
  cursor: pointer;
}
.icon_img_con img {
}
.myIcon {
  position: absolute;
  display: inline-block;
  width: 70%;
  height: 85%;
  left: 0;
  right: 0;
  margin: 5% auto;
  border-radius: 10px;
  /*background-color: #2767c5;*/
  border: 0;
  text-align: center;
}
.myIcon img {
  display: inline-block;
  width: 50%;
  height: 57%;
  margin-top: 20%;
}
.icon_title {
  text-align: center;
  cursor: pointer;
}
.icon_title {
  color: #44494b;
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
.schoollogo_con {
  position: absolute;
  left: 5%;
  width: 4.2%;
  height: 100%;
  /*background-color: #5aaff5;*/
}
.schoollogo_con img {
  width: 100%;
  height: 100%;
}
.school_title {
  position: absolute;
  left: 10%;
  top: 30%;
}
.school_title span {
  display: inline-block;
  /*margin-top: 25%;*/
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
}
</style>
