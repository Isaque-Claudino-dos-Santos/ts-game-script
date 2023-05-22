import Engine from '@Engine/Engine'
import InterfaceGame from '@Engine/Interfaces/InterfaceGame'

export default abstract class Game implements InterfaceGame {
  constructor(public readonly engine: Engine) {}
  init = () => {}
  update = () => {}
  render = () => {}
  collided = () => {}
}
