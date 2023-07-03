import Engine from '@Vendor/Engine'
import Object from '../Object'
import { TypeObjectShape } from '../Object/TypesObject'
import InterfaceBoundingBox from './InterfaceBoundingBox'
import { EnumColliderType } from '../Collider/TypesCollider'

export default class BoundingBox<TypeBox extends TypeObjectShape>
  implements InterfaceBoundingBox<TypeBox>
{
  readonly object: Object
  readonly engine: Engine
  readonly box: TypeBox
  readonly type: EnumColliderType = EnumColliderType.STATIC
  x: number = 0
  y: number = 0

  constructor(object: Object, box: TypeBox) {
    this.object = object
    this.engine = object.engine
    this.box = box
  }

  translate(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  translateX(x: number): this {
    this.x = x
    return this
  }

  translateY(y: number): this {
    this.y = y
    return this
  }

  init(): void {}
  update(): void {}
  render(): void {}
}
