import InterfaceSprite from '@Engine/Interfaces/InterfaceSprite'
import { TypeShape } from '@Engine/Interfaces/InterfaceShape'
import Shape from '@Engine/Modules/Shape'

export default class Sprite extends Shape implements InterfaceSprite {
  readonly shape: TypeShape = 'image'
  image: HTMLImageElement = new Image()
  sourceX: number = 0
  sourceY: number = 0
  sourceWidth: number = 0
  sourceHeight: number = 0
  width: number = 0
  height: number = 0

  setSourceImage(src: string): this {
    this.image.src = src
    return this
  }

  moveSourceTo(x: number, y: number): this {
    this.sourceX = x
    this.sourceY = y
    return this
  }

  resizeSource(width: number, height: number): this {
    this.sourceWidth = width
    this.sourceHeight = height
    return this
  }

  copy<Image>(): Image {
    return Object.assign(new Sprite(), this) as Image
  }

  draw(context: CanvasRenderingContext2D): this {
    context.save()
    context.translate(this.x + this.originX, this.y + this.originY)
    context.rotate(this.angle)
    context.drawImage(
      this.image,
      this.sourceX,
      this.sourceY,
      this.sourceWidth,
      this.sourceHeight,
      -this.originX,
      -this.originY,
      this.width,
      this.height
    )
    context.restore()
    return this
  }
}
