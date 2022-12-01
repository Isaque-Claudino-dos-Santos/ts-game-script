import DisplayHandler from '../Handlers/DisplayHandler'
import InterfaceTsGame from './InterfaceTsGame'


export default class TsGame implements InterfaceTsGame {
  readonly display: DisplayHandler = new DisplayHandler()
}
