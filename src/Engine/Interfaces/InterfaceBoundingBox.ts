import Object from '@Engine/Modules/Object'
import TypeSprite from '@Type/TypeSprite'

export default interface InterfaceBoundingBox {
  readonly box: TypeSprite
  readonly object: Object<TypeSprite>

  update(): void
  debug(context: CanvasRenderingContext2D): void
}
