import Rect from '@Vendor/Geometries/Rect'
import BoundingBox from '../BoundingBox'
import Object from '../Object'
import { TypeObjectShape } from '../Object/TypesObject'
import InterfaceCollider from './InterfaceCollider'
import { EnumColliderType } from './TypesCollider'

export default class Collider implements InterfaceCollider {
  private readonly objectsMoving: BoundingBox<TypeObjectShape>[] = []
  private readonly objectStatic: BoundingBox<TypeObjectShape>[] = []

  private isRect(bbox: BoundingBox<TypeObjectShape>): boolean {
    return bbox.box instanceof Rect
  }

  add(object: Object): this {
    if (object.bbox.type === EnumColliderType.MOVING)
      this.objectsMoving.push(object.bbox)
    if (object.bbox.type === EnumColliderType.STATIC)
      this.objectStatic.push(object.bbox)
    return this
  }
}
