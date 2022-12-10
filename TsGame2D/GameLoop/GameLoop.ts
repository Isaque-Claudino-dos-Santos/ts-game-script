import InterfaceGameLoop from "./InterfaceGameLoop";
export default class GameLoop implements InterfaceGameLoop {
  public onStart = () => {};
  public onRender = () => {};
  public onUpdate = () => {};
  public onEnd = () => {};

  private loop = () => {
    this.onUpdate();
    this.onRender();
    requestAnimationFrame(this.loop);
  };

  public init() {
    this.onStart();
    this.loop();
    this.onEnd();
  };
}
