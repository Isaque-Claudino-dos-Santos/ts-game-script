import Rect from '@Draw/Rect'
import Game from 'Game'

const {
  keyboard,
  loop,
  mouse,
  canvas: { context, screen },
} = new Game()

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
  onMove(mouse) {
    if (!playerMouse.isDown) return
    player.x = mouse.x - player.width / 2
    player.y = mouse.y - player.height / 2
  },
}

const playerKey = keyboard()
  .create('KeyD', () => (player.x += 4))
  .create('KeyS', () => (player.y += 4))
  .create('KeyW', () => (player.y -= 4))
  .create('KeyA', () => (player.x -= 4))

mouse.addEvents(background, 0, backgroundMouse)
mouse.addEvents(player, 0, playerMouse)

loop.onUpdate = () => {
  playerKey
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
