import Canvas from './Canvas/Canvas';
import Context2D from './Render/Context2D';
import Drawing from './Render/Drawing';
import PlayerObject from './app/PlayerObject';



const canvas: Canvas = new Canvas();
canvas.addBorder();
const context2d: Context2D = new Context2D(canvas.screen);
const draw: Drawing = new Drawing(context2d.context);

const player = new PlayerObject();

console.log(process.env.MSG_TEST);



window.onload = () => {
  draw.image(player.shape);
};
