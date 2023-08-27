import Engine2D from '@Vendor/Engine2D'
import GameMyGame from './GameMyGame'

const game = new GameMyGame()
const engine = new Engine2D(game)

/*
##################
###Canvas Setup###
##################
*/
game.canvas.screen.width = 550 / 2 // resolution width
game.canvas.screen.height = 400 / 2 // resolution height
game.canvas.screen.style.imageRendering = 'pixelated' // pixelated to images
game.canvas.screen.style.width = '550px' // canvas width
game.canvas.screen.style.height = '400px' // canvas height

// Boot engine
engine.initialize(() => {
  console.log('Initialized Game!')
})
