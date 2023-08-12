import HandlerScenes from '../HandlerScenes'

export default interface InterfaceAbstractGame {
  readonly scenes: HandlerScenes
  readonly context: CanvasRenderingContext2D

  gameInit(): void
  gameUpdate(): void
  gameRender(): void
}
