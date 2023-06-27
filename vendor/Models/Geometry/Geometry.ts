import InterfaceGeometry from './InterfaceGeometry'

export default abstract class Geometry implements InterfaceGeometry {
  x: number = 0
  y: number = 0
  fixedX: number = 0
  fixedY: number = 0
  color: string = 'black'
  paint: 'fill' | 'stroke' = 'fill'
  angle: number = 0
  originX: number = 0
  originY: number = 0
  lineWidth: number = 1
  enable: boolean = true
  index: number = 0

  abstract draw(context: CanvasRenderingContext2D): this

  abstract copy<Copy>(): Copy

  addX(value: number): this {
    this.x += value
    return this
  }

  addY(value: number): this {
    this.y += value
    return this
  }

  getOriginX(): number {
    return this.x + this.originX
  }

  getOriginY(): number {
    return this.y + this.originY
  }

  setOrigins(x: number, y: number): this {
    this.originX = x
    this.originY = y
    return this
  }

  moveTo(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  fixTo(x: number, y: number): this {
    this.fixedX = x
    this.fixedY = y
    return this
  }

  setColor(color: string): this {
    this.color = color
    return this
  }

  setPaint(paint: 'fill' | 'stroke'): this {
    this.paint = paint
    return this
  }

  setIndex(index: number): this {
    this.index = index
    return this
  }
}
