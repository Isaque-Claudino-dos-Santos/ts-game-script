import InterfaceGameLoop from "./InterfaceGameLoop";
export default class GameLoop implements InterfaceGameLoop {
  public onStart: () => void;
  public onRender: () => void;
  public onUpdate: () => void;
  public onEnd: () => void;

  private loop(): void {
    this.onUpdate();
    this.onRender();
    requestAnimationFrame(this.loop);
  }

  public init(): void {
    this.onStart();
    this.loop();
    this.onEnd();
  }
}
