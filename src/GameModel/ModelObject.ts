import { InterfaceModelObject } from '../Types/GameModel';
import { TypeShapes } from '../Types/Shapes';

export default abstract class ModelObject implements InterfaceModelObject {
  shape: TypeShapes;
}
