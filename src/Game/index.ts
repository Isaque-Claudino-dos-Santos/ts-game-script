import Canvas from '@Display/Canvas'
import Rect from '@Draw/Rect'
import Loop from '@Display/Loop'
import Keyborad from '@Event/Keyboard'
const canvas = new Canvas(600, 400)

const r1 = new Rect(canvas.context)
const bg = new Rect(canvas.context)

const main = new Loop()
const keyborad = new Keyborad()


r1.reposition(10, 10)
r1.resize(30, 30)
r1.color = '#ff55aa'

bg.resize(canvas.screen.width, canvas.screen.height)
bg.color = '#030303'

main.onUpdate = () => {
  r1.rotate += 1 * Math.PI / 180
}

main.onRender = () => {
  bg.render()
  r1.render()
}

main.init()

