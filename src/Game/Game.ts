import Canvas from '@Display/Canvas'
import KeyBoard from '@Event/Keyboard'
import Loop from '@Event/Loop'
import Mouse from '@Event/Mouse'

export default class Game {
  public readonly canvas = new Canvas(600, 400)
  public readonly mouse = new Mouse(this.canvas.screen)
  public readonly loop = new Loop()

  public keyboard(): KeyBoard {
    return new KeyBoard()
  }
}
