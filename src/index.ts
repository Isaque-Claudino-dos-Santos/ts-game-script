import Loop from '@Vendor/Events/Loop'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'
import Mouse from '@Vendor/Events/Mouse'

const canvas = new Canvas2D()
const mouse = new Mouse(canvas.screen)
const loop = new Loop()

const r1 = new Rect()

loop.init = () => {
  r1.width(30)
    .height(30)
    .x(10)
    .y(10)
    .bgColor('#343434')
    .originX(r1.halfWidth())
    .originY(r1.halfHeight())
}

loop.render = () => {
  canvas.context.clearRect(0, 0, 1000, 1000)
  r1.angle(r1.angle() + 1)
  r1.draw(canvas.context)
}

loop.boot()
