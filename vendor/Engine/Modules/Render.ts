import InterfaceRender from '@Vendor/Interfaces/InterfaceRender'
import Engine from '../Engine'
import TypeShape from '@Vendor/Types/TypeShape'

export default class Render implements InterfaceRender {
  shapes: TypeShape[] = []

  constructor(readonly engine: Engine) {
    this.ajustIndex()
  }

  private ajustIndex() {
    this.shapes = this.shapes.sort((a, b) => a.index - b.index)
  }

  all(): void {
    this.shapes.forEach((o) => o.draw(this.engine.canvas.context))
  }

  add(shape: TypeShape): void {
    this.shapes.push(shape)
  }
}
