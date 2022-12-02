export default interface InterfaceKeyBoardPress {
  key: string;
  isDown: boolean;
  check(key: string): 1 | 0;
}
