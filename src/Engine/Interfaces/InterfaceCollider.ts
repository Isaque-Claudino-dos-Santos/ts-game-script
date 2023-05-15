import Arc from '@Engine/Draw/Arc'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default interface InterfaceCollider {
  rectWithRect(object1: Object<Rect>, object2: Object<Rect>): this
  arcWithArc(object1: Object<Arc>, object2: Object<Arc>): this
  arcWithRect(object1: Object<Arc>, object2: Object<Rect>): this
}
