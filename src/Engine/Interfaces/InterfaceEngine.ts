import Keyboard from '@Engine/Keyboard'
import Canvas from '@Engine/Modules/Canvas'
import Mouse from '@Engine/Mouse'
import Game from '@Game/Game'

export type TypeInitFN = (game: Game) => void | never

export default interface InterfaceEngine {
  readonly mouse: Mouse
  readonly keyboard: Keyboard
  readonly canvas: Canvas<RenderingContext>

  init: TypeInitFN
}
