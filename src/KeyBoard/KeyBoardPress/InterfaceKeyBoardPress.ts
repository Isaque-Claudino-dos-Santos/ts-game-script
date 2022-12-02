import KeyBoardKeys from "../../Types/KeyBoardKeys";
export default interface InterfaceKeyBoardPress {
  keys: { [index: string]: KeyBoardKeys.TypeKeys };
  check(key: string): boolean;
}
