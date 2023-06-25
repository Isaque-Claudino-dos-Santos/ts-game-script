import InterfaceBoundingBox from '@Vendor/Interfaces/InterfaceBoundingBox'
import TypeShape from '@Vendor/Types/TypeShape'
import Object from '@Vendor/Models/Object'

export default class BoundingBox<Box extends TypeShape>
  implements InterfaceBoundingBox
{
  public enable: boolean = true
  public x: number = 0
  public y: number = 0

  constructor(readonly box: Box, readonly object: Object<TypeShape>) {
    this.setupBox()
  }

  private setupBox(): void {
    this.box.setPaint('stroke').setColor('#ff55ff')
  }

  public readonly update = () => {
    if (!this.enable) return
    this.box.setOrigins(this.object.sprite.originX, this.object.sprite.originY)
    this.box.moveTo(
      this.object.sprite.x + this.x,
      this.object.sprite.y + this.y
    )
    this.box.angle = this.object.sprite.angle
  }

  public moveTo(x: number, y: number): this {
    this.x = x
    this.y = y
    return this
  }

  public debug(): void {
    if (!this.enable) return
    this.box.draw(this.object.engine.canvas.context)
  }
}
