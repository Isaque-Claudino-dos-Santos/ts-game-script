import TsGame2D from "./TsGame2D";

const tsg = new TsGame2D();

const loop = tsg.gameLoop;
loop.init();

loop.onUpdate = () => {};
