<template>
  <div>
    <div class="document">
      <el-row :gutter="80" class="panel-group" justify="center">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-people">
            <svg-icon icon-class="chart" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">三元组数量</div>
            <div class="card-panel-num">
              <numberScroll :value="this.tripleNum" :time="3" />
            </div>
          </div>
        </div>
      </el-row>
      <el-row :gutter="80" class="panel-group" justify="center">
        <div class="card-panel">
          <div class="card-panel-icon-wrapper icon-message">
            <svg-icon icon-class="chart" class-name="card-panel-icon" />
          </div>
          <div class="card-panel-description">
            <div class="card-panel-text">主语数量</div>
            <div class="card-panel-num">
              <numberScroll :value="this.objectNum" :time="3" />
            </div>
          </div>
        </div>
      </el-row>
      <div class="middle-pic">
        <p class="title">图谱展示</p>
        <p class="introduce">
          基于抽取到的知识三元组，进行知识融合处理，构建形成知识图谱，对最终构建的知识图谱进行可视化展示，展示图谱模式、图谱描述、实体数量、关系数量等信息<br />
        </p>
      </div>
    </div>
    <div class="data_info">
      <div class="Info_card" style="display: inline-block; margin-left: 30px">
        <img src="@/assets/zstp/assets/Info_card.png" alt="" />
        <p>机构数量</p>
        <div class="num" style="text-align: center; height: 50px; margin: 8px">
          <span style="color: #538ff6; font-size: 28px">
            <numberScroll :value="this.institutionNum" :time="3" />
          </span>
        </div>
      </div>
      <div class="Info_card" style="display: inline-block">
        <img src="@/assets/zstp/assets/Info_card.png" alt="" />
        <p>人员数量</p>
        <div class="num" style="text-align: center; height: 50px; margin: 8px">
          <span style="color: #538ff6; font-size: 28px"> <numberScroll :value="staffNum" :time="3" /> </span>个
        </div>
      </div>
      <div class="Info_card" style="display: inline-block">
        <img src="@/assets/zstp/assets/Info_card.png" alt="" />
        <p>装备数量</p>
        <div class="num" style="text-align: center; height: 50px; margin: 8px">
          <span style="color: #538ff6; font-size: 28px">
            <numberScroll :value="equipmentNum" :time="3" />
          </span>
        </div>
      </div>
      <div class="Info_card" style="display: inline-block">
        <img src="@/assets/zstp/assets/Info_card.png" alt="" />
        <p>物资数量</p>
        <div class="num" style="text-align: center; height: 50px; margin: 8px">
          <span style="color: #538ff6; font-size: 28px">
            <numberScroll :value="goodsNum" :time="3" />
          </span>
        </div>
      </div>
      <div class="Info_card" style="display: inline-block">
        <img src="@/assets/zstp/assets/Info_card.png" alt="" />
        <p>设施数量</p>
        <div class="num" style="text-align: center; height: 50px; margin: 8px">
          <span style="color: #538ff6; font-size: 28px"> <numberScroll :value="facilityNum" :time="3" /> </span>个
        </div>
      </div>
      <div class="Info_card" style="display: inline-block">
        <img src="@/assets/zstp/assets/Info_card.png" alt="" />
        <p>环境数量</p>
        <div class="num" style="text-align: center; height: 50px; margin: 8px">
          <span style="color: #538ff6; font-size: 28px"> <numberScroll :value="environmentNum" :time="3" /> </span>个
        </div>
      </div>
      <div class="Info_card" style="display: inline-block">
        <img src="@/assets/zstp/assets/Info_card.png" alt="" />
        <p>事件数量</p>
        <div class="num" style="text-align: center; height: 50px; margin: 8px">
          <span style="color: #538ff6; font-size: 28px"> <numberScroll :value="incidentNum" :time="3" /> </span>个
        </div>
      </div>
      <div class="Info_card" style="display: inline-block; margin-right: 30px">
        <img src="@/assets/zstp/assets/Info_card.png" alt="" />
        <p>行动数量</p>
        <div class="num" style="text-align: center; height: 50px; margin: 8px">
          <span style="color: #538ff6; font-size: 28px"> <numberScroll :value="actionNum" :time="3" /> </span>个
        </div>
      </div>
    </div>
    <el-row :gutter="20" style="margin-top: 24px">
      <el-col :span="12">
        <div class="grid-content" style="margin-left: 30px">
          <el-card style="height: 450px">
            <div id="spreed" style="height: 380px" />
          </el-card>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content" style="margin-right: 30px">
          <el-card style="height: 450px">
            <span style="font-weight: bold">图谱关系模式</span>
            <br />
            <pie-charts />
          </el-card>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// import { reqCount } from "@/api"
import * as echarts from "echarts"
import NumberScroll from "@/views/zstp/show/components/CountTo.vue"
import PieCharts from "@/views/zstp/show/components/Pie.vue"
import { getCount } from "@/api/zstp/data-integeration/index.ts"
export default {
  components: { PieCharts, NumberScroll },
  data() {
    return {
      tripleNum: "",
      objectNum: "",
      institutionNum: "",
      staffNum: "",
      equipmentNum: "",
      goodsNum: "",
      facilityNum: "",
      environmentNum: "",
      incidentNum: "",
      actionNum: "",
      subjectNum: "",
      predicateNum: "",
      datas: []
    }
  },
  async created() {
    const count = await getCount()
    this.tripleNum = count.data.tripleAmount
    console.log("tripleNum:", this.tripleNum)
    this.objectNum = count.data.subjectAmount
    this.institutionNum = count.data.institutionAmount
    this.staffNum = count.data.personnelAmount
    this.equipmentNum = count.data.equipmentAmount
    this.goodsNum = count.data.materialAmount
    this.facilityNum = count.data.facilityAmount
    this.environmentNum = count.data.envAmount
    this.incidentNum = count.data.eventAmount
    this.actionNum = count.data.actionAmount
    console.log("count.data")
    console.log(count.data)
    console.log(this.datas[2])
    await this.init(document.getElementById("spreed"))
  },
  mounted() {
    this.init(document.getElementById("spreed"))
  },
  methods: {
    init() {
      const spreedDom = document.getElementById("spreed")
      const spreedChart = echarts.init(spreedDom)
      console.log("********")
      console.log(this.datas)
      const option = {
        color: ["rgb(248,198,87)", "rgb(236,101,101)", "rgb(114,190,220)", "rgb(144,202,116)"],
        title: {
          text: "各实体关系数目",
          textStyle: {
            color: "#112233",
            fontSize: "16"
          }
        },
        grid: {
          x: 60, // 左
          y: 60, // 上
          x2: 60, // 右
          y2: 60 // 下
        },
        xAxis: {
          data: ["机构", "人员", "装备", "物资", "设施", "环境", "事件", "行动"],
          axisLabel: {
            rotate: -25,
            color: "rgb(0,0,0)",
            fontSize: "14",
            interval: 0
          }
        },
        yAxis: {
          type: "value"
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow"
          }
        },
        dataGroupId: "",
        animationDurationUpdate: 500,
        series: {
          type: "bar",
          id: "area",
          data: [
            {
              value: this.institutionNum,
              groupId: "机构"
            },
            {
              value: this.staffNum,
              groupId: "人员"
            },
            {
              value: this.equipmentNum,
              groupId: "装备"
            },
            {
              value: this.goodsNum,
              groupId: "物资"
            },
            {
              value: this.facilityNum,
              groupId: "设施"
            },
            {
              value: this.environmentNum,
              groupId: "环境"
            },
            {
              value: this.incidentNum,
              groupId: "事件"
            },
            {
              value: this.actionNum,
              groupId: "行动"
            }
          ],
          itemStyle: {
            normal: {
              color: function (params) {
                const colorList = [
                  "#1dabe2",
                  "#609ccf",
                  "#3e8754",
                  "#4965ae",
                  "#63a19e",
                  "#27ccd5",
                  "#41b996",
                  "#2682c6",
                  "#73c0de"
                ]
                return colorList[params.dataIndex]
              }
            }
          },
          universalTransition: {
            enabled: true,
            divideShape: "clone"
          }
        }
      }
      option && spreedChart.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
.panel-group {
  .card-panel-col {
    margin-right: 0;
    margin-top: 10px;
  }

  .card-panel {
    background-image: url("../../../assets/zstp/assets/pic_2.png");
    background-size: cover;
    position: relative;
    margin-top: 32px;
    margin-left: 1100px;
    height: 108px;
    width: 350px;
    cursor: pointer;
    font-size: 12px;
    overflow: hidden;
    color: #666;
    box-shadow: 4px 4px 40px rgba(0, 0, 0, 0.05);
    border-color: rgba(0, 0, 0, 0.05);

    &:hover {
      .card-panel-icon-wrapper {
        color: #fff;
      }

      .icon-people {
        background: #40c9c6;
      }

      .icon-message {
        background: #36a3f7;
      }

      .icon-money {
        background: #f4516c;
      }

      .icon-shopping {
        background: #34bfa3;
      }
    }

    .icon-people {
      color: #40c9c6;
    }

    .icon-message {
      color: #36a3f7;
    }

    .icon-money {
      color: #f4516c;
    }

    .icon-shopping {
      color: #34bfa3;
    }

    .card-panel-icon-wrapper {
      float: left;
      margin: 14px 0 0 14px;
      padding: 16px;
      transition: all 0.38s ease-out;
      border-radius: 6px;
    }

    .card-panel-icon {
      float: left;
      font-size: 48px;
    }

    .card-panel-description {
      font-weight: bold;
      margin: 26px 26px 26px 130px;

      .card-panel-text {
        font-weight: bold;
        color: #333333;
        font-size: 20px;
        margin-bottom: 12px;
      }

      .card-panel-num {
        font-size: 24px;
      }
    }
  }
}

@media (max-width: 550px) {
  .card-panel-description {
    display: none;
  }

  .card-panel-icon-wrapper {
    float: none !important;
    width: 100%;
    height: 100%;
    margin: 0 !important;

    .svg-icon {
      display: block;
      margin: 14px auto !important;
      float: none !important;
    }
  }
}

.main {
  margin-top: 50px;
  margin-left: 100px;
  /* float: left; */
}

.data_info {
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 25px;
  box-sizing: border-box;
}

.card-panel-text {
  line-height: 18px;
  color: rgba(0, 0, 0, 0.45);
  font-size: 16px;
  margin-bottom: 12px;
}

.Info_card {
  width: 220px;
  height: 120px;
  border: 1px solid #ebeef5;
  border-radius: 10px;
  color: #fcfdff;
  transition: 0.3s;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  text-align: center;
  margin-right: 5px;

  img {
    width: 30px;
    height: 30px;
    border-radius: 50%;
  }

  p {
    font-size: 16px;
    color: #666666;
    margin-top: 0;
    margin-bottom: 5px;
  }
}
.el-row {
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.document {
  width: 100%;
  height: 329px;
  margin: 0;
  background-image: url(../../../assets/zstp/assets/Zcml/zcml-dt.png);
  background-size: cover;
  position: relative;

  .middle-pic {
    width: 1294px;
    height: 300px;
    position: absolute;
    top: 0;
    left: 290px;
  }

  .title {
    margin-top: 80px;
    font-size: 36pt;
    color: #333333;
    font-weight: bold;
  }

  .introduce {
    margin-top: 15px;
    width: 600px;
    height: 84px;
    font-size: 16px;
    color: #666666;
  }
}
.btn-group {
  position: absolute;
  right: 580px;
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
    box-shadow: 0 5px 10px 0 rgba(0, 114, 255, 0.17);
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
</style>
