import Canvas from "./Canvas";
import Context2D from "./Context2D";
import Drawing from "./Drawing/Drawing";
import PlayerObject from "./app/PlayerObject";

const canvas: Canvas = new Canvas();
const { context }: Context2D = new Context2D(canvas.element);
const draw: Drawing = new Drawing(context);

const player = new PlayerObject();

console.log(process.env.MSG_TEST);

window.onload = () => {
  draw.image(player.shape);
};
