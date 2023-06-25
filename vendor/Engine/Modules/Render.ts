import InterfaceRender, {
  TypeRenderObject,
} from '@Vendor/Interfaces/InterfaceRender'

export default class Render implements InterfaceRender {
  objects: TypeRenderObject[] = []

  constructor() {
    this.ajustIndex()
  }

  private ajustIndex() {
    this.objects = this.objects.sort((a, b) => a.index - b.index)
  }

  all(): void {
    this.ajustIndex()
    this.objects.forEach((o) => o.render())
  }

  add(object: TypeRenderObject): void {
    this.objects.push(object)
  }
}
