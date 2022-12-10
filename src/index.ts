import TsGame2D from "../vendor/TsGame2D";
import { Ball, Player } from "./GameObjects";

const tsg: TsGame2D = new TsGame2D();

const background = tsg.draw.rect({ ...tsg.display.getSize() });

const ball = new Ball(tsg);
const player = new Player(tsg);

const loop = tsg.gameLoop;

loop.onUpdate = () => {
  player.moviment();
};

loop.onRender = () => {
    background.render()
  ball.render();
  player.render();
};

loop.init();
