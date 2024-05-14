export function getGraphData() {
  const links = [
    {
      source: "6",
      target: "1",
      value: "监察"
    },
    {
      source: "1",
      target: "2",
      value: "闯入者"
    },
    {
      source: "5",
      target: "1",
      value: "侦察"
    },
    {
      source: "6",
      target: "5",
      value: "发现"
    },
    {
      source: "1",
      target: "5",
      value: "侦察者"
    },
    {
      source: "5",
      target: "7",
      value: "控制"
    },
    {
      source: "1",
      target: "6",
      value: "监察者"
    }
  ]
  const points = [
    {
      name: "杰伊·塔里埃拉",
      id: 7,
      symbolSize: 70,
      category: "人员"
    },
    {
      name: "美海军EP-3侦察机",
      id: 5,
      symbolSize: 70,
      category: "装备"
    },
    {
      name: "伊拉克战争",
      id: 30,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "北约军事委员会",
      id: 12,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "阿塞拜疆—亚美尼亚战争",
      id: 21,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "第一次海湾战争",
      id: 27,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "德国联邦国防军",
      id: 13,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "巴以冲突",
      id: 22,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "中国海监75号",
      id: 6,
      symbolSize: 70,
      category: "装备"
    },
    {
      name: "朝鲜战争",
      id: 23,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "索马里内战",
      id: 29,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "第三次中东战争",
      id: 26,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "俄乌新一轮冲突",
      id: 9,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "联合国维持和平部队",
      id: 17,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "英国国防部",
      id: 19,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "科索沃战争",
      id: 28,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "第二次纳戈尔诺-卡拉巴赫战争",
      id: 24,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "俄罗斯联邦国防部",
      id: 14,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "美国麦克迪尔空军基地",
      id: 3,
      symbolSize: 70,
      category: "设施"
    },
    {
      name: "加拿大国防部",
      id: 16,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "美国国防部",
      id: 8,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "“和平友谊2023”多国联合演习",
      id: 10,
      symbolSize: 70,
      category: "行动"
    },
    {
      name: "印度国防部",
      id: 18,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "中央军事委员会联合参谋部",
      id: 20,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "吉福兹号",
      id: 2,
      symbolSize: 70,
      category: "装备"
    },
    {
      name: "仁爱礁",
      id: 1,
      symbolSize: 70,
      category: "环境"
    },
    {
      name: "澳大利亚国防部",
      id: 11,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "第二次世界大战",
      id: 25,
      symbolSize: 70,
      category: "事件"
    },
    {
      name: "步枪弹药",
      id: 4,
      symbolSize: 70,
      category: "物资"
    },
    {
      name: "法国国防部",
      id: 15,
      symbolSize: 70,
      category: "机构"
    },
    {
      name: "“神威-2018”海上阅兵",
      id: 31,
      symbolSize: 70,
      category: "行动"
    }
  ]
  const mainCount = [
    {
      id: "1",
      academyName: "仁爱礁",
      corpus:
        "仁爱礁隶属中华人民共和国海南省三沙市，位于南沙群岛美济礁东南约14海里处。在北纬9度39-48分，东经115度51-54分范围内。为一南北长15公里，东西宽约5.6公里的环礁，低潮时大部分露出，北半环较完整，南半环断成数节，形成若干礁门。30吨级船只可进入礁湖。1935年公布名称为汤姆斯第二滩。1947年公布名称为仁爱暗沙。中国渔民一向称其名为“断节”。1983年公布仁爱礁为标准名称。 \r\n2023年8月22日，中国海警船在南沙群岛仁爱礁海域依法对菲律宾运补船和海警船进行严正警告、航路管制。",
      type: "环境"
    },
    {
      id: "2",
      academyName: "吉福兹号",
      corpus:
        "USS加布里埃尔·吉福兹号是美国海军的独立级近海作战舰艇。加布里埃尔·吉福兹号的建造始于2014年4月16日，在阿拉巴马州莫比尔的奥斯塔尔美国船厂进行龙骨铺设。加布里埃尔·吉福兹号于2015年2月26日下水，然后从建造设施移至干船坞。舰艇于2015年6月13日在奥斯塔尔美国船厂举行的一场仪式中举行了命名典礼，美国第二夫人吉尔·拜登担任了舰艇的女子冠名人。舰艇于2016年12月23日交付给美国海军，并于2017年6月10日在得克萨斯州加尔维斯顿正式服役。",
      type: "装备"
    },
    {
      id: "3",
      academyName: "美国麦克迪尔空军基地",
      corpus: "美国麦克迪尔空军基地",
      type: "设施"
    },
    {
      id: "4",
      academyName: "步枪弹药",
      corpus: "步枪弹药",
      type: "物资"
    },
    {
      id: "5",
      academyName: "美海军EP-3侦察机",
      corpus: "美海军EP-3侦察机",
      type: "装备"
    },
    {
      id: "6",
      academyName: "中国海监75号",
      corpus: "中国海监75号",
      type: "装备"
    },
    {
      id: "7",
      academyName: "杰伊·塔里埃拉",
      corpus: "杰伊·塔里埃拉",
      type: "人员"
    },
    {
      id: "8",
      academyName: "美国国防部",
      corpus: "美国国防部",
      type: "机构"
    },
    {
      id: "9",
      academyName: "俄乌新一轮冲突",
      corpus: "俄乌新一轮冲突",
      type: "事件"
    },
    {
      id: "10",
      academyName: "“和平友谊2023”多国联合演习",
      corpus: "“和平友谊2023”多国联合演习",
      type: "行动"
    },
    {
      id: "11",
      academyName: "澳大利亚国防部",
      corpus: "澳大利亚国防部",
      type: "机构"
    },
    {
      id: "12",
      academyName: "北约军事委员会",
      corpus: "北约军事委员会",
      type: "机构"
    },
    {
      id: "13",
      academyName: "德国联邦国防军",
      corpus: "德国联邦国防军",
      type: "机构"
    },
    {
      id: "14",
      academyName: "俄罗斯联邦国防部",
      corpus: "俄罗斯联邦国防部",
      type: "机构"
    },
    {
      id: "15",
      academyName: "法国国防部",
      corpus: "法国国防部",
      type: "机构"
    },
    {
      id: "16",
      academyName: "加拿大国防部",
      corpus: "加拿大国防部",
      type: "机构"
    },
    {
      id: "17",
      academyName: "联合国维持和平部队",
      corpus: "联合国维持和平部队",
      type: "机构"
    },
    {
      id: "18",
      academyName: "印度国防部",
      corpus: "印度国防部",
      type: "机构"
    },
    {
      id: "19",
      academyName: "英国国防部",
      corpus: "英国国防部",
      type: "机构"
    },
    {
      id: "20",
      academyName: "中央军事委员会联合参谋部",
      corpus: "中央军事委员会联合参谋部",
      type: "机构"
    },
    {
      id: "21",
      academyName: "阿塞拜疆—亚美尼亚战争",
      corpus: "阿塞拜疆—亚美尼亚战争",
      type: "事件"
    },
    {
      id: "22",
      academyName: "巴以冲突",
      corpus: "巴以冲突",
      type: "事件"
    },
    {
      id: "23",
      academyName: "朝鲜战争",
      corpus: "朝鲜战争",
      type: "事件"
    },
    {
      id: "24",
      academyName: "第二次纳戈尔诺-卡拉巴赫战争",
      corpus: "第二次纳戈尔诺-卡拉巴赫战争",
      type: "事件"
    },
    {
      id: "25",
      academyName: "第二次世界大战",
      corpus: "第二次世界大战",
      type: "事件"
    },
    {
      id: "26",
      academyName: "第三次中东战争",
      corpus: "第三次中东战争",
      type: "事件"
    },
    {
      id: "27",
      academyName: "第一次海湾战争",
      corpus: "第一次海湾战争",
      type: "事件"
    },
    {
      id: "28",
      academyName: "科索沃战争",
      corpus: "科索沃战争",
      type: "事件"
    },
    {
      id: "29",
      academyName: "索马里内战",
      corpus: "索马里内战",
      type: "事件"
    },
    {
      id: "30",
      academyName: "伊拉克战争",
      corpus: "伊拉克战争",
      type: "事件"
    },
    {
      id: "31",
      academyName: "“神威-2018”海上阅兵",
      corpus: "“神威-2018”海上阅兵",
      type: "行动"
    }
  ]
  const morePoints = [
    {
      name: "35.57米",
      id: 3015,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美军在伊拉克频繁遭受攻击，奥巴马政府决定撤军",
      id: 3390,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "圣地亚哥海军基地",
      id: 2020,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "加拿大国防研究与发展中心",
      id: 3167,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "4个.50口径枪",
      id: 2055,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2015年10月11日以色列国防军和巴勒斯坦人冲突，造成6人死亡和50多人受伤",
      id: 3255,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "快速反应",
      id: 3033,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "DOD或DoD",
      id: 3047,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克",
      id: 3383,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国、英国、澳大利亚、波兰等",
      id: 3393,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联邦国防合同服务",
      id: 3138,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "法国政府",
      id: 3146,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "以色列国防军决定性胜利",
      id: 3323,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1万多名官兵",
      id: 3405,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "法塔赫（1964–2004）",
      id: 3264,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "亚美尼亚山地共和国",
      id: 3240,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克 20000–50000人死亡，75,000人受伤，80000人被俘",
      id: 3349,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "LCS-10",
      id: 2037,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "波斯湾",
      id: 3340,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "英国 莱昂内尔·邓斯特维尔",
      id: 3248,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Austal USA",
      id: 2026,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合指挥中心",
      id: 3062,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "亚美尼亚",
      id: 3298,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "48艘",
      id: 3406,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合国秘书长",
      id: 3179,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1950年6月25日－1953年7月27日（事实上）",
      id: 3272,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克在2006年至2008年期间爆发内战",
      id: 3389,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "198,940名军事人员",
      id: 3212,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中华人民共和国",
      id: 3283,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2016年12月23日",
      id: 2033,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2017年7月5日",
      id: 2019,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "以色列",
      id: 3327,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "吉尔·拜登",
      id: 2031,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "17岁",
      id: 3118,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "572000",
      id: 2015,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "俄罗斯苏维埃联邦社会主义共和国 阿纳托利·伊里奇·格克尔",
      id: 3250,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "菲律宾海岸警卫队参谋长人力资源管理副总指挥",
      id: 3037,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "南沙群岛",
      id: 1999,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克 650,000人",
      id: 3347,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "关岛, 西班牙, 美国本土",
      id: 3014,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "萨达姆被俘并于2006年被处以绞刑",
      id: 3385,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "电子情报战平台",
      id: 3011,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "士兵死亡超过16,000,000人，平民死亡超过45,000,000人，合计死亡超过61,000,000人",
      id: 3319,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "民兵和防卫部",
      id: 3155,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "文职领导结构、联合军事操作、民主控制原则、预算分配、技术创新",
      id: 3053,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "平民死亡103,160－113,728人",
      id: 3400,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊朗在伊拉克内扩张影响力，形成中东冷战局面",
      id: 3392,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1991年1月26日",
      id: 3369,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "40名核心船员外加最多35名任务船员",
      id: 2048,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "艏侧向推进器和非收放式减摇鳍",
      id: 3032,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国家安全事务研究员",
      id: 3042,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "主管维持和平行动的副秘书长 让·皮埃尔·拉克鲁瓦",
      id: 3173,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "约4克",
      id: 3058,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "第二托马斯礁",
      id: 2012,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "约4.75亿美元",
      id: 2027,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "驾控台直接起动主机",
      id: 3031,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "大卫·威廉姆斯，常务秘书",
      id: 3216,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "亚美尼亚 尼科尔·帕希尼扬",
      id: 3301,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "蒂埃里·布尔卡德, 国防参谋长",
      id: 3152,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "索马里",
      id: 3370,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联邦军事、特殊装备及物资供应局",
      id: 3140,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1983年1月1日",
      id: 3051,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "总参战人数约9000万人",
      id: 3318,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "从约旦夺取约旦河西岸地区（包括东耶路撒冷）",
      id: 3325,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "战后伊拉克各地出现反联军叛乱及教派冲突",
      id: 3388,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "英国海洋测绘办公室",
      id: 3219,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1948年至今",
      id: 3251,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "澳大利亚地理空间情报组织",
      id: 3094,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防科学技术实验室",
      id: 3218,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "www.gov.uk/government/organisations/ministry-of-defenc",
      id: 3220,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2017年6月10日",
      id: 2034,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联邦总理（战时）",
      id: 3114,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联军进攻时300,000人，之后153,000人",
      id: 3395,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1948年至今",
      id: 3171,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "索马里民主共和国",
      id: 3372,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "同盟国包括美国、苏联、英国、中国等",
      id: 3314,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "乔治·R·皮尔克斯大将大楼",
      id: 3159,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "mod.gov.i",
      id: 3207,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "朱晓松陆军少将",
      id: 3226,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "368926014",
      id: 2035,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2021年5月7日巴勒斯坦人和以色列军警大规模冲突",
      id: 3257,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1947年8月15日",
      id: 3184,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "塞黑军队撤出科索沃",
      id: 3354,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "反对派武装：邦特兰索马里救国民主阵线、索马里兰索马里全国运动、索马里爱国运动、联合索马里大会、索马里民主阵线",
      id: 3375,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联军未发现萨达姆政权拥有大规模杀伤性武器",
      id: 3387,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "建立朝韩非军事区",
      id: 3276,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海军上校",
      id: 3036,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "土耳其革命派",
      id: 3246,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国战争部",
      id: 3049,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "基础军",
      id: 3109,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "澳大利亚",
      id: 3087,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Allison T56-A-14 涡轮发动机",
      id: 3010,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "北约2人非战斗性伤亡",
      id: 3366,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "汤姆斯第二滩",
      id: 2004,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "返回圣地亚哥",
      id: 2021,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "20万名文职人员 (2014年)",
      id: 3190,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2018年4月12日",
      id: 3401,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国",
      id: 3012,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海军服务部",
      id: 3156,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国家国防法律部门",
      id: 3206,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "罗克珊娜·格林",
      id: 2030,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "承包商阵亡1,554人，负伤及意外受伤43,880人",
      id: 3398,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防研究与发展部",
      id: 3202,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防电子和组件局",
      id: 3217,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中央军委机关第一级职能部门",
      id: 3230,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Bridgemaster-E导航雷达",
      id: 2050,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿塞拜疆 伊利哈姆·阿利耶夫",
      id: 3299,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "eng.mil.ru",
      id: 3141,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "defence.gov.au",
      id: 3096,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "科索沃于2008年独立",
      id: 3353,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "14 英尺/4 米",
      id: 3067,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "比利时布鲁塞尔",
      id: 3097,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合国",
      id: 3180,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "轴心国包括纳粹德国、大日本帝国、意大利王国等",
      id: 3315,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "780千米每小时",
      id: 3021,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "卡斯滕·布鲁尔上将",
      id: 3117,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "南斯拉夫伤亡与损失目前尚无法知道准确性人数",
      id: 3368,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "俄罗斯、乌克兰",
      id: 3071,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海军",
      id: 3107,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "高性能电子情报收集能",
      id: 3023,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中华人民共和国中央军事委员会",
      id: 3229,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "127.4米",
      id: 2041,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "在2000年的人口普查中，基地人口为 2692 人",
      id: 3061,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国与苏联发展成为超级大国，冷战开始",
      id: 3313,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2012年3月16日",
      id: 2025,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "欧洲联盟",
      id: 3401,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "托尼·拉达金爵士，国防参谋长",
      id: 3215,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2,107",
      id: 3123,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1918年3月-1920年",
      id: 3236,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2个Mk44布什马斯特II",
      id: 2058,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2个MH-60R/S海鹰直升机",
      id: 2059,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "40,000名阿塞拜疆人和90,000名亚美尼亚人流离失所",
      id: 3305,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "北京市西城区什刹海街道爱民街社区爱民街2号院",
      id: 3233,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "76架",
      id: 3407,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "堪培拉",
      id: 3088,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "58.42亿欧元（2022年）",
      id: 3124,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合国/北约维和部队进驻科索沃至2008年",
      id: 3355,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "22人",
      id: 3007,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联邦军事技术合作服务",
      id: 3136,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿吉米·塞库",
      id: 3364,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "华盛顿州西雅图",
      id: 2022,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2014年4月16日",
      id: 2028,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "P-3奥立安反潜巡逻机",
      id: 3001,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿尔察赫共和国",
      id: 3297,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "EP-3A, EP-3B, EP-3E",
      id: 3013,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "劳埃德·奥斯汀",
      id: 3050,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防账目部或国防总账目监督",
      id: 3205,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克 萨达姆·侯赛因",
      id: 3345,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "16,272人 (2020年)",
      id: 3089,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿塞拜疆 萨马德·贝伊·穆罕默达罗夫",
      id: 3249,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "综合性能优越的千吨级公务",
      id: 3034,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "EC-121星座电子情报侦察机",
      id: 3002,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "30.36米",
      id: 3016,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "14英尺",
      id: 2043,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "北纬 27°50′58″N，西经 82°31′16″",
      id: 3066,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "我国在俄乌冲突中持中立态度，不支持乌克兰，也不支持俄罗斯。希望通过自身的不断努力，双方能够尽快实现停火。",
      id: 3077,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "大英帝国（仅参加巴库战役）",
      id: 3242,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "列表",
      id: 3126,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "退伍军人福利部",
      id: 3203,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "政治学博士学位",
      id: 3041,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "世界和平",
      id: 3182,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "10.27米",
      id: 3017,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "埃及 纳赛尔",
      id: 3335,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "15公里",
      id: 2002,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Second Thomas Shoal",
      id: 2010,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2022年2月23日",
      id: 3072,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "140万名现役人员 (2023年)",
      id: 3188,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "断节",
      id: 2011,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Je Suis Prest - 我已准备就绪",
      id: 2038,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "俄罗斯帝国战争部 (1802–1917年)",
      id: 3130,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "战争学院 (1717–1802年)",
      id: 3131,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "同盟国领袖包括美国的富兰克林·罗斯福、苏联的约瑟夫·斯大林、英国的温斯顿·丘吉尔、中华民国大陆时期的蒋中正",
      id: 3316,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中国共产党中央军事委员会",
      id: 3228,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "加比·吉福兹",
      id: 2024,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "陆、海、空特别行动、维和任务",
      id: 3176,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "配置安保系统和船舶网络系统",
      id: 3029,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "4,400千米",
      id: 3022,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "亚美尼亚民主共和国",
      id: 3239,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "埃及",
      id: 3328,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合反恐与维护海上安全军事行动",
      id: 3081,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克 艾哈迈德·哈桑·贝克尔",
      id: 3338,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "约5.6公里",
      id: 2003,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "693亿美元 (2014年)",
      id: 3134,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Wir Dienen Deutschland（我们服务德国）",
      id: 3103,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "全金属弹头或其他专门设计的弹头",
      id: 3055,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1939年9月1日－1945年9月2日",
      id: 3307,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "理查德·马尔斯",
      id: 3091,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2,307吨轻载，3,104吨满载，797吨载重",
      id: 2040,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "广东湛江",
      id: 3080,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "停电、网络攻击、静默状态、机场关闭、居民撤离等",
      id: 3075,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "巴拉德六边形 巴黎第十五区, 法兰西共和国",
      id: 3148,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中央军委主席：习近平",
      id: 3403,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "徐起零陆军上将",
      id: 3222,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联军胜利，科威特复国",
      id: 3341,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "包括通信情报机舱和飞行甲板",
      id: 3018,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "亚美尼亚、阿塞拜疆",
      id: 3237,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "南斯拉夫联盟共和国",
      id: 3351,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1955年11月12日",
      id: 3104,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "全巴勒斯坦保护国（1948–1959）",
      id: 3261,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "61,400千克",
      id: 3009,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿塞拜疆民主共和国",
      id: 3243,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "纳戈尔诺-卡拉巴赫、亚美尼亚、阿塞拜疆",
      id: 3293,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "白羊座Ⅱ",
      id: 3000,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合国安全理事会",
      id: 3174,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1个SeaRAM 11单元导弹发射器",
      id: 2056,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "三沙市",
      id: 2014,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "4,300海里",
      id: 2046,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防生产部",
      id: 3201,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克安全部队阵亡17,690人，负伤40,000人以上",
      id: 3396,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "萨米尔·V·卡马特博士, 国防研究与发展秘书",
      id: 3197,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "荣誉格兰特·夏普斯议员",
      id: 3214,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "多国部队阵亡4,809人，负伤32,753人以上",
      id: 3397,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1.4% (2022年)",
      id: 3125,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "叙利亚 阿萨德",
      id: 3336,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "70万名预备役人员 (2023年)",
      id: 3189,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "纳粹德国、意大利王国和大日本帝国灭亡",
      id: 3310,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1717年作为战争学院",
      id: 3127,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "空军中将Janusz Adamcza",
      id: 3102,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国、英国、法国、沙特阿拉伯、埃及、科威特",
      id: 3342,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "加拿大武装部队住房机构",
      id: 3168,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "几百到数千米",
      id: 3056,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "基地组织、青年党、境外圣战者、伊斯兰党、伊斯兰国",
      id: 3378,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1947年10月31日",
      id: 3142,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "拉杰纳特·辛格",
      id: 3192,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防部",
      id: 3200,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2015年6月13日",
      id: 2032,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "哈辛·塔奇",
      id: 3362,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "182,140人（2023年）",
      id: 3121,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中国人民志愿军",
      id: 3282,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Sea Giraffe 3D地面/空中雷达",
      id: 2049,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克",
      id: 3343,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海洋安全、地缘政治、国际法和外交政策",
      id: 3043,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "比尔·布莱尔",
      id: 3162,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "苏联国防部 (1946–1991年)",
      id: 3128,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "卡拉巴赫划归阿塞拜疆，但亚美尼亚夺取了赞格祖尔",
      id: 3238,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "11月13日至11月22日",
      id: 3079,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国海军指挥参谋学院战略研究硕士",
      id: 3040,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1942年4月14日",
      id: 3085,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Colonel Lawrence M. Martin, Jr",
      id: 3068,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海军司令员：沈金龙海军中将, 海军政治委员：秦生祥海军中将",
      id: 3404,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "EDO ES-3601电子支援措施系统",
      id: 2052,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "巴勒斯坦自治政府（1994-2004）",
      id: 3262,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1967年6月5日–6月10日",
      id: 3321,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "独立级近海作战舰",
      id: 2023,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "大韩民国",
      id: 3278,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "核电站问题、国际空间站问题、财政援助站问题、克里米亚桥火灾、水电站大坝遭袭、 北溪 管道遭破坏",
      id: 3074,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中国人民解放军总参谋部",
      id: 3234,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "世界包括欧洲、大西洋、中国、太平洋、东南亚、中东、地中海、北非；短期于北美洲和南美洲",
      id: 3308,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "安尼尔·乔汉将军，国防参谋长，军事事务部秘书",
      id: 3194,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "维乔伊·库马尔·辛格, IAS, 国防生产秘书",
      id: 3196,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中国",
      id: 2017,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中国",
      id: 3269,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2015年11月",
      id: 3235,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "北约.int",
      id: 3098,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "200-300万（估计）",
      id: 3289,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "丹麦、荷兰、意大利、西班牙",
      id: 3394,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "哈马斯（2007–）",
      id: 3265,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1架Mi-24雌鹿直升机遭击落，造成2死1伤",
      id: 3306,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "轴心国士兵死亡超过8,000,000人，平民死亡超过4,000,000人，合计死亡超过12,000,000人",
      id: 3320,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "54.494亿欧元",
      id: 3150,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "多国防御性部队",
      id: 3175,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿拉伯国家联盟",
      id: 3266,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "www.defense.gouv.fr",
      id: 3153,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "加拿大政府",
      id: 3158,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "战争部",
      id: 3143,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中央军委纪委驻军委联合参谋部纪检组",
      id: 3232,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "争夺利西昌斯克、 解放 卢甘斯克地区、红利曼",
      id: 3073,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克库尔德斯坦成立",
      id: 3386,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "五角大楼",
      id: 3048,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "35,000千克",
      id: 3008,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "军事事务部",
      id: 3204,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "巴勒斯坦领土包括约旦河西岸地区及加沙地带",
      id: 3252,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "轴心国领袖包括纳粹德国的阿道夫·希特勒、意大利王国的贝尼托·墨索里尼、大日本帝国的裕仁",
      id: 3317,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "实现全船网络监控",
      id: 3030,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "约旦",
      id: 3330,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "以色列（有时）",
      id: 3253,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "德国柏林、北莱茵州波恩",
      id: 3112,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "24,000",
      id: 3160,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "无（自2011年7月1日起无限期暂停）",
      id: 3119,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "31.6米",
      id: 2042,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "奥斯曼帝国（仅参加巴库战役）",
      id: 3244,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "格雷格·莫里亚蒂, 国防部秘书",
      id: 3092,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "航空委员会",
      id: 3157,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "朝鲜获取开城，但净损失1,500平方英里领土",
      id: 3277,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "平民 93名阿塞拜疆、54名亚美尼亚被杀",
      id: 3304,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2021年4月有60,000名全职等效(FTE)文职人员",
      id: 3211,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1990年10月3日",
      id: 3105,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "陆军",
      id: 3106,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "韦斯利·克拉克",
      id: 3360,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1964年4月1日作为现代部门",
      id: 3208,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合国军",
      id: 3279,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊朗",
      id: 3267,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "曹青锋少将",
      id: 3224,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "环礁",
      id: 2001,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "纳戈尔诺-卡拉巴赫叛军",
      id: 3241,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中东",
      id: 3322,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1923年",
      id: 3154,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "澳大利亚信号局",
      id: 3095,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "北纬9度39-48分，东经115度51-54分",
      id: 2000,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "菲律宾海岸警卫队副参谋长兼人力资源管理部门负责",
      id: 3044,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国武装部队的最高领导机关",
      id: 3045,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "通信安全建立局",
      id: 3165,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "同盟国胜利",
      id: 3309,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "亚美尼亚 7,755人阵亡",
      id: 3303,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "51.62平方公里",
      id: 2006,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "6.21 lakh crore卢比 (2024年) (相当于780亿美元)",
      id: 3191,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "以美国为首的联军攻占伊拉克，复兴党政权被推翻",
      id: 3384,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "同盟国占领奥地利、德国和日本",
      id: 3311,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "英国、土耳其、意大利",
      id: 3380,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防部部长办公室 、军种部 、参谋长联席会议 、联合作战司令部 、国防机构 、国防部门现场活动",
      id: 3052,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "170,927人死亡，32,585人失踪",
      id: 3285,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "比尔·马修斯",
      id: 3164,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "所有维和行",
      id: 3183,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "林庆国海军少将",
      id: 3227,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "军事僵持",
      id: 3275,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2018年5月14日美国驻以色列耶路撒冷大使馆开幕，示威民众超过50人死亡、至少2000人受伤",
      id: 3256,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1950年6月25日至今（法理上）",
      id: 3273,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1,550,000人（估计）",
      id: 3291,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合国",
      id: 3172,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "490,598-592,177（朝鲜和中国）",
      id: 3287,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "蓝盔部队、蓝盾",
      id: 3181,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "正战区级",
      id: 3231,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "相对较小",
      id: 3059,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "华盛顿哥伦比亚特区",
      id: 3046,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "索马里全国阵线（1991年后）",
      id: 3374,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "巴尔干半岛",
      id: 3356,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "8个RGM-184A海军打击导弹",
      id: 2057,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "第6空中机动联队",
      id: 3070,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防部门 (1938–47年)",
      id: 3185,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "北约和科索沃解放军胜利",
      id: 3352,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "刘振立陆军上将",
      id: 3221,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2015年2月25日",
      id: 2029,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "菲律宾海岸警卫队司令官的海上安全事务顾问",
      id: 3038,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2010年10月26日",
      id: 3026,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "99,245 人装备（2010年11月）",
      id: 3178,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防部长（平时）",
      id: 3113,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "686,500人",
      id: 3288,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "苏维埃俄国（1920年4月以后）",
      id: 3245,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1个BAE系统Mk 110 57毫米炮",
      id: 2054,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1996年—1999年6月10日",
      id: 3350,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "北大西洋公约组织",
      id: 3358,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "巴勒斯坦解放组织",
      id: 3332,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿贾伊·巴特",
      id: 3193,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "加拿大武装部队军事警察",
      id: 3166,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "大约930,000人（2023年）",
      id: 3122,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "进行中",
      id: 3371,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "空军部",
      id: 3145,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "G·萨提什·雷迪博士, 国防部科学顾问",
      id: 3198,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中国、柬埔寨、老挝、马来西亚、泰国、越南",
      id: 3082,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊拉克",
      id: 3331,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防法",
      id: 3169,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1990年8月2日－1991年2月28日",
      id: 3339,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "约每秒三千米",
      id: 3057,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "566,434人",
      id: 3286,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "中央医疗军",
      id: 3110,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2×燃气轮机，2×柴油机，4×水喷射器，可伸缩方位推进器，4×柴油发电机",
      id: 2044,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "吉内特·佩蒂帕斯·泰勒",
      id: 3163,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "网络和信息空间指挥部",
      id: 3111,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "双方皆有伤亡，但俄军事人员伤亡人数远低于乌克兰武装部队人员",
      id: 3076,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "378.2亿澳元 (2019–20年)",
      id: 3090,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "俄罗斯总统",
      id: 3132,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "以色列",
      id: 3259,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "以色列从埃及夺取加沙地带及西奈半岛",
      id: 3324,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "奥拉夫·朔尔茨总理",
      id: 3115,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "21.37平方公里",
      id: 2007,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "渔业资源丰富",
      id: 2008,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "布里恩酒店 巴黎第七区, 法兰西共和国",
      id: 3147,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海监船",
      id: 3024,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2023年10月7日哈马斯发动“阿克萨洪水”军事行动",
      id: 3258,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "鲍里斯·皮斯托瑞斯部长",
      id: 3116,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "塞巴斯蒂安·勒科努",
      id: 3151,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "佛罗里达州希尔斯堡县因特贝半岛顶端坦帕市中心以南8英里处",
      id: 3060,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "亚音速",
      id: 3006,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "景建峰空军中将",
      id: 3223,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "萨达姆政权军阵亡7,600－10,800人",
      id: 3399,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿尔察赫共和国 阿拉伊克·阿鲁秋尼扬",
      id: 3300,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "以色列 列维·艾希科尔",
      id: 3333,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "南沙群岛",
      id: 2013,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "菲律宾海岸警卫队南中国海问题发言人",
      id: 3039,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联军 292人死亡，776人受伤",
      id: 3348,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合实兵演练以异地同步形式在陆上和海上同时展开",
      id: 3084,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "土耳其",
      id: 3268,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿塞拜疆控制了5个城市、4个镇、286个村庄",
      id: 3295,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "不定，124,000 人员",
      id: 3177,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联邦技术和出口控制服务",
      id: 3137,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1962年",
      id: 3004,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿塞拜疆",
      id: 3296,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "吉里达尔·阿拉马内, I.A.S., 国防秘书",
      id: 3195,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "活跃状态",
      id: 2039,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "空缺",
      id: 3101,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2020年9月27日－2020年11月10日",
      id: 3292,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "NGBG",
      id: 2036,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "新德里拉伊辛纳山秘书楼",
      id: 3187,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "40节以上，最高速度47节",
      id: 2045,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "从叙利亚夺取戈兰高地",
      id: 3326,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "300,000–500,000+人",
      id: 3381,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国 诺曼·史瓦兹柯夫",
      id: 3344,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "科索沃解放军",
      id: 3357,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "巴解组织（1964–2004）",
      id: 3263,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "990,968人",
      id: 3290,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Jens Stoltenberg",
      id: 3099,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "330,000人，15–49岁",
      id: 3120,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伦敦威斯敏斯特白厅主楼",
      id: 3210,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "211.6亿加元 (2019–2020年)",
      id: 3161,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "苏联人民国防委员会 (1934–1946年)",
      id: 3129,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "苏雷曼·谢里姆",
      id: 3363,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "最先进的卫星通信和导航系统",
      id: 3028,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "热带海洋气候",
      id: 2016,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "科索沃解放军伤亡不明",
      id: 3367,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2021财年550亿英镑",
      id: 3213,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联军 956,600人，其中美军697,000人",
      id: 3346,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "约旦 侯赛因一世",
      id: 3337,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "方向：4/22，长度：11,421 英尺/3481 米，道面：沥青",
      id: 3065,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联邦政府、非盟特派团、美国",
      id: 3379,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "俄罗斯莫斯科兹纳缅卡街19号",
      id: 3133,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海南省三亚市外海",
      id: 3402,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "南斯拉夫联盟共和国",
      id: 3359,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "朝鲜半岛、黄海、日本海、朝鲜海峡",
      id: 3274,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿塞拜疆胜利",
      id: 3294,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "以色列 摩西·达扬",
      id: 3334,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "索马里国民军",
      id: 3373,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "哈维尔·索拉纳",
      id: 3361,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防情报组织",
      id: 3093,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "210吨",
      id: 2047,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2003年3月20日－2011年12月18日",
      id: 3382,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "亚美尼亚 安德拉尼克·奥扎尼安",
      id: 3247,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "Ren'ai Jiao",
      id: 2009,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "过渡联邦政府、埃塞俄比亚、非盟特派团、维和反恐联盟、先知的信徒",
      id: 3377,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "MacDill Air Force Base",
      id: 3064,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "美国的一个空军基地",
      id: 3063,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "国防协调部",
      id: 3086,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "苏联（非公开参战）",
      id: 3284,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联合国创立，取代国际联盟",
      id: 3312,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "洛克希德·马丁公司",
      id: 3003,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "5.56毫米",
      id: 3054,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "拉西卡·乔贝, IDAS, 财务顾问",
      id: 3199,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "朝鲜",
      id: 3271,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "空军",
      id: 3108,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "1969年起",
      id: 3005,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "包括天线系统和雷达罩",
      id: 3020,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "俄罗斯",
      id: 3270,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "吴兴丰海军少将",
      id: 3225,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "分队联合训练、联合指挥演练和反恐反海盗实兵演练",
      id: 3083,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "叙利亚",
      id: 3329,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "联邦特殊建设局",
      id: 3139,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "朝鲜民主主义人民共和国",
      id: 3281,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "英国政府",
      id: 3209,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "谢尔盖·绍伊古将军",
      id: 3135,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "4个SRBOC曳光和诱饵发射系统",
      id: 2053,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "包括电子支援系统和特殊传感器",
      id: 3019,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海军部",
      id: 3144,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "仁爱暗沙",
      id: 2005,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "10天",
      id: 3078,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "AN/KAX-2电子光学/红外传感器",
      id: 2051,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "www.dnd.ca",
      id: 3170,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "271,268",
      id: 3149,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "阿塞拜疆 2,783人阵亡",
      id: 3302,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "印度政府",
      id: 3186,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "海军中将Rob Bauer",
      id: 3100,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "米洛舍维奇",
      id: 3365,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "菲律宾海岸警卫队高级军官",
      id: 3035,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "设计速度最快的执法公务船",
      id: 3027,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "2014年8月27日加沙地带停火",
      id: 3254,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "权力真空及局势动荡导致极端组织崛起",
      id: 3391,
      symbolSize: 50,
      category: "空"
    },
    {
      name: "伊斯兰法院联盟、奥罗莫解放阵线、索马里再解放联盟、青年党、拉斯坎伯尼纵队、索马里伊斯兰阵线、阿诺里学士",
      id: 3376,
      symbolSize: 50,
      category: "空"
    }
  ]
  const moreLinks = [
    {
      source: "2",
      target: "2039",
      value: "状态"
    },
    {
      source: "26",
      target: "3334",
      value: "指挥官与领导者"
    },
    {
      source: "6",
      target: "3033",
      value: "能力"
    },
    {
      source: "21",
      target: "3250",
      value: "指挥官与领导者"
    },
    {
      source: "28",
      target: "3361",
      value: "指挥官与领导者"
    },
    {
      source: "22",
      target: "3255",
      value: "重要事件"
    },
    {
      source: "27",
      target: "3339",
      value: "日期"
    },
    {
      source: "16",
      target: "3155",
      value: "前身机构"
    },
    {
      source: "28",
      target: "3368",
      value: "伤亡与损失"
    },
    {
      source: "14",
      target: "3127",
      value: "成立"
    },
    {
      source: "18",
      target: "3204",
      value: "下属机构"
    },
    {
      source: "28",
      target: "3353",
      value: "结果"
    },
    {
      source: "5",
      target: "3009",
      value: "最大起飞重量"
    },
    {
      source: "18",
      target: "3193",
      value: "副部长"
    },
    {
      source: "17",
      target: "3176",
      value: "功能"
    },
    {
      source: "14",
      target: "3141",
      value: "网站"
    },
    {
      source: "27",
      target: "3348",
      value: "伤亡与损失"
    },
    {
      source: "31",
      target: "3403",
      value: "领导人"
    },
    {
      source: "7",
      target: "3037",
      value: "角色"
    },
    {
      source: "19",
      target: "3213",
      value: "年度预算"
    },
    {
      source: "15",
      target: "3150",
      value: "年度预算"
    },
    {
      source: "2",
      target: "2058",
      value: "武器装备"
    },
    {
      source: "2",
      target: "2030",
      value: "赞助者"
    },
    {
      source: "11",
      target: "3092",
      value: "部门执行官"
    },
    {
      source: "16",
      target: "3169",
      value: "关键文件"
    },
    {
      source: "5",
      target: "3010",
      value: "发动机型号"
    },
    {
      source: "26",
      target: "3333",
      value: "指挥官与领导者"
    },
    {
      source: "25",
      target: "3314",
      value: "参战方"
    },
    {
      source: "7",
      target: "3044",
      value: "职位"
    },
    {
      source: "28",
      target: "3360",
      value: "指挥官与领导者"
    },
    {
      source: "13",
      target: "3119",
      value: "征兵役期"
    },
    {
      source: "1",
      target: "2002",
      value: "长度"
    },
    {
      source: "22",
      target: "3256",
      value: "重要事件"
    },
    {
      source: "20",
      target: "3221",
      value: "主要领导"
    },
    {
      source: "23",
      target: "3289",
      value: "被杀害的平民总数"
    },
    {
      source: "5",
      target: "3000",
      value: "别称"
    },
    {
      source: "28",
      target: "3351",
      value: "地点"
    },
    {
      source: "18",
      target: "3189",
      value: "员工"
    },
    {
      source: "7",
      target: "3038",
      value: "角色"
    },
    {
      source: "14",
      target: "3133",
      value: "总部"
    },
    {
      source: "27",
      target: "3349",
      value: "伤亡与损失"
    },
    {
      source: "8",
      target: "3052",
      value: "机构组成"
    },
    {
      source: "18",
      target: "3205",
      value: "下属机构"
    },
    {
      source: "23",
      target: "3012",
      value: "参战方"
    },
    {
      source: "7",
      target: "3043",
      value: "研究领域"
    },
    {
      source: "13",
      target: "3401",
      value: "外国供应商"
    },
    {
      source: "6",
      target: "3030",
      value: "功能"
    },
    {
      source: "1",
      target: "2004",
      value: "1935年名称"
    },
    {
      source: "2",
      target: "2046",
      value: "航程"
    },
    {
      source: "2",
      target: "2031",
      value: "赞助者"
    },
    {
      source: "9",
      target: "3075",
      value: "冲突影响"
    },
    {
      source: "28",
      target: "3352",
      value: "结果"
    },
    {
      source: "16",
      target: "3157",
      value: "前身机构"
    },
    {
      source: "2",
      target: "2034",
      value: "服役日期"
    },
    {
      source: "26",
      target: "3336",
      value: "指挥官与领导者"
    },
    {
      source: "22",
      target: "3267",
      value: "支持方"
    },
    {
      source: "5",
      target: "3008",
      value: "空重"
    },
    {
      source: "18",
      target: "3202",
      value: "下属机构"
    },
    {
      source: "4",
      target: "3059",
      value: "穿透力"
    },
    {
      source: "17",
      target: "3172",
      value: "国家或地区"
    },
    {
      source: "28",
      target: "3363",
      value: "指挥官与领导者"
    },
    {
      source: "5",
      target: "3012",
      value: "所属国家"
    },
    {
      source: "23",
      target: "3273",
      value: "日期"
    },
    {
      source: "27",
      target: "3342",
      value: "参战方"
    },
    {
      source: "18",
      target: "3188",
      value: "员工"
    },
    {
      source: "22",
      target: "3257",
      value: "重要事件"
    },
    {
      source: "2",
      target: "2051",
      value: "传感器和处理系统"
    },
    {
      source: "8",
      target: "3046",
      value: "位置"
    },
    {
      source: "30",
      target: "3389",
      value: "结果"
    },
    {
      source: "14",
      target: "3132",
      value: "管辖权"
    },
    {
      source: "29",
      target: "3370",
      value: "地点"
    },
    {
      source: "16",
      target: "3164",
      value: "部门执行官"
    },
    {
      source: "26",
      target: "3322",
      value: "地点"
    },
    {
      source: "25",
      target: "3315",
      value: "参战方"
    },
    {
      source: "2",
      target: "2056",
      value: "武器装备"
    },
    {
      source: "6",
      target: "3032",
      value: "设备"
    },
    {
      source: "1",
      target: "2010",
      value: "外文名"
    },
    {
      source: "1",
      target: "2007",
      value: "礁坪面积"
    },
    {
      source: "26",
      target: "3335",
      value: "指挥官与领导者"
    },
    {
      source: "3",
      target: "3068",
      value: "司令员"
    },
    {
      source: "16",
      target: "3156",
      value: "前身机构"
    },
    {
      source: "26",
      target: "3323",
      value: "结果"
    },
    {
      source: "3",
      target: "3070",
      value: "所有者"
    },
    {
      source: "22",
      target: "3266",
      value: "支持方"
    },
    {
      source: "1",
      target: "2005",
      value: "1947年名称"
    },
    {
      source: "30",
      target: "3388",
      value: "结果"
    },
    {
      source: "13",
      target: "3115",
      value: "总理"
    },
    {
      source: "28",
      target: "3362",
      value: "指挥官与领导者"
    },
    {
      source: "8",
      target: "3045",
      value: "地位"
    },
    {
      source: "14",
      target: "3140",
      value: "下属机构"
    },
    {
      source: "25",
      target: "3320",
      value: "伤亡与损失"
    },
    {
      source: "14",
      target: "3129",
      value: "前身机构"
    },
    {
      source: "18",
      target: "3203",
      value: "下属机构"
    },
    {
      source: "10",
      target: "3081",
      value: "课题"
    },
    {
      source: "24",
      target: "3306",
      value: "俄军损失"
    },
    {
      source: "2",
      target: "2037",
      value: "舷号"
    },
    {
      source: "22",
      target: "3258",
      value: "重要事件"
    },
    {
      source: "14",
      target: "3128",
      value: "前身机构"
    },
    {
      source: "1",
      target: "2006",
      value: "环礁面积"
    },
    {
      source: "27",
      target: "3343",
      value: "参战方"
    },
    {
      source: "17",
      target: "3183",
      value: "参与战役"
    },
    {
      source: "3",
      target: "3061",
      value: "规模"
    },
    {
      source: "2",
      target: "2042",
      value: "宽度"
    },
    {
      source: "13",
      target: "3126",
      value: "本国供应商"
    },
    {
      source: "2",
      target: "2057",
      value: "武器装备"
    },
    {
      source: "13",
      target: "3125",
      value: "预算占GDP百分比"
    },
    {
      source: "23",
      target: "3272",
      value: "日期"
    },
    {
      source: "17",
      target: "3174",
      value: "部门"
    },
    {
      source: "5",
      target: "3006",
      value: "飞行速度"
    },
    {
      source: "20",
      target: "3228",
      value: "上级机构"
    },
    {
      source: "24",
      target: "3297",
      value: "参战方"
    },
    {
      source: "30",
      target: "3387",
      value: "结果"
    },
    {
      source: "20",
      target: "3233",
      value: "实际地址"
    },
    {
      source: "27",
      target: "3345",
      value: "指挥官与领导者"
    },
    {
      source: "20",
      target: "3235",
      value: "成立时间"
    },
    {
      source: "25",
      target: "3307",
      value: "日期"
    },
    {
      source: "15",
      target: "3144",
      value: "前身机构"
    },
    {
      source: "26",
      target: "3338",
      value: "指挥官与领导者"
    },
    {
      source: "11",
      target: "3090",
      value: "年度预算"
    },
    {
      source: "19",
      target: "3212",
      value: "员工"
    },
    {
      source: "24",
      target: "3292",
      value: "日期"
    },
    {
      source: "22",
      target: "3251",
      value: "日期"
    },
    {
      source: "9",
      target: "3074",
      value: "冲突问题"
    },
    {
      source: "28",
      target: "3365",
      value: "指挥官与领导者"
    },
    {
      source: "16",
      target: "3168",
      value: "子机构"
    },
    {
      source: "7",
      target: "3036",
      value: "军衔"
    },
    {
      source: "16",
      target: "3161",
      value: "年度预算"
    },
    {
      source: "19",
      target: "3220",
      value: "网站"
    },
    {
      source: "26",
      target: "3325",
      value: "领土变更"
    },
    {
      source: "2",
      target: "2054",
      value: "武器装备"
    },
    {
      source: "17",
      target: "3178",
      value: "规模"
    },
    {
      source: "25",
      target: "3317",
      value: "指挥官与领导者"
    },
    {
      source: "1",
      target: "2008",
      value: "临近海域资源"
    },
    {
      source: "16",
      target: "3160",
      value: "员工人数"
    },
    {
      source: "14",
      target: "3134",
      value: "年度预算"
    },
    {
      source: "2",
      target: "2052",
      value: "电子战和诱饵系统"
    },
    {
      source: "30",
      target: "3394",
      value: "支援"
    },
    {
      source: "2",
      target: "2020",
      value: "母港"
    },
    {
      source: "24",
      target: "3298",
      value: "参战方"
    },
    {
      source: "27",
      target: "3344",
      value: "指挥官与领导者"
    },
    {
      source: "20",
      target: "3229",
      value: "上级机构"
    },
    {
      source: "30",
      target: "3386",
      value: "结果"
    },
    {
      source: "29",
      target: "3380",
      value: "支持"
    },
    {
      source: "17",
      target: "3177",
      value: "规模"
    },
    {
      source: "27",
      target: "3340",
      value: "地点"
    },
    {
      source: "15",
      target: "3143",
      value: "前身机构"
    },
    {
      source: "26",
      target: "3337",
      value: "指挥官与领导者"
    },
    {
      source: "19",
      target: "3211",
      value: "员工"
    },
    {
      source: "13",
      target: "3106",
      value: "军事部门"
    },
    {
      source: "23",
      target: "3278",
      value: "参战方"
    },
    {
      source: "5",
      target: "3022",
      value: "最大航程"
    },
    {
      source: "13",
      target: "3124",
      value: "预算"
    },
    {
      source: "2",
      target: "2055",
      value: "武器装备"
    },
    {
      source: "28",
      target: "3364",
      value: "指挥官与领导者"
    },
    {
      source: "5",
      target: "3016",
      value: "翼展"
    },
    {
      source: "24",
      target: "3302",
      value: "伤亡与损失"
    },
    {
      source: "18",
      target: "3187",
      value: "总部"
    },
    {
      source: "25",
      target: "3316",
      value: "指挥官与领导者"
    },
    {
      source: "9",
      target: "3073",
      value: "重要战斗"
    },
    {
      source: "13",
      target: "3117",
      value: "国防军总监"
    },
    {
      source: "26",
      target: "3326",
      value: "领土变更"
    },
    {
      source: "5",
      target: "3023",
      value: "特点"
    },
    {
      source: "31",
      target: "3406",
      value: "参阅舰艇数量"
    },
    {
      source: "27",
      target: "3341",
      value: "结果"
    },
    {
      source: "11",
      target: "3086",
      value: "前身部门"
    },
    {
      source: "12",
      target: "3101",
      value: "副主席"
    },
    {
      source: "13",
      target: "3105",
      value: "当前组编时间"
    },
    {
      source: "16",
      target: "3163",
      value: "副部长"
    },
    {
      source: "26",
      target: "3330",
      value: "参战方"
    },
    {
      source: "3",
      target: "3062",
      value: "指挥中心"
    },
    {
      source: "11",
      target: "3096",
      value: "网站"
    },
    {
      source: "25",
      target: "3313",
      value: "结果"
    },
    {
      source: "17",
      target: "3180",
      value: "驻军／总部"
    },
    {
      source: "16",
      target: "3159",
      value: "总部"
    },
    {
      source: "13",
      target: "3107",
      value: "军事部门"
    },
    {
      source: "2",
      target: "2036",
      value: "呼叫标识"
    },
    {
      source: "31",
      target: "3405",
      value: "参与人数"
    },
    {
      source: "23",
      target: "3279",
      value: "参战方"
    },
    {
      source: "30",
      target: "3400",
      value: "伤亡与损失"
    },
    {
      source: "30",
      target: "3385",
      value: "结果"
    },
    {
      source: "24",
      target: "3303",
      value: "伤亡与损失"
    },
    {
      source: "20",
      target: "3234",
      value: "前身"
    },
    {
      source: "5",
      target: "3017",
      value: "机高"
    },
    {
      source: "18",
      target: "3206",
      value: "下属机构"
    },
    {
      source: "17",
      target: "3171",
      value: "存在时期"
    },
    {
      source: "16",
      target: "3154",
      value: "成立时间"
    },
    {
      source: "19",
      target: "3214",
      value: "负责的国务大臣"
    },
    {
      source: "26",
      target: "3331",
      value: "参战方"
    },
    {
      source: "30",
      target: "3383",
      value: "地点"
    },
    {
      source: "18",
      target: "3186",
      value: "管辖"
    },
    {
      source: "19",
      target: "3215",
      value: "部门高级官员"
    },
    {
      source: "2",
      target: "2032",
      value: "命名日期"
    },
    {
      source: "30",
      target: "3396",
      value: "伤亡与损失"
    },
    {
      source: "1",
      target: "2001",
      value: "特征"
    },
    {
      source: "21",
      target: "3237",
      value: "地点"
    },
    {
      source: "31",
      target: "3407",
      value: "飞机数量"
    },
    {
      source: "17",
      target: "3179",
      value: "直属"
    },
    {
      source: "13",
      target: "3108",
      value: "军事部门"
    },
    {
      source: "31",
      target: "3401",
      value: "日期"
    },
    {
      source: "7",
      target: "3012",
      value: "国籍"
    },
    {
      source: "10",
      target: "3084",
      value: "演习形式"
    },
    {
      source: "2",
      target: "2027",
      value: "造价"
    },
    {
      source: "21",
      target: "3239",
      value: "参战方"
    },
    {
      source: "30",
      target: "3384",
      value: "结果"
    },
    {
      source: "30",
      target: "3395",
      value: "兵力"
    },
    {
      source: "6",
      target: "3034",
      value: "评价"
    },
    {
      source: "15",
      target: "3145",
      value: "前身机构"
    },
    {
      source: "9",
      target: "3071",
      value: "发生地点"
    },
    {
      source: "25",
      target: "3312",
      value: "结果"
    },
    {
      source: "10",
      target: "3082",
      value: "参与国家"
    },
    {
      source: "10",
      target: "3078",
      value: "演习时长"
    },
    {
      source: "19",
      target: "3210",
      value: "总部"
    },
    {
      source: "2",
      target: "2019",
      value: "到达母港日期"
    },
    {
      source: "26",
      target: "3332",
      value: "参战方"
    },
    {
      source: "15",
      target: "3152",
      value: "部门执行官"
    },
    {
      source: "24",
      target: "3304",
      value: "伤亡与损失"
    },
    {
      source: "2",
      target: "3012",
      value: "所属国家"
    },
    {
      source: "22",
      target: "3259",
      value: "参战方"
    },
    {
      source: "5",
      target: "3004",
      value: "首飞时间"
    },
    {
      source: "26",
      target: "3324",
      value: "领土变更"
    },
    {
      source: "11",
      target: "3088",
      value: "总部"
    },
    {
      source: "9",
      target: "3076",
      value: "伤亡情况"
    },
    {
      source: "13",
      target: "3109",
      value: "军事部门"
    },
    {
      source: "11",
      target: "3089",
      value: "员工人数"
    },
    {
      source: "28",
      target: "3356",
      value: "领土变更"
    },
    {
      source: "21",
      target: "3245",
      value: "参战方"
    },
    {
      source: "30",
      target: "3397",
      value: "伤亡与损失"
    },
    {
      source: "21",
      target: "3238",
      value: "结果"
    },
    {
      source: "13",
      target: "3112",
      value: "总司令部地点"
    },
    {
      source: "22",
      target: "3270",
      value: "支持方"
    },
    {
      source: "11",
      target: "3094",
      value: "子机构"
    },
    {
      source: "25",
      target: "3311",
      value: "结果"
    },
    {
      source: "13",
      target: "3123",
      value: "部署人数"
    },
    {
      source: "2",
      target: "2049",
      value: "传感器和处理系统"
    },
    {
      source: "14",
      target: "3136",
      value: "下属机构"
    },
    {
      source: "23",
      target: "3275",
      value: "状态"
    },
    {
      source: "11",
      target: "3087",
      value: "管辖权"
    },
    {
      source: "1",
      target: "2016",
      value: "气候条件"
    },
    {
      source: "12",
      target: "3102",
      value: "国际军事参谋部总监"
    },
    {
      source: "13",
      target: "3121",
      value: "现役人数"
    },
    {
      source: "31",
      target: "3404",
      value: "总指挥"
    },
    {
      source: "28",
      target: "3350",
      value: "日期"
    },
    {
      source: "26",
      target: "3328",
      value: "参战方"
    },
    {
      source: "5",
      target: "3014",
      value: "部署位置"
    },
    {
      source: "18",
      target: "3198",
      value: "部门执行官"
    },
    {
      source: "22",
      target: "3265",
      value: "参战方"
    },
    {
      source: "15",
      target: "3146",
      value: "管辖范围"
    },
    {
      source: "11",
      target: "3091",
      value: "负责部长"
    },
    {
      source: "19",
      target: "3219",
      value: "下属机构"
    },
    {
      source: "5",
      target: "3020",
      value: "外部设备"
    },
    {
      source: "29",
      target: "3376",
      value: "参战方"
    },
    {
      source: "4",
      target: "3054",
      value: "口径"
    },
    {
      source: "1",
      target: "2012",
      value: "别名"
    },
    {
      source: "5",
      target: "3005",
      value: "服役时间"
    },
    {
      source: "2",
      target: "2041",
      value: "长度"
    },
    {
      source: "6",
      target: "3024",
      value: "类型"
    },
    {
      source: "6",
      target: "2017",
      value: "所属"
    },
    {
      source: "18",
      target: "3191",
      value: "年度预算"
    },
    {
      source: "30",
      target: "3398",
      value: "伤亡与损失"
    },
    {
      source: "21",
      target: "3246",
      value: "参战方"
    },
    {
      source: "14",
      target: "3135",
      value: "负责部长"
    },
    {
      source: "23",
      target: "3285",
      value: "死亡和失踪总数"
    },
    {
      source: "25",
      target: "3310",
      value: "结果"
    },
    {
      source: "29",
      target: "3381",
      value: "伤亡与损失"
    },
    {
      source: "9",
      target: "3072",
      value: "开始时间"
    },
    {
      source: "13",
      target: "3103",
      value: "格言"
    },
    {
      source: "16",
      target: "3158",
      value: "管辖权"
    },
    {
      source: "28",
      target: "3357",
      value: "参战方"
    },
    {
      source: "16",
      target: "3165",
      value: "子机构"
    },
    {
      source: "14",
      target: "3137",
      value: "下属机构"
    },
    {
      source: "11",
      target: "3085",
      value: "成立时间"
    },
    {
      source: "11",
      target: "3095",
      value: "子机构"
    },
    {
      source: "23",
      target: "3290",
      value: "韩国人总伤亡人数"
    },
    {
      source: "6",
      target: "3029",
      value: "特点"
    },
    {
      source: "14",
      target: "3131",
      value: "前身机构"
    },
    {
      source: "26",
      target: "3329",
      value: "参战方"
    },
    {
      source: "2",
      target: "2047",
      value: "载重量"
    },
    {
      source: "18",
      target: "3197",
      value: "部门执行官"
    },
    {
      source: "23",
      target: "3291",
      value: "朝鲜人总伤亡人数"
    },
    {
      source: "23",
      target: "3288",
      value: "受伤总数"
    },
    {
      source: "19",
      target: "3216",
      value: "部门高级官员"
    },
    {
      source: "29",
      target: "3377",
      value: "参战方"
    },
    {
      source: "30",
      target: "3399",
      value: "伤亡与损失"
    },
    {
      source: "17",
      target: "3175",
      value: "种类"
    },
    {
      source: "1",
      target: "2000",
      value: "坐标"
    },
    {
      source: "8",
      target: "3048",
      value: "总部"
    },
    {
      source: "20",
      target: "3225",
      value: "参谋长助理"
    },
    {
      source: "13",
      target: "3114",
      value: "总司令"
    },
    {
      source: "16",
      target: "3162",
      value: "负责部长"
    },
    {
      source: "20",
      target: "3231",
      value: "军事级别"
    },
    {
      source: "2",
      target: "2025",
      value: "授奖日期"
    },
    {
      source: "1",
      target: "1999",
      value: "位置"
    },
    {
      source: "4",
      target: "3055",
      value: "弹头类型"
    },
    {
      source: "19",
      target: "3208",
      value: "成立于"
    },
    {
      source: "20",
      target: "3230",
      value: "机构类型"
    },
    {
      source: "13",
      target: "3122",
      value: "备役人数"
    },
    {
      source: "24",
      target: "3300",
      value: "指挥官与领导者"
    },
    {
      source: "28",
      target: "3358",
      value: "参战方"
    },
    {
      source: "7",
      target: "3041",
      value: "教育"
    },
    {
      source: "15",
      target: "3148",
      value: "总部"
    },
    {
      source: "26",
      target: "3321",
      value: "日期"
    },
    {
      source: "15",
      target: "3151",
      value: "主管部长"
    },
    {
      source: "1",
      target: "2014",
      value: "政府驻地"
    },
    {
      source: "16",
      target: "3166",
      value: "子机构"
    },
    {
      source: "12",
      target: "3100",
      value: "主席"
    },
    {
      source: "8",
      target: "3053",
      value: "特点"
    },
    {
      source: "5",
      target: "3011",
      value: "分类"
    },
    {
      source: "2",
      target: "2044",
      value: "动力装置"
    },
    {
      source: "21",
      target: "3247",
      value: "指挥官与领导者"
    },
    {
      source: "5",
      target: "3007",
      value: "乘员"
    },
    {
      source: "23",
      target: "3287",
      value: "死亡和失踪总数"
    },
    {
      source: "20",
      target: "3232",
      value: "本级纪检机构"
    },
    {
      source: "19",
      target: "3217",
      value: "下属机构"
    },
    {
      source: "29",
      target: "3378",
      value: "参战方"
    },
    {
      source: "20",
      target: "3226",
      value: "参谋长助理"
    },
    {
      source: "2",
      target: "2023",
      value: "类型和级别"
    },
    {
      source: "15",
      target: "3147",
      value: "总部"
    },
    {
      source: "22",
      target: "3271",
      value: "支持方"
    },
    {
      source: "28",
      target: "3359",
      value: "参战方"
    },
    {
      source: "24",
      target: "3296",
      value: "参战方"
    },
    {
      source: "13",
      target: "3116",
      value: "国防部长"
    },
    {
      source: "2",
      target: "2048",
      value: "船员配备"
    },
    {
      source: "13",
      target: "3104",
      value: "建立时间"
    },
    {
      source: "2",
      target: "2024",
      value: "命名依据"
    },
    {
      source: "18",
      target: "3192",
      value: "负责部长"
    },
    {
      source: "23",
      target: "3274",
      value: "地点"
    },
    {
      source: "1",
      target: "2015",
      value: "邮政编码"
    },
    {
      source: "10",
      target: "3080",
      value: "举办地点"
    },
    {
      source: "16",
      target: "3167",
      value: "子机构"
    },
    {
      source: "17",
      target: "3182",
      value: "格言"
    },
    {
      source: "6",
      target: "3027",
      value: "特点"
    },
    {
      source: "1",
      target: "2003",
      value: "宽度"
    },
    {
      source: "15",
      target: "3153",
      value: "网站"
    },
    {
      source: "5",
      target: "3019",
      value: "内部设备"
    },
    {
      source: "29",
      target: "3379",
      value: "参战方"
    },
    {
      source: "18",
      target: "3199",
      value: "部门执行官"
    },
    {
      source: "19",
      target: "3218",
      value: "下属机构"
    },
    {
      source: "2",
      target: "2053",
      value: "电子战和诱饵系统"
    },
    {
      source: "6",
      target: "3028",
      value: "设备"
    },
    {
      source: "22",
      target: "3253",
      value: "地点"
    },
    {
      source: "30",
      target: "3393",
      value: "参战方"
    },
    {
      source: "20",
      target: "3227",
      value: "参谋长助理"
    },
    {
      source: "22",
      target: "3269",
      value: "支持方"
    },
    {
      source: "2",
      target: "2028",
      value: "铺设龙骨日期"
    },
    {
      source: "24",
      target: "3293",
      value: "地点"
    },
    {
      source: "22",
      target: "3252",
      value: "地点"
    },
    {
      source: "22",
      target: "3261",
      value: "参战方"
    },
    {
      source: "18",
      target: "3200",
      value: "下属机构"
    },
    {
      source: "2",
      target: "2021",
      value: "2021年1月状态"
    },
    {
      source: "29",
      target: "3372",
      value: "参战方"
    },
    {
      source: "30",
      target: "3392",
      value: "结果"
    },
    {
      source: "20",
      target: "3224",
      value: "主要领导"
    },
    {
      source: "9",
      target: "3077",
      value: "我国立场"
    },
    {
      source: "19",
      target: "3209",
      value: "管辖权"
    },
    {
      source: "12",
      target: "3099",
      value: "秘书长"
    },
    {
      source: "23",
      target: "3277",
      value: "领土变更"
    },
    {
      source: "7",
      target: "3042",
      value: "身份"
    },
    {
      source: "18",
      target: "3194",
      value: "部门执行官"
    },
    {
      source: "2",
      target: "2043",
      value: "吃水深度"
    },
    {
      source: "13",
      target: "3120",
      value: "可用人数"
    },
    {
      source: "2",
      target: "2026",
      value: "建造者"
    },
    {
      source: "24",
      target: "3305",
      value: "流离失所"
    },
    {
      source: "13",
      target: "3110",
      value: "军事部门"
    },
    {
      source: "8",
      target: "3050",
      value: "部长"
    },
    {
      source: "23",
      target: "3281",
      value: "参战方"
    },
    {
      source: "21",
      target: "3240",
      value: "参战方"
    },
    {
      source: "21",
      target: "3249",
      value: "指挥官与领导者"
    },
    {
      source: "25",
      target: "3308",
      value: "地点"
    },
    {
      source: "5",
      target: "3003",
      value: "生产公司"
    },
    {
      source: "5",
      target: "3018",
      value: "内部结构"
    },
    {
      source: "4",
      target: "3056",
      value: "射程"
    },
    {
      source: "5",
      target: "3001",
      value: "基于"
    },
    {
      source: "15",
      target: "3149",
      value: "员工人数"
    },
    {
      source: "2",
      target: "2040",
      value: "排水量"
    },
    {
      source: "22",
      target: "3268",
      value: "支持方"
    },
    {
      source: "13",
      target: "3111",
      value: "军事部门"
    },
    {
      source: "25",
      target: "3309",
      value: "结果"
    },
    {
      source: "30",
      target: "3391",
      value: "结果"
    },
    {
      source: "3",
      target: "3063",
      value: "性质"
    },
    {
      source: "7",
      target: "3040",
      value: "教育"
    },
    {
      source: "29",
      target: "3373",
      value: "参战方"
    },
    {
      source: "17",
      target: "3181",
      value: "别称"
    },
    {
      source: "24",
      target: "3294",
      value: "结果"
    },
    {
      source: "3",
      target: "3066",
      value: "地理坐标"
    },
    {
      source: "18",
      target: "3201",
      value: "下属机构"
    },
    {
      source: "24",
      target: "3301",
      value: "指挥官与领导者"
    },
    {
      source: "6",
      target: "3026",
      value: "入列日期"
    },
    {
      source: "4",
      target: "3057",
      value: "速度"
    },
    {
      source: "2",
      target: "2022",
      value: "2021年6月位置"
    },
    {
      source: "23",
      target: "3283",
      value: "参战方"
    },
    {
      source: "21",
      target: "3242",
      value: "参战方"
    },
    {
      source: "3",
      target: "3064",
      value: "英文全称"
    },
    {
      source: "21",
      target: "3248",
      value: "指挥官与领导者"
    },
    {
      source: "23",
      target: "3282",
      value: "参战方"
    },
    {
      source: "21",
      target: "3241",
      value: "参战方"
    },
    {
      source: "18",
      target: "3184",
      value: "成立"
    },
    {
      source: "2",
      target: "2033",
      value: "收购日期"
    },
    {
      source: "2",
      target: "2045",
      value: "速度"
    },
    {
      source: "5",
      target: "3021",
      value: "最大飞行速度"
    },
    {
      source: "7",
      target: "3035",
      value: "职位"
    },
    {
      source: "5",
      target: "3002",
      value: "取代"
    },
    {
      source: "2",
      target: "2050",
      value: "传感器和处理系统"
    },
    {
      source: "1",
      target: "2017",
      value: "所属国家"
    },
    {
      source: "18",
      target: "3190",
      value: "员工"
    },
    {
      source: "22",
      target: "3012",
      value: "支持方"
    },
    {
      source: "29",
      target: "3369",
      value: "日期"
    },
    {
      source: "10",
      target: "3083",
      value: "演习内容"
    },
    {
      source: "18",
      target: "3185",
      value: "前身机构"
    },
    {
      source: "13",
      target: "3118",
      value: "服役年龄"
    },
    {
      source: "22",
      target: "3262",
      value: "参战方"
    },
    {
      source: "27",
      target: "3347",
      value: "兵力"
    },
    {
      source: "24",
      target: "3295",
      value: "领土变更"
    },
    {
      source: "29",
      target: "3374",
      value: "参战方"
    },
    {
      source: "30",
      target: "3390",
      value: "结果"
    },
    {
      source: "1",
      target: "2011",
      value: "别名"
    },
    {
      source: "12",
      target: "3098",
      value: "网站"
    },
    {
      source: "20",
      target: "3222",
      value: "主要领导"
    },
    {
      source: "8",
      target: "3047",
      value: "简称"
    },
    {
      source: "21",
      target: "3243",
      value: "参战方"
    },
    {
      source: "28",
      target: "3366",
      value: "伤亡与损失"
    },
    {
      source: "15",
      target: "3142",
      value: "成立日期"
    },
    {
      source: "18",
      target: "3207",
      value: "网站"
    },
    {
      source: "23",
      target: "3284",
      value: "参战方"
    },
    {
      source: "30",
      target: "3382",
      value: "日期"
    },
    {
      source: "8",
      target: "3049",
      value: "前身"
    },
    {
      source: "3",
      target: "3060",
      value: "位置"
    },
    {
      source: "10",
      target: "3079",
      value: "起止时间"
    },
    {
      source: "18",
      target: "3196",
      value: "部门执行官"
    },
    {
      source: "24",
      target: "3299",
      value: "指挥官与领导者"
    },
    {
      source: "4",
      target: "3058",
      value: "重量"
    },
    {
      source: "14",
      target: "3130",
      value: "前身机构"
    },
    {
      source: "14",
      target: "3138",
      value: "下属机构"
    },
    {
      source: "1",
      target: "2013",
      value: "所属地区"
    },
    {
      source: "7",
      target: "3039",
      value: "角色"
    },
    {
      source: "3",
      target: "3065",
      value: "跑道参数"
    },
    {
      source: "2",
      target: "2038",
      value: "座右铭"
    },
    {
      source: "1",
      target: "2009",
      value: "外文名"
    },
    {
      source: "17",
      target: "3173",
      value: "效忠于"
    },
    {
      source: "28",
      target: "3355",
      value: "结果"
    },
    {
      source: "13",
      target: "3113",
      value: "总司令"
    },
    {
      source: "6",
      target: "3031",
      value: "功能"
    },
    {
      source: "3",
      target: "3067",
      value: "海拔"
    },
    {
      source: "27",
      target: "3346",
      value: "兵力"
    },
    {
      source: "12",
      target: "3097",
      value: "位置"
    },
    {
      source: "22",
      target: "3263",
      value: "参战方"
    },
    {
      source: "25",
      target: "3319",
      value: "伤亡与损失"
    },
    {
      source: "20",
      target: "3223",
      value: "主要领导"
    },
    {
      source: "21",
      target: "3244",
      value: "参战方"
    },
    {
      source: "5",
      target: "3013",
      value: "型号"
    },
    {
      source: "21",
      target: "3236",
      value: "日期"
    },
    {
      source: "25",
      target: "3318",
      value: "兵力"
    },
    {
      source: "11",
      target: "3093",
      value: "子机构"
    },
    {
      source: "23",
      target: "3276",
      value: "领土变更"
    },
    {
      source: "2",
      target: "2035",
      value: "MMSI编号"
    },
    {
      source: "18",
      target: "3195",
      value: "部门执行官"
    },
    {
      source: "22",
      target: "3254",
      value: "重要事件"
    },
    {
      source: "28",
      target: "3367",
      value: "伤亡与损失"
    },
    {
      source: "16",
      target: "3170",
      value: "网站"
    },
    {
      source: "8",
      target: "3051",
      value: "成立时间"
    },
    {
      source: "31",
      target: "3402",
      value: "地点"
    },
    {
      source: "2",
      target: "2059",
      value: "搭载飞机"
    },
    {
      source: "23",
      target: "3286",
      value: "受伤总数"
    },
    {
      source: "2",
      target: "2029",
      value: "下水日期"
    },
    {
      source: "5",
      target: "3015",
      value: "机长"
    },
    {
      source: "28",
      target: "3354",
      value: "结果"
    },
    {
      source: "14",
      target: "3139",
      value: "下属机构"
    },
    {
      source: "26",
      target: "3327",
      value: "参战方"
    },
    {
      source: "22",
      target: "3264",
      value: "参战方"
    },
    {
      source: "29",
      target: "3371",
      value: "状态"
    },
    {
      source: "29",
      target: "3375",
      value: "参战方"
    }
  ]

  return {
    links,
    points,
    mainCount,
    morePoints,
    moreLinks
  }
}
