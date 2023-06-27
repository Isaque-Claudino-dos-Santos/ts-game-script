import Engine from '@Vendor/Engine'

export default interface InterfaceGame {
  engine: Engine
  init(): void
  update(): void
  render(): void
}
