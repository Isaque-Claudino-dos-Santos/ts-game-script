import Engine from '@Vendor/Engine'
import InterfaceGame from '@Vendor/Interfaces/InterfaceGame'

export default abstract class Game implements InterfaceGame {
  constructor(public readonly engine: Engine) {}
  init = () => {}
  update = () => {}
  render = () => {}
  collided = () => {}
}
