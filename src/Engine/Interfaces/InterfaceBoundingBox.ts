import Collided from '@Engine/Collided'
import Object from '@Engine/Modules/Object'
import TypeSide from '@Engine/Types/TypeSide'
import TypeSprite from '@Type/TypeSprite'

export default interface InterfaceBoundingBox {
  readonly box: TypeSprite
  readonly object: Object<TypeSprite>
  readonly collided: Collided
  x: number
  y: number
  update(): void
  debug(context: CanvasRenderingContext2D): void
}
