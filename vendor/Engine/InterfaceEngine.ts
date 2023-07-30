import Keyboard from '@Vendor/Events/Keyboard'
import Mouse from '@Vendor/Events/Mouse'
import Render from '@Vendor/Engine/Modules/Render'
import Canvas from '@Vendor/Models/Canvas'
import Game from '@Vendor/Models/Game'

export default interface InterfaceEngine {
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly canvas: Canvas<RenderingContext>
  readonly render: Render

  init: (game: Game) => void
}
