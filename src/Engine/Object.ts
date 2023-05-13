import Engine from '@Engine/Engine'
import InterfaceObject from '@Interface/InterfaceObject'
import TypeSprite from '@Type/TypeSprite'

export default abstract class Object implements InterfaceObject {
  abstract sprite: TypeSprite

  constructor(public engine: Engine) {}

  draw(): void {
    this.sprite.draw(this.engine.context2d)
  }

  init = () => {}
  update = () => {}
  render = () => {}
}
