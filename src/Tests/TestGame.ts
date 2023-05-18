import Game from '@Engine/Modules/Game'
import SceneWord from './Scenes/SceneWord'

export default class TestGame extends Game {
  sceneWord = new SceneWord(this.engine)

  init = () => {
    this.sceneWord.init()
  }

  update = () => {
    this.sceneWord.update()
  }

  render = () => {
    this.sceneWord.render()
  }
}
