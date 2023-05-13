import Keyboard from '@Engine/Keyboard'
import Mouse from '@Engine/Mouse'
import Game from '@Game/Game'
import Window from '@Module/Window'

export type TypeInitFN = () => void | never

export default interface InterfaceEngine {
  readonly window: Window
  readonly context2d: CanvasRenderingContext2D
  readonly mouse: Mouse
  readonly game: Game | undefined
  readonly keyboard: Keyboard
  fps: number

  init: TypeInitFN
}
