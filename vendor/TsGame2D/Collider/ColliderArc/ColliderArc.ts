import TypeCollider from "../../Types/TypeCollider";
import InterfaceColliderArc from "./InterfaceColliderArc";

import Mesure from "../../Mesure";

export default class ColliderArc implements InterfaceColliderArc {
  touch(
    rang: TypeCollider.Arc,
    touched: TypeCollider.Arc,
    callback?: (() => void) | undefined
  ): boolean {
    const sumRadius: number = Mesure.sum(rang.radius, touched.radius);
    const catX: number = Mesure.distance(rang.x, touched.x);
    const catY: number = Mesure.distance(rang.y, touched.y);
    const hypo: number = Mesure.hypotenuse(catX, catY);
    const overlap: number = hypo - sumRadius;
    if (overlap < 0) {
      callback();
      return true;
    }

    return false;
  }
}
