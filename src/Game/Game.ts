import Engine from '@Engine/Engine'
import InterfaceGame from '@Game/InterfaceGame'

export default abstract class Game implements InterfaceGame {
  constructor(public readonly engine: Engine) {}
  init = () => {}
  update = () => {}
  render = () => {}
}
