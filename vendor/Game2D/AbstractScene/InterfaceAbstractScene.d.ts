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
  readonly collider: Collider2D
  readonly name: string

  init(): void

  callInitInObjects(): void
  callUpdateInObjects(): void
  callRenderInObjects(): void

  add<T extends GenericObject>(
    name: string,
    object: T,
    type: ObjectType
  ): AbstractGameObject
}
