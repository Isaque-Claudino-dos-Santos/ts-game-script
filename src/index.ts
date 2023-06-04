import Engine from '@Vendor/Engine'

const engine = new Engine()

engine.canvas.screenSize(640, 384)
engine.canvas.resolution(640 * 6, 384 * 6)

// Add Game Instance With param
// engine.init()

const screenSizeElement = document.querySelector('.screenSize') as HTMLElement
const resolutionElement = document.querySelector('.resolution') as HTMLElement

screenSizeElement.textContent = `${engine.canvas.screenWidth} x ${engine.canvas.screenHeight}`
resolutionElement.textContent = `${engine.canvas.width()} x ${engine.canvas.height()}`
