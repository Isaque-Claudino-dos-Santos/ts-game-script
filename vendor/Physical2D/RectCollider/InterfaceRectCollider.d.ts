import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'

export default interface InterfaceRectCollider {
  statics: Rect[]
  movings: Rect[]

  addStatic(rect: Rect | Rect[]): this
  addMoving(rect: Rect | Rect[]): this
  collided(r1: Rect, r2: Rect): boolean
}
