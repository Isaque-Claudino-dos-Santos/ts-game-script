import BoundingBox from '@Engine/BoundingBox'
import Arc from '@Engine/Draw/Arc'
import Engine from '@Engine/Engine'
import Object from '@Engine/Object'

export default class Player extends Object {
  sprite = new Arc().setColor('#ffff00').moveTo(100, 100)
  bbox = new BoundingBox(
    new Arc().resize(this.sprite.radius * 3.2),
    this.sprite
  )

  constructor(public engine: Engine) {
    super(engine)
    this.sprite.radius = 16
  }

  private moviment() {
    const key = this.engine.keyboard
    const speed = { x: 4, y: 4 }

    if (key.check('KeyW')) {
      this.sprite.y -= speed.y
    }
    if (key.check('KeyA')) {
      this.sprite.x -= speed.x
    }
    if (key.check('KeyS')) {
      this.sprite.y += speed.y
    }
    if (key.check('KeyD')) {
      this.sprite.x += speed.x
    }
  }

  override update = () => {
    this.moviment()
    this.bbox.update()
  }

  override render = () => {
    this.draw()
    this.bbox.debug(this.engine.context2d)
  }
}
