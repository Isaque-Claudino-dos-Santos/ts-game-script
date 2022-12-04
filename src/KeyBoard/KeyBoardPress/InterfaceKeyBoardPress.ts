import TypeKeyBoard from "../../Types/TypeKeyBoard";
export default interface InterfaceKeyBoardPress {
  keys: { [index: string]: TypeKeyBoard.Keys };
  check(key: string): boolean;
  existKey(key: string): boolean;
}
