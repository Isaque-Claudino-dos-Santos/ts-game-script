import InterfaceShape from './InterfaceShape'

export default interface InterfaceArc extends InterfaceShape {
  radius: number
  startAngle: number
  endAngle: number
  counterclockwise: boolean
}
