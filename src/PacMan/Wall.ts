import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Wall extends Object<Rect> {
  readonly sprite = new Rect()
    .resize(30, 120)
    .moveTo(250, 150)
    .setColor('#eeeeee')
  readonly boundingBox: BoundingBox<Rect> = new BoundingBox(this)

  constructor(engine) {
    super(engine)
    this.boundingBox.box.resize(this.sprite.width, this.sprite.height)
  }

  override update = () => {
    this.boundingBox.update()
  }

  override render = () => {
    this.draw()
    this.boundingBox.debug(this.engine.canvas.context)
  }
}
