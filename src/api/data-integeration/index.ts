import { request } from "@/utils/service"
import type * as Graph from "./types/graph"

/** 查 */
export function getGraphDataApi(params: Graph.GetGraphRequestData) {
  return request<Graph.GetGraphResponseData>({
    url: "/nlp/getAnswer",
    method: "get",
    params
  })
}

/*export function getCount() {
  return request<>({
    url: "/statistics/get",
    method: "get"
  })
}*/
