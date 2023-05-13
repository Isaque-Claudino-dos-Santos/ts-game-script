import Rect from '@Engine/Draw/Rect'
import Engine from '@Engine/Engine'
import Object from '@Engine/Object'

export default class Background extends Object {
  sprite = new Rect().setColor('#010101').moveTo(0, 0)

  constructor(public engine: Engine) {
    super(engine)
    this.sprite.width = this.engine.window.width()
    this.sprite.height = this.engine.window.height()
  }

  render = () => {
    this.draw()
  }
}
