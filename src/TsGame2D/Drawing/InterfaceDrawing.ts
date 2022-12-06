import TypeDraw from "../Types/TypeDraw";
import DrawRect from "./DrawRect";
import DrawImage from "./DrawImage";
import DrawText from "./DrawText";

export default interface InterfaceDrawing {
  rect(dataRect?: Partial<TypeDraw.Rect>): DrawRect;

  image(dataImage?: Partial<TypeDraw.Image>): DrawImage;

  text(dataText?: Partial<TypeDraw.Text>): DrawText;
}
