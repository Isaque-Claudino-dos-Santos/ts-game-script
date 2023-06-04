import BoundingBox from '@Vendor/BoundingBox'
import Gravity from '@Vendor/Gravity'
import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Shapes/Rect'

export default class Bird extends Object<Rect> {
  sprite: Rect = new Rect().resize(16, 16).setColor('#ff3af9')
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  speedX = 0
  velocityX = 5
  gravityY = new Gravity(this).setAxis('y').setForce(5)

  jumpActive = false
  jump = 0
  jumpForce = 5
  jumpMax = 30

  private moviment() {
    const key = this.engine.keyboard
    const mvX = key.check('KeyD') - key.check('KeyA')
    this.speedX = mvX * this.velocityX

    if (this.sprite.y + this.sprite.height >= this.engine.canvas.height() - 1) {
      this.gravityY.reset().disable()
      this.sprite.y = this.engine.canvas.height() - this.sprite.height
    }
    this.gravityY.on()
    this.sprite.addX(this.speedX)
  }

  private jumping() {
    const key = this.engine.keyboard
    if (key.check('Space') && !this.gravityY.active) this.jumpActive = true
    if (!this.jumpActive) return
    if (this.jump <= this.jumpMax) {
      this.jump += this.jumpForce
      this.sprite.addY(-this.jumpForce)
      return
    }
    this.jumpActive = false
    this.jump = 0
    this.gravityY.enable()
  }

  update = () => {
    this.moviment()
    this.jumping()
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
