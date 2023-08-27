import AbstractGame from '../AbstractGame'
import AbstractGameObject from '../AbstractGameObject'

export type GenericObject<T extends AbstractGameObject> = {
  new (...args: ConstructorParameters<typeof AbstractGameObject>): T
}

export type SceneObjects = AbstractGameObject[]
export type ObjectType = 'static' | 'moving'

export default interface InterfaceAbstractScene {
  readonly game: AbstractGame
  readonly movingObjects: SceneObjects
  readonly staticObjects: SceneObjects
  readonly name: string

  init(): void

  callInitInObjects(): void
  callUpdateInObjects(): void
  callRenderInObjects(): void

  getObjectMovingByName(name: string): AbstractGameObject | null
  getObjectStaticByName(name: string): AbstractGameObject | null
  getObjectByName(name: string): AbstractGameObject | null

  getObjectsMovingByClassName(name: string): AbstractGameObject[]
  getObjectsStaticByClassName(name: string): AbstractGameObject[]
  getObjectsByClassName(name: string): AbstractGameObject[]

  add<T extends AbstractGameObject>(
    name: string,
    object: GenericObject<T>,
    callback: (object: T) => void,
    type: ObjectType
  ): T
}
