import Keyboard from '@Vendor/Engine/Modules/Keyboard'
import Mouse from '@Vendor/Engine/Modules/Mouse'
import Canvas from '@Vendor/Models/Canvas'
import Game from '@Vendor/Models/Game'

export default interface InterfaceEngine {
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly canvas: Canvas<RenderingContext>

  init: (game: Game) => void
}
