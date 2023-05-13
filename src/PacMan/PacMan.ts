import Game, { TypeGameFN } from '@Game/Game'

export default class PacMan extends Game {
  override init: TypeGameFN = () => {
    console.log(`Game Init ✅`)
  }
  override update: TypeGameFN = () => {
    if (this.engine.keyboard.check('KeyA')) {
      console.log('On Check 👉 A')
    }

    if (this.engine.keyboard.check('KeyD')) {
      console.log('On Check 👉 D')
    }
  }

  override render: TypeGameFN = () => {}
}
