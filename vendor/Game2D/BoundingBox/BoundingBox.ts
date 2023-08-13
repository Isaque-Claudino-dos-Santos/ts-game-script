import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'
import InterfaceBoundingBox, {
  BoundingBoxCallback,
} from './InterfaceBoundingBox'
import AbstractGameObject from '../AbstractGameObject'
import Rect from '@Vendor/Graphics2D/Geometries2D/Rect'
import { DrawCallback } from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D/TypesGeometries2D'

export default class BoundingBox<Box extends AbstractGeometries2D>
  implements InterfaceBoundingBox<Box>
{
  x: number = 0
  y: number = 0

  constructor(readonly object: AbstractGameObject, readonly box: Box) {}

  private handlerBoxTypeRect(): void {
    if (this.box instanceof Rect) {
      const ref = this.object.sprite
      if (ref instanceof Rect) {
        this.box.width(ref.width())
        this.box.height(ref.height())
        this.box.angle(ref.angle())
      }
      this.box.pivotX = ref.pivotX
      this.box.pivotY = ref.pivotY
      this.box.x(ref.x() + this.x)
      this.box.y(ref.y() + this.y)
    }
  }

  readonly update = (callback: BoundingBoxCallback<Box> = () => {}) => {
    if (this.box instanceof Rect) {
      this.handlerBoxTypeRect()
      return callback(this.box)
    }
  }

  draw(
    context: CanvasRenderingContext2D,
    callback: DrawCallback = () => {}
  ): void {
    this.box.bgColor('').lineColor('blue').lineSize(1)
    this.box.draw(context, callback)
  }
}
