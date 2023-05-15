import BoundingBox from '@Engine/BoundingBox'
import TypeSprite from '@Type/TypeSprite'

export default interface InterfaceBoundingBox {
  readonly box: TypeSprite
  readonly sprite: TypeSprite

  onCollision<Collided extends BoundingBox<TypeSprite>>(
    collided: Collided
  ): void
  update(): void
  debug(context: CanvasRenderingContext2D): void
}
