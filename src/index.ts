import Canvas from './Canvas';
import Context2d from './Context2d';
import Drawing from './Drawing';

const canvas: Canvas = new Canvas();
canvas.addBorder();
const context2d: Context2d = new Context2d(canvas.screen);

const draw: Drawing = new Drawing(context2d.context);

draw.rect({
  x: 10,
  y: 10,
  width: 100,
  height: 100,
  color: 'red',
  type: 'fill',
});
