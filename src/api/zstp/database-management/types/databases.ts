export interface GetDatabasesResponseData {
  nodes: Array<Object>
  links: Array<Object>
}

export interface GetDatabasesParams {
  dbname: string
  sparql: string
  limit: string
  type: string
}
