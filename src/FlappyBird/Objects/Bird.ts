import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'

import imgBird from '@Asset/Bird.png'

export default class Bird extends Object<Sprite> {
  sprite: Sprite = new Sprite()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  init = () => {
    this.sprite
      .setSourceImage(imgBird)
      .resize(32, 32)
      .resizeSource(32, 32)
      .moveTo(10, 10)
      .moveSourceTo(32, 0)
    this.boundingBox.moveTo(0, 5)
    this.boundingBox.box.resize(31, 18)
  }

  update = () => {
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
