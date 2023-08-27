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

  getObjectMoving(name: string): AbstractGameObject | null
  getObjectStatic(name: string): AbstractGameObject | null
  getObject(name: string): AbstractGameObject | null

  add<T extends GenericObject>(
    name: string,
    object: T,
    type: ObjectType
  ): AbstractGameObject
}
