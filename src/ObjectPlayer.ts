import AbstractGameObject from '@Vendor/Game2D/AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import ObjectBox from './ObjectBox'
import BoundingBox from '@Vendor/Game2D/BoundingBox'
import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'

export default class ObjectPlayer extends AbstractGameObject {
  sprite = new Rect()
  boundingBox: BoundingBox<Rect> | null = new BoundingBox(this, new Rect())
  speedX = 3
  speedY = 3

  moviment() {
    const key = this.game.keyboard
    if (key.check('ArrowRight')) this.sprite.x(this.sprite.x() + this.speedX)
    if (key.check('ArrowLeft')) this.sprite.x(this.sprite.x() - this.speedX)
    if (key.check('ArrowUp')) this.sprite.y(this.sprite.y() - this.speedY)
    if (key.check('ArrowDown')) this.sprite.y(this.sprite.y() + this.speedY)
  }

  colliderWithBox() {
    const box = this.game.scenes.current().object<ObjectBox>('box').sprite
    const player = this.sprite

    const catX = player.centerX() - box.centerX()
    const catY = player.centerY() - box.centerY()
    const sumHalfWidth = player.halfWidth() + box.halfWidth()
    const sumHalfHeight = player.halfHeight() + box.halfHeight()
    const overlapX = sumHalfWidth - Math.abs(catX)
    const overlapY = sumHalfHeight - Math.abs(catY)
    if (overlapX >= 0 && overlapY >= 0) {
      console.log('Resolve Collider')
    }
  }

  init = () => {
    this.sprite
      .width(16)
      .height(16)
      .x(10)
      .y(10)
      .bgColor('red')
      .originX(this.sprite.halfWidth())
      .originY(this.sprite.halfHeight())
  }

  update = () => {
    this.moviment()
    this.colliderWithBox()
    this.boundingBox?.update()
  }

  render = () => {
    this.sprite.draw(this.game.canvas.context)
    this.boundingBox?.draw(this.game.canvas.context)
  }
}
