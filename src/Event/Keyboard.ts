type TypeKey = {
  code: string
  event: () => any
  isDown: boolean
  isClick: boolean
}
type TypeKeys = { [index: string]: TypeKey }

export default class KeyBoard {
  private keys: TypeKeys = {}

  constructor() {
    addEventListener('keydown', (event) => {
      const { code } = event
      const key = this.keys[code]
      if (!key) return
      key.isDown = true
    })

    addEventListener('keyup', (event) => {
      const { code } = event
      const key = this.keys[code]
      if (!key) return
      key.isDown = false
      key.isClick = false
    })
  }

  public create(code: string, event: () => any): this {
    this.keys[code] = { code, event, isDown: false, isClick: false }
    return this
  }

  public checkPress(code: string): this {
    const key = this.keys[code]
    if (key.isDown) key.event()
    return this
  }

  public checkClick(code: string): this {
    const key = this.keys[code]
    if (key.isDown && !key.isClick) key.event()
    if (key.isDown) key.isClick = true
    return this
  }

  public logKeyCode(): this {
    addEventListener('keydown', (event) => console.log(event.code))
    return this
  }
}
