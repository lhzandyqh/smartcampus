<template>
  <div class="app_contaienr">
    <div class="search_con">
      <div class="sea_fun_con">
        <div class="sea_title">
          <span class="sea_title_span">一站式办事大厅</span>
        </div>
        <div class="sea_input">
          <el-input
            placeholder="请输入想搜索的关键字"
            prefix-icon="el-icon-search"
            v-model="input2">
          </el-input>
        </div>
      </div>
    </div>
    <div class="card_container">
      <div class="left_card_con">
        <div class="leftcard">
          <div class="left_title">
            <span class="left_span">我的服务</span>
            <div class="left_span_two">
              <el-button size="small" type="primary">添加<i class="el-icon-plus el-icon--right"></i></el-button>
            </div>
          </div>
          <div class="left_con">
            <div class="left_item">
              <img class="left_logo" src="../../assets/iconthree/xueshengz.png">
              <span class="left_explain" style="text-overflow: ellipsis;overflow: hidden">学生证补办</span>
            </div>
            <div class="left_item">
              <img class="left_logo" src="../../assets/iconthree/zhifu.png">
              <span class="left_explain" style="text-overflow: ellipsis;overflow: hidden">校园支付</span>
            </div>
            <div class="left_item">
              <img class="left_logo" src="../../assets/iconthree/jaingzhu.png">
              <span class="left_explain" style="text-overflow: ellipsis;overflow: hidden">奖助系统</span>
            </div>
            <div class="left_item">
              <img class="left_logo" src="../../assets/iconthree/xiazai.png">
              <span class="left_explain" style="text-overflow: ellipsis;overflow: hidden">文件下载</span>
            </div>
          </div>
        </div>
      </div>
      <div class="right_card_con">
        <div class="rightcard">
          <div class="right_title">
            <span class="right_span">我的任务</span>
            <div class="right_span_two">
              <span>待处理(3)</span>
            </div>
          </div>
          <div class="right_con">
            <div class="task_item_title">
              <el-row>
                <el-col :span="12">
                  <span>任务名称</span>
                </el-col>
                <el-col :span="6">
                  <span>状态</span>
                </el-col>
                <el-col :span="6">
                  <span>截止日期</span>
                </el-col>
              </el-row>
            </div>
            <div class="task_item">
              <el-row>
                <el-col :span="12">
                  <span>大学生素质调查填写</span>
                </el-col>
                <el-col :span="6">
                  <el-tag>进行中</el-tag>
                </el-col>
                <el-col :span="6">
                  <span>2021-08-31</span>
                </el-col>
              </el-row>
            </div>
            <div class="task_item">
              <el-row>
                <el-col :span="12">
                  <span>计算机博弈比赛</span>
                </el-col>
                <el-col :span="6">
                  <el-tag>进行中</el-tag>
                </el-col>
                <el-col :span="6">
                  <span>2021-09-21</span>
                </el-col>
              </el-row>
            </div>
            <div class="task_item">
              <el-row>
                <el-col :span="12">
                  <span>学籍信息校验补充填写</span>
                </el-col>
                <el-col :span="6">
                  <el-tag>进行中</el-tag>
                </el-col>
                <el-col :span="6">
                  <span>2021-08-12</span>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'peopleHome',
  data () {
    return {
      input2: ''
    }
  }
}
</script>

<style scoped>
.app_contaienr{
  padding-top: 0.5%;
  width: 100%;
  height: 100%;
}
.search_con {
  width: 100%;
  height: 35%;
  /*background-color: skyblue;*/
  position: relative;
  background: url("http://zhongkeruitong.top/zg_smartCampus/bangong.jpg") no-repeat center;
  background-size: cover;
  /*background-position: center 0;*/
}
.sea_fun_con {
  width: 60%;
  height: 100%;
  /*background-color: pink;*/
  left: 20%;
  position: absolute;
}
.sea_title {
  width: 100%;
  height: 60%;
  position: relative;
  /*background-color: #1b7ee2;*/
}
.sea_title_span {
  position: absolute;
  display: inline-block;
  color: white;
  font-weight: bold;
  font-size: 2rem;
  left: 40%;
  top: 35%;
  /*background-color: #6bbc72;*/
}
.sea_input {
  width: 74%;
  margin-left: 13%;
}
.card_container {
  margin-top: 1%;
  height: 50%;
  width: 80%;
  margin-left: 10%;
  /*background-color: #1b7ee2;*/
}
.left_card_con {
  width: 65%;
  height: 100%;
  /*background-color: pink;*/
  float: left;
}
.leftcard {
  width: 96%;
  height: 90%;
  background-color: white;
  margin-left: 2%;
  margin-top: 2%;
}
.left_title {
  width: 90%;
  height: 17%;
  /*background-color: pink;*/
  margin-left: 5%;
  display: flex;
  border-bottom: 1px #d6dadc solid;
}
.left_span {
  width: 20%;
  height: 100%;
  color: #707476;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  /*background-color: #1b7ee2;*/
}
.left_span_two {
  width: 15%;
  height: 100%;
  color: #707476;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: revert;
  text-align: right;
  /*background-color: #ff443f;*/
  margin-left: 64%;
}
.right_card_con {
  width: 35%;
  height: 100%;
  /*background-color: hotpink;*/
  float: right;
}
.rightcard {
  width: 96%;
  height: 90%;
  background-color: white;
  margin-left: 2%;
  margin-top: 3.6%;
}
.right_title {
  width: 90%;
  height: 17%;
  /*background-color: pink;*/
  margin-left: 5%;
  display: flex;
  border-bottom: 1px #d6dadc solid;
}
.right_span {
  width: 25%;
  height: 100%;
  color: #707476;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  /*background-color: #1b7ee2;*/
}
.right_span_two {
  width: 20%;
  height: 100%;
  color: #707476;
  font-size: 1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: revert;
  text-align: right;
  /*background-color: #ff443f;*/
  margin-left: 64%;
}
.right_span_two span {
  font-size: 0.5rem;
  color: red;
  cursor: pointer;
}
.right_con {
  margin-left: 5%;
  width: 90%;
  height: 80%;
  /*background-color: pink;*/
}
.task_item_title {
  margin-top: 4%;
}
.task_item_title span {
  font-weight: bold;
  color: #8e969a;
  font-size: 0.8rem;
}
.task_item {
  margin-top: 4%;
  cursor: pointer;
}
.task_item span {
  font-size: 0.8rem;
}
.left_con {
 width: 90%;
  height: 75%;
  margin-left: 5%;
  margin-top: 2%;
  /*background-color: pink;*/
  display: flex;
  flex-wrap: wrap;
}
.left_item {
 width: 22%;
  height: 31%;
  /*background-color: #5e80e4;*/
  display: flex;
  justify-content: space-evenly;
  margin: 12px auto;
  cursor: pointer;
  position: relative;
  box-shadow:0px 0px 5px #d2d4d5;
}
.left_logo {
  width: 35%;
  height: 74%;
  /*background-color: white;*/
  position: absolute;
  top:11%;
  left:5%
}
.left_explain {
  width: 50%;
  /*background-color: white;*/
  position: absolute;
  top:40%;
  left:50%;
  font-size: 0.8rem;
}
</style>
