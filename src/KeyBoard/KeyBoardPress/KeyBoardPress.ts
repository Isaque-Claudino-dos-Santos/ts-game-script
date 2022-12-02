import InterfaceKeyBoardPress from "./InterfaceKeyBoardPress";

export default class KeyBoardPress implements InterfaceKeyBoardPress {
  key: string;
  isDown: boolean;
  check(key: string): 1 | 0 {
    return key === this.key && this.isDown ? 1 : 0;
  }
}
