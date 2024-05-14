import { request } from "@/utils/zstp/service"
import type * as Databases from "./types/databases"

/** 查 */
export function getDatabasesDataApi() {
  return request<Databases.GetDatabasesResponseData>({
    url: "/zstp/db/showdb",
    method: "get"
  })
}

export function getDatabasesQueryDataApi(data: Databases.GetDatabasesParams) {
  return request<Databases.GetDatabasesResponseData>({
    url: "/zstp/gstore/querydata",
    method: "post",
    data
  })
}
