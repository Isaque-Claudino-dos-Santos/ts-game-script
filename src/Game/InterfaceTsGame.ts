import DisplayHandler from "../Handlers/DisplayHandler";
import Drawing from '../Drawing'
import KeyBoard from '../KeyBoard'

export default interface InterfaceGame {
  readonly display: DisplayHandler
  readonly draw: Drawing
  readonly keyBoard: KeyBoard
}
