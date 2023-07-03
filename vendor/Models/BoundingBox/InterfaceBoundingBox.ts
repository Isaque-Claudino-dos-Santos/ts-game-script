import { EnumColliderType } from '../Collider/TypesCollider'
import Object from '../Object'
import { TypeObjectShape } from '../Object/TypesObject'

export default interface InterfaceBoundingBox<TypeBox extends TypeObjectShape> {
  readonly object: Object
  readonly engine: Object['engine']
  readonly box: TypeBox
  readonly type: EnumColliderType
  x: number
  y: number

  translate(x: number, y: number): this
  translateX(x: number): this
  translateY(y: number): this
  init(): void
  update(): void
  render(): void
}
