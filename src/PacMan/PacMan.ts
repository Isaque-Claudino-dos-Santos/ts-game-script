import Game, { TypeGameFN } from '@Game/Game'

export default class PacMan extends Game {
  override init: TypeGameFN = () => {
    console.log(`Game Init ✅`)
  }
  override update: TypeGameFN = () => {}

  override render: TypeGameFN = () => {}
}
