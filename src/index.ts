import Engine2D from '@Vendor/Engine2D'
import GameMyGame from './GameMyGame'

const engine = new Engine2D()
const game = new GameMyGame(engine.canvas)

engine.initialize(game, () => {
  console.log('Initialized Game!')
})
