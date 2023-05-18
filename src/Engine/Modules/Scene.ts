import InterfaceScene from '@Engine/Interfaces/InterfaceScene'
import TypeSprite from '@Engine/Types/TypeSprite'
import Object from './Object'
import Engine from '@Engine/Engine'

export default abstract class Scene implements InterfaceScene {
  abstract objects: Object<TypeSprite>[]
  enable: boolean = true

  constructor(public readonly engine: Engine) {}

  readonly init = () => {
    if (!this.enable) return
    this.objects.forEach((obj) => obj.init())
  }
  readonly update = () => {
    if (!this.enable) return
    this.objects.forEach((obj) => obj.update())
  }
  readonly render = () => {
    if (!this.enable) return
    this.objects.forEach((obj) => obj.render())
  }
}
