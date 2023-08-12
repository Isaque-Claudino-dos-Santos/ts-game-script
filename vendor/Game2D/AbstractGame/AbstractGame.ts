import Keyboard from '@Vendor/Events/Keyboard'
import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import InterfaceAbstractGame from './InterfaceAbstractGame'

export default abstract class AbstractGame implements InterfaceAbstractGame {
  readonly scenes: HandlerScenes = new HandlerScenes(this)
  readonly mouse: Mouse = new Mouse(this.screen)
  readonly keyboard: Keyboard = new Keyboard()

  constructor(
    readonly screen: HTMLCanvasElement,
    readonly context: CanvasRenderingContext2D
  ) {}

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
