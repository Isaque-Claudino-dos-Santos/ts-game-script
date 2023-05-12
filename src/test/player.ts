import Rect from '@Draw/Rect'
import { canvas, gameObject } from './game'

const player = gameObject.create('player')

player.body = new Rect(canvas.context)
  .resize(30, 30)
  .reposition(40, 40)
  .setColor('#88ff')

player.keyboard
  .create('KeyW', () => (player.body.y -= 3))
  .create('KeyS', () => (player.body.y += 3))
  .create('KeyD', () => (player.body.x += 3))
  .create('KeyA', () => (player.body.x -= 3))

player.keyboard.create('Space', () =>
  player.body.setColor('#99dddd' === player.body.color ? 'white ' : '#99dddd')
)

player.update(() => {
  player.keyboard
    .checkClick('Space')
    .checkPress('KeyW')
    .checkPress('KeyS')
    .checkPress('KeyD')
    .checkPress('KeyA')
})

player.render(() => {
  player.body.render()
})

export default player
