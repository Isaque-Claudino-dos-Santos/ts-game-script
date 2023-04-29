export default class Rect {
  x: number = 0
  y: number = 0
  width: number = 0
  height: number = 0
  color: string = 'black'
  rotate: number = 0

  constructor(private readonly context: CanvasRenderingContext2D) {}

  public reposition(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  public resize(width: number, height: number): this {
    this.width = width
    this.height = height
    return this
  }

  public angle(angle: number): this {
    this.rotate = angle * (Math.PI / 180)
    return this
  }

  public render(type: 'fill' | 'stroke' = 'fill'): this {
    this.context.save()
    this.context.translate(this.x + this.width / 2, this.y + this.height / 2)
    this.context.rotate(this.rotate)
    this.context.fillStyle = this.color
    this.context[`${type}Rect`](
      -this.width / 2,
      -this.height / 2,
      this.width,
      this.height
    )
    this.context.restore()
    return this
  }

  public log(): this {
    console.log(this)
    return this
  }
}
