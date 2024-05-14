import { request } from "@/utils/zstp/service"
import type * as Graph from "./types/graph"

/** 查 */
export function getGraphDataApi(params: Graph.GetGraphRequestData) {
  return request<Graph.GetGraphResponseData>({
    url: "/zstp/nlp/getAnswer",
    method: "get",
    params
  })
}

export function getCount() {
  return request<Graph.GetCountResponseData>({
    url: "/zstp/statistics/get",
    method: "get"
  })
}
