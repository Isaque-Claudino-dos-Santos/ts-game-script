import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Wall extends Object {
  sprite = new Rect().resize(30, 120).moveTo(250, 150).setColor('#eeeeee')
  bbox = new BoundingBox(this.sprite)

  constructor(engine) {
    super(engine)
    this.bbox.box.resize(this.sprite.width, this.sprite.height)
  }

  override update = () => {
    this.bbox.update()
  }

  override render = () => {
    this.draw()
    this.bbox.debug(this.engine.canvas.context)
  }
}
