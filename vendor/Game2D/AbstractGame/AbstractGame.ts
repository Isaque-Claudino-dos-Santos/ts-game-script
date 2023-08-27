import Keyboard from '@Vendor/Events/Keyboard'
import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import InterfaceAbstractGame from './InterfaceAbstractGame'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'
import Timer from '@Vendor/Events/Timer'

export default abstract class AbstractGame implements InterfaceAbstractGame {
  readonly canvas: Canvas2D = new Canvas2D()
  readonly mouse: Mouse = new Mouse(this.canvas.screen)
  readonly keyboard: Keyboard = new Keyboard()
  readonly scenes: HandlerScenes = new HandlerScenes(this)
  readonly timer: Timer = new Timer()

  beforeInit() {}
  afterInit() {}
  beforeUpdate() {}
  afterUpdate() {}
  beforeRender() {}
  afterRender() {}

  gameInit = () => {
    this.beforeInit()
    this.scenes.current().callInitInObjects()
    this.afterInit()
  }

  gameUpdate = () => {
    this.beforeUpdate()
    this.scenes.current().callUpdateInObjects()
    this.afterUpdate()
  }

  gameRender = () => {
    this.beforeRender()
    this.scenes.current().callRenderInObjects()
    this.afterRender()
  }
}
