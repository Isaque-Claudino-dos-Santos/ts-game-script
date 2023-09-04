import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'
import InterfaceText, { UnitMeasurement } from './InterfaceText'
import { DrawCallback } from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D/TypesGeometries2D'
import is from '@Vendor/utils/is'

export default class Text
  extends AbstractGeometries2D
  implements InterfaceText
{
  textContent: string = ''
  maxWidth: number | undefined = undefined
  fontSize: number = 14
  fontFamily: string = 'Arial'
  unitMeasurement: UnitMeasurement = 'px'

  text(): string
  text(textContent: string): this
  text(textContent?: unknown): string | this {
    if (is.string(textContent)) {
      this.textContent = textContent
      return this
    }
    return this.textContent
  }

  size(): number
  size(fontSize: number, unitMeasurement?: UnitMeasurement): this
  size(
    fontSize?: unknown,
    unitMeasurement: UnitMeasurement = 'px'
  ): number | this {
    if (is.number(fontSize)) {
      this.fontSize = fontSize
      this.unitMeasurement = unitMeasurement
      return this
    }
    return this.fontSize
  }

  family(): string
  family(fontFamily: string): this
  family(fontFamily?: unknown): string | this {
    if (is.string(fontFamily)) {
      this.fontFamily = fontFamily
      return this
    }
    return this.fontFamily
  }

  limitWidth(): number | undefined
  limitWidth(maxWidth: number): this
  limitWidth(maxWidth?: unknown): number | this | undefined {
    if (is.number(maxWidth)) {
      this.maxWidth = maxWidth
      return this
    }
    return this.maxWidth
  }

  draw(
    context: CanvasRenderingContext2D,
    callback: DrawCallback = () => {}
  ): void {
    context.save()
    context.font = `${this.fontSize}${this.unitMeasurement} ${this.fontFamily}`
    context.fillStyle = this.bgColor()
    context.strokeStyle = this.lineColor()
    context.lineWidth = this.lineSize()

    callback(context)

    if (!is.empty(this.bgColor())) {
      context.fillText(this.text(), this.x(), this.y(), this.limitWidth())
    }
    if (!is.empty(this.lineColor())) {
      context.strokeText(this.text(), this.x(), this.y(), this.limitWidth())
    }
    context.restore()
  }
}
