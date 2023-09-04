export default interface InterfaceVector2D {
  posX: number
  posY: number

  x(): number
  x(posX: number): this

  y(): number
  y(posY: number): this

  distance(dot1: number, dot2: number): number
}
