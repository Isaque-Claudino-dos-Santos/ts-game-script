import Object from '@Engine/Modules/Object'
import TypeSprite from '@Type/TypeSprite'

export default interface InterfaceBoundingBox {
  readonly box: TypeSprite
  readonly object: Object<TypeSprite>

  onCollision(collided: Object<TypeSprite>): void
  update(): void
  debug(context: CanvasRenderingContext2D): void
}
