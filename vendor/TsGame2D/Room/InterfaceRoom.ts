export default interface InterfaceRoom {
  create(name: string): void;
  active(name: string): void;
  disable(name: string): void;
  setLoop(name: string, render: () => void, update: () => void): void;
  callRender(): void;
  callUpdate(): void;
}
