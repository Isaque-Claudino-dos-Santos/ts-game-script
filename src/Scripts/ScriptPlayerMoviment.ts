import Keyboard from '@Vendor/Events/Keyboard'
import ObjectPlayer from '../Objects/ObjectPlayer'
import Engine from '@Vendor/Engine'
import { TypeKeyboardCode } from '@Vendor/Events/Keyboard/TypesKeyboard'

type TypeSide<T> = {
  left: T
  right: T
  top: T
  down: T
}

export default class ScriptPlayerMoviment {
  private readonly engine: Engine
  private readonly keyboard: Keyboard

  controls: TypeSide<TypeKeyboardCode> = {
    left: 'KeyA',
    right: 'KeyD',
    top: 'KeyW',
    down: 'KeyS',
  }
  speedX = 1
  speedY = 1

  constructor(readonly player: ObjectPlayer) {
    this.engine = player.engine
    this.keyboard = this.engine.keyboard
  }

  onMovimento() {
    const movimentX =
      this.keyboard.check(this.controls.right) -
      this.keyboard.check(this.controls.left)
    const movimentY =
      this.keyboard.check(this.controls.down) -
      this.keyboard.check(this.controls.top)
    const speedX = this.speedX * movimentX
    const speedY = this.speedY * movimentY

    this.player.sprite.addX(speedX)
    this.player.sprite.addY(speedY)
  }
}
