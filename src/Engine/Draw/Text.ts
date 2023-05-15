import Shape from '@Engine/Modules/Shape'
import { TypeShape } from '@Engine/Interfaces/InterfaceShape'
import InterfaceText from '@Engine/Interfaces/InterfaceText'

export default class Text extends Shape implements InterfaceText {
  readonly shape: TypeShape = 'text'
  text: string = ''
  family: string = 'Arial'
  size: string = '10px'
  align: CanvasTextAlign = 'center'
  baseLine: CanvasTextBaseline = 'middle'
  direction: CanvasDirection = 'rtl'
  maxWidth: number | undefined

  draw(context: CanvasRenderingContext2D): this {
    context.save()
    context.beginPath()
    context.translate(this.x + this.originX, this.y + this.originY)
    context[`${this.paint}Style`] = this.color
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
