export default interface InterfaceGravity {
  axis: number
  acceleration: number
  velocity: number
  force: number
  massa: number
  enable: boolean

  setMassa(value: number): this
  setForce(value: number): this
  reset(): void
  on(invert: boolean): void
}
