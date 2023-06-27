import Engine from '@Vendor/Engine'
import InterfaceObject from './InterfaceObject'
import { TypeObjectShape } from './TypesObject'

export default abstract class Object implements InterfaceObject {
  abstract readonly sprite: TypeObjectShape

  constructor(public engine: Engine) {}

  draw(): void {
    this.sprite.draw(this.engine.canvas.context)
  }
}
