export default interface InterfaceCollided {
  onLeft: boolean
  onRight: boolean
  onTop: boolean
  onBottom: boolean
  onAny: boolean

  pointLeft: number
  pointRight: number
  pointTop: number
  pointBottom: number
  pointAny: number
}
