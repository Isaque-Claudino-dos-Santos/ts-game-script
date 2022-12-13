import TsGame2D from '../vendor/TsGame2D';
import RoomMain from './Rooms/RoomMain';
import Snake from './Objects/Snake';

const tsg: TsGame2D = new TsGame2D();
tsg.init();

tsg.display.setSize({
  width: 400,
  height: 400,
});

const size = tsg.display.width / 40;

const snake = new Snake(tsg, size);

new RoomMain(tsg, snake);
