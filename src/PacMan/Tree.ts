import BoundingBox from '@Engine/BoundingBox'
import Arc from '@Engine/Draw/Arc'
import MixDraw from '@Engine/Draw/MixDraw'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Tree extends Object {
  private stem = new Rect().resize(20, 70).setColor('#aa4400')
  private sheets = new Rect().resize(30, 30).setColor('#005500').fixTo(-5, -30)
  public sprite = new MixDraw().moveTo(200, 70)

  constructor(engine) {
    super(engine)
    this.sprite.add(this.sheets)
    this.sprite.add(this.stem)
    this.sheets.setOrigins(this.sheets.width / 2, this.sheets.height)
    this.stem.setOrigins(this.stem.width / 2, 0)
  }

  update = () => {
    this.sprite.angle += 0.01
  }

  render = () => {
    this.sprite.draw(this.engine.canvas.context)
  }
}
