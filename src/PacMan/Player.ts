import Arc from '@Engine/Draw/Arc'
import Engine from '@Engine/Engine'
import Object from '@Engine/Object'

export default class Player extends Object {
  sprite = new Arc().setColor('#ffff00').reposition(100, 100)

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
  }

  override render = () => {
    this.draw()
  }
}
