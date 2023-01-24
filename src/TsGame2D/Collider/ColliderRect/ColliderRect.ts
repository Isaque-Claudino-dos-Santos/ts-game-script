import TypeCollider from '../../Types/TypeCollider';
import InterfaceColliderSolidRect from './InterfaceSolidRect';
import Mesure from '../../Mesure';

export default class ColliderRect implements InterfaceColliderSolidRect {
  solid(blocked: TypeCollider.Rect, blocker: TypeCollider.Rect): void {
    const catX: number = Mesure.collider.cathetusX(blocked, blocker);
    const catXAbs: number = Mesure.collider.cathetusXAbs(blocked, blocker);

    const catY: number = Mesure.collider.cathetusY(blocked, blocker);
    const catYAbs: number = Mesure.collider.cathetusYAbs(blocked, blocker);

    const sumHalfWidth: number = Mesure.collider.sumHalfWidth(blocked, blocker);
    const sumHalfHeight: number = Mesure.collider.sumHalfHeight(
      blocked,
      blocker
    );

    const overlapX: number = Mesure.collider.overlapX(blocked, blocker);
    const overlapY: number = Mesure.collider.overlapY(blocked, blocker);

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

  touch(
    rang: TypeCollider.Rect,
    touched: TypeCollider.Rect,
    callback?: () => void
  ): boolean {
    const catXAbs: number = Mesure.collider.cathetusXAbs(rang, touched);
    const catYAbs: number = Mesure.collider.cathetusYAbs(rang, touched);
    const sumHalfWidth: number = Mesure.collider.sumHalfWidth(rang, touched);
    const sumHalfHeight: number = Mesure.collider.sumHalfHeight(rang, touched);

    if (catXAbs < sumHalfWidth && catYAbs < sumHalfHeight) {
      if (typeof callback !== 'undefined') callback();
      return true;
    }

    return false;
  }
}
