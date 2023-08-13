import AbstractGeometries2D from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D'
import AbstractGameObject from '../AbstractGameObject'
import { DrawCallback } from '@Vendor/Graphics2D/Geometries2D/AbstractGeometries2D/TypesGeometries2D'

export type BoundingBoxCallback<Box extends AbstractGeometries2D> = (
  box: Box
) => void

export default interface InterfaceBoundingBox<
  Box extends AbstractGeometries2D
> {
  readonly box: Box
  readonly object: AbstractGameObject
  x: number
  y: number

  update(callback: BoundingBoxCallback<Box>): void
  draw(context: CanvasRenderingContext2D, callback: DrawCallback): void
}
