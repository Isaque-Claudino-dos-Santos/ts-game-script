import Text2d from '@Engine/Draw2d/Text2d'
import Object from '@Engine/Object'

export default class FPSCounter extends Object {
  sprite = new Text2d().setColor('#ffffff')

  constructor(engine) {
    super(engine)
    this.sprite.align = 'left'
    this.sprite.baseLine = 'top'
    this.sprite.size = '15px'
  }

  update = () => {
    this.sprite.text = `🏁 FPS: ${String(this.engine.fps)}`
  }

  render = () => {
    this.draw()
  }
}
