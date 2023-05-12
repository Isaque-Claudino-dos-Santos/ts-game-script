import Engine from '@Engine/Engine'

export default interface InterfaceGame {
  engine: Engine | undefined

  init(): void
  update(): void
  render(): void
}
