import BoundingBox from '@Engine/BoundingBox'
import Engine from '@Engine/Engine'
import InterfaceObject from '@Engine/Interfaces/InterfaceObject'
import TypeSprite from '@Engine/Types/TypeSprite'

export default abstract class Object<Sprite extends TypeSprite>
  implements InterfaceObject
{
  abstract readonly sprite: Sprite
  abstract readonly boundingBox: BoundingBox<TypeSprite>

  constructor(public engine: Engine) {}

  draw(): void {
    this.sprite.draw(this.engine.canvas.context)
  }

  init = () => {}
  update = () => {}
  render = () => {}
}
