import BoundingBox from '@Engine/BoundingBox'
import Arc from '@Engine/Draw/Arc'
import Rect from '@Engine/Draw/Rect'

export default interface InterfaceCollider {
  rectWithRect(box1: BoundingBox<Rect>, box2: BoundingBox<Rect>): this
  arcWithArc(box1: BoundingBox<Arc>, box2: BoundingBox<Arc>): this
  arcWithRect(box1: BoundingBox<Arc>, box2: BoundingBox<Rect>): this
}
