import is from '@Vendor/utils/is'
import AbstractGeometries2D from '../AbstractGeometries2D'
import { DrawCallback } from '../AbstractGeometries2D/TypesGeometries2D'
import InterfaceRect from './InterfaceRect'

export default class Rect
  extends AbstractGeometries2D
  implements InterfaceRect
{
  sizeWidth: number = 4
  sizeHeight: number = 4
  rotate: number = 0

  private setUpBg(context: CanvasRenderingContext2D): void {
    if (!is.null(this.bgColor())) {
      context.fillStyle = this.bgColor() as string
    }
  }

  private seyUpLine(context: CanvasRenderingContext2D): void {
    if (!is.null(this.lineColor())) {
      context.strokeStyle = this.lineColor() as string
      context.lineWidth = this.lineSize()
    }
  }

  private drawBg(context: CanvasRenderingContext2D): void {
    if (!is.null(this.bgColor())) {
      context.fillRect(-this.pivotX, -this.pivotY, this.width(), this.height())
    }
  }

  private drawLine(context: CanvasRenderingContext2D): void {
    if (!is.null(this.lineColor())) {
      context.strokeRect(
        -this.pivotX,
        -this.pivotY,
        this.width(),
        this.height()
      )
    }
  }

  width(): number
  width(sizeWidth: number): this
  width(sizeWidth?: unknown): number | this {
    if (is.number(sizeWidth)) {
      this.sizeWidth = sizeWidth
      return this
    }
    return this.sizeWidth
  }

  height(): number
  height(sizeHeight: number): this
  height(sizeHeight?: unknown): number | this {
    if (is.number(sizeHeight)) {
      this.sizeHeight = sizeHeight
      return this
    }
    return this.sizeHeight
  }

  angle(): number
  angle(rotate: number): this
  angle(rotate?: unknown): number | this {
    if (is.number(rotate)) {
      this.rotate = rotate
      return this
    }
    return this.rotate
  }

  halfWidth(): number {
    return this.width() / 2
  }

  halfHeight(): number {
    return this.height() / 2
  }

  centerX(): number {
    return this.x() + this.halfWidth()
  }

  centerY(): number {
    return this.y() + this.halfHeight()
  }

  draw(
    context: CanvasRenderingContext2D,
    callback: DrawCallback = () => {}
  ): void {
    context.save()
    context.translate(this.originX(), this.originY())
    context.rotate(this.angle() * (Math.PI / 180))
    this.setUpBg(context)
    this.seyUpLine(context)
    callback(context)
    this.drawBg(context)
    this.drawLine(context)
    context.restore()
  }
}
