import InterfaceCollider from '@Engine/Interfaces/InterfaceCollider'
import Rect from './Draw/Rect'
import Arc from './Draw/Arc'
import Object from './Modules/Object'
import { TypeResolveCollider } from '@Engine/Interfaces/InterfaceCollider'

export default class Collider implements InterfaceCollider {
  rectWithRect(
    object1: Object<Rect>,
    object2: Object<Rect>,
    resolve: TypeResolveCollider<typeof object2>
  ): this {
    const box1 = object1.boundingBox
    const box2 = object2.boundingBox

    if (!box1 || !box2) return this

    const collidedLeft = box1.box.x + box1.box.width <= box2.box.x
    const collidedRight = box1.box.x <= box2.box.x + box2.box.width
    const colliderTop = box1.box.y + box1.box.height >= box2.box.y
    const collidedBottom = box1.box.y <= box2.box.y + box2.box.height
    const collidedAny =
      collidedRight && collidedLeft && colliderTop && collidedBottom

    if (collidedAny) {
      box2.collidedSide.left = collidedLeft
      box2.collidedSide.right = collidedRight
      box2.collidedSide.top = colliderTop
      box2.collidedSide.bottom = collidedBottom
      box2.collidedSide.any = collidedAny

      resolve(object2)
    }
    return this
  }

  arcWithArc(
    object1: Object<Arc>,
    object2: Object<Arc>,
    resolve: TypeResolveCollider<typeof object2>
  ): this {
    const box1 = object1.boundingBox
    const box2 = object2.boundingBox

    if (!box1 || !box2) return this

    const catX = box1.box.x - box2.box.x
    const catY = box1.box.y - box2.box.y
    const sumRadius = box1.box.radius + box2.box.radius
    const hpty = Math.sqrt(catX ** 2 + catY ** 2)
    const overlap = hpty - sumRadius

    const isOnLeft = box1.box.x < box2.box.x
    const isOnRight = box1.box.x > box2.box.x
    const isOnTop = box1.box.y < box2.box.y
    const isOnBottom = box1.box.y > box2.box.y

    const collidedLeft = isOnLeft && overlap <= 0
    const collidedRight = isOnRight && overlap <= 0
    const colliderTop = isOnTop && overlap <= 0
    const collidedBottom = isOnBottom && overlap <= 0

    box2.collidedSide.left = collidedLeft
    box2.collidedSide.right = collidedRight
    box2.collidedSide.top = colliderTop
    box2.collidedSide.bottom = collidedBottom
    box2.collidedSide.any = overlap <= 0

    if (overlap <= 0) {
      resolve(object2)
    }
    return this
  }

  arcWithRect(
    object1: Object<Arc>,
    object2: Object<Rect>,
    resolve: TypeResolveCollider<typeof object2>
  ): this {
    const box1 = object1.boundingBox
    const box2 = object2.boundingBox

    if (!box1 || !box2) return this

    let pointX = box1.box.x
    let pointY = box1.box.y

    const isOnLeft = box1.box.x < box2.box.x
    const isOnRight = box1.box.x > box2.box.x + box2.box.width
    const isOnTop = box1.box.y < box2.box.y
    const isOnBottom = box1.box.y > box2.box.y + box2.box.height

    if (isOnLeft) pointX = box2.box.x
    if (isOnRight) pointX = box2.box.x + box2.box.width
    if (isOnTop) pointY = box2.box.y
    if (isOnBottom) pointY = box2.box.y + box2.box.height

    const catX = box1.box.x - pointX
    const catY = box1.box.y - pointY
    const hpty = Math.sqrt(catX ** 2 + catY ** 2)
    const overlap = hpty - box1.box.radius

    const collidedLeft = isOnLeft && overlap <= 0
    const collidedRight = isOnRight && overlap <= 0
    const colliderTop = isOnTop && overlap <= 0
    const collidedBottom = isOnBottom && overlap <= 0

    box2.collidedSide.left = collidedLeft
    box2.collidedSide.right = collidedRight
    box2.collidedSide.top = colliderTop
    box2.collidedSide.bottom = collidedBottom
    box2.collidedSide.any = overlap <= 0

    if (overlap <= 0) {
      resolve(object2)
    }
    return this
  }
}
