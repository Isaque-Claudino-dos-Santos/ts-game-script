import AbstractGame from '../AbstractGame'
import InterfaceAbstractScene, {
  GenericObject,
  ObjectType,
  SceneObjects,
} from './InterfaceAbstractScene'
import Collider2D from '../Collider2D'
import AbstractGameObject from '../AbstractGameObject'

export default abstract class AbstractScene implements InterfaceAbstractScene {
  readonly movingObjects: SceneObjects = []
  readonly staticObjects: SceneObjects = []
  readonly collider: Collider2D = new Collider2D(this)

  constructor(readonly name: string, readonly game: AbstractGame) {}

  abstract init(): void

  readonly callInitInObjects = () => {
    this.init()
    this.movingObjects.forEach((o) => o.init())
    this.staticObjects.forEach((o) => o.init())
  }

  readonly callUpdateInObjects = () => {
    this.movingObjects.forEach((o) => o.update())
    this.staticObjects.forEach((o) => o.update())
  }

  readonly callRenderInObjects = () => {
    this.movingObjects.forEach((o) => o.render())
    this.staticObjects.forEach((o) => o.render())
  }

  public add<T extends GenericObject>(
    name: string,
    object: T,
    type: ObjectType = 'static'
  ): AbstractGameObject {
    const obj = new object(name, this.game)
    if (type === 'moving') this.movingObjects.push(obj)
    if (type === 'static') this.movingObjects.push(obj)
    return obj
  }
}
