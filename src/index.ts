import Canvas from "./Canvas";
import Context2D from "./Context2D";
import Drawing from "./Drawing/Drawing";
import Shapes from "./Types/Shapes";

const canvas: Canvas = new Canvas();
canvas.element.style.border = "1px solid black";
const { context }: Context2D = new Context2D(canvas.element);
const draw: Drawing = new Drawing(context);

class Player {
  shape: Shapes.TypeRect = {
    x: 10,
    y: 10,
    width: 30,
    height: 30,
    color: "red",
    type: "fill",
  };

  constructor(private readonly draw: Drawing) {}

  render(methoRender: keyof Omit<Drawing, "context">) {}
}

const player = new Player(draw);

player.render("image");
