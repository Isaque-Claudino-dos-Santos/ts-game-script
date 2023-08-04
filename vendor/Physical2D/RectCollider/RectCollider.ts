import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import InterfaceRectCollider from './InterfaceRectCollider'
import is from '@Vendor/utils/is'

export default class RectCollider implements InterfaceRectCollider {
  statics: Rect[] = []
  movings: Rect[] = []

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
