// 接口返回数据的公共类型
export interface commonDataType<T> {
  code: number
  ok: string
  message: string
  data: T
}
