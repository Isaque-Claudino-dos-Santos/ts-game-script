import ModelObject from '../GameModel/ModelObject';
import ShapeImage from '../Render/Shapes/ShapeImage';
import { TypeShapes } from '../Types/Shapes';

export default class PlayerObject extends ModelObject {
  shape: TypeShapes = new ShapeImage('images/spr_rect.svg', 10, 10, 30, 30);
}
