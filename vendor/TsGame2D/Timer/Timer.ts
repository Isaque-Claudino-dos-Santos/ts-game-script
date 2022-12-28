export default class Timer {
  private id: NodeJS.Timer
  private time = 0

  start() {
    this.id = setInterval(() => (this.time += 0.01), 1)
  }

  stop() {
    clearInterval(this.id)
  }

  reset() {
    this.time = 0
  }

  near(time: number): boolean {
    return this.time >= time
  }
}
