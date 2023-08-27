import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import Keyboard from '@Vendor/Events/Keyboard'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'

export default interface InterfaceAbstractGame {
  readonly scenes: HandlerScenes
  readonly canvas: Canvas2D
  readonly mouse: Mouse
  readonly keyboard: Keyboard

  gameInit(): void
  gameUpdate(): void
  gameRender(): void
}
