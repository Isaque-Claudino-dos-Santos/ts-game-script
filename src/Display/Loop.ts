export default class Loop {
  /**
   * @toOverride
   */
  onUpdate = () => { }
  /**
   * @toOverride
   */
  onRender = () => { }

  private loop = () => {
    this.onUpdate()
    this.onRender()
    requestAnimationFrame(this.loop)
  }

  public init() {
    this.loop()
  }
}