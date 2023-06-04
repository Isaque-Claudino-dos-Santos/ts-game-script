import Collider from '@Vendor/Collider'
import Keyboard from '@Vendor/Keyboard'
import Canvas from '@Vendor/Models/Canvas'
import Game from '@Vendor/Models/Game'
import Mouse from '@Vendor/Mouse'

export default interface InterfaceEngine {
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly canvas: Canvas<RenderingContext>
  readonly collider: Collider

  init: (game: Game) => void
}
