import InterfaceLoop from './InterfaceLoop'

export default class Loop implements InterfaceLoop {
  private initalized: boolean = false

  init(): void {}
  update(): void {}
  render(): void {}

  boot(): void {
    if (!this.initalized) {
      this.init()
      this.initalized = true
    }
    this.update()
    this.render()
    requestAnimationFrame(() => this.boot)
  }
}
