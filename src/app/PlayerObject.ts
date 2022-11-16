import ModelObject from '../GameModel/ModelObject';
import ShapeRect from '../Render/Shapes/ShapeRect';
import { TypeShapes } from '../Types/Shapes';

export default class PlayerObject extends ModelObject {
  shape: TypeShapes = new ShapeRect(10, 10, 30, 30);
}
