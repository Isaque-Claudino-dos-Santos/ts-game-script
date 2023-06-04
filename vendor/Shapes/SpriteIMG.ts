import InterfaceSprite from '@Vendor/Interfaces/InterfaceSprite'
import Shape from '@Vendor/Models/Shape'
import TypeShapeValue from '@Vendor/Types/TypeShapeValue'

export default class SpriteIMG extends Shape implements InterfaceSprite {
  readonly shape: TypeShapeValue = 'image'
  image: HTMLImageElement = new Image()
  sourceX: number = 0
  sourceY: number = 0
  sourceWidth: number = 0
  sourceHeight: number = 0
  width: number = 0
  height: number = 0

  resize(width: number, height: number): this {
    this.width = width
    this.height = height
    return this
  }

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
    return Object.assign(new SpriteIMG(), this) as Image
  }

  draw(context: CanvasRenderingContext2D): this {
    if (!this.enable) return this
    context.save()
    context.imageSmoothingQuality = 'high'
    context.imageSmoothingEnabled = false
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
