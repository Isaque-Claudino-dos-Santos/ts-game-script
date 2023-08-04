import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import InterfaceRectCollider from './InterfaceRectCollider'
import is from '@Vendor/utils/is'

export default class RectCollider implements InterfaceRectCollider {
  statics: Rect[] = []
  movings: Rect[] = []

  collided(r1: Rect, r2: Rect): boolean {
    const distanceX = r1.centerX() - r2.centerX()
    const distanceY = r1.centerY() - r2.centerY()
    const sumHalfWidth = r1.halfWidth() + r2.halfWidth()
    const sumHalfHeight = r1.halfHeight() + r2.halfHeight()
    const overlapX = sumHalfWidth + Math.abs(distanceX)
    const overlapY = sumHalfWidth + Math.abs(distanceY)

    return true
  }

  addStatic(rect: Rect | Rect[]): this {
    if (is.array(rect)) {
      rect.forEach((r) => this.statics.push(r))
    }
    if (rect instanceof Rect) {
      this.statics.push(rect)
    }
    return this
  }

  addMoving(rect: Rect | Rect[]): this {
    if (is.array(rect)) {
      rect.forEach((r) => this.movings.push(r))
    }
    if (rect instanceof Rect) {
      this.statics.push(rect)
    }
    return this
  }
}
