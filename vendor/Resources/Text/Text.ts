import Geometry from '@Vendor/Models/Geometry'
import InterfaceText from './InterfaceText'

export default class Text extends Geometry implements InterfaceText {
  text: string = ''
  family: string = 'Arial'
  size: string = '10px'
  align: CanvasTextAlign = 'center'
  baseLine: CanvasTextBaseline = 'middle'
  direction: CanvasDirection = 'rtl'
  maxWidth: number | undefined

  copy<Text>(): Text {
    return Object.assign(new Text(), this) as Text
  }

  draw(context: CanvasRenderingContext2D): this {
    if (!this.enable) return this
    context.save()
    context.beginPath()
    context.translate(this.x + this.originX, this.y + this.originY)
    context[`${this.paint}Style`] = this.color
    context.lineWidth = this.lineWidth
    context.textAlign = this.align
    context.direction = this.direction
    context.textBaseline = this.baseLine
    context.font = `${this.size} ${this.family}`
    context[`${this.paint}Text`](
      this.text,
      this.originX,
      this.originY,
      this.maxWidth
    )
    context.closePath()
    context.restore()
    return this
  }
}
