import InterfaceCollider from '@Engine/Interfaces/InterfaceCollider'
import BoundingBox from './BoundingBox'
import Rect from './Draw/Rect'
import Arc from './Draw/Arc'

export default class Collider implements InterfaceCollider {
  rectWithRect(box1: BoundingBox<Rect>, box2: BoundingBox<Rect>): this {
    if (
      box1.box.x < box2.box.x + box2.box.width &&
      box1.box.x + box1.box.width < box2.box.x &&
      box1.box.y < box2.box.y + box2.box.height &&
      box1.box.y + box1.box.height > box2.box.y
    ) {
      box1.onCollision(box2)
      box2.onCollision(box1)
    }
    return this
  }

  arcWithArc(box1: BoundingBox<Arc>, box2: BoundingBox<Arc>): this {
    const catX = box1.box.x - box2.box.x
    const catY = box1.box.y - box2.box.y
    const sumRadius = box1.box.radius + box2.box.radius
    const hpty = Math.sqrt(catX ** 2 + catY ** 2)
    const overlap = hpty - sumRadius

    if (overlap <= 0) {
      box1.onCollision(box2)
      box1.onCollision(box2)
    }
    return this
  }

  arcWithRect(box1: BoundingBox<Arc>, box2: BoundingBox<Rect>): this {
    let pointX = box1.box.x
    let pointY = box1.box.y

    if (box1.box.x < box2.box.x) pointX = box2.box.x
    else if (box1.box.x > box2.box.x + box2.box.width)
      pointX = box2.box.x + box2.box.width

    if (box1.box.y < box2.box.y) pointY = box2.box.y
    else if (box1.box.y > box2.box.y + box2.box.height)
      pointY = box2.box.y + box2.box.height

    const catX = box1.box.x - pointX
    const catY = box1.box.y - pointY
    const hpty = Math.sqrt(catX ** 2 + catY ** 2)
    const overlap = hpty - box1.box.radius

    if (overlap <= 0) {
      box1.onCollision(box2)
      box2.onCollision(box1)
    }
    return this
  }
}
