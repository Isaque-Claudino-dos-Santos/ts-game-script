import TypeCollider from "../../../Types/TypeCollider";
import InterfaceColliderSolidRect from "./InterfaceColliderSolidRect";
import Mesure from "../../../Mesure";

export default class ColliderSolidRect implements InterfaceColliderSolidRect {
  efectIn(
    blocked: TypeCollider.BlockedRectSolid,
    blocker: TypeCollider.BlockerRectSolid
  ): void {
    const MesureCollider = Mesure.collider;

    const catX: number = MesureCollider.cathetusX(blocked, blocker);
    const catXAbs: number = MesureCollider.cathetusXAbs(blocked, blocker);

    const catY: number = MesureCollider.cathetusY(blocked, blocker);
    const catYAbs: number = MesureCollider.cathetusYAbs(blocked, blocker);

    const sumHalfWidth: number = MesureCollider.sumHalfWidth(blocked, blocker);
    const sumHalfHeight: number = MesureCollider.sumHalfHeight(
      blocked,
      blocker
    );

    const overlapX: number = MesureCollider.overlapX(blocked, blocker);
    const overlapY: number = MesureCollider.overlapY(blocked, blocker);

    if (catXAbs < sumHalfWidth && catYAbs < sumHalfHeight) {
      if (overlapX >= overlapY) {
        //Collider top or bottom
        if (catY > 0) blocked.y += overlapY; //top
        else blocked.y -= overlapY; //down
      } else {
        //Collider by left or right
        if (catX > 0) blocked.x += overlapX; //left
        else blocked.x -= overlapX; //right
      }
    }
  }
}
