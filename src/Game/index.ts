import Canvas from '@Display/Canvas'
import Rect from '@Draw/Rect'
const canvas = new Canvas(600, 400)

const r1 = new Rect(canvas.context)
r1.reposition(10, 10)
r1.resize(30, 30)
r1.render()

