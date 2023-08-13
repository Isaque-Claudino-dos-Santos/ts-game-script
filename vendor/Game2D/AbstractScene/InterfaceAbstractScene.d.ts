import AbstractGame from '../AbstractGame'
import AbstractGameObject from '../AbstractGameObject'

export type SceneObjects = { [index: string]: AbstractGameObject }

export default interface InterfaceAbstractScene {
  readonly game: AbstractGame
  readonly objects: SceneObjects

  callInitInObjects(): void
  callUpdateInObjects(): void
  callRenderInObjects(): void

  object(name: string): AbstractGameObject
}
