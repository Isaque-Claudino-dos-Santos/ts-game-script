import BoundingBox from '@Engine/BoundingBox'
import Arc from '@Engine/Draw/Arc'
import MixDraw from '@Engine/Draw/MixDraw'
import Rect from '@Engine/Draw/Rect'
import Object from '@Engine/Modules/Object'

export default class Tree extends Object {
  private stem = new Rect().resize(20, 70).setColor('#aa4400')
  private sheets = new Arc()
    .resize(20)
    .setColor('#005500')
    .fixTo(this.stem.width, 0)
  private bboxSheets = new BoundingBox(this.sheets, this.sprite)
  private bboxStem = new BoundingBox(this.stem, this.sprite)
  sprite = new MixDraw().moveTo(200, 70)

  constructor(engine) {
    super(engine)
    this.sprite.add(this.sheets)
    this.sprite.add(this.stem)
    this.sheets.originPointX = 'left'
  }

  update = () => {
    this.sheets.angle += 0.01
  }

  render = () => {
    this.bboxSheets.debug(this.engine.canvas.context)
    this.sprite.draw(this.engine.canvas.context)
  }
}
