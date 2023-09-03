export default interface InterfaceGameTime {
  deltaTime: number
  totalFrames: number
  totalTime: number

  handle(): void
}
