import TsGame2D from "./TsGame2D";

const tsg: TsGame2D = new TsGame2D();

const loop = tsg.gameLoop;

loop.onUpdate = () => {};

loop.onRender = () => {};

loop.init();
