import TsGame from "./TsGame";

const tsg = new TsGame();

const player = tsg.draw.rect({
  x: 10,
  y: 10,
  width: 30,
  height: 30,
  color: "purple",
  type: "fill",
});


function loop() {


  requestAnimationFrame(loop);
}

loop();
