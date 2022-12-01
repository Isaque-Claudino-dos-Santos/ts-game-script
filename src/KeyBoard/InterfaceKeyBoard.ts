import KeyBoardClick from "./KeyBoardClick/KeyBoardClick";
import KeyBoardPress from "./KeyBoardPress";

export default interface InterfaceKeyBoard {
    readonly click: KeyBoardClick
    readonly press: KeyBoardPress
}