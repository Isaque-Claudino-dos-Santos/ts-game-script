import Engine from '@Vendor/Engine'
import { TypeObjectShape } from './TypesObject'

export default interface InterfaceObject {
  readonly sprite: TypeObjectShape
  readonly engine: Engine
  draw(): void
  init(): void
  update(): void
  render(): void
}
