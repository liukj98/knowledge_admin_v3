<template>
  <div class="wrapper">
    <div class="section">
      <div class="main">
        <div class="a" style="text-align: center; margin-left: 100px">
          <div v-if="searchList.length !== 0">
            <router-link :to="`/profile/index/?id=` + searchList[0].academyId">
              <img src="../../assets/assets/Zcml/icon_jjk.png" />
              <div>仁爱礁位置在哪</div>
            </router-link>
            <span class="span_link">点击标题查看实体详情</span>
          </div>
          <div v-if="searchList.length === 0">
            <img src="../../assets/assets/Zcml/icon_jjk.png" alt="" />
            <div>仁爱礁位置在哪</div>
          </div>
        </div>
      </div>
      <div v-for="item in searchList" :key="item?.relation" class="main1">
        <div class="a">{{ item?.subject }}的{{ item?.relation }}</div>
        <div>{{ item?.objectItem }}</div>
      </div>
      <div v-if="searchList.length === 0" class="main" style="text-align: center">暂无搜索结果</div>
    </div>
    <div class="echart-block">
      <div ref="graphchart" style="height: 100%; width: 100%" />
    </div>
    <div class="res">
      <div>
        <a class="aToHome" style="margin-left: 30px" @click="toHome">返回首页 ></a>

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
</template>

<script>
import * as echarts from "echarts"
export default {
  data() {
    return {
      nlp: "仁爱礁位置在哪",
      page: 1,
      pageSize: 10,
      total: 1,
      searchList: [
        {
          id: "1",
          academyId: "1",
          subject: "仁爱礁",
          objectItem: "南沙群岛",
          relation: "位置",
          isDeleted: 0,
          objectId: "1999"
        }
      ],
      echart: null,
      nodes: [],
      datas: [
        {
          name: "约5.6公里",
          id: 2003,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "吉福兹号",
          id: 2,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "51.62平方公里",
          id: 2006,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "断节",
          id: 2011,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "汤姆斯第二滩",
          id: 2004,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "三沙市",
          id: 2014,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "仁爱礁",
          id: 1,
          symbolSize: 70,
          category: "0"
        },
        {
          name: "21.37平方公里",
          id: 2007,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "Second Thomas Shoal",
          id: 2010,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "环礁",
          id: 2001,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "美海军EP-3侦察机",
          id: 5,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "南沙群岛",
          id: 1999,
          symbolSize: 70,
          category: "1"
        },
        {
          name: "572000",
          id: 2015,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "15公里",
          id: 2002,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "渔业资源丰富",
          id: 2008,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "中国",
          id: 2017,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "热带海洋气候",
          id: 2016,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "北纬9度39-48分，东经115度51-54分",
          id: 2000,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "中国海监75号",
          id: 6,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "南沙群岛",
          id: 2013,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "仁爱暗沙",
          id: 2005,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "第二托马斯礁",
          id: 2012,
          symbolSize: 50,
          category: "2"
        },
        {
          name: "Ren'ai Jiao",
          id: 2009,
          symbolSize: 50,
          category: "2"
        }
      ],
      links: [
        {
          source: "1",
          target: "2007",
          value: "礁坪面积"
        },
        {
          source: "1",
          target: "2015",
          value: "邮政编码"
        },
        {
          source: "1",
          target: "1999",
          value: "位置"
        },
        {
          source: "1",
          target: "2001",
          value: "特征"
        },
        {
          source: "1",
          target: "2",
          value: "闯入者"
        },
        {
          source: "1",
          target: "2012",
          value: "别名"
        },
        {
          source: "1",
          target: "2013",
          value: "所属地区"
        },
        {
          source: "1",
          target: "2003",
          value: "宽度"
        },
        {
          source: "1",
          target: "2006",
          value: "环礁面积"
        },
        {
          source: "1",
          target: "2009",
          value: "外文名"
        },
        {
          source: "1",
          target: "2005",
          value: "1947年名称"
        },
        {
          source: "1",
          target: "2011",
          value: "别名"
        },
        {
          source: "1",
          target: "2014",
          value: "政府驻地"
        },
        {
          source: "1",
          target: "2002",
          value: "长度"
        },
        {
          source: "1",
          target: "2017",
          value: "所属国家"
        },
        {
          source: "1",
          target: "5",
          value: "侦察者"
        },
        {
          source: "1",
          target: "2000",
          value: "坐标"
        },
        {
          source: "1",
          target: "2008",
          value: "临近海域资源"
        },
        {
          source: "1",
          target: "2004",
          value: "1935年名称"
        },
        {
          source: "1",
          target: "6",
          value: "监察者"
        },
        {
          source: "1",
          target: "2010",
          value: "外文名"
        },
        {
          source: "1",
          target: "2016",
          value: "气候条件"
        }
      ]
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
    async load() {
      if (this.nlp) {
        /*const res = await requests({
          url: "/nlp/search",
          method: "GET",
          params: {
            nlp: this.nlp
          }
        })
        console.log(res)
        this.searchList = res.data.items
        this.datas = res.data.points
        console.log(this.datas)
        this.links = res.data.links
        console.log(this.links)
        console.log(this.searchList)*/

        this.drawChart()
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
</style>
