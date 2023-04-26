import Rect from '@Draw/Rect'
import Loop from '@Event/Loop'
import { context, screen } from './canvas'

const sceneLoop = new Loop()
const bg = new Rect(context)
const floor = new Rect(context)

bg.resize(screen.width, screen.height)
bg.color = '#111111'

floor.resize(screen.width, 10)
floor.reposition(0, screen.height - floor.height)
floor.color = '#ff6600'

sceneLoop.onUpdate = () => {}

sceneLoop.onRender = () => {
  bg.render()
  floor.render()
}

sceneLoop.init()
