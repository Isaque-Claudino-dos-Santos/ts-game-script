import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'
import InterfaceAbstractGameObject from './InterfaceAbstractGameObject'
import AbstractGame from '../AbstractGame/AbstractGame'
import BoundingBox from '../BoundingBox'

export default abstract class AbstractGameObject
  implements InterfaceAbstractGameObject
{
  index: number = 0
  abstract sprite: AbstractGeometries2D
  abstract boundingBox: BoundingBox<AbstractGeometries2D> | null

  constructor(readonly name: string, readonly game: AbstractGame) {}

  init(): void {}
  update(): void {}
  render(): void {}
  onCollider(obj: AbstractGameObject): void {}
}
