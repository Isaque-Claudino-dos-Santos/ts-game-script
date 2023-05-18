import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'

import imgBird from '@Asset/Bird.png'

export default class Bird extends Object<Sprite> {
  sprite: Sprite = new Sprite()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  jump = { force: 0, acceleration: 0.6, max: 5, enable: false }
  gravityY = {
    velocity: 0,
    acceleration: 0.07,
    enable: true,
  }

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

  onGravity() {
    if (!this.gravityY.enable) return
    if (
      this.sprite.y + this.boundingBox.box.height >=
      this.engine.canvas.height()
    ) {
      this.gravityY.acceleration = 0
      this.gravityY.velocity = 0
      this.sprite.y = Math.round(this.sprite.y)
    }

    this.gravityY.velocity += this.gravityY.acceleration
    this.sprite.y += this.gravityY.velocity
  }

  onJump() {
    const key = this.engine.keyboard
    if (key.check('Space')) {
      this.jump.enable = true
      key.lockKey('Space')
    }
    if (!this.jump.enable) return
    this.gravityY.enable = false
    this.jump.force += this.jump.acceleration
    this.sprite.y -= this.jump.force
    if (this.jump.force > this.jump.max) {
      this.jump.force = 0
      this.sprite.y = Math.round(this.sprite.y)
      this.jump.enable = false
      this.gravityY.enable = true
      this.gravityY.velocity = 0
    }
  }

  update = () => {
    this.onGravity()
    this.onJump()
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
