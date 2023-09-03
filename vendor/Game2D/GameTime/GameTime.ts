import InterfaceGameTime from './InterfaceGameTime'

export default class GameTime implements InterfaceGameTime {
  private currentTime: number = 0
  private prevTime: number = 0
  totalFrames: number = 0
  deltaTime: number = 0
  totalTime: number = 0

  handle(): void {
    this.prevTime = this.currentTime
    this.currentTime = new Date().getMilliseconds()

    if (this.prevTime > this.currentTime) this.prevTime -= 1000

    this.deltaTime = this.currentTime - this.prevTime
    this.totalFrames++
    this.totalTime += this.deltaTime
  }
}
