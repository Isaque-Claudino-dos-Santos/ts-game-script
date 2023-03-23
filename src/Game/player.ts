import { context } from './canvas'
import Rect from '@Draw/Rect'
import Loop from '@Display/Loop'
import Keyborad from '@Event/Keyboard'

const player = new Rect(context)

const speed = {
  x: 5,
  y: 5
}

const playerLoop = new Loop()
const playerKey = new Keyborad()

playerKey.create('KeyD', () => player.x += speed.x)
playerKey.create('KeyA', () => player.x -= speed.x)
playerKey.create('KeyS', () => player.y += speed.y)
playerKey.create('KeyW', () => player.y -= speed.y)


player.reposition(10, 10)
player.resize(30, 30)
player.color = '#ff55aa'


playerLoop.onUpdate = () => {
  playerKey.checkPress('KeyD')
  playerKey.checkPress('KeyA')
  playerKey.checkPress('KeyS')
  playerKey.checkPress('KeyW')
}

playerLoop.onRender = () => {
  player.render()
}

playerLoop.init()