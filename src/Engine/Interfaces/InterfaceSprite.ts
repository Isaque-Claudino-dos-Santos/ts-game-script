export default interface InterfaceSprite {
  image: HTMLImageElement
  sourceX: number
  sourceY: number
  sourceWidth: number
  sourceHeight: number
  width: number
  height: number

  setSorceImage(src: string): this
  moveSourceTo(x: number, y: number): this
  resizeSource(width: number, height: number): this
}
