import objFor from '@Vendor/utils/objFor'
import AbstractGame from '../AbstractGame'
import InterfaceAbstractScene, { SceneObjects } from './InterfaceAbstractScene'
import AbstractGameObject from '../AbstractGameObject'

export default abstract class AbstractScene implements InterfaceAbstractScene {
  abstract objects: SceneObjects

  constructor(readonly game: AbstractGame) {}

  callInitInObjects = () => {
    objFor((value) => {
      value.init()
    }, this.objects)
  }

  callUpdateInObjects = () => {
    objFor((value) => {
      value.update()
    }, this.objects)
  }

  callRenderInObjects = () => {
    objFor((value) => {
      value.render()
    }, this.objects)
  }

  object<T extends AbstractGameObject>(name: string): T {
    if (!(name in this.objects)) {
      throw `Game Object ${name}, on scene ${this['constructor'].name} not defined`
    }
    return this.objects[name] as T
  }
}
