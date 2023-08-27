import AbstractGame from '../AbstractGame'
import AbstractGameObject from '../AbstractGameObject'
import Collider2D from '../Collider2D'

export type GenericObject = {
  new (
    ...args: ConstructorParameters<typeof AbstractGameObject>
  ): AbstractGameObject
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

  add<T extends GenericObject>(
    name: string,
<<<<<<< HEAD
    object: GenericObject<T>,
    callback: (object: T) => void,
=======
    object: T,
>>>>>>> parent of 26cc23a... fix: fixed error declaration type
    type: ObjectType
  ): AbstractGameObject
}
