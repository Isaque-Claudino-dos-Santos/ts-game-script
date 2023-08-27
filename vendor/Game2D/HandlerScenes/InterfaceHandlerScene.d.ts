import AbstractGame from '../AbstractGame'
import AbstractScene from '../AbstractScene'

export type GenericScene = {
  new (...args: ConstructorParameters<typeof AbstractScene>): AbstractScene
}

export default interface InterfaceHadlerScenes {
  readonly game: AbstractGame
  readonly list: AbstractScene[]
  currentSceneName: string
  add(name: string, scene: GenericScene): this
  setCurrent(name: string): void
  current(): AbstractScene | never
}
