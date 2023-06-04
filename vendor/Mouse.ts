import InterfaceMouse from './Interfaces/InterfaceMouse'
import Canvas from './Models/Canvas'

export default class Mouse implements InterfaceMouse {
  x: number = 0
  y: number = 0

  constructor(public canvas: Canvas<RenderingContext>) {
    this.addEvents()
  }

  private handleMouseMove() {
    this.canvas.screen.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e

      this.x = offsetX * (this.canvas.width() / this.canvas.screenWidth)
      this.y = offsetY * (this.canvas.height() / this.canvas.screenHeight)
    })
  }

  private addEvents() {
    this.handleMouseMove()
  }
}
