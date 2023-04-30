import Game from 'Game'
import Background from './Background'
import Player from './Player'

const game = new Game()
const { loop } = game

const player = new Player(game)
const background = new Background(game)

game.mouse.addEvents(background.body, 0, {
  onUp: () => {
    player.isDown = false
  },
  onMove: (mouse) => {
    if (player.isDown) {
      player.body.x = mouse.x - player.body.width / 2
      player.body.y = mouse.y - player.body.height / 2
    }
  },
})

player.boot()
background.boot()

loop.onUpdate = () => {
  player.update()
}

loop.onRender = () => {
  background.render()
  player.render()
}

loop.init()
