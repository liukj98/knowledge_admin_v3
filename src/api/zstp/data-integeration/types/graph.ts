export interface GetGraphRequestData {
  question: string
}

export interface RelationData {
  气候条件: string
  宽度: string
  "1935年名称": string
  特征: string
  外文名: string
  所属地区: string
  别名: string
  礁坪面积: string
  位置: string
  邮政编码: string
  临近海域资源: string
  政府驻地: string
  环礁面积: string
  闯入者: string
  "1947年名称": string
  长度: string
  所属国家: string
  侦察者: string
  坐标: string
  监察者: string
}

export type GetGraphResponseData = ApiResponseData<{
  answer: {
    位置: string
  }
  graph: {
    node: string
    relation: RelationData
  }
}>

export type GetCountResponseData = ApiResponseData<{
  tripleAmount: number
  subjectAmount: number
  institutionAmount: number
  personnelAmount: number
  equipmentAmount: number
  materialAmount: number
  facilityAmount: number
  envAmount: number
  eventAmount: number
  actionAmount: number
}>
