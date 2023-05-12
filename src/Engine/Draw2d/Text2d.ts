import InterfaceText2d from '@Interface/InterfaceText2d'
import Shape2d from '@Module/Shape2d'

export default class Text2d extends Shape2d implements InterfaceText2d {
  text: string = ''
  family: string = 'Arial'
  size: string = '10px'
  align: CanvasTextAlign = 'center'
  baseLine: CanvasTextBaseline = 'middle'
  direction: CanvasDirection = 'rtl'
  maxWidth: number | undefined

  draw(context: CanvasRenderingContext2D): this {
    context.beginPath()
    context[`${this.type}Style`] = this.color
    context.textAlign = this.align
    context.direction = this.direction
    context.textBaseline = this.baseLine
    context.font = `${this.size} ${this.family}`
    context[`${this.type}Text`](this.text, this.x, this.y, this.maxWidth)
    context.closePath()
    return this
  }
}
