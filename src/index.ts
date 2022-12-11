import TsGame2D from '../vendor/TsGame2D';

const tsg: TsGame2D = new TsGame2D();

const background = tsg.draw.rect({ ...tsg.display.getSize() });

const loop = tsg.gameLoop;

loop.onUpdate = () => tsg.room.callUpdate;

loop.onRender = () => {
  background.render();
  tsg.room.callRender();
};

loop.init();
