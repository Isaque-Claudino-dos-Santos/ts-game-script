export default interface InterfaceKeyBoardClick {
  key: string;
  isDown: boolean;
  active: boolean;
  check(key: string): boolean;
}
