<template>
  <div class="searchcontainer">
    <!-- 大图 -->
    <div class="big-pic">
      <!-- <video src="../../assets/assets/video/ceshi.mp4" autoplay loop muted class="bg-video"></video> -->
      <div class="middle-pic">
        <p class="title">智能问答</p>
        <p class="introduce">
          基于构建的武器装备知识图谱，进行实体查询、路径查找、智能问答。<br />
          ①实体查询:输入武器装备名称信息，查询该实体在知识图谱中的关联子图并进行展示；<br />
          ②路径查找:指定起始实体和目标实体，在知识图谱中查找两个实体的所有关联路径；<br />
          ③智能问答:对用户输入问题进行语义识别，并对问题做出智能回答
        </p>
        <div class="mf">
          <img src="../../assets/assets/pic_mf.png" />
        </div>
      </div>
    </div>
    <div class="bottom_bg">
      <div style="text-align: center">
        <input v-model.trim="question" type="text" placeholder="请输入问题" class="search" />
        <el-button el-icon="search" class="btnsearch" @click="questioning()">
          <el-icon><Search /></el-icon
        ></el-button>
      </div>
      <div style="text-align: center; margin-top: 40px; color: #6c6b6b">
        搜索推荐 :
        <span style="color: #e6a23c">仁爱礁位置和坐标</span>
        <!--        <span v-for="item in RecommendList" :key="item.id">
          <router-link class="s" :to="`/profile/index/?id=` + item.id" style="{padding: 2px; color: #e4e7ea}">{{
            item.academyName
          }}</router-link>
        </span>-->
      </div>
      <div v-if="searchList.length !== 0" class="wrapper">
        <div class="section">
          <div v-for="item in searchList" :key="item?.relation" class="main1">
            <div class="a">{{ item?.subjectName }}的{{ item?.relation }}</div>
            <div>{{ item?.objectName }}</div>
          </div>
          <div v-if="searchList.length === 0" class="main" style="text-align: center">暂无搜索结果</div>
        </div>
        <div class="echart-block">
          <div ref="graphchart" style="height: 100%; width: 100%" />
        </div>
        <div class="res">
          <div>
            <el-pagination
              v-if="searchList.length !== 0"
              style="margin-left: 500px"
              background
              :current-page="page"
              :page-size="pageSize"
              :page-sizes="[5, 7, 10, 20]"
              layout="total, sizes, prev, pager, next, jumper"
              :total="total"
              @size-change="handleSizeChange"
              @current-change="handleCurrentChange"
            />
          </div>
        </div>
        <div style="height: 80px" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import * as echarts from "echarts"
import { getGraphDataApi } from "@/api/data-integeration"
import { ElMessage } from "element-plus"

export default {
  name: "HomeView",
  data() {
    return {
      page: 1,
      pageSize: 10,
      total: 1,
      searchList: [],
      echart: null,
      nodes: [],
      datas: [],
      links: [],
      radio1: 1,
      form: {
        source: "",
        target: ""
      },
      params: {
        page: 1,
        pageSize: 10
      },
      value: 0,
      area: "",
      question: "", // 问答内容
      province: "",

      title: "",
      search: [],
      academiesList: [],
      AList: [],
      RecommendList: []
    }
  },
  watch: {
    // watch title change
    title() {
      delay(() => {
        this.fetchData()
      }, 600)
    }
  },
  mounted() {
    this.load()
  },
  methods: {
    drawChart() {
      // 角度
      for (let i = 0; i < this.nodes.length; i++) {
        this.nodes[i].angle = (360 / this.nodes.length) * i
      }
      this.echart = echarts.init(this.$refs.graphchart)
      const option = {
        color: ["#90ca74", "#538FF6", "#ec6565"],
        tooltip: {
          show: true
        },

        legend: {
          show: true,
          data: []
        },
        edgeLabel: { normal: { show: true, textStyle: { fontSize: 10 } } },
        series: [
          {
            type: "graph", // 关系图
            layout: "force", // 图的布局，类型为力导图，'circular' 采用环形布局，见示例 Les Miserables
            legendHoverLink: true, // 是否启用图例 hover(悬停) 时的联动高亮。
            hoverAnimation: true, // 是否开启鼠标悬停节点的显示动画
            coordinateSystem: null, // 坐标系可选
            xAxisIndex: 0, // x轴坐标 有多种坐标系轴坐标选项
            yAxisIndex: 0, // y轴坐标
            force: {
              // 力引导图基本配置
              // initLayout: ,//力引导的初始化布局，默认使用xy轴的标点
              repulsion: 100, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
              gravity: 0.03, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
              edgeLength: 150, // 边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
              layoutAnimation: true
              // 因为力引导布局会在多次迭代后才会稳定，这个参数决定是否显示布局的迭代动画，在浏览器端节点数据较多（>100）的时候不建议关闭，布局过程会造成浏览器假死。
            },
            roam: true, // 是否开启鼠标缩放和平移漫游。默认不开启。如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
            nodeScaleRatio: 0.6, // 鼠标漫游缩放时节点的相应缩放比例，当设为0时节点不随着鼠标的缩放而缩放
            draggable: true, // 节点是否可拖拽，只在使用力引导布局的时候有用。
            focusNodeAdjacency: true, // 是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
            // symbol: "circle", //关系图节点标记的图形。ECharts 提供的标记类型包括 'circle'(圆形), 'rect'（矩形）, 'roundRect'（圆角矩形）, 'triangle'（三角形）, 'diamond'（菱形）, 'pin'（大头针）, 'arrow'（箭头）  也可以通过 'image://url' 设置为图片，其中 url 为图片的链接。'path:// 这种方式可以任意改变颜色并且抗锯齿
            // symbolSize:10 ,//也可以用数组分开表示宽和高，例如 [20, 10] 如果需要每个数据的图形大小不一样，可以设置为如下格式的回调函数：(value: Array|number, params: Object) => number|Array
            // symbolRotate:,//关系图节点标记的旋转角度。注意在 markLine 中当 symbol 为 'arrow' 时会忽略 symbolRotate 强制设置为切线的角度。
            // symbolOffset:[0,0],//关系图节点标记相对于原本位置的偏移。[0, '50%']
            edgeSymbol: ["none", "none"], // 边两端的标记类型，可以是一个数组分别指定两端，也可以是单个统一指定。默认不显示标记，常见的可以设置为箭头，如下：edgeSymbol: ['circle', 'arrow']
            edgeSymbolSize: 10, // 边两端的标记大小，可以是一个数组分别指定两端，也可以是单个统一指定。
            itemStyle: {
              // ==========图形样式，有 normal 和 emphasis 两个状态。normal 是图形在默认状态下的样式；emphasis 是图形在高亮状态下的样式，比如在鼠标悬浮或者图例联动高亮时。
              normal: {
                // 默认样式
                label: {
                  show: true
                },
                borderType: "solid", // 图形描边类型，默认为实线，支持 'solid'（实线）, 'dashed'(虚线), 'dotted'（点线）。
                borderColor: "rgba(83,111,196,0.4)", // 设置图形边框为淡金色,透明度为0.4
                borderWidth: 2, // 图形的描边线宽。为 0 时无描边。
                opacity: 1
                // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
              },
              emphasis: {
                // 高亮状态
              }
            },
            lineStyle: {
              // =======关系边的公用线条样式。
              normal: {
                color: "rgba(114,190,220,0.8)",
                width: "3",
                type: "solid", // 线的类型 'solid'（实线）'dashed'（虚线）'dotted'（点线）
                curveness: 0.3, // 线条的曲线程度，从0到1
                opacity: 1
                // 图形透明度。支持从 0 到 1 的数字，为 0 时不绘制该图形。默认0.5
              },
              emphasis: {
                // 高亮状态
              }
            },
            label: {
              // =========图形上的文本标签
              normal: {
                show: true, // 是否显示标签。
                position: "inside", // 标签的位置。['50%', '50%'] [x,y]
                textStyle: {
                  // 标签的字体样式
                  color: "#333333", // 字体颜色
                  fontStyle: "normal", // 文字字体的风格 'normal'标准 'italic'斜体 'oblique' 倾斜
                  fontWeight: "normal", // 'normal'标准'bold'粗的'bolder'更粗的'lighter'更细的或100 | 200 | 300 | 400...
                  fontFamily: "sans-serif", // 文字的字体系列
                  fontSize: 12 // 字体大小
                }
              },
              emphasis: {
                // 高亮状态
              }
            },
            edgeLabel: {
              // ==========线条的边缘标签
              normal: {
                show: false
              },
              emphasis: {
                // 高亮状态
              }
            },
            // 别名为nodes   name:影响图形标签显示,value:影响选中后值得显示,category:所在类目的index,symbol:类目节点标记图形,symbolSize:10图形大小
            // label:标签样式。
            data: this.datas,
            categories: [
              // symbol name：用于和 legend 对应以及格式化 tooltip 的内容。 label有效
              {
                name: "1",
                symbol: "roundRect",
                label: {
                  // 标签样式
                }
              },
              {
                name: "2",
                symbol: "circle"
              },
              {
                name: "0",
                symbol: "roundRect"
              }
            ],
            links: this.links
          }
        ]
      }
      this.echart.setOption(option)
    },
    handleSizeChange(val) {
      this.pageSize = val
      this.load()
    },
    handleCurrentChange(val) {
      this.page = val
      this.load()
    },
    getRandomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    handleChange(value) {
      this.area = value[0]
      this.province = value[1]
    },
    // AcademiesLis
    loadAcademiesList() {
      if (this.form.source && this.form.target) {
        this.$router.push({
          path: "/profile/two",
          query: {
            source: this.form.source,
            target: this.form.target
          }
        })
      } else {
        this.$message.warning("搜索内容不能为空哦！")
      }
    },

    generateGraphData(graphData) {
      const searchList = []
      const datas = []
      const links = []
      const configObj = {
        symbolSize: 50,
        category: "2"
      }

      // 处理 graph 对象
      const graphObj = graphData.graph
      const answerObj = graphData.answer
      const keys = Object.keys(graphObj)
      let mainNodeId
      let subjectName
      for (const point of keys) {
        if (graphObj[point].relationId == -1) {
          mainNodeId = graphObj[point].id
          subjectName = graphObj[point].name
        }
      }
      const answerKey = Object.keys(answerObj)
      for (const answer of answerKey) {
        const searchObj = { subjectName: subjectName, objectName: answerObj[answer], relation: answer }
        searchList.push(searchObj)
      }
      for (const point of keys) {
        if (graphObj[point].relationId == -1) {
          const nodeObj = { symbolSize: 70, category: "1", name: graphObj[point].name, id: graphObj[point].id }
          datas.push(nodeObj)
        } else {
          const nodeObj = { ...configObj, name: graphObj[point].name, id: graphObj[point].id }
          const val = graphObj[point].id
          const relObj = {
            source: mainNodeId,
            target: val,
            value: graphObj[point].name
          }
          datas.push(nodeObj)
          links.push(relObj)
        }
      }
      return { searchList, datas, links }
    },

    async questioning() {
      try {
        const res = await getGraphDataApi({ question: this.question })
        const { data } = res
        console.log("data", data)
        const { searchList, datas, links } = this.generateGraphData(data)
        console.log(datas, links)
        this.datas = datas
        this.links = links
        this.searchList = searchList
        this.drawChart()
      } catch (error) {
        ElMessage.error("查找失败")
      }

      // if (this.question === "") {
      //   this.$message.warning("搜索内容不能为空哦！")
      // } else {
      //   window.location.reload()
      // }
    },
    // name——根据title提示的书院名称
    load() {
      if (this.title === "") {
        this.$message.warning("搜索内容不能为空哦！")
      } else this.$router.push("/search?name=" + this.title)
      if (this.nlp) {
        this.drawChart()
      }
    },
    searchName() {},
    async fetchData() {
      if (this.title !== "") {
        const res = await requests({
          url: "/academies/search",
          method: "GET",
          params: {
            name: this.title,
            page: 1,
            pageSize: 5
          }
        })
        this.search = res.data.records
      }
    }
  }
}
</script>
<style lang="scss" scoped>
html,
body {
  height: 100%;
}
.wrapper {
  background-image: url("../../assets/assets/pic_1.png");
  background-size: cover;
  position: relative;
  display: flex;
  flex-direction: column;
  height: 720px;
}
.section {
  flex: 1;
}
.res {
  flex: 0;
}

.main {
  margin: 30px;
}
.main1 {
  background-image: url("../../assets/assets/pic_2.png");
  background-size: cover;
  position: relative;
  margin: 30px;
  padding: 10px;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.12),
    0 0 6px rgba(0, 0, 0, 0.04);
}
.a {
  display: block;
  /* text-decoration: none; */
  font-size: 20px;
  padding-bottom: 10px;
}
.aToHome {
  color: #1e41d1;
  text-decoration: solid;
  cursor: pointer;
}
a:link {
  color: #2440b3; /*未访问的链接颜色*/
}

a:visited {
  color: #1e41d1; /*已访问的链接颜色*/
}
.span_link {
  font-size: 12px;
  color: #999999;
}
.echart-block {
  height: 800px;
}
.middle {
  //margin-top: 80px;
  margin: 80px auto 0;

  width: 980px;
}
/*.search {
  margin: 0 auto;
  width: 540px;
}*/
span {
  display: inline-block;
  margin: 10px;
}
.search-content {
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.12),
    0 0 6px rgba(0, 0, 0, 0.04);
  margin: 9px auto 0;
}
.content {
  display: block;
  padding: 3px;
  cursor: pointer;
}
.content:hover {
  background-color: rgba(204, 204, 204, 0.653);
}
.a {
  display: block;
  margin-top: 5px;
  font-size: 16px;
}
.s,
.a {
  font-size: 16px;
  color: #ff9900;
  text-decoration: none;
}
/*
.s:visited,
.a :visited {
  color: #6c6b6b;
}*/
/* .a:link {

}
.s:link {
  color: #c0c0c0;
  text-decoration: none;
} */
/* //未访问：蓝色、无下划线  */

.a:hover {
  color: skyblue;
}
.hnuDoor {
  width: 100%;
  margin: 30px auto;
}
.s:hover {
  background-color: rgba(204, 204, 204, 0.653);
}
.el-button--primary {
  background-color: #6996ce;
  border-color: #6996ce;
}
.searchcontainer {
  height: 100vh;
  //display : flex;
  justify-content: center; /*水平方向居中*/
  align-items: center; /*垂直方向居中*/
}
.search_two {
  margin-right: 20px;
  width: 250px;
  height: 45px;
  background-repeat: no-repeat; /*设置背景图片不平铺*/
  border-radius: 30px 30px 30px 30px;
  padding-left: 50px;
  background-position: 10px 10px; /*设置背景图片的位置*/
  color: #333333;
  font-size: 16px;
  border: #6996ceff solid 1px;
}
.search_two:focus {
  border: #095ef2 solid 2px;
} /*添加外边框*/
/* 搜索框样式 */
.search {
  margin-top: 100px;
  display: inline-block;
  width: 480px;
  height: 45px;
  background-repeat: no-repeat; /*设置背景图片不平铺*/
  border-radius: 30px 0px 0px 30px;
  padding-left: 50px;
  background-position: 10px 10px; /*设置背景图片的位置*/
  color: #333333;
  font-size: 16px;
  border: #6996ceff solid 1px;
}
/* 搜索框获得焦点时样式 */
.search:focus {
  border: #095ef2 solid 2px; /*添加外边框*/
}
.btnsearch_two {
  display: inline-block;
  width: 90px;
  height: 47px;
  border: none;
  background-color: #095ef2;
  color: #fff;
  border-radius: 20px 20px 20px 20px;
  font-size: 20px; /*
  cursor: pointer;*/
}
.btnsearch_two:hover {
  background-color: #538ff6;
}
/* 搜索按钮样式 */
.btnsearch {
  display: inline-block;
  width: 90px;
  height: 47px;
  border: none;
  background-color: #095ef2;
  color: #fff;
  border-radius: 0px 20px 20px 0px;
  font-size: 20px; /*
  cursor: pointer;*/
}

.el-radio ::v-deep .el-radio__label {
  font-size: 18px;
  //line-height: 2;
}
/* 按钮悬浮时样式 */
.btnsearch:hover {
  background-color: #538ff6;
}

.threesolid {
  text-align: center;
  margin-top: 220px;
  margin-bottom: 50px;
  font-size: 30px;
  color: #6996ce;
  text-shadow:
    0px 1px 0px #c0c0c0,
    0px 2px 0px #b0b0b0,
    0px 3px 0px #a0a0a0,
    0px 4px 0px #909090,
    0px 5px 10px rgb(252, 253, 255);
}

::v-deep .el-radio__input {
  display: none;
}

.allData {
  text-align: right;
  padding-top: 20px;
  padding-right: 30px;
}
/*.radio1 >>> .el-radio__input.is-checked+.el-radio__label {
  color: #ec6565;
}*/

.radio1 {
  color: #19be68;
  font-size: 16px;
  font-weight: bold;
}

.big-pic {
  width: 100%;
  height: 329px;
  background-image: url(../../assets/assets/pic_dt.png);
  background-size: cover;
  position: relative;
  .bg-video {
    width: 400px;
    height: 368px;
    position: absolute;
    top: 76px;
    right: 352px;
  }

  .btn-group {
    position: absolute;
    right: 380px;
    margin-top: 60px;
    width: 414px;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    .btn-sjzc {
      width: 244px;
      height: 50px;
      background: linear-gradient(306deg, #02bdfc 0%, #0277ff 100%);
      box-shadow: 0px 5px 10px 0px rgba(0, 114, 255, 0.17);
      border-radius: 10px;
      border-image: linear-gradient(179deg, rgba(2, 149, 254, 1), rgba(2, 132, 254, 1), rgba(255, 255, 255, 1)) 1 1;
      font-size: 18px;
      color: #ffffff;
    }

    .btn-sjzc:hover {
      opacity: 0.8;
      color: #ffffff;
    }

    .btn-ckbz {
      width: 150px;
      height: 50px;
      background: #ffffff;
      border-radius: 10px;
      border: 2px solid #406dff;
      font-size: 18px;
      color: #406dff;
      cursor: pointer;
    }
  }

  .middle-pic {
    width: 1294px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 290px;

    .title {
      font-size: 36pt;
      color: #333333;
      margin-top: 80px;
      font-weight: bold;
    }

    .introduce {
      margin-top: 15px;
      width: 800px;
      height: 84px;
      font-size: 16px;
      color: #666666;
    }

    .mf {
      width: 460px;
      height: 368px;
      position: absolute;
      right: 60px;
      top: 0px;
    }

    .btn-ckbz:hover {
      opacity: 0.8;
      color: #406dff;
    }
  }
}
.bottom_bg {
  width: 100%;
  height: 100%;
  background-image: url(../../assets/assets/pic_1.png);
  background-size: cover;
  position: relative;
}
</style>
