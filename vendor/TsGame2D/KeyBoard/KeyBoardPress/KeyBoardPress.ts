import TypeKeyBoard from "../../Types/TypeKeyBoard";

import InterfaceKeyBoardPress from "./InterfaceKeyBoardPress";

export default class KeyBoardPress implements InterfaceKeyBoardPress {
  public keys: { [index: string]: TypeKeyBoard.Keys } = {};

  private setKey(key: string): void {
    this.keys[key] = {
      isDown: false,
      key,
    };
  }

  public existKey(key: string): boolean {
    return key in this.keys;
  }

  public check(key: string): boolean {
    if (!this.existKey(key)) this.setKey(key);
    return this.keys[key].isDown;
  }
}
