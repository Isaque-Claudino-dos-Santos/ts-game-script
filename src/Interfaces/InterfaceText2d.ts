export default interface InterfaceText2d {
  text: string
  family: string
  size: string
  align: CanvasRenderingContext2D['textAlign']
  baseLine: CanvasRenderingContext2D['textBaseline']
  direction: CanvasRenderingContext2D['direction']
  maxWidth: number | undefined
}
