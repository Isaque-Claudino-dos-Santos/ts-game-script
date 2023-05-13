import Rect2d from '@Engine/Draw2d/Rect2d'
import Engine from '@Engine/Engine'
import GameObject from '@Game/GameObject'

export default class Background extends GameObject {
  sprite = new Rect2d().setColor('#010101').reposition(0, 0)

  constructor(public engine: Engine) {
    super(engine)
    this.sprite.width = this.engine.window.width()
    this.sprite.height = this.engine.window.height()
  }

  render = () => {
    this.draw()
  }
}
