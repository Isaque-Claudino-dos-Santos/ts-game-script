import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'

import imgBird from '@Asset/Bird.png'

export default class Bird extends Object<Sprite> {
  sprite: Sprite = new Sprite()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  isDead: boolean = false
  jump = { force: 0, acceleration: 1, max: 10, enable: false }
  gravityY = {
    velocity: 0,
    acceleration: 0.1,
    enable: true,
  }

  init = () => {
    this.sprite
      .setSourceImage(imgBird)
      .resize(32 * 5, 32 * 5)
      .resizeSource(32, 32)
      .moveTo(30, this.engine.canvas.height() / 2 - this.sprite.height)
      .moveSourceTo(32, 0)
      .setOrigins(this.sprite.width / 2, this.sprite.height / 2)
    this.boundingBox.moveTo(3, 5)
    this.boundingBox.box.resize(this.sprite.width - 10, this.sprite.height - 45)
  }

  onGravity() {
    if (!this.gravityY.enable || this.isDead) return
    if (
      this.sprite.y + this.boundingBox.box.height >=
      this.engine.canvas.height()
    ) {
      this.isDead = true
      console.log('%c Game Over', 'font-size: 20px; color:red;')

      this.gravityY.acceleration = 0
      this.gravityY.velocity = 0
      this.sprite.y = this.sprite.y
    }

    this.gravityY.velocity += this.gravityY.acceleration
    this.sprite.y += this.gravityY.velocity
    if (this.sprite.angle <= 1.2) this.sprite.angle += 0.02
    this.sprite.moveSourceTo(0, 0)
  }

  onJump() {
    if (this.isDead) return
    const key = this.engine.keyboard
    if (key.check('Space')) {
      this.jump.enable = true
      this.sprite.moveSourceTo(0, 32)
      key.lockKey('Space')
    }
    if (!this.jump.enable) return
    this.gravityY.enable = false
    this.jump.force += this.jump.acceleration
    this.sprite.y -= this.jump.force
    if (this.sprite.angle >= 0) this.sprite.angle -= 0.7
    if (this.jump.force > this.jump.max) {
      this.sprite.moveSourceTo(32, 0)
      this.jump.force = 0
      this.sprite.y = this.sprite.y
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
    this.boundingBox.debug(this.engine.canvas.context)
    this.sprite.draw(this.engine.canvas.context)
  }
}
