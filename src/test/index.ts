import Game from 'Game'
import Rect from '@Draw/Rect'

const game = new Game()
const keyboard = game.keyboard()
const { context, screen } = game.canvas

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

  player.render(() => {
    player.body.render()
  })
})

const bgID = game.createGameObject((background) => {
  background.body = new Rect(context)
    .resize(screen.width, screen.height)
    .setColor('#232323')

  background.render(() => {
    background.body.render()
  })
})

game.socketGameObject([playerID, bgID], ([player, bg]) => {
  keyboard.create('Space', () => (bg.body.color = '#0066aa'))

  player.body.color = '#004422'

  player.update(() => {
    keyboard.checkClick('Space')
  })
})
