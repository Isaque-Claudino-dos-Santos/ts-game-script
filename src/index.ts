import tsg from "./TsGame2D";

const loop = tsg.gameLoop;

loop.init();

const background = tsg.draw.rect({
  ...tsg.display.getSize(),
  x: 0,
  y: 0,
  color: "black",
});

const player = tsg.draw.rect({
  x: 10,
  y: 10,
  width: 30,
  height: 30,
  color: "blue",
});

const playerNick = tsg.draw.text({
  text: "isaque",
  color: "white",
  size: 16,
});

function playerMoviment() {
  const press = tsg.keyBoard.press;
  const vel = 2;
  if (press.check("d")) player.x += vel;
  if (press.check("a")) player.x -= vel;
  if (press.check("s")) player.y += vel;
  if (press.check("w")) player.y -= vel;
}

loop.onUpdate = () => {
  playerMoviment();
  playerNick.relativeWith(player, player.width / 2, -2);
};

loop.onRender = () => {
  background.render();
  player.render();
  playerNick.render();
};
