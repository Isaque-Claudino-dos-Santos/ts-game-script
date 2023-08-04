import Keyboard from '@Vendor/Events/Keyboard'
import Mouse from '@Vendor/Events/Mouse'
import Render from '@Vendor/Engine/Modules/Render'
import Game from '@Vendor/Models/Game'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'

export default interface InterfaceEngine {
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly canvas: Canvas2D
  readonly render: Render

  init: (game: Game) => void
}
