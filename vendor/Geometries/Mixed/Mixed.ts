import InterfaceMixed from './InterfaceMixed'
import Geometry from '@Vendor/Models/Geometry'
import { TypeMixedGeomitry } from './TypesMixed'

export default class Mixed extends Geometry implements InterfaceMixed {
  geomitries: TypeMixedGeomitry[] = []

  copy<Mixed>(): Mixed {
    return window.Object.assign(new Mixed(), this) as Mixed
  }

  add(geomitry: TypeMixedGeomitry): void {
    this.geomitries.push(geomitry)
  }

  draw(context: CanvasRenderingContext2D): this {
    if (!this.enable) return this
    this.geomitries.forEach((geomitry) => {
      geomitry.x = this.getOriginX() + geomitry.fixedX
      geomitry.y = this.getOriginY() + geomitry.fixedY
      geomitry.angle = this.angle
      geomitry.draw(context)
    })
    return this
  }
}
