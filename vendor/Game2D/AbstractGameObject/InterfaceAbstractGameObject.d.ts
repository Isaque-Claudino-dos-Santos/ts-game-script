import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'
import AbstractGame from '../AbstractGame/AbstractGame'
import BoundingBox from '../BoundingBox'
import Collider2D from '@Vendor/Physical2D/Collider2D'

export default interface InterfaceAbstractGameObject {
  index: number
  sprite: AbstractGeometries2D
  game: AbstractGame
  boundingBox: BoundingBox<AbstractGeometries2D> | null
  collider: Collider2D
  name: string

  init(): void
  update(): void
  render(): void
}
