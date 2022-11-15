import Canvas from './Canvas';
import Context2D from './Context2D';
import Drawing from './Drawing';
import Game2D from './Game2D';

const canvas: Canvas = new Canvas();
canvas.addBorder();
const context2d: Context2D = new Context2D(canvas.screen);
const draw: Drawing = new Drawing(context2d.context);

const game = new Game2D(canvas, context2d, draw);

game.endRules();
