import TypeCollider from "../../../Types/TypeCollider";
export default interface InterfaceColliderSolidRect {
  cathetusX: (
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ) => number;
  cathetusY: (
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ) => number;
}
