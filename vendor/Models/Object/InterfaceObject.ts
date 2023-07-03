import Engine from '@Vendor/Engine'
import { TypeObjectShape } from './TypesObject'
import BoundingBox from '../BoundingBox'

export default interface InterfaceObject {
  readonly sprite: TypeObjectShape
  readonly bbox: BoundingBox<TypeObjectShape>
  readonly engine: Engine
  draw(): void
  init(): void
  update(): void
  render(): void
  onCollider(target: Object): void
}
