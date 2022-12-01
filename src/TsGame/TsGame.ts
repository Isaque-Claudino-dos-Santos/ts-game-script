import Drawing from '../Drawing'
import DisplayHandler from '../Handlers/DisplayHandler'
import InterfaceTsGame from './InterfaceTsGame'
import Context2D from '../Context2D'

export default class TsGame implements InterfaceTsGame {
  public readonly display: DisplayHandler = new DisplayHandler()
  private readonly context: Context2D = new Context2D(this.display.screen)
  public readonly draw: Drawing = new Drawing(this.context.ref)
}
