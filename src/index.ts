import Canvas from '@Display/Canvas'
import Rect from '@Draw/Rect'
import KeyBoard from '@Event/Keyboard'
import Loop from '@Event/Loop'
import Mouse, { TypeMouse } from '@Event/Mouse'

const { context, screen } = new Canvas(600, 450)
const keyboard = new KeyBoard()
const mouse = new Mouse(screen)
const loop = new Loop()

const background = new Rect(context)
  .resize(screen.width, screen.height)
  .setColor('#232323')

const player = new Rect(context)
  .resize(30, 30)
  .reposition(30, 30)
  .setColor('#aa00ff')

const playerMouse = {
  isDown: false,
  onDown() {
    this.isDown = true
  },
}

const backgroundMouse = {
  onUp() {
    playerMouse.isDown = false
  },
  onMove(mouse: TypeMouse) {
    if (!playerMouse.isDown) return
    player.x = mouse.x - player.width / 2
    player.y = mouse.y - player.height / 2
  },
}

keyboard
  .create('KeyD', () => (player.x += 4))
  .create('KeyS', () => (player.y += 4))
  .create('KeyW', () => (player.y -= 4))
  .create('KeyA', () => (player.x -= 4))

mouse.addEvents(background, 0, backgroundMouse)
mouse.addEvents(player, 0, playerMouse)

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
