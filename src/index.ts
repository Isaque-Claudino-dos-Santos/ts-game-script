import TsGame2D from '../vendor/TsGame2D';
import Home from './Rooms/Menu';
import Arena from './Rooms/Arena';
import Player from './Objects/Player';

const tsg: TsGame2D = new TsGame2D();

const player = new Player(tsg);

const home = new Home(tsg);
const arena = new Arena(tsg, player);

tsg.init();
