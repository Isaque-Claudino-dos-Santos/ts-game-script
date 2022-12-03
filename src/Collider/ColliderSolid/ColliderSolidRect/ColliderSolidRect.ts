import TypeCollider from "../../../Types/TypeCollider";
import InterfaceColliderSolidRect from "./InterfaceColliderSolidRect";
import Mesure from "../../../Mesure";

export default class ColliderSolidRect implements InterfaceColliderSolidRect {
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

  /*
  t(r1, r2) {
    //r1 ->
    //r2 -> blocker
    //catetos; armazenam a distância entre os retângulos
    const catX = r1.centerX() - r2.centerX();
    const catY = r1.centerY() - r2.centerY();

    //soma das metades
    var sumHalfWidth = r1.halfWidth() + r2.halfWidth();
    var sumHalfHeight = r1.halfHeight() + r2.halfHeight();

    if (Math.abs(catX) < sumHalfWidth && Math.abs(catY) < sumHalfHeight) {
      var overlapX = sumHalfWidth - Math.abs(catX);
      var overlapY = sumHalfHeight - Math.abs(catY);

      if (overlapX >= overlapY) {
        //colisão por cima ou por baixo
        if (catY > 0) {
          //por cima
          r1.posY += overlapY;
        } else {
          r1.posY -= overlapY;
        }
      } else {
        //colisão pela esquerda ou direita
        if (catX > 0) {
          //colisão pela esquerda
          r1.posX += overlapX;
        } else {
          r1.posX -= overlapX;
        }
      }
    }
  }
  */
}
