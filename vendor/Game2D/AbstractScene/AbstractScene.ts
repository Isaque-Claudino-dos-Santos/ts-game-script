import objFor from '@Vendor/utils/objFor'
import AbstractGame from '../AbstractGame'
import InterfaceAbstractScene, { SceneObjects } from './InterfaceAbstractScene'

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
}
