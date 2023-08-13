import AbstractGame from '@Vendor/Game2D/AbstractGame'
import SceneMain from './MainScene'

export default class GameMyGame extends AbstractGame {
  override beforeInit(): void {
    this.scenes.add('main', new SceneMain(this)).setCurrent('main')
  }

  override beforeRender(): void {
    this.canvas.clearScreen()
  }
}
