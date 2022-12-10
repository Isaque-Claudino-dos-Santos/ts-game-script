import ColliderArc from './ColliderArc';
import ColliderRect from './ColliderRect'
import InterfaceCollider from "./InterfaceCollider";

export default class Collider implements InterfaceCollider {
  public readonly rect: ColliderRect = new ColliderRect();
  public readonly arc: ColliderArc = new ColliderArc()
}
