import Loop from '@Vendor/Events/Loop'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'
import Mouse from '@Vendor/Events/Mouse'
import GameMyGame from './GameMyGame'

const canvas = new Canvas2D()
const mouse = new Mouse(canvas.screen)
const loop = new Loop()

const game = new GameMyGame(canvas.screen, canvas.context)

loop.init = () => {
  game.gameInit()
}

loop.update = () => {
  game.gameUpdate()
}

loop.render = () => {
  canvas.context.clearRect(0, 0, 1000, 1000)
  game.gameRender()
}

loop.boot()
