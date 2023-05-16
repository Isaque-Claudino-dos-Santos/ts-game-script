export default interface InterfaceCollided {
  onLeft: boolean
  onRight: boolean
  onTop: boolean
  onBottom: boolean
  onAny: boolean

  distanceLeft: number
  distanceRight: number
  distanceTop: number
  distanceBottom: number
}
