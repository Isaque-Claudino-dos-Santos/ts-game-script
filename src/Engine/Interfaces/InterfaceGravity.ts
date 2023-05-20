export default interface InterfaceGravity {
  axis: number
  acceleration: number
  velocity: number
  force: number
  massa: number
  enable: boolean

  setMassa(value: number): this
  setForce(value: number): this
  on(invert: boolean): void
}
