import { TypeObjectShape } from '@Vendor/Models/Object/TypesObject'
import Engine from '../../Engine'
import InterfaceRender from './InterfaceRender'

export default class Render implements InterfaceRender {
  shapes: TypeObjectShape[] = []

  constructor(readonly engine: Engine) {
    this.ajustIndex()
  }

  private ajustIndex() {
    this.shapes = this.shapes.sort((a, b) => a.index - b.index)
  }

  all(): void {
    this.shapes.forEach((o) => o.draw(this.engine.canvas.context))
  }

  add(shape: TypeObjectShape): void {
    this.shapes.push(shape)
  }
}
