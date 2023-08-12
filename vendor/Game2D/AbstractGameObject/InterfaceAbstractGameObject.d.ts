import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'
import AbstractGame from '../AbstractGame/AbstractGame'

export default interface InterfaceAbstractGameObject {
  index: number
  sprite: AbstractGeometries2D
  game: AbstractGame

  init(): void
  update(): void
  render(): void
}
