import BoundingBox from '@Engine/BoundingBox'
import Rect from '@Engine/Draw/Rect'
import Sprite from '@Engine/Draw/Sprite'
import Object from '@Engine/Modules/Object'

import imgBird from '@Asset/Bird.png'
import Gravity from '@Engine/Gravity'

export default class Bird extends Object<Sprite> {
  sprite: Sprite = new Sprite()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  isDead: boolean = false
  jump = new Gravity(this)
  gravityY = new Gravity(this)

  dead() {
    this.isDead = true
  }

  onGravity() {
    const collidedWithCanvasBottom =
      this.sprite.y + this.boundingBox.box.height >= this.engine.canvas.height()

    if (collidedWithCanvasBottom && this.gravityY.active) {
      this.isDead = true
      this.gravityY.reset().disable()
      this.sprite.y = this.engine.canvas.height() - this.boundingBox.box.height
      console.log('%c Game Over', 'font-size: 20px; color:red;')
    }

    this.gravityY.on()

    if (this.sprite.angle <= 1.5) this.sprite.angle += 0.02

    this.sprite.moveSourceTo(0, 0)
  }

  onJump() {
    const key = this.engine.keyboard
    const keyToJump = 'Space'

    if (key.check(keyToJump)) {
      this.jump.enable()
      this.gravityY.disable().reset()
      key.lockKey(keyToJump)
    }

    if (!this.jump.active) return

    this.jump.on(true)
    this.sprite.moveSourceTo(0, 32)

    if (this.sprite.angle > 0) this.sprite.angle -= 0.08

    if (this.jump.velocity > 40) {
      this.sprite.moveSourceTo(32, 0)
      this.jump.reset().disable()
      this.gravityY.reset().enable()
    }
  }

  init = () => {
    this.sprite
      .setSourceImage(imgBird)
      .resize(32 * 10, 32 * 10)
      .resizeSource(32, 32)
      .moveTo(30, this.engine.canvas.height() / 2 - this.sprite.height)
      .moveSourceTo(32, 0)
      .setOrigins(this.sprite.width / 2, this.sprite.height / 2)
    this.boundingBox.moveTo(3, 5)
    this.boundingBox.box.resize(
      this.sprite.width - 10,
      this.sprite.height - 100
    )
    this.gravityY.setForce(6).setMassa(6).setAxis('y')
    this.jump.setForce(6).setMassa(20).setAxis('y').disable()
  }

  update = () => {
    if (this.isDead) return
    this.onGravity()
    this.onJump()
    this.boundingBox.update()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
