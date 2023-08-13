import objFor from '@Vendor/utils/objFor'
import AbstractGame from '../AbstractGame'
import InterfaceAbstractScene, { SceneObjects } from './InterfaceAbstractScene'
import AbstractGameObject from '../AbstractGameObject'
import Collider2D from '../Collider2D'

export default abstract class AbstractScene implements InterfaceAbstractScene {
  abstract objects: SceneObjects
  readonly collider: Collider2D = new Collider2D()

  constructor(readonly game: AbstractGame) {}

  readonly callInitInObjects = () => {
    objFor((value) => {
      value.init()
    }, this.objects)
  }

  readonly callUpdateInObjects = () => {
    objFor((value) => {
      value.update()
    }, this.objects)
  }

  readonly callRenderInObjects = () => {
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
