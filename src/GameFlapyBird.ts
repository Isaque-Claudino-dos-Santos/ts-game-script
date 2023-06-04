import Game from '@Vendor/Models/Game'
import SceneMain from './Scenes/SceneMain'

export default class GameFlapyBird extends Game {
  sceneMain = new SceneMain(this.engine)

  init = () => {
    this.sceneMain.callInits()
  }

  update = () => {
    this.sceneMain.callUpdates()
  }

  render = () => {
    this.sceneMain.callRenders()
  }
}
