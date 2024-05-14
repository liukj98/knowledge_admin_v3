<template>
  <div class="db-container">
    <div class="databases">
      <el-select v-model="dbname" placeholder="请选择数据库" style="width: 240px">
        <el-option v-for="item in dblist" :key="item.value" :label="item.label" :value="item.value" />
      </el-select>
    </div>
    <div>
      <el-tabs v-model="activeName" class="demo-tabs">
        <el-tab-pane label="数据库查询" name="first">
          <div class="data-lable">
            <span class="sp">查询SPARQL</span>
            <span class="ls">上一条查询</span>
          </div>
          <div class="editor">
            <Codemirror
              v-model:value="code"
              :options="cmOptions"
              border
              ref="cmRef"
              height="200"
              width="400"
              @ready="onReady"
            />
          </div>
          <div class="event" style="width: 400px; display: flex; justify-content: flex-end">
            <el-button type="primary" @click="handleSearch">查询</el-button>
          </div>
        </el-tab-pane>
        <el-tab-pane label="历史记录" name="second">历史记录</el-tab-pane>
      </el-tabs>
    </div>

    <div id="chart2" style="width: 100%; height: 400px; margin-top: 24px" />
  </div>
</template>

<script lang="ts" setup>
import { ElSelect } from "element-plus"
import { ref, onMounted } from "vue"
import "codemirror/mode/javascript/javascript.js"
import Codemirror from "codemirror-editor-vue3"
import type { CmComponentRef } from "codemirror-editor-vue3"
import type { Editor, EditorConfiguration } from "codemirror"
import * as echarts from "echarts"
import { getDatabasesDataApi, getDatabasesQueryDataApi } from "@/api/zstp/database-management"
import type { GetDatabasesParams } from "@/api/zstp/database-management/types/databases"

function handleDbname(dbnames: GetDatabasesParams) {
  const data = []
  for (let i = 0; i < dbnames.length; i++) {
    data.push({
      value: dbnames[i].database,
      lable: dbnames[i].database
    })
  }
  return data
}

onMounted(async () => {
  // 获取所有数据库名
  const res = await getDatabasesDataApi()
  console.log(res)
  const ds = handleDbname(res.data)
  console.log(ds)
  dblist.value = ds
})

const dbname = ref("")

const dblist = ref([
  {
    value: "Option1",
    label: "Option1"
  },
  {
    value: "Option2",
    label: "Option2"
  }
])

const activeName = ref("first")

const nodes = ref([
  {
    id: "李白",
    name: "李白"
  },
  {
    id: "诗人",
    name: "诗人"
  }
])
const links = ref([
  {
    source: "李白",
    value: "http://www.w3.org/1999/02/22-rdf-syntax-ns#type",
    target: "诗人"
  }
])

function chartsInit() {
  const chartDom = document.getElementById("chart2")
  const myChart = echarts.init(chartDom)

  const option = {
    color: ["#dc5125", "#ec6565", "#f8c75a", "#72bedc", "#536fc4", "#90ca74", "#c678ee", "#F56C6C", "#538FF6"],
    legend: {
      textStyle: {
        color: "#666666",
        fontSize: 14
      },
      formatter: (name: string) => {
        return echarts.format.truncateText(name, 40, "14px", "…")
      }
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
        hoverAnimation: true,
        label: {
          show: true,
          fontSize: 14,
          color: "#333333"
        },
        draggable: true,
        roam: true,
        data: nodes.value,
        links: links.value,
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
        saveAsImage: { show: true }
      }
    }
  }

  option && myChart.setOption(option)
}

const code = ref("")
const cmRef = ref<CmComponentRef>()
const cmOptions: EditorConfiguration = {
  mode: "text/sql"
}

const onReady = (cm: Editor) => {
  console.log(cm.focus())
}

function handleGrapData(graphObj: any) {
  const nodes = []
  const links = []
  if (graphObj.nodes && graphObj.nodes.length > 0) {
    const _nodes = graphObj.nodes
    for (let i = 0; i < _nodes.length; i++) {
      const node = _nodes[i]
      nodes.push({
        id: node.id,
        name: node.label
      })
    }
  }
  if (graphObj.links && graphObj.links.length > 0) {
    const _links = graphObj.links
    for (let i = 0; i < _links.length; i++) {
      const link = _links[i]
      links.push({
        source: link.source,
        target: link.target,
        value: link.label
      })
    }
  }
  return {
    nodes,
    links
  }
}

async function handleSearch() {
  console.log(dbname.value)
  console.log(code.value)

  // 传递 sql 语句进行查询操作
  const res = await getDatabasesQueryDataApi({
    dbname: dbname.value,
    sparql: code.value,
    limit: "100",
    type: "1"
  })
  // 处理 nodes 和 links

  const { nodes: _nodes, links: _links } = handleGrapData(res.data)

  nodes.value = _nodes
  links.value = _links

  chartsInit()
}
</script>

<style lang="scss" scoped>
.db-container {
  padding: 20px 10px;
}

.data-lable {
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-left: 8px;
  margin-bottom: 10px;
  .sp {
    font-size: 14px;
    border-left: 4px solid #4674f6;
    padding-left: 6px;
  }
  .ls {
    font-size: 14px;
    text-decoration: underline;
    color: #8ba6f9;
    cursor: pointer;
  }
}
</style>
