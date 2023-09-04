import InterfaceCollider2D from './InterfaceCollider2D'
import { GenericObject } from '../AbstractScene'
import AbstractGameObject from '../AbstractGameObject'
import HandlerScenes from '../HandlerScenes'
import is from '@Vendor/utils/is'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'

export default class Collider2D implements InterfaceCollider2D {
  constructor(
    readonly scenes: HandlerScenes,
    readonly object: AbstractGameObject
  ) {}

  placeMeeting(
    x: number,
    y: number,
    obj: GenericObject<AbstractGameObject> | string
  ): boolean {
    const className = obj['name']
    const objBox = this.object.boundingBox.box

    if (!is.undefined(className)) {
      const boxies = this.scenes
        .current()
        .getObjectsStaticByClassName(className)
        .map((o) => o.boundingBox.box)

      for (const box of boxies) {
        if (box instanceof Rect && objBox instanceof Rect) {
          const catX = box.x() + box.halfWidth() - (objBox.originX() + x)
          const catY = box.y() + box.halfHeight() - (objBox.originY() + y)
          const sumWidth = objBox.halfWidth() + box.halfWidth()
          const sumHeight = objBox.halfHeight() + box.halfHeight()

          if (sumWidth > Math.abs(catX) && sumHeight > Math.abs(catY)) {
            const overlapX = sumWidth + catX
            const overlapY = sumHeight + catY

            return overlapX > 0 && overlapY > 0
          }
        }
      }
    }

    return false
  }
}
