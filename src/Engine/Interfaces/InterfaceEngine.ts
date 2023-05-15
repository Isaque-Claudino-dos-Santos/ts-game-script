import Collider from '@Engine/Collider'
import Keyboard from '@Engine/Keyboard'
import Canvas from '@Engine/Modules/Canvas'
import Game from '@Engine/Modules/Game'
import Mouse from '@Engine/Mouse'

export type TypeInitFN = (game: Game) => void | never

export default interface InterfaceEngine {
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly canvas: Canvas<RenderingContext>
  readonly collider: Collider

  init: TypeInitFN
}
