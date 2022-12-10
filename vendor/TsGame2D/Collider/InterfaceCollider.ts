import ColliderRect from "./ColliderRect";
import ColliderArc from './ColliderArc'

export default interface InterfaceCollider {
  readonly rect: ColliderRect;
  readonly arc: ColliderArc
}
