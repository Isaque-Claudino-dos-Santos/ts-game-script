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
      let collided: boolean = false
      const boxies = this.scenes
        .current()
        .getObjectsStaticByClassName(className)
        .map((o) => o.boundingBox.box)

      boxies.forEach((box) => {
        let catX = objBox.originX() + x
        let catY = objBox.originY() + y

        if (box instanceof Rect) {
          catX -= box.x() + box.halfWidth()
          catY -= box.y() + box.halfHeight()
          if (objBox instanceof Rect) {
            const sumWidth = objBox.halfWidth() + box.halfWidth()
            const sumHeight = objBox.halfHeight() + box.halfHeight()

            if (sumWidth > Math.abs(catX) && sumHeight > Math.abs(catY)) {
              const overlapX = sumWidth + catX
              const overlapY = sumHeight + catY

              if (overlapX > 0) return (collided = true)
              if (overlapY > 0) return (collided = true)

              collided = false
            }
          }
        }
      })

      return collided
    }

    return true
  }
}
