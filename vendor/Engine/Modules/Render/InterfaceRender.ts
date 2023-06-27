import Engine from '@Vendor/Engine'
import { TypeObjectShape } from '@Vendor/Models/Object/TypesObject'

export default interface InterfaceRender {
  readonly engine: Engine
  shapes: TypeObjectShape[]

  all(): void
  add(shape: TypeObjectShape): void
}
