export type TypeRenderObject = {
  index: number
  render(): void
}

export default interface InterfaceRender {
  objects: TypeRenderObject[]
  all(): void
}
