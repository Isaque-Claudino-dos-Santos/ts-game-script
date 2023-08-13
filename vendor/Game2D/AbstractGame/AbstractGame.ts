import Keyboard from '@Vendor/Events/Keyboard'
import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import InterfaceAbstractGame from './InterfaceAbstractGame'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'

export default abstract class AbstractGame implements InterfaceAbstractGame {
  readonly canvas: Canvas2D = new Canvas2D()
  readonly mouse: Mouse = new Mouse(this.canvas.screen)
  readonly keyboard: Keyboard = new Keyboard()
  readonly scenes: HandlerScenes = new HandlerScenes(this)

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
