import Engine from '@Vendor/Engine'
import InterfaceGame from './InterfaceGame'

export default abstract class Game implements InterfaceGame {
  constructor(public readonly engine: Engine) {}
  init = () => {}
  update = () => {}
  render = () => {}
}
