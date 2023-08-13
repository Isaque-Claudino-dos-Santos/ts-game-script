import AbstractGame from '../AbstractGame'
import AbstractGameObject from '../AbstractGameObject'
import Collider2D from '../Collider2D'

export type SceneObjects = { [index: string]: AbstractGameObject }

export default interface InterfaceAbstractScene {
  readonly game: AbstractGame
  readonly objects: SceneObjects
  readonly collider: Collider2D

  callInitInObjects(): void
  callUpdateInObjects(): void
  callRenderInObjects(): void

  object<T extends AbstractGameObject>(name: string): T
}
