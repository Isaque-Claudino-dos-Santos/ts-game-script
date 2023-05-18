import InterfaceScene from '@Engine/Interfaces/InterfaceScene'
import TypeSprite from '@Engine/Types/TypeSprite'
import Object from './Object'

export default abstract class Scene implements InterfaceScene {
  abstract objects: Object<TypeSprite>[]

  readonly init = () => {
    this.objects.forEach((obj) => obj.init())
  }
  readonly update = () => {
    this.objects.forEach((obj) => obj.update())
  }
  readonly render = () => {
    this.objects.forEach((obj) => obj.update())
  }
}
