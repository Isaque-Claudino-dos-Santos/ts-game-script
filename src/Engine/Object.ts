import Engine from '@Engine/Engine'
import InterfaceObject from '@Interface/InterfaceObject'
import TypeSprite2d from '@Type/TypeSprite2d'

export default abstract class Object implements InterfaceObject {
  abstract sprite: TypeSprite2d

  constructor(public engine: Engine) {}

  draw(): void {
    this.sprite.draw(this.engine.context2d)
  }

  init = () => {}
  update = () => {}
  render = () => {}
}
