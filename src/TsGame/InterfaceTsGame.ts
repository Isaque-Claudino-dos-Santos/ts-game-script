import DisplayHandler from "../Handlers/DisplayHandler";
import Drawing from '../Drawing'
export default interface InterfaceTsGame {
  readonly display: DisplayHandler
  readonly draw: Drawing
}
