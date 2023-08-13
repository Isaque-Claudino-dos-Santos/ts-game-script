import AbstractGame from '../AbstractGame'
import AbstractScene from '../AbstractScene'
import InterfaceHadlerScenes, { ScenesList } from './InterfaceHandlerScene'

export default class HandlerScenes implements InterfaceHadlerScenes {
  currentSceneName: string = ''
  readonly list: ScenesList = {}

  constructor(readonly game: AbstractGame) {}

  setCurrent(name: string): void {
    this.currentSceneName = name
  }

  current(): AbstractScene | never {
    if (!(this.currentSceneName in this.list)) {
      throw `The scene with name "${this.currentSceneName}" not defined.`
    }
    return this.list[this.currentSceneName]
  }

  add(name: string, scene: AbstractScene): this {
    Object.assign(this.list, { [name]: scene })
    return this
  }
}
