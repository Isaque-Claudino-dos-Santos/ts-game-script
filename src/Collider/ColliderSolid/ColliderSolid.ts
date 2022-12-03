import ColliderSolidRect from "./ColliderSolidRect";
import InterfaceColliderSolid from "./InterfaceColliderSolid";

export default class ColliderSolid implements InterfaceColliderSolid {
  readonly react: ColliderSolidRect = new ColliderSolidRect();
}
