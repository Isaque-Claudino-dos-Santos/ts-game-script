export default class Rect {
  x: number = 0
  y: number = 0
  width: number = 0
  height: number = 0
  color: string = 'black'
  rotate: number = 0

  constructor(private readonly context: CanvasRenderingContext2D) {}

  public reposition(x: number, y: number) {
    this.x = x
    this.y = y
  }

  public resize(width: number, height: number) {
    this.width = width
    this.height = height
  }

  public render(type: 'fill' | 'stroke' = 'fill') {
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
  }

  public log() {
    console.log(this)
  }
}
