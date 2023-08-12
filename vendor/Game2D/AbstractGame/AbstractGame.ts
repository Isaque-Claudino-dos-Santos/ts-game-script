import HandlerScenes from '../HandlerScenes'
import InterfaceAbstractGame from './InterfaceAbstractGame'

export default abstract class AbstractGame implements InterfaceAbstractGame {
  readonly scenes: HandlerScenes = new HandlerScenes(this)

  constructor(readonly context: CanvasRenderingContext2D) {}

  gameInit = () => {
    this.scenes.getCurrent().callInitInObjects()
  }

  gameUpdate = () => {
    this.scenes.getCurrent().callUpdateInObjects()
  }

  gameRender = () => {
    this.scenes.getCurrent().callRenderInObjects()
  }
}
