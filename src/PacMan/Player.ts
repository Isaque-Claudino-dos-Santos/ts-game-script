import Arc2d from '@Engine/Draw2d/Arc2d'
import Engine from '@Engine/Engine'
import GameObject from '@Game/GameObject'

export default class Player extends GameObject {
  sprite = new Arc2d().setColor('#ffff00').reposition(100, 100)

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
