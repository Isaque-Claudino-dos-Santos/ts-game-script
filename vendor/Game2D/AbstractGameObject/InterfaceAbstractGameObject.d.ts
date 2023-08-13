import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'
import AbstractGame from '../AbstractGame/AbstractGame'
import BoundingBox from '../BoundingBox'

export default interface InterfaceAbstractGameObject {
  index: number
  sprite: AbstractGeometries2D
  game: AbstractGame
  boundingBox: BoundingBox<AbstractGeometries2D> | null

  init(): void
  update(): void
  render(): void
}
