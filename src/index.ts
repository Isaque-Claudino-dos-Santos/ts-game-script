import TsGame2D from "./TsGame2D";
import Shapes from "./Types/Shapes";

const tsg = new TsGame2D();

const loop = tsg.gameLoop;
loop.init();

const background = tsg.draw.rect({
  x: 0,
  y: 0,
  ...tsg.display.getSize(),
  color: "black",
  type: "fill",
});

const player = tsg.draw.rect({
  x: 10,
  y: 10,
  width: 30,
  height: 30,
  color: "blue",
  type: "fill",
});

const playerSpeed = { x: 5, y: 5 };

const wall = tsg.draw.rect({
  x: 250,
  y: 100,
  width: 30,
  height: 100,
  color: "grey",
  type: "fill",
});

function playerMoviment(player: Shapes.TypeRect) {
  const { press } = tsg.keyBoard;

  if (press.check("d")) player.x += playerSpeed.x;
  if (press.check("a")) player.x -= playerSpeed.x;
  if (press.check("w")) player.y -= playerSpeed.y;
  if (press.check("s")) player.y += playerSpeed.y;
}

loop.onUpdate = () => {
  playerMoviment(player);
};

loop.onRender = () => {
  tsg.draw.rect(background);
  tsg.draw.rect(player);
  tsg.draw.rect(wall);
};
