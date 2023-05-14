import Engine from '@Engine/Engine'
import InterfaceObject from '@Engine/Interfaces/InterfaceObject'
import TypeSprite from '@Engine/Types/TypeSprite'

export default abstract class Object implements InterfaceObject {
  abstract sprite: TypeSprite

  constructor(public engine: Engine) {}

  draw(): void {
    this.sprite.draw(this.engine.canvas.context)
  }

  init = () => {}
  update = () => {}
  render = () => {}
}
