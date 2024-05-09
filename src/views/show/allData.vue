<template>
  <div class="connection">
    <div style="text-align: center; padding-top: 24px">
      <span style="font-size: 28px; margin-left: 300px; font-weight: bold; color: #333333">整体图谱数据</span>
      <span style="font-size: 12px; color: #999999">点击结点中心可查看详细信息</span>
      <a class="aToHome" style="margin-right: 30px; float: right" @click="toHome">图谱应用 ></a>
    </div>
    <div id="chart1" style="width: 100%; height: 900px; margin-top: 24px" />
  </div>
</template>

<script>
// import { EleResize } from "@/utils/esresize"
// import { reqAllData, reqMainData, reqMoreData } from "@/api"
import * as echarts from "echarts"
export default {
  data() {
    return {
      dialogVisible: false,
      loading: true
    }
  },

  mounted() {
    this.init(document.getElementById("chart1"))
  },
  methods: {
    toHome() {
      this.$router.push("/dashboard/index")
    },
    async init(domName) {
      const myChart = this.$echarts.init(domName)
      // 图表自适应
      const listener = function () {
        myChart.resize()
      }
      EleResize.on(domName, listener)
      const mainData = await reqMainData()
      const mianCount = mainData.data
      const allData = await reqAllData()
      const points = allData.data.points
      const linkss = allData.data.links
      const option = {
        color: ["#dc5125", "#ec6565", "#f8c75a", "#72bedc", "#536fc4", "#90ca74", "#c678ee", "#F56C6C", "#538FF6"],
        legend: {
          textStyle: {
            color: "#666666",
            fontSize: 14
          },
          formatter: (name) => {
            return echarts.format.truncateText(name, 40, "14px", "…")
          },
          data: [
            { name: "机构" },
            { name: "人员" },
            { name: "装备" },
            { name: "物资" },
            { name: "设施" },
            { name: "环境" },
            { name: "事件" },
            { name: "行动" }
          ],
          selectedMode: "false"
        },
        tooltip: {
          show: true
        },
        series: [
          {
            type: "graph",
            layout: "force",
            legendHoverLink: true,
            animation: false,
            hoverAnimation: false,
            label: {
              show: true,
              fontSize: 14,
              color: "#333333"
            },
            draggable: true,
            roam: true,
            categories: [
              { name: "机构" },
              { name: "人员" },
              { name: "装备" },
              { name: "物资" },
              { name: "设施" },
              { name: "环境" },
              { name: "事件" },
              { name: "行动" },
              { name: "空" }
            ],
            data: points,
            links: linkss,
            lineStyle: { color: "source", width: 2, curveness: 0 },
            force: {
              repulsion: 100, // 节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
              gravity: 0.03, // 节点受到的向中心的引力因子。该值越大节点越往中心点靠拢。
              edgeLength: 150, // 边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
              layoutAnimation: true
              // edgeLength: [50,100],
            },
            focusNodeAdjacency: true,
            symbolSize: 70,
            emphasis: {
              focus: "adjacency",
              label: {
                position: "right",
                show: true
              }
            }
          }
        ],
        toolbox: {
          show: true,
          feature: {
            restore: { show: true }, // 还原，复位原始图
            saveAsImage: { show: true },
            myFull: {
              show: true,
              title: "全屏",
              icon: "path://M432.45,595.444c0,2.177-4.661,6.82-11.305,6.82c-6.475,0-11.306-4.567-11.306-6.82s4.852-6.812,11.306-6.812C427.841,588.632,432.452,593.191,432.45,595.444L432.45,595.444z M421.155,589.876c-3.009,0-5.448,2.495-5.448,5.572s2.439,5.572,5.448,5.572c3.01,0,5.449-2.495,5.449-5.572C426.604,592.371,424.165,589.876,421.155,589.876L421.155,589.876z M421.146,591.891c-1.916,0-3.47,1.589-3.47,3.549c0,1.959,1.554,3.548,3.47,3.548s3.469-1.589,3.469-3.548C424.614,593.479,423.062,591.891,421.146,591.891L421.146,591.891zM421.146,591.891",
              onclick: () => {
                // 全屏查看
                if (domName.requestFullScreen) {
                  // HTML W3C 提议
                  domName.requestFullScreen()
                } else if (domName.msRequestFullscreen) {
                  // IE11
                  domName.msRequestFullScreen()
                } else if (domName.webkitRequestFullScreen) {
                  // Webkit
                  domName.webkitRequestFullScreen()
                } else if (domName.mozRequestFullScreen) {
                  // Firefox
                  domName.mozRequestFullScreen()
                }
                // 退出全屏
                if (domName.requestFullScreen) {
                  document.exitFullscreen()
                } else if (domName.msRequestFullScreen) {
                  document.msExitFullscreen()
                } else if (domName.webkitRequestFullScreen) {
                  document.webkitCancelFullScreen()
                } else if (domName.mozRequestFullScreen) {
                  document.mozCancelFullScreen()
                }
              }
            }
          }
        }
      }
      option && myChart.setOption(option)
      const res = await reqMoreData()
      const morePoints = res.data.points
      option.series[0].data.push(...morePoints)
      const moreLinks = res.data.links
      option.series[0].links.push(...moreLinks)
      const data = option.series[0]
      console.log("*********&&&&&&&&&&&&&&")
      console.log("moreLinks", moreLinks)
      const hidenode = {}
      console.log("ALLcount", allData)
      console.log("miancount", mianCount)
      for (let i = 0; i < mianCount.length; i++) {
        const n = mianCount[i].id
        hidenode[n] = []
        console.log("$$$$$$$$$$$$$$$$$$$")
        console.log("序号", n)
        console.log("$$$$$$$$$$$$$$$$$$$")
        const nodename = []
        data.links.forEach((item) => {
          console.log("what item", item)
          if (item.source == n && item.target > 200) {
            console.log("item.source == n", item)
            nodename.push(item.target)
            console.log("nodename", nodename)
          }
        })
        // 删除需要隐藏的节点数据
        // 遍历需要隐藏的书院id
        nodename.forEach((item) => {
          console.log("&&&&&&&&&", item)
          // 遍历所有的节点
          for (let i = 0; i < data.data.length; i++) {
            if (data.data[i].id == item) {
              hidenode[n].push(data.data[i])
              data.data.splice(i, 1)
              i = i - 1
            }
          }
        })
      }
      myChart.on("click", async function (param) {
        console.log(param.data)
        if (param.dataType == "node") {
          // console.log(params.data.name);
          const data = option.series[0]
          const x = param.data.id
          // 判断节点是否隐藏
          console.log("param.data.id", param.data.id)
          console.log("x", x)
          console.log("hidenode[param.data.id]", hidenode[param.data.id])
          if (hidenode[x] == undefined || hidenode[x] == null) {
            hidenode[x] = []
            const nodename = []
            console.log("data.links", data.links)
            // 获取需要折叠的节点
            data.links.forEach((item) => {
              console.log("????????", item)
              console.log("???item.source", item.source)
              console.log("???item.target", item.target)
              if (item.source == x && item.target > 200) {
                // 把id放进来
                console.log("**********&&&&&&%%%%%%%%########")
                nodename.push(item.target)
              }
            })
            // 删除需要隐藏的节点数据
            // 遍历需要隐藏的书院id
            console.log("删除前：", data.data)
            console.log("data.data", data.data)
            console.log("nodename", nodename)
            nodename.forEach((item) => {
              console.log("item", item)
              // 遍历所有的节点
              console.log("&&&&&&&&&&&&&&&&")
              console.log("data.data", data.data)
              for (let i = 0; i < data.data.length; i++) {
                if (data.data[i].id == item) {
                  hidenode[x].push(data.data[i])
                  data.data.splice(i, 1)
                  i = i - 1
                }
              }
            })
            console.log("删除后：", data.data)
          } else {
            hidenode[x].forEach((item) => {
              data.data.push(item)
              console.log("hidenode[param.data.name]不为空的item", item)
            })
            delete hidenode[x]
          }
          // 显示被隐藏的节点
          console.log("隐藏结点", hidenode)
          option.series[0].data = data.data
        }
        myChart.setOption(option)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.connection {
  margin: 0;
  background-image: url(../../assets/assets/Zcml/zcml-dt2.png);
  background-size: cover;
  position: relative;
}
</style>
