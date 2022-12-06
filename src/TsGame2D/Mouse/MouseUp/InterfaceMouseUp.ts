export default interface InterfaceMouseUp {
  buttonID: number;
  active: boolean;

  handlerEvent: (event: MouseEvent) => void;
}
