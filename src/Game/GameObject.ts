import Rect from '@Draw/Rect'

type TypeBody = Rect
type TypeFn = () => void
type TypeFnArray = TypeFn[]

export default class GameObject {
  public body!: TypeBody
  public readonly renders: TypeFnArray = []
  public readonly boots: TypeFnArray = []
  public readonly updates: TypeFnArray = []

  public boot(callback: TypeFn) {
    this.boots.push(callback)
  }
  public render(callback: TypeFn) {
    this.renders.push(callback)
  }
  public update(callback: TypeFn) {
    this.updates.push(callback)
  }
}
