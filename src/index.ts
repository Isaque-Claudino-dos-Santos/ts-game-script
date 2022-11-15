import Canvas from './Canvas';
import Context2D from './Context2D';
import Drawing from './Drawing';

const canvas: Canvas = new Canvas();
canvas.addBorder();
const context2d: Context2D = new Context2D(canvas.screen);

const draw: Drawing = new Drawing(context2d.context);

draw.rect({
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  color: 'red',
  type: 'fill',
});
