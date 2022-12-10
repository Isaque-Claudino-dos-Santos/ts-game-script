import TsGame2D from "./TsGame2D";
import Player from "./GameObjects/Player";
import Background from "./GameObjects/Background";
import Enimy from "./GameObjects/Enimy";
import Wall from "./GameObjects/Wall";

const tsg: TsGame2D = new TsGame2D();

const loop = tsg.gameLoop;

const background = new Background(tsg);
const enimy = new Enimy(tsg);
const player = new Player(tsg,enimy);
const wall = new  Wall(tsg)

loop.onUpdate = () => {
  player.update();
  enimy.update();
  tsg.collider.rect.solid(player.draw,wall.draw)
};

loop.onRender = () => {
  background.render();
  player.render();
  enimy.render();
  wall.render()
};

loop.init();
