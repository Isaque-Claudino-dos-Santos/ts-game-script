import Drawing from '../Drawing'
import DisplayHandler from '../Handlers/DisplayHandler'
import InterfaceTsGame2D from './InterfaceTsGame2D'
import Context2D from '../Context2D'
import Keyboard from '../KeyBoard'

export default class TsGame2D implements InterfaceTsGame2D {
  public readonly display: DisplayHandler = new DisplayHandler()
  private readonly context: Context2D = new Context2D(this.display.screen)
  public readonly draw: Drawing = new Drawing(this.context.ref)
  public readonly keyBoard: Keyboard = new Keyboard()
}
