import InterfaceShape2d, { TypeShapeType } from '@Interface/InterfaceShape2d'

export default abstract class Shape2d implements InterfaceShape2d {
  x: number = 0
  y: number = 0
  color: string = 'black'
  type: TypeShapeType = 'fill'

  abstract draw(context: CanvasRenderingContext2D): this

  reposition(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  setColor(color: string): this {
    this.color = color
    return this
  }

  setType(type: TypeShapeType): this {
    this.type = type
    return this
  }
}