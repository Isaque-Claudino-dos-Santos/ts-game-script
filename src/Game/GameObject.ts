import Engine from '@Engine/Engine'
import InterfaceGameObject from '@Interface/InterfaceGameObject'
import TypeSprite2d from '@Type/TypeSprite2d'

export default abstract class GameObject implements InterfaceGameObject {
  abstract sprite: TypeSprite2d

  constructor(public engine: Engine) {}

  draw(): void {
    this.sprite.draw(this.engine.context2d)
  }

  init = () => {}
  update = () => {}
  render = () => {}
}
