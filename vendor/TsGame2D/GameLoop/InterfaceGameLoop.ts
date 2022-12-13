export default interface GameLoopInterface {
  onStart: () => void;
  onRender: () => void;
  onUpdate: () => void;
  onEnd: () => void;
  init(): void;
}
