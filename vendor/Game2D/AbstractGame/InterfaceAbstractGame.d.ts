import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import Keyboard from '@Vendor/Events/Keyboard'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'
import GameTime from '../GameTime'

export default interface InterfaceAbstractGame {
  readonly scenes: HandlerScenes
  readonly canvas: Canvas2D
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly time: GameTime

  beforeInit(): void
  afterInit(): void
  beforeUpdate(): void
  afterUpdate(): void
  beforeRender(): void
  afterRender(): void

  gameInit(): void
  gameUpdate(): void
  gameRender(): void
}
