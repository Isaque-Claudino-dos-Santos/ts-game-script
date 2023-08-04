import InterfaceMouse from './InterfaceMouse'

export default class Mouse implements InterfaceMouse {
  x: number = 0
  y: number = 0

  constructor(public screen: HTMLCanvasElement) {
    this.addEvents()
  }

  private handleMouseMove() {
    this.screen.addEventListener('mousemove', (e) => {
      const { offsetX, offsetY } = e

      this.x = offsetX * (this.screen.width / Number(this.screen.style.width))
      this.y = offsetY * (this.screen.height / Number(this.screen.style.height))
    })
  }

  private addEvents() {
    this.handleMouseMove()
  }
}
