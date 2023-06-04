import GameFlapyBird from './GameFlapyBird'
import engine from './engine'

engine.init(new GameFlapyBird(engine))

const screenSizeElement = document.querySelector('.screenSize') as HTMLElement
const resolutionElement = document.querySelector('.resolution') as HTMLElement

screenSizeElement.textContent = `${engine.canvas.screenWidth} x ${engine.canvas.screenHeight}`
resolutionElement.textContent = `${engine.canvas.width()} x ${engine.canvas.height()}`
