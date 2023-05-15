import InterfaceCollider from '@Engine/Interfaces/InterfaceCollider'
import Rect from './Draw/Rect'
import Arc from './Draw/Arc'
import Object from './Modules/Object'

export default class Collider implements InterfaceCollider {
  rectWithRect(object1: Object<Rect>, object2: Object<Rect>): this {
    const box1 = object1.boundingBox
    const box2 = object2.boundingBox

    if (!box1 || !box2) return this

    if (
      box1.box.x < box2.box.x + box2.box.width &&
      box1.box.x + box1.box.width < box2.box.x &&
      box1.box.y < box2.box.y + box2.box.height &&
      box1.box.y + box1.box.height > box2.box.y
    ) {
      box1.onCollision(object2)
      box2.onCollision(object1)
    }
    return this
  }

  arcWithArc(object1: Object<Arc>, object2: Object<Arc>): this {
    const box1 = object1.boundingBox
    const box2 = object2.boundingBox

    if (!box1 || !box2) return this

    const catX = box1.box.x - box2.box.x
    const catY = box1.box.y - box2.box.y
    const sumRadius = box1.box.radius + box2.box.radius
    const hpty = Math.sqrt(catX ** 2 + catY ** 2)
    const overlap = hpty - sumRadius

    if (overlap <= 0) {
      box1.onCollision(object2)
      box1.onCollision(object1)
    }
    return this
  }

  arcWithRect(object1: Object<Arc>, object2: Object<Rect>): this {
    const box1 = object1.boundingBox
    const box2 = object2.boundingBox

    if (!box1 || !box2) return this

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
      box1.onCollision(object2)
      box2.onCollision(object1)
    }
    return this
  }
}
