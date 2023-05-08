import Rect from '@Draw/Rect'

type TypeBody = Rect

export default class GameObject {
  public body!: TypeBody

  /**
   * @toOverrite
   * @arrowFunction
   */
  public boot() {}
  /**
   * @toOverrite
   * @arrowFunction
   */
  public update() {}
  /**
   * @toOverrite
   * @arrowFunction
   **/
  public render() {}
}
