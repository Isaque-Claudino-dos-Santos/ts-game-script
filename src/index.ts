import Engine2D from '@Vendor/Engine2D'
import GameMyGame from './GameMyGame'

const game = new GameMyGame()
const engine = new Engine2D(game)

engine.initialize(() => {
  console.log('Initialized Game!')
})

console.log(engine)
