import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import Keyboard from '@Vendor/Events/Keyboard'

export type GameCanvas = {
  screen: HTMLCanvasElement
  context: CanvasRenderingContext2D
}

export default interface InterfaceAbstractGame {
  readonly scenes: HandlerScenes
  readonly screen: HTMLCanvasElement
  readonly context: CanvasRenderingContext2D
  readonly mouse: Mouse
  readonly keyboard: Keyboard

  gameInit(): void
  gameUpdate(): void
  gameRender(): void
}
