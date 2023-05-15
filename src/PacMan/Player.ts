import BoundingBox from '@Engine/BoundingBox'
import Arc from '@Engine/Draw/Arc'
import Object from '@Engine/Modules/Object'
import Wall from './Wall'

export default class Player extends Object<Arc> {
  readonly sprite = new Arc().setColor('#ffff00').moveTo(100, 100)
  readonly boundingBox = new BoundingBox(this)
  readonly speed = { x: 4, y: 4 }

  constructor(engine) {
    super(engine)
    this.sprite.radius = 16
    this.boundingBox.box.resize(this.sprite.radius)
  }

  msg(target: Wall) {}

  private moviment() {
    const key = this.engine.keyboard

    if (key.check('KeyW')) {
      this.sprite.y -= this.speed.y
    }
    if (key.check('KeyA')) {
      this.sprite.x -= this.speed.x
    }
    if (key.check('KeyS')) {
      this.sprite.y += this.speed.y
    }
    if (key.check('KeyD')) {
      this.sprite.x += this.speed.x
    }
  }

  override update = () => {
    this.moviment()
    this.boundingBox.update()
  }

  override render = () => {
    this.draw()
    this.boundingBox.debug(this.engine.canvas.context)
  }
}
