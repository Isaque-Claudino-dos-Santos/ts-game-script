import ColliderRect from './ColliderRect'
import InterfaceCollider from "./InterfaceCollider";

export default class Collider implements InterfaceCollider {
  readonly rect: ColliderRect = new ColliderRect();
}
