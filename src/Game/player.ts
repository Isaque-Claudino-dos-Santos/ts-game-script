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

player.reposition(10, 10)
player.resize(30, 30)
player.color = '#ff55aa'

playerKey.create('KeyD', () => player.x += speed.x)
playerKey.create('KeyA', () => player.x -= speed.x)
playerKey.create('KeyS', () => player.y += speed.y)
playerKey.create('KeyW', () => player.y -= speed.y)
playerKey.create('KeyQ', () => player.rotate -= 1 * Math.PI / 180)
playerKey.create('KeyE', () => player.rotate += 1 * Math.PI / 180)
playerKey.create('ControlLeft', () => player.color = player.color === '#dddddd' ? '#ff55aa' : '#dddddd')

playerLoop.onUpdate = () => {
  playerKey.checkPress('KeyD')
  playerKey.checkPress('KeyA')
  playerKey.checkPress('KeyS')
  playerKey.checkPress('KeyW')
  playerKey.checkPress('KeyQ')
  playerKey.checkPress('KeyE')
  playerKey.checkClick('ControlLeft')
}

playerLoop.onRender = () => {
  player.render()
}

playerLoop.init()