import Game from 'Game'
import Rect from '@Draw/Rect'

const game = new Game()

const playerID = game.createGameObject((player, game) => {
  const {
    canvas: { context },
    keyboard,
  } = game

  player.body = new Rect(context)
    .resize(30, 30)
    .reposition(40, 40)
    .setColor('#88ff')

  const key = keyboard().create('Space', () =>
    player.body.setColor('red' === player.body.color ? 'blue ' : 'red')
  )

  player.render = () => {
    player.body.render()
  }
})

const bgID = game.createGameObject((background, game) => {
  const {
    canvas: { context, screen },
  } = game

  background.body = new Rect(context)
    .resize(screen.width, screen.height)
    .setColor('#232323')

  background.render = () => {
    background.body.render()
  }
})
