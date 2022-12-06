import TsGame2D from "./TsGame2D";
import Player from "./GameObjects/Player";
import Background from "./GameObjects/Background";

const tsg: TsGame2D = new TsGame2D();

const loop = tsg.gameLoop;
loop.init();

const background = new Background(tsg);
const player = new Player(tsg);

loop.onUpdate = () => {
  player.update();
};

loop.onRender = () => {
  background.render();
  player.render();
};
