import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import AbstractGameObject from '../AbstractGameObject'
import InterfaceCollider2D, { ColliderResolve } from './InterfaceCollider2D'

export default class Collider2D implements InterfaceCollider2D {
  rect(
    obj1: AbstractGameObject,
    obj2: AbstractGameObject,
    resolve: ColliderResolve
  ): void {
    const boundingBox1 = obj1.boundingBox
    const boundingBox2 = obj2.boundingBox
    if (!boundingBox1)
      throw `BoundingBox not defined in ${obj1['constructor'].name}`
    if (!boundingBox2)
      throw `BoundingBox not defined in ${obj2['constructor'].name}`
    const box1 = boundingBox1.box
    const box2 = boundingBox2.box
    if (!(box1 instanceof Rect))
      throw `BoundingBox in ${obj1['constructor'].name}, not is type Rect`
    if (!(box2 instanceof Rect))
      throw `BoundingBox in ${obj2['constructor'].name}, not is type Rect`

    const catX = box1.centerX() - box2.centerX()
    const catY = box1.centerY() - box2.centerY()
    const sumHalfWidth = box1.halfWidth() + box2.halfWidth()
    const sumHalfHeight = box1.halfHeight() + box2.halfHeight()
    const overlapX = sumHalfWidth - Math.abs(catX)
    const overlapY = sumHalfHeight - Math.abs(catY)

    if (overlapX <= 0 && overlapY <= 0) {
      resolve(obj2, {
        overlapX,
        overlapY,
        distanceX: catX,
        distanceY: catY,
      })
    }
  }
}
