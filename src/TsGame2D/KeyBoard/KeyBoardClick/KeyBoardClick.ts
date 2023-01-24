import InterfaceKeyBoardClick from './InterfaceKeyBoardClick';

export default class KeyBoardClick implements InterfaceKeyBoardClick {
  public key: string;
  public isDown: boolean = false;
  public active: boolean;

  check = (key: string) => {
    if (!this.isDown || key !== this.key) return false;
    this.active = true;
    this.isDown = false;
    return true;
  };
}
