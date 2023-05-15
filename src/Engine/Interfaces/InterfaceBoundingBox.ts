import TypeSprite from '@Type/TypeSprite'

export default interface InterfaceBoundingBox {
  readonly box: TypeSprite
  sprite: TypeSprite

  update(): void
  debug(context: CanvasRenderingContext2D): void
}
