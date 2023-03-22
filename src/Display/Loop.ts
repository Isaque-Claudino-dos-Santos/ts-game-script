export default class Loop {
  /**
   * @toOverride
   */
  onupdate = () => { }
  /**
   * @toOverride
   */
  onrender = () => { }

  private loop = () => {
    this.onupdate()
    this.onrender()
    requestAnimationFrame(this.loop)
  }
}