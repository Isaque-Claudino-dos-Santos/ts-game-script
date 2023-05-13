import { TypeShape } from '@Interface/InterfaceShape'
import InterfaceText from '@Interface/InterfaceText'
import Shape from '@Module/Shape'

export default class Text extends Shape implements InterfaceText {
  readonly shape: TypeShape = 'text'
  text: string = ''
  family: string = 'Arial'
  size: string = '10px'
  align: CanvasTextAlign = 'center'
  baseLine: CanvasTextBaseline = 'middle'
  direction: CanvasDirection = 'rtl'
  maxWidth: number | undefined

  centerX(): number {
    return this.x
  }

  centerY(): number {
    return this.y
  }

  draw(context: CanvasRenderingContext2D): this {
    context.beginPath()
    context[`${this.paint}Style`] = this.color
    context.textAlign = this.align
    context.direction = this.direction
    context.textBaseline = this.baseLine
    context.font = `${this.size} ${this.family}`
    context[`${this.paint}Text`](this.text, this.x, this.y, this.maxWidth)
    context.closePath()
    return this
  }
}
