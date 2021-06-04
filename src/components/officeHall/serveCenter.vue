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
    <div class="tag_con">
      <div class="center_tag">
        <div class="tag_one_layer">
          <div class="tag_one_layer_title">
            <span class="tag_one_layer_title_span">归属部门:</span>
          </div>
          <div class="tags_one_con">
            <div class="tag_item" style="background-color: skyblue">全部</div>
            <div v-for="(item,k) in departmentArray" :key="k"  class="tag_item">{{item.name}}</div>
          </div>
        </div>
        <div class="tag_two_layer">
          <div class="tag_two_layer_title">
            <span class="tag_one_layer_title_span">服务角色:</span>
          </div>
          <div class="tags_two_con">
            <div class="tag_item" style="background-color: skyblue">全部</div>
            <div v-for="(item,k) in roleArray" :key="k"  class="tag_item">{{item.name}}</div>
          </div>
        </div>
        <div class="tag_three_layer">
          <div class="tag_three_layer_title">
            <span class="tag_one_layer_title_span">服务分类:</span>
          </div>
          <div class="tags_three_con">
            <div class="tag_item" style="background-color: skyblue">全部</div>
            <div v-for="(item,k) in serverArray" :key="k"  class="tag_item">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
    <div class="button_con">
      <el-button type="primary" plain>最热</el-button>
      <el-button type="primary" plain>最新</el-button>
      <el-button type="primary" plain>最近使用</el-button>
    </div>
    <div class="servers_con">
      <div class="server_item">
        <span class="server_title">在学证明办理</span>
        <img class="server_logo" src="../../assets/iconthree/zhenming.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：1423人</p>
          <p style="color: #095dd7">学生工作部/学生处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">奖励证明申请</span>
        <img class="server_logo" src="../../assets/iconthree/jaingli.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：345人</p>
          <p style="color: #095dd7">学生工作部/学生处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">无犯罪证明办理</span>
        <img class="server_logo" src="../../assets/iconthree/fanzui.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：23人</p>
          <p style="color: #095dd7">安全保卫部/保卫处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">居住证介绍信办理</span>
        <img class="server_logo" src="../../assets/iconthree/juzhu.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：522人</p>
          <p style="color: #095dd7">学生工作部/学生处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">学生证补办</span>
        <img class="server_logo" src="../../assets/iconthree/xueshengz.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：106人</p>
          <p style="color: #095dd7">学生工作部/学生处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">资助证明申请</span>
        <img class="server_logo" src="../../assets/iconthree/zizhu.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：183人</p>
          <p style="color: #095dd7">学生工作部/学生处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">电子成绩单申请</span>
        <img class="server_logo" src="../../assets/iconthree/chengjidan.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：3423人</p>
          <p style="color: #095dd7">教务部</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">培养指导</span>
        <img class="server_logo" src="../../assets/iconthree/peiyang.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：3241人</p>
          <p style="color: #095dd7">教务处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">校园支付</span>
        <img class="server_logo" src="../../assets/iconthree/zhifu.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：3535人</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">智慧资产</span>
        <img class="server_logo" src="../../assets/iconthree/zichan.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：65人</p>
          <p style="color: #095dd7">资产管理处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">奖助系统</span>
        <img class="server_logo" src="../../assets/iconthree/jaingzhu.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：223人</p>
          <p style="color: #095dd7">学生工作部/学生处</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">学籍变动审核</span>
        <img class="server_logo" src="../../assets/iconthree/xueji.png">
        <div class="server_explain">
          <p>办理时限：限时办理</p>
          <p>访问数：23人</p>
          <p style="color: #095dd7">教务部</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">学籍管理</span>
        <img class="server_logo" src="../../assets/iconthree/xuejidangan.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：523人</p>
          <p style="color: #095dd7">教务部</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">图书馆研修室预约</span>
        <img class="server_logo" src="../../assets/iconthree/yuyue.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：3478人</p>
          <p style="color: #095dd7">图书馆</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">图书荐购</span>
        <img class="server_logo" src="../../assets/iconthree/tushu.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：764人</p>
          <p style="color: #095dd7">图书馆</p>
        </div>
      </div>
      <div class="server_item">
        <span class="server_title">文件下载</span>
        <img class="server_logo" src="../../assets/iconthree/xiazai.png">
        <div class="server_explain">
          <p>办理时限：即时办理</p>
          <p>访问数：5423人</p>
          <p style="color: #095dd7">学生工作部/学生处</p>
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
  name: 'serveCenter',
  data () {
    return {
      input2: '',
      departmentArray: [
        {
          name: '党政办公室'
        },
        {
          name: '党委组织部/党委统战部'
        },
        {
          name: '党委宣传部/新闻中心'
        },
        {
          name: '学生工作部/学生处'
        },
        {
          name: '教务部'
        },
        {
          name: '培养与学位部'
        },
        {
          name: '人力资源部/教师工作部'
        },
        {
          name: '财务计划处'
        },
        {
          name: '资产管理处'
        },
        {
          name: '保卫处'
        },
        {
          name: '图书馆'
        }
      ],
      roleArray: [
        {
          name: '教职工'
        },
        {
          name: '本科生'
        },
        {
          name: '研究生'
        },
        {
          name: '校外用户'
        }
      ],
      serverArray: [
        {
          name: '行政党务'
        },
        {
          name: '人力资源'
        },
        {
          name: '资产财务'
        },
        {
          name: '学生事务'
        },
        {
          name: '公共服务'
        }
      ]
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
  position: relative;
  background: url("../../assets/bangong.jpg") no-repeat;
  background-size: cover;
  background-position: center 0;
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
.tag_con {
  width: 100%;
  height: 35%;
  background-color: white;
}
.center_tag {
  width: 80%;
  height: 100%;
  /*background-color: #1b7ee2;*/
  margin-left: 10%;
}
.tag_one_layer {
  width: 100%;
  height: 40%;
  /*background-color: pink;*/
  display: flex;
}
.tag_one_layer_title {
  width: 10%;
  height: 100%;
  /*background-color: #6bbc72;*/
}
.tag_one_layer_title_span {
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #707476;
  font-size: 1rem;
  margin-top: 10%;
}
.tags_one_con {
  width: 90%;
  height: 100%;
  /*background-color: #6bbc72;*/
  /*display: flex;*/
}
.tag_item {
  padding: 5px;
  display: inline-block;
  /*background-color: white;*/
  font-size: 1rem;
  margin-top: 1.2%;
  margin-left: 3%;
  color: black;
  cursor: pointer;
  border-radius: 5px;
}
.tag_item:hover{
  background-color: skyblue;
}
/*.tag_item:active {*/
/*  background-color: skyblue;*/
/*}*/
.tag_item:focus {
  background-color: skyblue;
}
.tag_two_layer {
  width: 100%;
  height: 30%;
  /*background-color: pink;*/
  display: flex;
}
.tag_two_layer_title {
  width: 10%;
  height: 100%;
  /*background-color: #6bbc72;*/
}
.tag_two_layer_title_span {
  display: inline-block;
  width: 100%;
  text-align: center;
  color: #707476;
  font-size: 1rem;
  margin-top: 10%;
}
.tags_two_con {
  width: 90%;
  height: 100%;
  /*background-color: #6bbc72;*/
  /*display: flex;*/
}
.tag_three_layer {
  width: 100%;
  height: 30%;
  /*background-color: pink;*/
  display: flex;
}
.tag_three_layer_title {
  width: 10%;
  height: 100%;
  /*background-color: #6bbc72;*/
}
.tags_three_con {
  width: 90%;
  height: 100%;
  /*background-color: #6bbc72;*/
  /*display: flex;*/
}
.button_con {
  width: 80%;
  height: 7%;
  margin-left: 10%;
  /*background-color: pink;*/
  margin-top: 0.8%;
}
.servers_con {
  width: 80%;
  height: 100%;
  margin-left: 10%;
  /*background-color: pink;*/
  display: flex;
  flex-wrap: wrap;
}
.server_item {
  width: 22%;
  height: 20%;
  background-color: white;
  display: flex;
  justify-content: space-evenly;
  margin: 12px auto;
  cursor: pointer;
  position: relative;
  box-shadow:0px 0px 5px #d2d4d5;
}
.server_title {
  font-size: 1rem;
  font-weight: bold;
  color: #2767c5;
  position: absolute;
  top: 8%;
  left: 5%
}
.server_logo {
  width: 21%;
  height: 43%;
  position: absolute;
  top: 35%;
  left: 10%;
  /*background-color: pink;*/
}
.server_explain {
  position: absolute;
  left: 46%;
  top: 34%;
}
.server_explain p {
  margin-top: 2px;
  font-size: 0.8rem;
  color: #707476;
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
  margin-top: 2%;
  font-size: 0.8rem;
}
</style>
