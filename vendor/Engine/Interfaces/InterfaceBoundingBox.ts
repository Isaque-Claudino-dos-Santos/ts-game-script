import Collided from '@Engine/Collided'
import Object from '@Engine/Modules/Object'
import TypeSprite from '@Type/TypeSprite'

export default interface InterfaceBoundingBox {
  readonly box: TypeSprite
  readonly object: Object<TypeSprite>
  readonly collided: Collided
  enable: boolean
  x: number
  y: number
  moveTo(x: number, y: number): this
  update(): void
  debug(context: CanvasRenderingContext2D): void
}
