import Engine from '@Engine/Engine'
import InterfaceGame from '@Interface/InterfaceGame'

export type TypeGameFN = () => void

export default abstract class Game implements InterfaceGame {
  constructor(public readonly engine: Engine) {}

  init: TypeGameFN = () => {}
  update: TypeGameFN = () => {}
  render: TypeGameFN = () => {}
}
