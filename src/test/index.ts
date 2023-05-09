import Game from 'Game'
import Rect from '@Draw/Rect'

const game = new Game()
const { gameObject } = game
const { context, screen } = game.canvas

const playerID = gameObject.create((player) => {
  player.body = new Rect(context)
    .resize(30, 30)
    .reposition(40, 40)
    .setColor('#88ff')

  player.keyboard.create('Space', () =>
    player.body.setColor('#99dddd' === player.body.color ? 'white ' : '#99dddd')
  )

  player.update(() => {
    player.keyboard.checkClick('Space')
  })

  player.render(() => {
    player.body.render()
  })
})

const bgID = gameObject.create((background) => {
  background.body = new Rect(context)
    .resize(screen.width, screen.height)
    .setColor('#232323')

  background.render(() => {
    background.body.render()
  })
})

gameObject.socket([playerID, bgID], ([player, bg]) => {
  bg.keyboard.create(
    'Space',
    () => (bg.body.color = bg.body.color === '#232323' ? '#004422' : '#232323')
  )

  player.update(() => {
    bg.keyboard.checkClick('Space')
  })
})
