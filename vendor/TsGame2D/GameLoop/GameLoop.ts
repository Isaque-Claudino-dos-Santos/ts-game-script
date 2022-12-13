import InterfaceGameLoop from './InterfaceGameLoop';
export default class GameLoop implements InterfaceGameLoop {
  public onStart = () => {};
  public onRender = () => {};
  public onUpdate = () => {};
  public onEnd = () => {};

  private loop = () => {
    this.onUpdate();
    this.onRender();
  };

  public init(fps: number): void {
    this.onStart();
    setInterval(this.loop, 1000 / fps);
    this.loop();
    this.onEnd();
  }
}
