import Canvas from '@Display/Canvas'
import Rect from '@Draw/Rect'
import KeyBoard from '@Event/Keyboard'
import Loop from '@Event/Loop'

const { context, screen } = new Canvas(600, 450)
const keyboard = new KeyBoard()
const loop = new Loop()

const background = new Rect(context)
  .resize(screen.width, screen.height)
  .setColor('#232323')

const player = new Rect(context)
  .resize(30, 30)
  .reposition(30, 30)
  .setColor('#aa00ff')

keyboard
  .create('KeyD', () => (player.x += 4))
  .create('KeyS', () => (player.y += 4))
  .create('KeyW', () => (player.y -= 4))
  .create('KeyA', () => (player.x -= 4))

loop.onUpdate = () => {
  keyboard
    .checkPress('KeyD')
    .checkPress('KeyS')
    .checkPress('KeyW')
    .checkPress('KeyA')
}

loop.onRender = () => {
  background.render()
  player.render()
}

loop.init()
