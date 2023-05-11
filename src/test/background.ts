import Rect from '@Draw/Rect'
import { canvas, gameObject } from './game'

const background = gameObject.create((background) => {
  background.body = new Rect(canvas.context)
    .resize(screen.width, screen.height)
    .setColor('#232323')

  background.keyboard.create('Space', () => {
    background.body.setColor(
      background.body.color === '#232323' ? '#004422' : '#232323'
    )
  })

  background.render(() => {
    background.body.render()
  })
}, 'background')

export default background
