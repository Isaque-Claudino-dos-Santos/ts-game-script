import InterfaceScene, {
  TypeSceneObjects,
} from '@Engine/Interfaces/InterfaceScene'
import TypeSprite from '@Engine/Types/TypeSprite'
import Object from './Object'
import Engine from '@Engine/Engine'

export default abstract class Scene implements InterfaceScene {
  abstract objects: TypeSceneObjects
  enable: boolean = true

  constructor(public readonly engine: Engine) {}

  objectsForEach(
    callback: (
      object: Object<TypeSprite>,
      name: string,
      objects: TypeSceneObjects
    ) => void
  ): void {
    for (const name in this.objects) {
      const object = this.objects[name]
      callback(object, name, this.objects)
    }
  }

  readonly callInits = () => {
    if (!this.enable) return
    this.objectsForEach((obj) => obj.init())
    this.init()
  }

  readonly callUpdates = () => {
    if (!this.enable) return
    this.objectsForEach((obj) => obj.update())
    this.update()
  }

  readonly callRenders = () => {
    if (!this.enable) return
    this.objectsForEach((obj) => obj.render())
    this.render()
  }

  readonly callCollideds = () => {
    if (!this.enable) return
    this.objectsForEach((obj) => obj.collided())
    this.collided()
  }

  init = () => {}
  render = () => {}
  update = () => {}
  collided = () => {}
}
