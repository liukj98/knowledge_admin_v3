<template>
  <div class="searchcontainer">
    <!-- 大图 -->
    <div class="big-pic">
      <!-- <video src="../../assets/assets/video/ceshi.mp4" autoplay loop muted class="bg-video"></video> -->
      <div class="middle-pic">
        <p class="title">单实体查询</p>
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
      <div style="text-align: center; flex-direction: column; align-items: center">
        <input v-model.trim="title" type="text" placeholder="请输入想查询的实体名称" class="search" />
        <el-button type="submit" class="btnsearch" @click="load()">
          <el-icon><Search /></el-icon
        ></el-button>
        <div class="search-content" style="width: 400px">
          <a
            v-for="item in search"
            :key="item.id"
            class="content"
            @click="load(item.academyName)"
            v-html="highlightHTML(item.academyName, title)"
          />
        </div>
      </div>
      <div style="text-align: center; margin-top: 40px; color: #6c6b6b">
        搜索推荐 :
        <span v-for="item in RecommendList" :key="item.id">
          <router-link class="s" :to="`/profile/index/?id=` + item.id" style="{padding: 2px; color: #e4e7ea}">{{
            item.academyName
          }}</router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
const delay = (function () {
  let timer = 0
  return function (callback, ms) {
    clearTimeout(timer)
    timer = setTimeout(callback, ms)
  }
})()

export default {
  name: "HomeView",
  data() {
    return {
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
      total: 1,
      area: "",
      question: "", // 问答内容
      province: "",

      title: "", // 输入的书院信息
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
  methods: {
    getRandomColor() {
      return "#" + Math.floor(Math.random() * 16777215).toString(16)
    },
    goToAll() {
      // 使用 $router.push 导航到名为 "all" 的路由
      this.$router.push("/profile/all")
    },
    highlightHTML: function (html, searh_key) {
      if (!searh_key) return html
      html = String(html)
      searh_key = String(searh_key)
      html = html.replace(new RegExp(searh_key, "g"), `<span style="color:tomato;font-weight:bold">${searh_key}</span>`)
      return html
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

    questioning(wenda) {
      if (wenda === undefined && this.question === "") {
        this.$message.warning("搜索内容不能为空哦！")
      } else if (wenda) {
        this.$router.push("/search/nlp?nlp=" + wenda)
      } else {
        this.$router.push("/search/nlp?nlp=" + this.question)
      }
    },
    // name——根据title提示的书院名称
    load(name) {
      if (name === undefined && this.title === "") {
        this.$message.warning("搜索内容不能为空哦！")
      } else if (name) {
        this.$router.push("/search?name=" + name)
      } else this.$router.push("/search?name=" + this.title)
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
