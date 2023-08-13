import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import AbstractGameObject from '../AbstractGameObject'
import InterfaceCollider2D, { ColliderResolve } from './InterfaceCollider2D'
import AbstractScene from '../AbstractScene'

export default class Collider2D implements InterfaceCollider2D {
  constructor(readonly scene: AbstractScene) {}

  rect<Obj extends AbstractGameObject>(
    obj1: AbstractGameObject,
    objInScene: string,
    resolve: ColliderResolve<Obj>
  ): void {
    const obj2 = this.scene.object(objInScene)
    const boundingBox1 = obj1.boundingBox
    const boundingBox2 = obj2.boundingBox
    if (!boundingBox1)
      throw `BoundingBox not defined in ${obj1['constructor'].name}`
    if (!boundingBox2)
      throw `BoundingBox not defined in ${obj2['constructor'].name}`
    if (!(boundingBox1.box instanceof Rect))
      throw `BoundingBox in ${obj1['constructor'].name}, not is type Rect`
    if (!(boundingBox2.box instanceof Rect))
      throw `BoundingBox in ${obj2['constructor'].name}, not is type Rect`

    const catX = boundingBox1.box.centerX() - boundingBox2.box.centerX()
    const catY = boundingBox1.box.centerY() - boundingBox2.box.centerY()
    const sumHalfWidth =
      boundingBox1.box.halfWidth() + boundingBox2.box.halfWidth()
    const sumHalfHeight =
      boundingBox1.box.halfHeight() + boundingBox2.box.halfHeight()
    const overlapX = sumHalfWidth - Math.abs(catX)
    const overlapY = sumHalfHeight - Math.abs(catY)

    if (overlapX >= 0 && overlapY >= 0) {
      resolve(obj2 as Obj, {
        overlapX,
        overlapY,
        distanceX: catX,
        distanceY: catY,
      })
    }
  }
}
