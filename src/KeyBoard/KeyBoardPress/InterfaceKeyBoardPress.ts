export default interface InterfaceKeyBoardPress {
  key: string;
  isDown: boolean;
  check(key: string): boolean;
}
