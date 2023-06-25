import Game from '@Vendor/Models/Game'
import Scene from '@Vendor/Models/Scene'
import SceneMain from './Scenes/SceneMain'

export default class GameTest extends Game {
  scenes: Record<string, Scene> = {
    main: new SceneMain(this.engine),
  }
  currentScene: Scene = this.scenes.main

  init = () => this.currentScene.callInits()
  update = () => this.currentScene.callUpdates()
}
