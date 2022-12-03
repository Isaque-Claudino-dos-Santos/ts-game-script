import ColliderSolid from "./ColliderSolid";
import InterfaceCollider from "./InterfaceCollider";

export default class Collider implements InterfaceCollider {
  readonly solid: ColliderSolid = new ColliderSolid();
}
