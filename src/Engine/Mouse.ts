import InterfaceMouse from '@Engine/Interfaces/InterfaceMouse'

export default class Mouse implements InterfaceMouse {
  x: number = 0
  y: number = 0

  constructor(public screen: HTMLCanvasElement) {
    this.addEvents()
  }

  private handleMouseMove() {
    this.screen.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e
      this.x = offsetX
      this.y = offsetY
    })
  }

  private addEvents() {
    this.handleMouseMove()
  }
}
