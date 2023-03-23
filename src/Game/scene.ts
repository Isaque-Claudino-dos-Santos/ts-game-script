import Rect from '@Draw/Rect'
import Loop from '@Display/Loop'
import { context, screen } from './canvas'

const sceneLoop = new Loop()
const bg = new Rect(context)

bg.resize(screen.width, screen.height)
bg.color = '#111111'

sceneLoop.onUpdate = () => { }

sceneLoop.onRender = () => {
  bg.render()
}

sceneLoop.init()