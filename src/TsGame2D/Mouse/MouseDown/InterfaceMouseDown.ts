export default interface InterfaceMouseDown {
  buttonID: number;
  active: boolean;

  handlerEvent: (event: MouseEvent) => void;
}
