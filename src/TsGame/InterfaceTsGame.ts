import DisplayHandler from "../Handlers/DisplayHandler";
import Drawing from '../Drawing'
import KeyBoard from '../KeyBoard'

export default interface InterfaceTsGame {
  readonly display: DisplayHandler
  readonly draw: Drawing
  readonly keyBoard: KeyBoard
}
