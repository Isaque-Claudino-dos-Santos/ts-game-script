import Canvas from './Canvas';
import Context2d from './Context2d';

const canvas: Canvas = new Canvas();
canvas.addBorder();
const context2d: Context2d = new Context2d(canvas.screen);
