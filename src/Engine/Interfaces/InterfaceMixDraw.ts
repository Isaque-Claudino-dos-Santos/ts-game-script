import Shape from '@Engine/Modules/Shape'

export default interface InterfaceMixDraw {
  shapes: Shape[]

  add(shape: Shape): void
}
