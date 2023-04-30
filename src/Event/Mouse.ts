type TypeCurrent = { x: number; y: number; width: number; height: number }
export type TypeMouse = { x: number; y: number }
type TypeAction = (mouse: TypeMouse) => void
export type TypeMouseActions = {
  onMove?: TypeAction
  onUp?: TypeAction
  onDown?: TypeAction
}
type TypeTarget = {
  button: number
  actions: TypeMouseActions
  current: TypeCurrent
}
type TypeTargets = TypeTarget[]

export default class Mouse {
  private readonly targets: TypeTargets = []
  public x: number = 0
  public y: number = 0
  public button: number = 0

  constructor(private screen: HTMLCanvasElement) {
    this.preventMenu()
    this.handlerMouseDown()
    this.handlerMouseUp()
    this.handlerMouseMove()
  }

  private mouseInTarget(target: TypeTarget): boolean {
    const current = target.current
    return (
      this.x > current.x &&
      this.x < current.x + current.width &&
      this.y > current.y &&
      this.y < current.y + current.height &&
      this.button === target.button
    )
  }

  private handlerMouseDown() {
    this.screen.addEventListener('mousedown', (e) => {
      this.button = e.button
      this.targets.forEach((target) => {
        const actions = target.actions
        if (!this.mouseInTarget(target)) return
        if (actions.onDown)
          actions.onDown({
            x: this.x,
            y: this.y,
          })
      })
    })
  }

  private handlerMouseUp() {
    this.screen.addEventListener('mouseup', (e) => {
      this.targets.forEach((target) => {
        const actions = target.actions
        if (!this.mouseInTarget(target)) return
        if (actions.onUp)
          actions.onUp({
            x: this.x,
            y: this.y,
          })
      })
    })
  }

  private handlerMouseMove() {
    this.screen.addEventListener('mousemove', (e) => {
      this.x = e.offsetX
      this.y = e.offsetY
      this.targets.forEach((target) => {
        const { actions } = target
        if (!this.mouseInTarget(target)) return
        if (actions.onMove)
          actions.onMove({
            x: this.x,
            y: this.y,
          })
      })
    })
  }

  private preventMenu() {
    this.screen.addEventListener('contextmenu', (e) => e.preventDefault())
  }

  addEvents(
    current: TypeCurrent,
    button: number,
    actions: TypeMouseActions = {}
  ) {
    this.targets.push({
      current,
      button,
      actions,
    })
  }
}
