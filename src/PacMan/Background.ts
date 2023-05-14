import Rect from '@Engine/Draw/Rect'
import Engine from '@Engine/Engine'
import Object from '@Engine/Modules/Object'

export default class Background extends Object {
  sprite = new Rect()
    .setColor('#010101')
    .moveTo(0, 0)
    .resize(this.engine.canvas.width(), this.engine.canvas.height())

  constructor(public engine: Engine) {
    super(engine)
  }

  render = () => {
    this.draw()
  }
}
