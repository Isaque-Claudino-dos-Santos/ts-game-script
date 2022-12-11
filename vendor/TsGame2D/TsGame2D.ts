import Drawing from './Drawing';
import DisplayHandler from './Handlers/DisplayHandler';
import InterfaceTsGame2D from './InterfaceTsGame2D';
import Context2D from './Context2D';
import Keyboard from './KeyBoard';
import GameLoop from './GameLoop';
import Mouse from './Mouse';
import Collider from './Collider';
import Room from './Room';

export default class TsGame2D implements InterfaceTsGame2D {
  public readonly display: DisplayHandler = new DisplayHandler();
  private readonly context: Context2D = new Context2D(this.display.screen);
  public readonly draw: Drawing = new Drawing(this.context.ref);
  public readonly keyBoard: Keyboard = new Keyboard();
  public readonly gameLoop: GameLoop = new GameLoop();
  public readonly mouse: Mouse = new Mouse(this.display.screen);
  public readonly collider: Collider = new Collider();
  public readonly room: Room = new Room();
}
