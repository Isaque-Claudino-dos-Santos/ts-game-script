import Engine from '@Vendor/Engine'
import InterfaceObject from '@Vendor/Interfaces/InterfaceObject'
import TypeShape from '@Vendor/Types/TypeShape'
import Scene from './Scene'

export default abstract class Object<Sprite extends TypeShape>
  implements InterfaceObject
{
  abstract readonly sprite: Sprite

  constructor(public engine: Engine, public scene: Scene | null = null) {}

  draw(): void {
    this.sprite.draw(this.engine.canvas.context)
  }

  init = () => {}
  update = () => {}
  render = () => {}
}
