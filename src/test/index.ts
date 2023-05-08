import Game from 'Game'
import Rect from '@Draw/Rect'

const game = new Game()

game.createGameObject((player, { canvas: { context, screen } }) => {
  player.body = new Rect(context)
    .resize(30, 30)
    .reposition(40, 40)
    .setColor('#88ff')

  player.render = () => {
    player.body.render()
  }
})

game.createGameObject((background, { canvas: { context, screen } }) => {
  background.body = new Rect(context)
    .resize(screen.width, screen.height)
    .setColor('#232323')

  background.render = () => {
    background.body.render()
  }
})
