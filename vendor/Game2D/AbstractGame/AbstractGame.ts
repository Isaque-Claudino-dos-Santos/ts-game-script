import Keyboard from '@Vendor/Events/Keyboard'
import Mouse from '@Vendor/Events/Mouse'
import HandlerScenes from '../HandlerScenes'
import InterfaceAbstractGame from './InterfaceAbstractGame'
import Canvas2D from '@Vendor/Graphics2D/Canvas2D'
import GameTime from '../GameTime'

export default abstract class AbstractGame implements InterfaceAbstractGame {
  readonly canvas: Canvas2D = new Canvas2D()
  readonly mouse: Mouse = new Mouse(this.canvas.screen)
  readonly keyboard: Keyboard = new Keyboard()
  readonly scenes: HandlerScenes = new HandlerScenes(this)
  readonly time: GameTime = new GameTime()

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
    this.time.prevTime = this.time.currentTime
    this.time.currentTime = new Date().getMilliseconds()
    this.time.deltaTime = this.time.currentTime - this.time.prevTime
    this.time.totalFrames++

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
