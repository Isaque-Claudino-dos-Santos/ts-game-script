import InterfaceMesureCollider from "./InterfaceMesureCollider";
import TypeCollider from "../../Types/TypeCollider";
import Mesure from "../Mesure";

export default class MesureCollider implements InterfaceMesureCollider {
  cathetusX(rect1: TypeCollider.RectInX, rect2: TypeCollider.RectInX): number {
    return Mesure.cathetus(
      Mesure.center(rect1.x, rect1.width),
      Mesure.center(rect2.x, rect2.width)
    );
  }

  cathetusY(rect1: TypeCollider.RectInY, rect2: TypeCollider.RectInY): number {
    return Mesure.cathetus(
      Mesure.center(rect1.y, rect1.height),
      Mesure.center(rect2.y, rect2.height)
    );
  }

  cathetusXAbs(
    rect1: TypeCollider.RectInX,
    rect2: TypeCollider.RectInX
  ): number {
    return Math.abs(this.cathetusX(rect1, rect2));
  }

  cathetusYAbs(
    rect1: TypeCollider.RectInY,
    rect2: TypeCollider.RectInY
  ): number {
    return Math.abs(this.cathetusY(rect1, rect2));
  }

  sumHalfWidth(
    rect1: TypeCollider.RectInX,
    rect2: TypeCollider.RectInX
  ): number {
    return Mesure.sumHalf(Mesure.half(rect1.width), Mesure.half(rect2.width));
  }

  sumHalfHeight(
    rect1: TypeCollider.RectInY,
    rect2: TypeCollider.RectInY
  ): number {
    return Mesure.sumHalf(Mesure.half(rect1.height), Mesure.half(rect2.height));
  }

  overlapX(rect1: TypeCollider.RectInX, rect2: TypeCollider.RectInX): number {
    return this.sumHalfWidth(rect1, rect2) - this.cathetusXAbs(rect1, rect2);
  }

  overlapY(rect1: TypeCollider.RectInY, rect2: TypeCollider.RectInY): number {
    return this.sumHalfHeight(rect1, rect2) - this.cathetusYAbs(rect1, rect2);
  }
}
