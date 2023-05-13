import Window from '@Module/Window'

export default class Canvas2d extends Window {
  screen = document.querySelector('canvas') as HTMLCanvasElement
  context2d = this.screen.getContext('2d') as CanvasRenderingContext2D

  constructor(width: number, height: number) {
    super()
    this.screen.width = width
    this.screen.height = height
  }
}
