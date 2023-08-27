import is from '@Vendor/utils/is'
import AbstractGame from '../AbstractGame'
import AbstractScene from '../AbstractScene'
import InterfaceHadlerScenes, { GenericScene } from './InterfaceHandlerScene'

export default class HandlerScenes implements InterfaceHadlerScenes {
  currentSceneName: string = ''
  readonly list: AbstractScene[] = []

  constructor(readonly game: AbstractGame) {}

  setCurrent(name: string): void {
    this.currentSceneName = name
  }

  current(): AbstractScene | never {
    const scene = this.list.filter((s) => s.name === this.currentSceneName)[0]
    if (is.undefined(scene)) {
      throw `The scene with name "${this.currentSceneName}" not defined.`
    }
    return scene
  }

  add(name: string, scene: GenericScene): this {
    const newScene = new scene(name, this.game)
    this.list.push(newScene)
    return this
  }
}
