import Rect from '@Draw/Rect'
import { canvas, gameObject } from './game'

const wall = gameObject.create('wall')

wall.body = new Rect(canvas.context)
  .resize(30, 90)
  .reposition(150, 100)
  .setColor('#ffff')

wall.keyboard.create('Space', () =>
  wall.body.setColor('#99dddd' === wall.body.color ? 'white ' : '#99dddd')
)

wall.update(() => {
  wall.keyboard.checkClick('Space')
})

wall.render(() => {
  wall.body.render()
})

export default wall
