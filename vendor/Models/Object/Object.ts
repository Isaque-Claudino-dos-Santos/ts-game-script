import Engine from '@Vendor/Engine'
import InterfaceObject from './InterfaceObject'
import { TypeObjectShape } from './TypesObject'
import BoundingBox from '../BoundingBox'

export default abstract class Object implements InterfaceObject {
  abstract readonly sprite: TypeObjectShape
  abstract readonly bbox: BoundingBox<TypeObjectShape>

  constructor(public engine: Engine) {}

  draw(): void {
    this.sprite.draw(this.engine.canvas.context)
  }

  init(): void {}
  update(): void {}
  render(): void {}
  onCollider(target: Object): void {}
}
