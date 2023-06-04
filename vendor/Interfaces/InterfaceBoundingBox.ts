import Collided from '@Vendor/Collided'
import Object from '@Vendor/Models/Object'
import TypeShape from '@Vendor/Types/TypeShape'

export default interface InterfaceBoundingBox {
  readonly box: TypeShape
  readonly object: Object<TypeShape>
  readonly collided: Collided
  enable: boolean
  x: number
  y: number
  moveTo(x: number, y: number): this
  update(): void
  debug(context: CanvasRenderingContext2D): void
}
