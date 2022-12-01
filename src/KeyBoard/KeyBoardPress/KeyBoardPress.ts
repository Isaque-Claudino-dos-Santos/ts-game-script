import InterfaceKeyBoardPress from "./InterfaceKeyBoardPress";

export default class KeyBoardPress implements InterfaceKeyBoardPress {
  key: string;
  isDown: boolean;
  check(key: string): boolean {
    return key === this.key && this.isDown;
  }
}
