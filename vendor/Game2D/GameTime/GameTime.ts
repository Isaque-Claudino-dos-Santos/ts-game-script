import InterfaceGameTime from './InterfaceGameTime'

export default class GameTime implements InterfaceGameTime {
  currentTime: number = 0
  prevTime: number = 0
  totalFrames: number = 0
  frameRate: number = 0
  deltaTime: number = 0
}
