import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Geometries/Rect'
import ScriptPlayerMoviment from '../Scripts/ScriptPlayerMoviment'
import BoundingBox from '@Vendor/Models/BoundingBox'

export default class ObjectPlayer extends Object {
  sprite: Rect = new Rect()
  bbox: BoundingBox<Rect> = new BoundingBox(this, new Rect())

  moviment = new ScriptPlayerMoviment(this)

  init = () => {
    this.sprite
      .resize(16, 16)
      .moveTo(30, 30)
      .setColor('#dedede')
      .setOrigins(this.sprite.width / 2, this.sprite.height / 2)
    this.bbox.box
      .resize(this.sprite.width, this.sprite.height)
      .setPaint('stroke')
      .setColor('#aa11aa')
    this.bbox.box.index = 3
  }

  update = () => {
    this.moviment.onMovimento()
    this.bbox.box.moveTo(this.sprite.x, this.sprite.y)
    this.bbox.box.draw(this.engine.canvas.context)
  }
}
