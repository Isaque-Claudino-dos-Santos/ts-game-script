import AbstractGame from '../AbstractGame'
import AbstractScene from '../AbstractScene'

export type ScenesList = {
  [index in string]: AbstractScene
}

export default interface InterfaceHadlerScenes {
  readonly game: AbstractGame
  readonly list: ScenesList
  currentSceneName: string
  add(name: string, scene: AbstractScene): this
  setCurrent(name: string): void
  getCurrent(): AbstractScene | never
}
