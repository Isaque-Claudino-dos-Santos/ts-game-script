import InterfaceCollider from '@Engine/Interfaces/InterfaceCollider'
import Rect from './Draw/Rect'
import Arc from './Draw/Arc'
import Object from './Modules/Object'
import { TypeResolveCollider } from '@Engine/Interfaces/InterfaceCollider'
import BoundingBox from './BoundingBox'

export default class Collider implements InterfaceCollider {
  private exceptionTypeBoundBox(msgType: string): never {
    throw console.log(
      new Error(
        `The bounding box of object not is type BoundingBox<${msgType}>`
      )
    )
  }

  rectWithRect(
    object1: Object<Rect>,
    object2: Object<Rect>,
    resolve: TypeResolveCollider<typeof object2>
  ): this | never {
    const boundingBox1 = object1.boundingBox as BoundingBox<Rect>
    const boundingBox2 = object2.boundingBox as BoundingBox<Rect>
    const box1 = boundingBox1.box
    const box2 = boundingBox1.box

    if (
      !(boundingBox1 instanceof BoundingBox<Rect>) ||
      !(boundingBox2 instanceof BoundingBox<Rect>)
    ) {
      this.exceptionTypeBoundBox('Rect')
    }

    if (!box1 || !box2) return this

    const collidedLeft = box1.x + box1.width <= box2.x
    const collidedRight = box1.x <= box2.x + box2.width
    const colliderTop = box1.y + box1.height >= box2.y
    const collidedBottom = box1.y <= box2.y + box2.height
    const collidedAny =
      collidedRight && collidedLeft && colliderTop && collidedBottom

    boundingBox2.collided.distanceLeft = box1.x + box1.width - box2.x
    boundingBox2.collided.distanceRight = box1.x - box2.x + box2.width
    boundingBox2.collided.distanceTop = box1.y + box1.height - box2.y
    boundingBox2.collided.distanceBottom = box1.y - box2.y + box2.height

    if (collidedAny) {
      boundingBox2.collided.onLeft = collidedLeft
      boundingBox2.collided.onRight = collidedRight
      boundingBox2.collided.onTop = colliderTop
      boundingBox2.collided.onBottom = collidedBottom
      boundingBox2.collided.onAny = collidedAny

      resolve(object2)
    }
    return this
  }

  arcWithArc(
    object1: Object<Arc>,
    object2: Object<Arc>,
    resolve: TypeResolveCollider<typeof object2>
  ): this {
    const boundingBox1 = object1.boundingBox as BoundingBox<Arc>
    const boundingBox2 = object2.boundingBox as BoundingBox<Arc>
    const box1 = boundingBox1.box
    const box2 = boundingBox2.box
    if (
      !(boundingBox1 instanceof BoundingBox<Rect>) ||
      !(boundingBox2 instanceof BoundingBox<Rect>)
    ) {
      this.exceptionTypeBoundBox('Rect')
    }

    const catX = box1.x - box2.x
    const catY = box1.y - box2.y
    const sumRadius = box1.radius + box2.radius
    const hpty = Math.sqrt(catX ** 2 + catY ** 2)
    const overlap = hpty - sumRadius

    const isOnLeft = box1.x < box2.x
    const isOnRight = box1.x > box2.x
    const isOnTop = box1.y < box2.y
    const isOnBottom = box1.y > box2.y

    const collidedLeft = isOnLeft && overlap <= 0
    const collidedRight = isOnRight && overlap <= 0
    const colliderTop = isOnTop && overlap <= 0
    const collidedBottom = isOnBottom && overlap <= 0

    boundingBox2.collided.onLeft = collidedLeft
    boundingBox2.collided.onRight = collidedRight
    boundingBox2.collided.onTop = colliderTop
    boundingBox2.collided.onBottom = collidedBottom
    boundingBox2.collided.onAny = overlap <= 0

    boundingBox2.collided.distanceLeft =
      box1.x + box1.radius - box2.x + box2.radius
    boundingBox2.collided.distanceRight =
      box1.x + box1.radius - box2.x + box2.radius
    boundingBox2.collided.distanceTop =
      box1.y + box1.radius - box2.y + box2.radius
    boundingBox2.collided.distanceBottom =
      box1.y + box1.radius - box2.y + box2.radius

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
    const boundingBox1 = object1.boundingBox as BoundingBox<Arc>
    const boundingBox2 = object2.boundingBox as BoundingBox<Rect>

    const box1 = boundingBox1.box
    const box2 = boundingBox2.box

    if (
      !(boundingBox1 instanceof BoundingBox<Rect>) ||
      !(boundingBox2 instanceof BoundingBox<Rect>)
    ) {
      this.exceptionTypeBoundBox('Rect')
    }

    let pointX = box1.x
    let pointY = box1.y

    const isOnLeft = box1.x < box2.x
    const isOnRight = box1.x > box2.x + box2.width
    const isOnTop = box1.y < box2.y
    const isOnBottom = box1.y > box2.y + box2.height

    if (isOnLeft) pointX = box2.x
    if (isOnRight) pointX = box2.x + box2.width
    if (isOnTop) pointY = box2.y
    if (isOnBottom) pointY = box2.y + box2.height

    const catX = box1.x - pointX
    const catY = box1.y - pointY
    const hpty = Math.sqrt(catX ** 2 + catY ** 2)
    const overlap = hpty - box1.radius

    const collidedLeft = isOnLeft && overlap <= 0
    const collidedRight = isOnRight && overlap <= 0
    const colliderTop = isOnTop && overlap <= 0
    const collidedBottom = isOnBottom && overlap <= 0

    boundingBox2.collided.onLeft = collidedLeft
    boundingBox2.collided.onRight = collidedRight
    boundingBox2.collided.onTop = colliderTop
    boundingBox2.collided.onBottom = collidedBottom
    boundingBox2.collided.onAny = overlap <= 0

    boundingBox2.collided.distanceLeft = box1.x + box1.radius - box2.x
    boundingBox2.collided.distanceRight =
      box1.x + box1.radius - box2.x + box2.width
    boundingBox2.collided.distanceTop = box1.y + box1.radius - box2.y
    boundingBox2.collided.distanceBottom =
      box1.y + box1.radius - box2.y + box2.height

    if (overlap <= 0) {
      resolve(object2)
    }
    return this
  }
}
