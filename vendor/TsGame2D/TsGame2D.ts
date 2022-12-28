import Drawing from './Drawing'
import DisplayHandler from './Handlers/DisplayHandler'
import InterfaceTsGame2D from './InterfaceTsGame2D'
import Context2D from './Context2D'
import Keyboard from './KeyBoard'
import GameLoop from './GameLoop'
import Mouse from './Mouse'
import Collider from './Collider'
import Room from './Room'
import Timer from './Timer'

export default class TsGame2D implements InterfaceTsGame2D {
  readonly display: DisplayHandler = new DisplayHandler()
  private readonly context: Context2D = new Context2D(this.display.screen)
  readonly draw: Drawing = new Drawing(this.context.ref)
  readonly keyBoard: Keyboard = new Keyboard()
  readonly gameLoop: GameLoop = new GameLoop()
  readonly mouse: Mouse = new Mouse(this.display.screen)
  readonly collider: Collider = new Collider()
  readonly room: Room = new Room()
  readonly time = () => new Timer()

  init() {
    this.room.create('main')
    this.room.active('main')
    this.gameLoop.onUpdate = () => this.room.callUpdate()
    this.gameLoop.onRender = () => this.room.callRender()
    this.gameLoop.init()
  }
}
