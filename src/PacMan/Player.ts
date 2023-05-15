import BoundingBox from '@Engine/BoundingBox'
import Arc from '@Engine/Draw/Arc'
import Object from '@Engine/Modules/Object'

export default class Player extends Object<Arc> {
  readonly sprite = new Arc().setColor('#ffff00').moveTo(100, 100)
  readonly boundingBox = new BoundingBox(this)

  constructor(engine) {
    super(engine)
    this.sprite.radius = 16
    this.boundingBox.box.resize(this.sprite.radius)
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

  override init = () => {
    this.boundingBox.onCollision = (bbox) => {
      console.log('Hello Word')
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
