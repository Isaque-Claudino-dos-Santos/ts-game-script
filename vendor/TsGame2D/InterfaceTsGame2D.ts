import DisplayHandler from './Handlers/DisplayHandler';
import Drawing from './Drawing';
import KeyBoard from './KeyBoard';
import GameLoop from './GameLoop';
import Mouse from './Mouse';
import Collider from './Collider';
import Room from './Room';

export default interface InterfaceTsGame2D {
  readonly display: DisplayHandler;
  readonly draw: Drawing;
  readonly keyBoard: KeyBoard;
  readonly gameLoop: GameLoop;
  readonly mouse: Mouse;
  readonly collider: Collider;
  readonly room: Room;
}
