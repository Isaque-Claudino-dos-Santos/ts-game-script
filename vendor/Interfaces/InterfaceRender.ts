import Engine from '@Vendor/Engine'
import TypeShape from '@Vendor/Types/TypeShape'

export default interface InterfaceRender {
  readonly engine: Engine
  shapes: TypeShape[]

  all(): void
  add(shape: TypeShape): void
}
