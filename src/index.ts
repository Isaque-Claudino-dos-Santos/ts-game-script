import Engine2D from '@Vendor/Engine2D'
import GameMyGame from './GameMyGame'

const game = new GameMyGame()
const engine = new Engine2D(game)

/*
##################
###Canvas Setup###
##################
*/
game.canvas.screen.width = 560 // resolution width
game.canvas.screen.height = 315 // resolution height
// game.canvas.screen.style.imageRendering = 'pixelated' // pixelated to images
game.canvas.screen.style.width = `${(game.canvas.screen.width / 2) * 2}px` // canvas width
game.canvas.screen.style.height = `${(game.canvas.screen.height / 2) * 2}px` // canvas height

// Boot engine
engine.initialize(() => {
  console.log('Initialized Game!')
})
