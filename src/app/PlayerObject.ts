import ModelObject from '../GameModel/ModelObject';
import ShapeImage from '../Render/Shapes/ShapeImage';
import { InterfaceShapeImage, TypeImage, TypeShapes } from '../Types/Shapes';

export default class PlayerObject extends ModelObject {
  shape: InterfaceShapeImage = new ShapeImage(
    'images/spaceship.svg',
    0,
    0,
    50,
    50,
    0,
    0,
    100,
    100
  );
}
