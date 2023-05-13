import TypeSprite from '@Type/TypeSprite'

export default interface InterfaceBoundingBox {
  shape: TypeSprite
  parent: TypeSprite

  update: () => void
}
