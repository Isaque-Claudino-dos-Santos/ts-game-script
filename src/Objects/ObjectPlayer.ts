import BoundingBox from '@Vendor/BoundingBox'
import Object from '@Vendor/Models/Object'
import Rect from '@Vendor/Shapes/Rect'
import ScriptPlayerMoviment from '../Scripts/ScriptPlayerMoviment'

export default class ObjectPlayer extends Object<Rect> {
  sprite: Rect = new Rect()
  boundingBox: BoundingBox<Rect> = new BoundingBox(this, new Rect())
  moviment = new ScriptPlayerMoviment(this)

  init = () => {
    this.sprite
      .resize(16, 16)
      .moveTo(30, 30)
      .setColor('#dedede')
      .setOrigins(this.sprite.width / 2, this.sprite.height / 2)
    this.boundingBox.box.resize(this.sprite.width, this.sprite.height)
  }

  update = () => {
    this.moviment.onMovimento()
    this.boundingBox.update()
  }

  render = () => {
    this.draw()
    this.boundingBox.debug()
  }
}
