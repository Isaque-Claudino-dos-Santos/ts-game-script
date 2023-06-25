import Collider from '@Vendor/Engine/Modules/Collider'
import Keyboard from '@Vendor/Engine/Modules/Keyboard'
import Mouse from '@Vendor/Engine/Modules/Mouse'
import Render from '@Vendor/Engine/Modules/Render'
import Canvas from '@Vendor/Models/Canvas'
import Game from '@Vendor/Models/Game'

export default interface InterfaceEngine {
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly canvas: Canvas<RenderingContext>
  readonly render: Render
  readonly collider: Collider

  init: (game: Game) => void
}
