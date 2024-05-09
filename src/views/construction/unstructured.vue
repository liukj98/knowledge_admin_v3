<template>
  <div class="import_bg">
    <div class="import_title_bg">
      <div class="middle-pic">
        <p class="title">非结构化图谱构建</p>
        <p class="introduce">
          对知识图谱本体、关系的类型和属性进行定义和建模，从结构化数据和非结构化数据抽取包含的知识三元组
        </p>
      </div>
      <div class="gjlc">
        <el-steps :active="3" simple class="gjlc_step">
          <p class="gjlc_p">构建流程</p>
          <el-step title="01 查看示例文档" icon="el-icon-edit" class="gjlc_steps" />
          <el-step title="02 上传文件" icon="el-icon-upload" class="gjlc_steps" />
          <el-step title="03 图谱构建完成" icon="el-icon-success" class="gjlc_steps" />
        </el-steps>
      </div>
    </div>
    <el-row>
      <!--      <el-col :span="12"
        ><div class="grid-content">
          <el-card style="margin-left: 30px; margin-right: 10px; margin-top: 32px">
            <span class="g_span">结构化图谱构建</span>
            <div style="text-align: center; margin-top: 20px; margin-bottom: 30px">
              <p style="font-size: 16px">
                请下载<a href="http://8.130.118.133/file/file/example1.xlsx" style="color: #538ff6">示例表格</a
                >，按照表格对应列及格式填写数据！
              </p>
              <el-upload
                ref="upload"
                class="upload-demo"
                :auto-upload="false"
                drag
                accept=".xls,.xlsx"
                limit="1"
                :on-change="submitFile"
                :file-list="fileList"
                name="file"
                action
                multiple
              >
                <i class="el-icon-upload" />
                <div class="el-upload__text">将文件拖到此处，或<em style="color: #538ff6">点击上传</em></div>
                <template v-slot:tip>
                  <div class="el-upload__tip">请上传.xlsx文件或.xls文件，且不超过1M</div>
                </template>
              </el-upload>
              <el-button size="medium" class="btn" @click="importData">导入数据</el-button>
            </div>
          </el-card>
        </div>
      </el-col>-->
      <el-col :span="12"
        ><div class="grid-content">
          <el-card style="margin-left: 10px; margin-right: 30px; margin-top: 32px">
            <span class="g_span">非结构化图谱构建</span>
            <div class="selected_div">
              <el-select v-model="value" class="select" placeholder="请选择实体类型">
                <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
              </el-select>
            </div>
            <div style="text-align: center; margin-top: 20px; margin-bottom: 30px">
              <p style="font-size: 16px">
                请查看<a
                  href="http://8.130.118.133/file/file/example.txt"
                  target="view_window"
                  style="color: #538ff6"
                  download="example2.txt"
                  >示例文档</a
                >，按照示例文档格式上传数据！
              </p>
              <el-upload
                ref="upload"
                class="upload-demo"
                :auto-upload="false"
                drag
                accept=".txt"
                limit="1"
                :on-change="submitTxt"
                :file-list="fileList"
                name="file"
                action
                multiple
              >
                <i class="el-icon-upload" />
                <div class="el-upload__text">将文件拖到此处，或<em style="color: #538ff6">点击上传</em></div>
                <template v-slot:tip>
                  <div class="el-upload__tip">请上传.txt文件，且不超过1M</div>
                </template>
              </el-upload>
              <el-button size="medium" class="btn" @click="importFile">导入文件</el-button>
            </div>
          </el-card>
        </div></el-col
      >
    </el-row>
  </div>
</template>
<script>
// import { batchInputAcademyItem, batchInputFileItem } from "@/api/data"

export default {
  name: "DataImport",
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "机构"
        },
        {
          value: "选项2",
          label: "人员"
        },
        {
          value: "选项3",
          label: "装备"
        },
        {
          value: "选项4",
          label: "物资"
        },
        {
          value: "选项5",
          label: "设施"
        },
        {
          value: "选项2",
          label: "环境"
        },
        {
          value: "选项3",
          label: "事件"
        },
        {
          value: "选项4",
          label: "行动"
        }
      ],
      value: "",
      file: "",
      fileList: [],
      fileName: ""
    }
  },
  methods: {
    submitFile(file) {
      console.log(file)
      if (!/\.(xlsx|xls|XLSX|XLS)$/.test(file.name)) {
        this.$message({
          type: "error",
          message: "上传文件只能为excel文件，且为xlsx,xls格式"
        })
        this.filelist = []
        this.file = ""
      }
      this.file = file.raw
      this.filename = file.name
    },
    submitTxt(file) {
      console.log(file)
      if (!/\.(txt|TXT)$/.test(file.name)) {
        this.$message({
          type: "error",
          message: "上传文件只能为excel文件，且为xlsx,xls格式"
        })
        this.filelist = []
        this.file = ""
      }
      this.file = file.raw
      this.filename = file.name
    },
    importFile() {
      if (this.file === "") {
        this.$message({
          type: "error",
          message: "上传文件不能为空"
        })
      } else if (this.value === "") {
        this.$message({
          type: "error",
          message: "请选择实体类型"
        })
      } else {
        // const formData = new FormData()
        // formData.append("file", this.file)
        // const type = this.value
        // batchInputFileItem(this.file, type).then((res) => {
        // if (res.code === 1) {
        this.$message({
          type: "success",
          message: "上传成功！"
        })
        // } else {
        //   this.$message({
        //     type: "error",
        //     message: "上传数据有误！"
        //   })
        // }
        // })
      }
    },
    importData() {
      if (this.file === "") {
        this.$message({
          type: "error",
          message: "上传文件不能为空"
        })
      } else {
        // const formData = new FormData()
        // formData.append("file", this.file)
        // batchInputAcademyItem(formData).then((res) => {
        //   if (res.code === 1) {
        this.$message({
          type: "success",
          message: "上传成功！"
        })
        // }
        // })
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.btngroup {
  width: 702px;
  height: 60px;
  position: absolute;
  top: 255px;
  left: 240px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .left-btn {
    width: 224px;
    height: 60px;
    background: linear-gradient(306deg, #02bdfc 0%, #0277ff 100%);
    box-shadow: 0px 5px 10px 0px rgba(0, 114, 255, 0.17);
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    .name {
      font-size: 20px;
      font-weight: 500;
      color: #ffffff;
      line-height: 60px;
      margin-left: 51px;
    }

    .left-btn-r {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 42px;
      height: 60px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0px 8px 8px 0px;

      .left-jt {
        margin-top: 23px;
        margin-left: 17px;
      }
    }
  }

  .right-btn {
    width: 224px;
    height: 60px;
    background: #ffffff;
    box-shadow: 0px 5px 10px 0px rgba(0, 114, 255, 0.17);
    border-radius: 10px;
    position: relative;
    cursor: pointer;

    .name {
      font-size: 20px;
      font-weight: 500;
      color: #406dff;
      line-height: 60px;
      margin-left: 51px;
    }

    .right-btn-r {
      position: absolute;
      right: 0px;
      top: 0px;
      width: 42px;
      height: 60px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 0px 8px 8px 0px;

      .right-jt {
        margin-top: 23px;
        margin-left: 17px;
      }
    }
  }
}

.import_bg {
  height: 750px;
  width: 100%;
  background-image: url(../../assets/assets/pic_1.png);
  background-size: cover;
  position: relative;
}

.btn {
  margin-left: 5px;
  background-color: #095ef2;
  color: #ffffff;
  font-size: 16px;
}

.btn:hover {
  background-color: #538ff6;
  color: #ffffff;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.g_span {
  font-weight: bold;
  font-size: 20px;
  color: #333333;
}
.import_title_bg {
  width: 100%;
  height: 340px;
  margin: 0;
  background-image: url(../../assets/assets/Zcml/zcml-dt.png);
  background-size: cover;
  position: relative;

  .gjlc {
    border: 1px solid #ebeef5;
    border-radius: 10px;
    color: #fcfdff;
    transition: 0.3s;
    background-color: #fff;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    width: 80%;
    float: right;
    margin-top: 250px;
    .gjlc_step {
      border-radius: 10px;
      height: 80px;
      margin-right: 0;
    }
    .gjlc_p {
      width: 20%;
      font-size: 28px;
      font-weight: bold;
      margin-right: 50px;
      margin-top: 7px;
      color: #095ef2;
    }
    .gjlc_steps {
      color: #19be68;
    }
  }

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
    width: 1000px;
    height: 84px;
    font-size: 16px;
    color: #666666;
  }
}
.el-step__head.is-finish {
  color: #19be68;
  border-color: #19be68;
}
.el-step__title.is-finish {
  color: #19be68;
}

.el-upload__tip {
  font-size: 12px;
  color: #999999;
  margin-bottom: 3px;
}
.selected_div {
  position: fixed;
  margin-top: 20px;
  width: 200px;
}
.select {
  font-size: 16px;
  color: #666666;
}
</style>
