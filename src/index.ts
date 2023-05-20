import Engine from '@Engine/Engine'
import FlappyBird from './FlappyBird/FlappyBird'

const engine = new Engine()

engine.canvas.screenSize(640, 384)
engine.canvas.resolution(640 * 6, 384 * 6)

engine.init(new FlappyBird(engine))

const screenSizeElement = document.querySelector('.screenSize') as HTMLElement
const resolutionElement = document.querySelector('.resolution') as HTMLElement

screenSizeElement.textContent = `${engine.canvas.screenWidth} x ${engine.canvas.screenHeight}`
resolutionElement.textContent = `${engine.canvas.width()} x ${engine.canvas.height()}`
