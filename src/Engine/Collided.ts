import InterfaceCollided from './Interfaces/InterfaceCollided'

export default class Collided implements InterfaceCollided {
  onLeft: boolean = false
  onRight: boolean = false
  onTop: boolean = false
  onBottom: boolean = false
  onAny: boolean = false

  distanceLeft: number = 0
  distanceRight: number = 0
  distanceTop: number = 0
  distanceBottom: number = 0
}
