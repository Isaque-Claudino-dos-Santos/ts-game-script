import Loop from '@Vendor/Events/Loop'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'

const canvas = new Canvas2D()
const loop = new Loop()

const r1 = new Rect()

loop.init = () => {
  r1.width(30).height(30).x(10).y(10).bgColor('#343434')
}

loop.render = () => {
  r1.draw(canvas.context, (c) => {})
}

loop.boot()
