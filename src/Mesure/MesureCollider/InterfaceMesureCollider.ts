import TypeCollider from "../../Types/TypeCollider";

export default interface InterfaceMesureCollider {
  cathetusX(
    blocked: TypeCollider.RectInX,
    blocker: TypeCollider.RectInX
  ): number;

  cathetusY(
    blocked: TypeCollider.RectInY,
    blocker: TypeCollider.RectInY
  ): number;

  cathetusXAbs(
    blocked: TypeCollider.RectInX,
    blocker: TypeCollider.RectInX
  ): number;

  cathetusYAbs(
    blocked: TypeCollider.RectInY,
    blocker: TypeCollider.RectInY
  ): number;

  sumHalfWidth(
    blocked: TypeCollider.RectInX,
    blocker: TypeCollider.RectInX
  ): number;

  sumHalfHeight(
    blocked: TypeCollider.RectInY,
    blocker: TypeCollider.RectInY
  ): number;

  overlapX(
    blocked: TypeCollider.RectInX,
    blocker: TypeCollider.RectInX
  ): number;

  overlapY(
    blocked: TypeCollider.RectInY,
    blocker: TypeCollider.RectInY
  ): number;
}
