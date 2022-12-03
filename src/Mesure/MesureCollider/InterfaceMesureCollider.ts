import TypeCollider from "../../Types/TypeCollider";

export default interface InterfaceMesureCollider {
  cathetusX(
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ): number;

  cathetusY(
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ): number;

  cathetusXAbs(
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ): number;

  cathetusYAbs(
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ): number;

  sumHalfWidth(
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ): number;

  sumHalfHeight(
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ): number;

  overlapX(
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ): number;

  overlapY(
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ): number;
}
