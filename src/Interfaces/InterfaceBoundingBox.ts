import TypeSprite from '@Type/TypeSprite'

export default interface InterfaceBoundingBox {
  box: TypeSprite
  parent: TypeSprite

  update(): void
  debug(context: CanvasRenderingContext2D): void
}
