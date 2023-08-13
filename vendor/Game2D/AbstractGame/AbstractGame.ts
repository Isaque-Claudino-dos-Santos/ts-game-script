import Keyboard from '@Vendor/Events/Keyboard'
import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import InterfaceAbstractGame, { GameCanvas } from './InterfaceAbstractGame'

export default abstract class AbstractGame implements InterfaceAbstractGame {
  readonly mouse: Mouse
  readonly screen: HTMLCanvasElement
  readonly context: CanvasRenderingContext2D
  readonly keyboard: Keyboard = new Keyboard()
  readonly scenes: HandlerScenes = new HandlerScenes(this)

  constructor({ screen, context }: GameCanvas) {
    this.screen = screen
    this.context = context
    this.mouse = new Mouse(this.screen)
  }

  beforeInit() {}
  afterInit() {}
  beforeUpdate() {}
  afterUpdate() {}
  beforeRender() {}
  afterRender() {}

  gameInit = () => {
    this.beforeInit()
    this.scenes.getCurrent().callInitInObjects()
    this.afterInit()
  }

  gameUpdate = () => {
    this.beforeUpdate()
    this.scenes.getCurrent().callUpdateInObjects()
    this.afterUpdate()
  }

  gameRender = () => {
    this.beforeRender()
    this.scenes.getCurrent().callRenderInObjects()
    this.afterRender()
  }
}
