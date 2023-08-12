import AbstractGame from '@Vendor/Game2D/AbstractGame'
import SceneMain from './MainScene'

export default class GameMyGame extends AbstractGame {
  constructor(screen: HTMLCanvasElement, context: CanvasRenderingContext2D) {
    super(screen, context)
    this.scenes.add('main', new SceneMain(this)).setCurrent('main')
  }
}
