import InterfaceMouse from '@Engine/Interfaces/InterfaceMouse'
import Canvas from './Modules/Canvas'

export default class Mouse implements InterfaceMouse {
  x: number = 0
  y: number = 0

  constructor(public canvas: Canvas<RenderingContext>) {
    this.addEvents()
  }

  private handleMouseMove() {
    this.canvas.screen.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e
      this.x = offsetX - (this.canvas.screenWidth - this.canvas.width())
      this.y = offsetY - (this.canvas.screenHeight - this.canvas.height())
    })
  }

  private addEvents() {
    this.handleMouseMove()
  }
}
