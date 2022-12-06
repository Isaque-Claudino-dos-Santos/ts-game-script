import TsGame2D from "./TsGame2D";
import Player from "./GameObjects/Player";
import Background from "./GameObjects/Background";
import Enimy from "./GameObjects/Enimy";

const tsg: TsGame2D = new TsGame2D();

const loop = tsg.gameLoop;

const background = new Background(tsg);
const player = new Player(tsg);
const enimy = new Enimy(tsg);

loop.onUpdate = () => {
  player.update();
  enimy.update();
};

loop.onRender = () => {
  background.render();
  player.render();
  enimy.render();
};

loop.init();
