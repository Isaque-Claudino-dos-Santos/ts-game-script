import InterfaceMesureCollider from "./InterfaceMesureCollider";
import TypeCollider from "../../Types/TypeCollider";
import Mesure from "../Mesure";

export default class MesureCollider implements InterfaceMesureCollider {
  cathetusX(
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ): number {
    return Mesure.cathetus(
      Mesure.center(blocked.x, blocked.width),
      Mesure.center(blocker.x, blocker.width)
    );
  }

  cathetusY(
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ): number {
    return Mesure.cathetus(
      Mesure.center(blocked.y, blocked.height),
      Mesure.center(blocker.y, blocker.height)
    );
  }

  cathetusXAbs(
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ): number {
    return Math.abs(this.cathetusX(blocked, blocker));
  }

  cathetusYAbs(
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ): number {
    return Math.abs(this.cathetusY(blocked, blocker));
  }

  sumHalfWidth(
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ): number {
    return Mesure.sumHalf(
      Mesure.half(blocked.width),
      Mesure.half(blocker.width)
    );
  }

  sumHalfHeight(
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ): number {
    return Mesure.sumHalf(
      Mesure.half(blocked.height),
      Mesure.half(blocker.height)
    );
  }

  overlapX(
    blocked: TypeCollider.BlockedRectSolidInX,
    blocker: TypeCollider.BlockerRectSolidInX
  ): number {
    return (
      this.sumHalfWidth(blocked, blocker) - this.cathetusXAbs(blocked, blocker)
    );
  }

  overlapY(
    blocked: TypeCollider.BlockedRectSolidInY,
    blocker: TypeCollider.BlockerRectSolidInY
  ): number {
    return (
      this.sumHalfHeight(blocked, blocker) - this.cathetusYAbs(blocked, blocker)
    );
  }
}
