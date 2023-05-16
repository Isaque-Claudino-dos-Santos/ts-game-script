import InterfaceCollided from './Interfaces/InterfaceCollided'

export default class Collided implements InterfaceCollided {
  onLeft: boolean = false
  onRight: boolean = false
  onTop: boolean = false
  onBottom: boolean = false
  onAny: boolean = false

  pointLeft: number = 0
  pointRight: number = 0
  pointTop: number = 0
  pointBottom: number = 0
  pointAny: number = 0
}
