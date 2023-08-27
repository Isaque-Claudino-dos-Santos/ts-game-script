import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import Keyboard from '@Vendor/Events/Keyboard'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'
import Timer from '@Vendor/Events/Timer'

export default interface InterfaceAbstractGame {
  readonly scenes: HandlerScenes
  readonly canvas: Canvas2D
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly timer: Timer

  gameInit(): void
  gameUpdate(): void
  gameRender(): void
}
