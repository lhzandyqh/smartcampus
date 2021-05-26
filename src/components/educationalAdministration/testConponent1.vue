<template>
  <div class="app-container">
    <el-row :gutter="20">
      <div style="display: flex;align-items: center;margin: 15px 0;flex-wrap: wrap">
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">开课单位:</div>
        <div>
          <el-select style="width: 150px" v-model="myform.type" placeholder="请选择">
            <el-option label="医学院" value="护理学院" />
            <el-option label="计算机学院" value="护理学院" />
            <el-option label="外国语学院" value="护理学院" />
            <el-option label="理学院" value="护理学院" />
            <el-option label="商学院" value="护理学院" />
            <el-option label="电子信息学院" value="护理学院" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">学期:</div>
        <div>
          <el-select style="width: 150px" v-model="myform.time" placeholder="请选择">
            <el-option label="2020-2021学年（秋）第一学期" value="2020-2021学年（秋）第一学期" />
            <el-option label="2020-2021学年（春）第二学期" value="2020-2021学年（春）第二学期" />
            <el-option label="2020-2021学年（夏）第三学期" value="2020-2021学年（夏）第三学期" />
            <el-option label="2019-2020学年（秋）第一学期" value="2019-2020学年（秋）第一学期" />
            <el-option label="2019-2020学年（春）第二学期" value="2019-2020学年（春）第二学期" />
            <el-option label="2019-2020学年（夏）第三学期" value="2019-2020学年（夏）第三学期" />
          </el-select>
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">课程编码:</div>
        <div>
          <el-input style="width: 150px" v-model="input" />
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">课程名称:</div>
        <div>
          <el-input  style="width: 150px"  v-model="input" />
        </div>
        <div style="font-size: 14px;margin: 0 15px;font-weight: bolder">课程属性:</div>
        <div>
          <el-select style="width: 150px" v-model="myform.attr" placeholder="请选择">
            <el-option label="核心课" value="核心课" />
            <el-option label="普及课" value="普及课" />
            <el-option label="研讨课" value="普及课" />
            <el-option label="公共必修课" value="公共必修课" />
            <el-option label="公共选修课" value="公共选修课" />
            <el-option label="高级强化课" value="高级强化课" />
            <el-option label="实验课" value="实验课" />
            <el-option label="其他" value="其他" />
          </el-select>
        </div>
        <div style="margin-top: 15px">
          <el-button type="primary" style="margin-left:15px">查询课程</el-button>
        </div>
<!--        <div style="margin-top: 15px">-->
<!--          <el-button type="primary" style="margin-left:15px">导出</el-button>-->
<!--        </div>-->
      </div>
    </el-row>
    <el-divider />
    <el-table
      :data="tableDataTea"
      height="400px"
      stripe
      style="width: 100%"
    >
      <el-table-column
        prop="xh"
        label="序号"
        width="50"
      />
      <el-table-column
        prop="kkdw"
        label="开课单位"
      />
      <el-table-column
        prop="kcbm"
        label="课程编码"
        width="120"
      />
      <el-table-column
        prop="kcmc"
        label="课程名称"
        width="200"
        fixed
      />
      <el-table-column
        prop="kcsx"
        label="课程属性"
      />
      <el-table-column
        prop="xkzy"
        label="所属学科/专业"
      />
      <el-table-column
        prop="ksxf"
        label="课时/学分"
      />
      <el-table-column
        prop="kkz"
        label="开课周"
      />
      <el-table-column
        prop="xqjc"
        label="星期节次"
      />
      <el-table-column
        prop="js"
        label="教室"
      />
      <el-table-column
        prop="skfs"
        label="授课方式"
      />
      <el-table-column
        prop="xx"
        label="限选"
      />
      <el-table-column
        prop="yx"
        label="已选"
      />
      <el-table-column
        prop="ksfs"
        label="考试方式"
      />
      <el-table-column
        prop="zjjs"
        label="主讲教师"
      />
      <el-table-column align="center" label="操作">
        <template slot-scope="scope">
          <el-button type="text" @click="selectCourse(scope.row)">移除课程</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="fenye">
      <el-pagination
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="5"
        style="margin-top:20px;"
        :total="tableDataTea.length"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'SemesterSchedule',
  data () {
    return {
      currentPage: '',
      tableDataTea: [
        {
          xh: '1',
          kkdw: '理学院',
          kcbm: '011M04001H',
          kcmc: '高等数学',
          kcsx: '专业核心课',
          xkzy: '基础学科',
          ksxf: '50/3.0',
          kkz: '第2-17周',
          xqjc: '周二(10-12)',
          js: '教一楼132',
          skfs: '课堂讲授',
          xx: '35',
          yx: '20',
          ksfs: '闭卷考试',
          zjjs: '刘老师'
        },
        {
          xh: '2',
          kkdw: '理学院',
          kcbm: '011M04002H',
          kcmc: '高等物理',
          kcsx: '专业核心课',
          xkzy: '基础学科',
          ksxf: '50/3.0',
          kkz: '第2-17周',
          xqjc: '周三(10-12)',
          js: '教二楼142',
          skfs: '课堂讲授',
          xx: '35',
          yx: '20',
          ksfs: '闭卷考试',
          zjjs: '王老师'
        },
        {
          xh: '3',
          kkdw: '外国语学院',
          kcbm: '011M04023H',
          kcmc: '大学英语',
          kcsx: '专业核心课',
          xkzy: '基础学科',
          ksxf: '50/2.5',
          kkz: '第2-17周',
          xqjc: '周三(10-12)',
          js: '教二楼402',
          skfs: '课堂讲授',
          xx: '35',
          yx: '20',
          ksfs: '闭卷考试',
          zjjs: '李老师'
        },
        {
          xh: '4',
          kkdw: '计算机学院',
          kcbm: '011M04052H',
          kcmc: '计算机网络',
          kcsx: '专业核心课',
          xkzy: '计算机科学与技术',
          ksxf: '50/3.0',
          kkz: '第2-17周',
          xqjc: '周二(10-12)',
          js: '教一楼332',
          skfs: '课堂讲授',
          xx: '35',
          yx: '20',
          ksfs: '闭卷考试',
          zjjs: '赵老师'
        },
        {
          xh: '5',
          kkdw: '医学院',
          kcbm: '012M04011H',
          kcmc: '药理学',
          kcsx: '普及课',
          xkzy: '护理学',
          ksxf: '50/2.0',
          kkz: '第2-12周',
          xqjc: '周五(10-12)',
          js: '教一楼202',
          skfs: '课堂讲授',
          xx: '35',
          yx: '20',
          ksfs: '闭卷考试',
          zjjs: '杨老师'
        }
      ],
      myform: {},
      input: ''
    }
  },
  methods: {
    selectCourse: function (row) {
      console.log(row.kcmc)
    }
  }
}
</script>

<style scoped>
.fenye{
  text-align: center;
}
.app-container {
  width: 96%;
  padding: 20px;
}
::-webkit-scrollbar {
  display: none; /* Chrome Safari */
}
</style>
