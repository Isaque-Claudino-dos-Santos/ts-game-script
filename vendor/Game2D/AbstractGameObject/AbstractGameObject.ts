import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'
import InterfaceAbstractGameObject from './InterfaceAbstractGameObject'
import AbstractGame from '../AbstractGame/AbstractGame'

export default abstract class AbstractGameObject
  implements InterfaceAbstractGameObject
{
  index: number = 0
  abstract sprite: AbstractGeometries2D

  constructor(readonly game: AbstractGame) {}

  init(): void {}
  update(): void {}
  render(): void {}
}
