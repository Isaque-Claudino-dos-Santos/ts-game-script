import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Background extends Object<Rect> {
  readonly sprite = new Rect()
    .setColor('#010101')
    .moveTo(0, 0)
    .resize(this.engine.canvas.width(), this.engine.canvas.height())
  readonly boundingBox = new BoundingBox(this)

  constructor(engine) {
    super(engine)
  }

  render = () => {
    this.draw()
  }
}
