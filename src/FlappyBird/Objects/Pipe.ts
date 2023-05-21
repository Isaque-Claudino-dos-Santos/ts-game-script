import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Pipe extends Object<Rect> {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite.resize(300, 1000).moveTo(900, 0).setColor('#000')
    this.boundingBox.box.resize(this.sprite.width, this.sprite.height)
  }

  update = () => {
    this.sprite.addX(-2)
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
