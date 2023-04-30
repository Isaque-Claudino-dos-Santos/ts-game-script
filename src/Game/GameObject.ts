import Rect from '@Draw/Rect'
import KeyBoard from '@Event/Keyboard'
import { TypeMouseActions } from '@Event/Mouse'
import Game from 'Game'

type TypeBody = Rect

export default abstract class GameObject {
  public abstract body: TypeBody
  protected readonly keyboard: KeyBoard
  public mouse0: TypeMouseActions = {}
  public mouse1: TypeMouseActions = {}
  public mouse2: TypeMouseActions = {}
  public mouse3: TypeMouseActions = {}
  public mouse4: TypeMouseActions = {}

  constructor(protected readonly game: Game) {
    this.keyboard = game.keyboard()
  }

  /**
   * @toOverrite
   * @arrowFunction
   */
  public abstract boot: () => void
  /**
   * @toOverrite
   * @arrowFunction
   */
  public abstract update: () => void
  /**
   * @toOverrite
   * @arrowFunction
   **/
  public abstract render: () => void
}
