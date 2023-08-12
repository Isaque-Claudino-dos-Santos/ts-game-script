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
