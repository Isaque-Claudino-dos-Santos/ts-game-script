import Canvas from "./Canvas";
import Context2D from "./Context2D";
import Drawing from "./Drawing/Drawing";


const canvas: Canvas = new Canvas();
canvas.element.style.border = '1px solid black'
const { context }: Context2D = new Context2D(canvas.element);
const draw: Drawing = new Drawing(context);


window.onload = () => {

};
