import KeyBoradKeys from "../../Types/KeyBoardKeys/KeyBoardKeys";
import InterfaceKeyBoardPress from "./InterfaceKeyBoardPress";

export default class KeyBoardPress implements InterfaceKeyBoardPress {
  public keys: { [index: string]: KeyBoradKeys.TypeKeys } = {};

  private setKey(key: string): void {
    this.keys[key] = {
      isDown: false,
      key,
    };
  }

  private existKey(key: string): boolean {
    return key in this.keys;
  }

  public check(key: string): boolean {
    if (!this.existKey(key)) this.setKey(key);
    return this.keys[key].isDown;
  }
}
