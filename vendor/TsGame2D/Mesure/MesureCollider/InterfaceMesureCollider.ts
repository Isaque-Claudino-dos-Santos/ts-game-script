import TypeCollider from "../../Types/TypeCollider";

export default interface InterfaceMesureCollider {
  cathetusX(rect1: TypeCollider.RectInX, rect2: TypeCollider.RectInX): number;

  cathetusY(rect1: TypeCollider.RectInY, rect2: TypeCollider.RectInY): number;

  cathetusXAbs(
    rect1: TypeCollider.RectInX,
    rect2: TypeCollider.RectInX
  ): number;

  cathetusYAbs(
    rect1: TypeCollider.RectInY,
    rect2: TypeCollider.RectInY
  ): number;

  sumHalfWidth(
    rect1: TypeCollider.RectInX,
    rect2: TypeCollider.RectInX
  ): number;

  sumHalfHeight(
    rect1: TypeCollider.RectInY,
    rect2: TypeCollider.RectInY
  ): number;

  overlapX(rect1: TypeCollider.RectInX, rect2: TypeCollider.RectInX): number;

  overlapY(rect1: TypeCollider.RectInY, rect2: TypeCollider.RectInY): number;
}
