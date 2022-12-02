import TsGame2D from "./TsGame2D";
import Shapes from "./Types/Shapes";

const tsg = new TsGame2D();

const gameLoop = tsg.gameLoop;
gameLoop.init();

const player: Shapes.TypeRect = tsg.draw.rect({
  x: 10,
  y: 10,
  width: 30,
  height: 30,
  color: "blue",
  type: "fill",
});

const playerSpeed: { x: number; y: number } = {
  x: 3,
  y: 3,
};

//In update function
function playerMoviment() {
  const { press } = tsg.keyBoard;

  if (press.check("d")) player.x += playerSpeed.x;
  if (press.check("a")) player.x -= playerSpeed.x;
  if (press.check("w")) player.y -= playerSpeed.y;
  if (press.check("s")) player.y += playerSpeed.y;
}

//In render functions
function renderBackground() {
  tsg.draw.rect({
    x: 0,
    y: 0,
    ...tsg.display.getSize(),
    color: "black",
    type: "fill",
  });
}

function renderPlayer() {
  tsg.draw.rect(player);
}

gameLoop.onUpdate = () => {
  playerMoviment();
};

gameLoop.onRender = () => {
  renderBackground();
  renderPlayer();
};
